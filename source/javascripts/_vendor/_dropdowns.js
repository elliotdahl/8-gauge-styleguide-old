$(document).ready(function() {
  console.log("dropdowns working");


   $(".dropdown .dropdown-toggle").on('click', function(){
        console.log("dropdown clicked");
        $dropdown = $(this).parent(".dropdown")

        if($dropdown.hasClass("open")) {
            $dropdown.removeClass("open");
            console.log("dropdown closing");
        }
        else {
            $dropdown.addClass("open");
            console.log("dropdown opening");
        }
    });

});
