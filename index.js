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
            $(this).css('background-color', 'black'); $(this).css('color', 'white');
        },
        function() {
            $(this).css('background-color', 'white'); $(this).css('color', 'black');
        }
    );
});
