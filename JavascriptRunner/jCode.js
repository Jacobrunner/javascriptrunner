//note to self:
//this project is to make tab buttons to the left that expand out to show an overview, portfolio, and a contact address when clicked.

//man running on the moon?
//man running up left side of page?

$(document).ready(function(){
  $('#oBtn').click(function() {
    if (!$("#oBtn").hasClass("open")) {
    $('#oBtn').addClass('open'); 
  }
   else {
              $('#oBtn').removeClass('open');     }    
                   });
  
});