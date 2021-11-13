function validate()
{
  var inputphn = document.getElementById("phone");
var inputemail= document.getElementById("email");
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputphn.value.match(phoneno))
     {
	   return true;      
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
  
  var email= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
  if (email.test(inputemail.value))
   {
    return true;
   }
  else
    {
    alert("You have entered an invalid email address!");
    return false;
    } 

}



function passwordChanged() {
         var pwd = document.getElementById("password");
  var strength = document.getElementById('strength');
        var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{8,}).*", "g");
       
        if (pwd.value.length == 0) {
            strength.innerHTML = 'Type Password';
        } else if (false == enoughRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:red">Weak!</span>';
        } else if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
        } else if (mediumRegex.test(pwd)) {
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
        } else {
            strength.innerHTML = '<span style="color:red">Weak!</span>';
        }
    }


function passwordMatch(){
      var pwd = document.getElementById("password");
      var rpwd =document.getElementById("rpsw");
    var match = document.getElementById('match');

      if (pwd.value == rpwd.value){
            match.innerHTML = '<span style="color:green">Password matches!</span>';
      }
      else{
            match.innerHTML = '<span style="color:red">Password does not match!</span>';
      }
          
}