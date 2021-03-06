//Simple navigation routing
$(".nav .nav-link").on("click", function() {
  //Show - hide content
  $(".content").hide();
  $("."+$(this).attr('id')).show();

  //Set active class
  $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});

//Search functionality
$("#search-form").on("submit", function() {
  $.ajax({
    method: "POST",
    url: "http://localhost:9200/" + $('#indexInput').val() + "/_search",
    contentType: "application/json",
    data: '{ "track_total_hits": true, "query": { "match": { "' + $('#matchInput').val() + '": "' + $('#textInput').val() +'" } } }'
  }).done(function(data) {
    console.log(data);
    $("#results-error-div").hide();
    $("#results-success-div").show();

    //Remove previous rows if any
    $('#results-table > tbody').find('tr').remove();
    //Add new row with received data
    $('#results-table > tbody:last-child').append('<tr><td>' + data.hits.total.value+ '</td><td>' + data.took + '</td></tr>');

    //Remove previous sample data rows
    $('#sample-data-table > tbody').find('tr').remove();
    //Create sample data rows
    max_sample_data_rows = 5;
    total_sample_rows = 0;
    rows_string = "";
    for (hit of data.hits.hits) {
      if(total_sample_rows < max_sample_data_rows) {
        row_string = "<tr>";
        bucket_data = hit._source;

        if(total_sample_rows == 0) { //Add header row
          for (item in bucket_data) {
            row_string = row_string + "<td>"+item+"</td>";
          }
          row_string = row_string + "</tr><tr>"
        }

        for (item in bucket_data) {
          row_string = row_string + "<td>"+bucket_data[item]+"</td>";
        }
        total_sample_rows++;
        row_string = row_string + "</tr>";
        rows_string = rows_string + row_string;
      }
      else {
        break;
      }
    }
    //console.log(rows_string);
    //Append sample data rows
    $('#sample-data-table > tbody:last-child').append(rows_string);
  }).fail(function(data) {
    $("#results-success-div").hide();
    $("#results-error-div").show();
    console.log("Error");
  })
});

//visualize
var myChart;
$("#visualize-form").on("submit", function() {
  $.ajax({
    method: "POST",
    url: "http://localhost:9200/" + $('#visualizeIndexInput').val() + "/_search",
    contentType: "application/json",
    data: '{ "size": 0, "query": { "match_all": {} }, "aggs": { "aggrigation": { "terms": { "field": "' + $('#visualizeTextInput').val() + '.keyword", "size": ' + $('#visualizeSizeInput').val() +'  } } } }'
  }).done(function(data) {
    console.log(data);
    $("#chart-error-div").hide();
    $("#chart-success-div").show();
    //Creating chart
    var keys = [];
    var doc_counts = []
    for (bucket of data.aggregations.aggrigation.buckets) {
      keys.push(bucket.key);
      doc_counts.push(bucket.doc_count);
    }
    //console.log(keys);
    //console.log(doc_counts);
    if(myChart) {
      myChart.destroy(); //Clear previous chart, if present
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: keys,
            datasets: [{
                label: 'Count',
                data: doc_counts,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }).fail(function(data) {
    $("#chart-success-div").hide();
    $("#chart-error-div").show();
    console.log("Error");
  })
});
