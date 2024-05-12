console.log("JavaScript file loaded successfully!");

$(document).ready(function(){
    $(".CV").click(function(){
      console.log("Someone is intrested");
    });
  });

  $(document).ready(function() {
    // Function to increase button size on hover
    $('.CV').hover(
        function() {
            $(this).css('font-size', '1.2em');
        },
        function() {
            $(this).css('font-size', '1em');
        }
    );
});
