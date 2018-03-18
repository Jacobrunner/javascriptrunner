//note to self:
//this project is to make tab buttons to the left that expand out to show an overview, portfolio, and a contact address when clicked.

//man running on the moon?
//man running up left side of page?


$(document).ready(function(){
    
//obutton click
  $('#oBtn').click(function() {
    //removes un-needed classes
     $('#oBtn').removeClass('open');
     $('#oBtn').removeClass('close');
      $('#aOverview').removeClass('cOpen');
    //checks to see if it has certain classes
    if (!$("#oBtn").hasClass("open")) {
      //adds and removes certain classes
      $('#oBtn').addClass('open'); 
      $('#aOverview').removeClass('blank');
       $('#aOverview').addClass('cOpen');
      $('#aOverview').removeClass('cClose');
     
      
      //removes certain classes from buttons and center element
      if ( $("#pBtn").hasClass("open") ){
          $('#pBtn').removeClass('open');  
          $('#pBtn').addClass('close');
          $("#aPortfolio").removeClass("cOpen");
          $("#aPortfolio").addClass("cClose");
        }
       
      if ( $("#cBtn").hasClass("open")) {
          $("#cBtn").removeClass("open");
          $("#cBtn").addClass("close");
          $("#aContact").removeClass("cOpen");
          $("#aContact").addClass("cClose");
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
     $("#aPortfolio").removeClass("blank");
    $("#aPortfolio").removeClass("cClose");
    $("#aPortfolio").removeClass("cOpen");
    
    if (!$("#pBtn").hasClass("open")) {
      $('#pBtn').addClass('open'); 
      $("#aPortfolio").addClass("cOpen");
      
     if( $("#oBtn").hasClass("open") || $("#oBtn").hasClass("oBlank") ){      $('#oBtn').removeClass('oBlank');                                    $('#aOverview').removeClass('cOpen');
          $('#oBtn').removeClass('open');  
          $('#oBtn').addClass('close');
          $('#aOverview').addClass('cClose');                                                                   
                                                                    
        }
      
        if ( $("#cBtn").hasClass("open")) {
          $("#cBtn").removeClass("open");
          $("#cBtn").addClass("close");
          $("#aContact").addClass("cClose");
          $("#aContact").removeClass("cOpen");
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
       
       $("#aContact").removeClass("blank");
       $("#aContact").removeClass("cClose");
       $("#aContact").removeClass("cOpen");
       
       if (!$("#cBtn").hasClass("open")) {
         $("#cBtn").addClass("open");
         $("#aContact").addClass("cOpen");
         
            if ( $("#pBtn").hasClass("open") ) {
                $("#pBtn").removeClass("open");
                $("#pBtn").addClass("close");
                $("#aPortfolio").removeClass("cOpen");
                $("#aPortfolio").addClass("cClose");
            }
         
          if( $("#oBtn").hasClass("open") || $("#oBtn").hasClass("oBlank") ){      $('#oBtn').removeClass('oBlank');                                    $('#aOverview').removeClass('cOpen');
          $('#oBtn').removeClass('open');  
          $('#oBtn').addClass('close');
          $('#aOverview').addClass('cClose');                                                                   
        }
                
       }
       
     });
  
  
  
});