// let open=document.querySelector("#openIcon")
// open.addEventListener("click",openNav);

function openNav(){
    document.getElementById("mysidenav").style.width ="250px";
  }
  
  function closeNav(){
      document.getElementById("mysidenav").style.width = "0";
  }



  //dropdown

    let dropdown = document.getElementsByClassName("dropdown-btn");
    let i;

     for (i = 0; i < dropdown.length; i++) {
       dropdown[i].addEventListener("click", function() {
        //console.log("hello")
       this.classList.toggle("active");
      let dropdownContent = this.nextElementSibling;
       if (dropdownContent.style.display === "block") {
         dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
