//note to self:
//this project is to make tab buttons to the left that expand out to show an overview, portfolio, and a contact address when clicked.

//man running on the moon?
//man running up left side of page?


//obutton click
$(document).ready(function(){
  $('#oBtn').click(function() {
     $('#oBtn').removeClass('open')
     $('#oBtn').removeClass('close')
    
    if (!$("#oBtn").hasClass("open")) {
      $('#oBtn').addClass('open'); 
        if( $("#pBtn").hasClass("open") ){
          $('#pBtn').removeClass('open');  
          $('#pBtn').addClass('close');
        }
  }
   else if($("#Btn").hasClass("open"))  {
              $('#oBtn').removeClass('open');  
              $('#oBtn').addClass('close');}    
                   });
  
  
  //pbutton click
  $('#pBtn').click(function() {
     $('#pBtn').removeClass('open');
     $('#pBtn').removeClass('close');
    
    if (!$("#pBtn").hasClass("open")) {
      $('#pBtn').addClass('open'); 
        if( $("#oBtn").hasClass("open") ){
          $('#oBtn').removeClass('open');  
          $('#oBtn').addClass('close');
        }
  }
   else if ($("#pBtn").hasClass("open")) {
              $('#pBtn').removeClass('open');  
              $('#pBtn').addClass('close');}    
                   });
  
  
  
});