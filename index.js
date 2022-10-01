// Side Navbar Function

function openNav(){
      document.getElementById("mysidenav").style.width ="250px";
    }
    
    function closeNav(){
        document.getElementById("mysidenav").style.width = "0";
    }

    window.addEventListener('click', function(e){   
      if (!document.getElementById('mysidenav').contains(e.target) && !document.getElementById('menuicon').contains(e.target)){
        // Clicked in box
       document.getElementById("mysidenav").style.width = "0px";  
      } else{
       
     // document.getElementById("mySidenav").style.width = "0px";
      }
    });
   

    


// courses 

function myfunc (){
  let c = document.getElementById("Course");
  //console.log("hello")
  c.style.border="none";
  if(c.value  === "Online Course"){
    window.location.href="Courses.html";
  }
  if(c.value  === "ClassRoom Training"){
    window.location.href="course_classroom.html";
  }
}

// Login Function

function loginFunc (){
  let c = document.getElementById("Login");
  //console.log("hello")
  c.style.border="none";
  if(c.value  === "Company"){
    window.location.href="login_company.html";
  }
  if(c.value  === "Student"){
    window.location.href="login_student.html";
  }
}

// Register function 

function RegFunc (){
  let c = document.getElementById("Reg");
  //console.log("hello")
  c.style.border="none";
  if(c.value  === "Company"){
    window.location.href="#";
  }
  if(c.value  === "Student"){
    window.location.href="Student_reg.html";
  }
}


// Slider Function

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
  //  x[i].style.display = "block";  
  }
 // x[slideIndex+1].style.display = "block";  
}