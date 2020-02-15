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
    url: "http://localhost:9200/agriculture/_search",
    contentType: "application/json",
    data: '{ "query": { "match_all": {} } }'
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
    console.log(rows_string);
    //Append sample data rows
    $('#sample-data-table > tbody:last-child').append(rows_string);
  }).fail(function(data) {
    $("#results-success-div").hide();
    $("#results-error-div").show();
    console.log("Error");
  })
});
