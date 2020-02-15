$(".nav .nav-link").on("click", function() {
  //Show - hide content
  $(".content").hide();
  $("."+$(this).attr('id')).show();

  //Set active class
  $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});

$("#search-form").on("submit", function() {
  $.ajax({
    method: "POST",
    url: "http://localhost:9200/agriculture/_search",
    contentType: "application/json",
    data: '{ "query": { "match_all": {} } }'
  }).done(function(data) {
    $('#results-table > tbody').find('tr').remove();
    console.log(data);
    $("#results-div").show();
    for (hit of data.hits.hits) {
      console.log(hit._index);
    }
    $('#results-table > tbody:last-child').append('<tr><td>' + data.hits.total.value+ '</td><td>' + data.took + '</td></tr>');
  })
});
