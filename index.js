// let open=document.querySelector("#openIcon")
// open.addEventListener("click",openNav);

    function openNav(){
      document.getElementById("mysidenav").style.width ="250px";
    }
    
    function closeNav(){
        document.getElementById("mysidenav").style.width = "0";
    }

    // dropdown

//     var dropdown = document.getElementsByClassName("dropdown-btn");
//     var i;
//      for (i = 0; i < dropdown.length; i++) {
//        dropdown[i].addEventListener("click", function() {
//         //console.log("hello")
//        this.classList.toggle("active");
//       var dropdownContent = this.nextElementSibling;
//        if (dropdownContent.style.display === "block") {
//          dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }


// courses 

// let c = document.getElementById("Course");
// c.addEventListener("change",myfunc);

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
