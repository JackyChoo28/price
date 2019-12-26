

function GetSelectedText(){
   

    //lanyard size
    var lS = document.getElementById("lanyardSize");
		var lsSize = lS.options[lS.selectedIndex].text;
  

    //lanyard material
		var lM = document.getElementById("material");
		var lMaterial = lM.options[lM.selectedIndex].text;

    //printing color
    var lC = document.getElementById("printing");
    var pColor= lC.options[lC.selectedIndex].text;
				
     //Lanyard Quantity
     var lQ = document.getElementById("quantity").value;
  
     //Lanyard side
     var lSide = document.getElementById("side");
     var lanyardSide = lSide.options[lSide.selectedIndex].text;
  
     //Lanyard Accessories
     var lA = document.getElementById("accessories");
     var lAccessories = lA.options[lA.selectedIndex].text;
  
     //Lanyard Buckle
     var lB = document.getElementById("buckle");
     var lBuckle = lB.options[lB.selectedIndex].text;
  
     //Lanyard Finishing
     var lF = document.getElementById("finishing");
     var lFinishing = lF.options[lF.selectedIndex].text;



    //Lanyard Pricing
     var price = parseFloat(price);
     var finalPrice = "";

     if(lMaterial === "Nylon Material") {

      if(pColor === "1color(SilkScreen)" && lanyardSide === "1 Side Printing" ) {

        if(lQ < 100) {

          var lessQuantity = (270 - 150) / lQ 
          price = (lessQuantity + 1.50) 

        }else if( lQ >= 100 && lQ < 300) {
          price = (2.70) ;

        }else if( lQ >= 300 && lQ < 500) {
          price = (2.10) ;

        }else if( lQ >= 500 && lQ < 800){
          price = (1.95) ;

        }else if( lQ >= 800 && lQ < 1000){
          price = (1.80) ;

        }else if (lQ >= 1000 && lQ < 2000){
          price = (1.60) ;

        }else if ( lQ >= 2000 && lQ < 3000){
          price = (1.55) ;

        }else if ( lQ >= 3000 && lQ< 5000){
          price = (1.50) ;

        }else {
          price = (1.40) ;

        }

      }else if( pColor === "2color(SilkScreen)" && lanyardSide === "1 Side Printing" || pColor === "1color(SilkScreen)" && lanyardSide === "2 Side Printing" ) {
        if(lQ < 100) {

          var lessQuantity = (370 - 150) / lQ 
          price = (lessQuantity + 1.50) 

        }else if( lQ >= 100 && lQ < 300) {
          price = (3.70) ;

        }else if( lQ >= 300 && lQ < 500) {
          price = (2.70) ;

        }else if( lQ >= 500 && lQ < 800){
          price = (2.40) ;

        }else if( lQ >= 800 && lQ < 1000){
          price = (2.20) ;

        }else if (lQ >= 1000 && lQ < 2000){
          price = (1.90) ;

        }else if ( lQ >= 2000 && lQ < 3000){
          price = (1.80) ;

        }else if ( lQ >= 3000 && lQ< 5000){
          price = (1.75) ;

        }else {
          price = (1.70) ;

        }

      }else if( pColor === "2color(SilkScreen)" && lanyardSide === "2 Side Printing" ){
        if(lQ < 100) {

          var lessQuantity = (570 - 150) / lQ 
          price = (lessQuantity + 1.50) 

        }else if( lQ >= 100 && lQ < 300) {
          price = (5.70) ;

        }else if( lQ >= 300 && lQ < 500) {
          price = (3.90) ;

        }else if( lQ >= 500 && lQ < 800){
          price = (3.60) ;

        }else if( lQ >= 800 && lQ < 1000){
          price = (2.80) ;

        }else if (lQ >= 1000 && lQ < 2000){
          price = (2.50) ;

        }else if ( lQ >= 2000 && lQ < 3000){
          price = (2.40) ;

        }else if ( lQ >= 3000 && lQ< 5000){
          price = (2.35) ;

        }else {
          price = (2.30) ;

        }
      }else{
        alert("Wrong information")
      }

    }else if(lMaterial === "Polyester Material"){

      if(pColor === "Full Color(Sublimation)" && lanyardSide === "1 Side Printing" ) {

        if(lQ<50){
          price = (4.80) 

        }else if(lQ > 50 && lQ < 100) {
          price = (4.30) 

        }else if( lQ >= 100 && lQ < 300) {
          price = (3.80) ;

        }else if( lQ >= 300 && lQ < 500) {
          price = (3.70) ;

        }else if( lQ >= 500 && lQ < 800){
          price = (3.50) ;

        }else if( lQ >= 800 && lQ < 1000){
          price = (3.30) ;

        }else if (lQ >= 1000 && lQ < 2000){
          price = (3.10) ;

        }else if ( lQ >= 2000 && lQ < 3000){
          price = (2.95) ;

        }else if ( lQ >= 3000 && lQ< 5000){
          price = (2.90) ;

        }else {
          price = (2.80) ;

        }

      }else if(pColor === "Full Color(Sublimation)" && lanyardSide === "2 Side Printing" ) {

        if(lQ<50){
          price = (5.60) 

        }else if(lQ > 50 && lQ < 100) {
          price = (5.10) 

        }else if( lQ >= 100 && lQ < 300) {
          price = (4.60) ;

        }else if( lQ >= 300 && lQ < 500) {
          price = (4.50) ;

        }else if( lQ >= 500 && lQ < 800){
          price = (4.30) ;

        }else if( lQ >= 800 && lQ < 1000){
          price = (4.10) ;

        }else if (lQ >= 1000 && lQ < 2000){
          price = (3.90) ;

        }else if ( lQ >= 2000 && lQ < 3000){
          price = (3.80) ;

        }else if ( lQ >= 3000 && lQ< 5000){
          price = (3.70) ;

        }else {
          price = (3.60) ;

        }

    }else{
      alert("Wrong information");
    }
  
  }

  if(lAccessories == "11061 Hook"){
    price = price + parseFloat(0.4)  ;

  }else if(lAccessories == "645 Hook") {
    price = price + parseFloat(0.3);

  }else{
    price = price 
  }


  if(lBuckle == "Black Buckle"){
    price = price + parseFloat(0.5) ;

  }else if(lBuckle == "Black Safety Clip"){
    price = price + parseFloat(0.4) ;
    
  }else if(lBuckle == "Black Buckle + Safety Clip"){
    price = price + parseFloat(0.9) ;

  }else{
    price = price
  }



    var result = document.getElementById("answer");
    var finalAnswer = lsSize + "<br/>" + lMaterial + "<br/>" + pColor + "<br/>" + lQ +" PCS" + "<br/>" + lanyardSide + "<br/>" + lAccessories + "<br/>" + lBuckle + "<br/>" + "Finishing : " + lFinishing
   
    result.innerHTML = finalAnswer + "<br/>" + "RM " + (price).toFixed(2) + "/pc"

}