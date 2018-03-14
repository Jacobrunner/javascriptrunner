//note to self:
//this project is to make tab buttons to the left that expand out to show an overview, portfolio, and a contact address when clicked.

//man running on the moon?
//man running up left side of page?


$(document).ready(function(){
    
//obutton click
  $('#oBtn').click(function() {
     $('#oBtn').removeClass('open');
     $('#oBtn').removeClass('close');
      $('#aOverview').removeClass('cOpen');
    if (!$("#oBtn").hasClass("open")) {
      $('#oBtn').addClass('open'); 
      $('#aOverview').removeClass('blank');
       $('#aOverview').addClass('cOpen');
      $('#aOverview').removeClass('cClose');
     
      
      
      if ( $("#pBtn").hasClass("open") ){
          $('#pBtn').removeClass('open');  
          $('#pBtn').addClass('close');
        }
       
      if ( $("#cBtn").hasClass("open")) {
          $("#cBtn").removeClass("open");
          $("#cBtn").addClass("close");
      }
  }
   else if($("#oBtn").hasClass("open"))  {
              $('#oBtn').removeClass('open');  
              $('#oBtn').addClass('close');}    
                   });
  
  
  //pbutton click
  $('#pBtn').click(function() {
    
     $('#pBtn').removeClass('open');
     $('#pBtn').removeClass('close');
   
     
    if (!$("#pBtn").hasClass("open")) {
      $('#pBtn').addClass('open'); 
      
     if( $("#oBtn").hasClass("open") || $("#oBtn").hasClass("oBlank") ){       $('#oBtn').removeClass('oBlank');                                    $('#aOverview').removeClass('cOpen');
          $('#oBtn').removeClass('open');  
          $('#oBtn').addClass('close');
          $('#aOverview').addClass('cClose');                                                                   
                                                                      
        }
      
        if ( $("#cBtn").hasClass("open")) {
          $("#cBtn").removeClass("open");
          $("#cBtn").addClass("close");
        }
  }
   else if ($("#pBtn").hasClass("open")) {
              $('#pBtn').removeClass('open');  
              $('#pBtn').addClass('close');}    
                   });
  
  //cbtn click
     $("#cBtn").click(function() {
       $("#cBtn").removeClass("open");
       $("#cBtn").removeClass("close");
       
       if (!$("#cBtn").hasClass("open")) {
         $("#cBtn").addClass("open");
            if ( $("#pBtn").hasClass("open") ) {
                $("#pBtn").removeClass("open");
                $("#pBtn").addClass("close");
            }
         
            if ( $("#oBtn").hasClass("open") ) {
                $("#oBtn").removeClass("open");
                $("#oBtn").addClass("close");
            }
       }
       
     });
  
  
  
});