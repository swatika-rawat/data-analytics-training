$(".nav .nav-link").on("click", function() {
  //Show - hide content
  $(".content").hide();
  console.log($(this).attr('id'))
  $("."+$(this).attr('id')).show();

  //Set active class
  $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});

$("#search-form").on("submit", function() {

  $.ajax({
    method: "POST",
    url: "http://localhost:9200/agriculture/_search"
  }).done(function(data) {
    console.log("Done")
    console.log(data);
  })
});
