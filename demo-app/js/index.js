$(".nav .nav-link").on("click", function() {
  //Show - hide content
  $(".content").hide();
  console.log($(this).attr('id'))
  $("."+$(this).attr('id')).show();
  
  //Set active class
  $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});
