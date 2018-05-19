//Insert code below

function check()
{
       
       var fname = document.getElementById('fname').value; 
       var lname = document.getElementById('lname').value; 
       var email = document.getElementById('email').value;   
       var password = document.getElementById('password').value;   

      if(fname=="")   
      {
      	alert("Please Enter Your First Name");


      }

      else if(lname=="")   
      {
      	alert("Please Enter Your Last Name");
      }

       else if(password.length()<=6)   
      {
      	alert("Please Enter  Your Password Grater than length of 6");
      }
       else 
       {
       		alert("Successfuly");
       }

      



}
