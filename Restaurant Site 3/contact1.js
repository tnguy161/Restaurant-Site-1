
function validateItems() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var inquiry1 = document.getElementById('inquiry').value;
	var info = document.getElementById('info').value;
	var monday = document.getElementById('monday').checked;
	var tuesday = document.getElementById('tuesday').checked;
	var wednesday = document.getElementById('wednesday').checked;
	var thursday = document.getElementById('thursday').checked;
	var friday = document.getElementById('friday').checked;
	
	
    if (name == ""){
        alert("Name must be entered");
        
        return false;
    }
   if (email == "") {
       alert("Email must be filled out");
       
       return false;
   }
   if (phone == "" || isNaN(phone)) {
       alert("Please enter phone number and only numbers");
       
       return false;
   }
   if (inquiry1 == "select") {
       alert("Please select one of the options");
       
       return false;
   }
   if (info == "")
   {
	   alert("Please enter some information");
	   return false;
   }
  
   if ( monday == "" && tuesday == "" && wednesday == "" && thursday == "" && friday == ""){
	   alert("Please choose at least available day for us to contact you!");
	   return false;
   }
   else{
	   alert("Thank you! We have received your information and will get back to you shortly!");
   return false;
   }
}