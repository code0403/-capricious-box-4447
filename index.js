// let open=document.querySelector("#openIcon")
// open.addEventListener("click",openNav);

    function openNav(){
      document.getElementById("mysidenav").style.width ="250px";
    }
    
    function closeNav(){
        document.getElementById("mysidenav").style.width = "0";
    }

    // dropdown

    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
     for (i = 0; i < dropdown.length; i++) {
       dropdown[i].addEventListener("click", function() {
        //console.log("hello")
       this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
       if (dropdownContent.style.display === "block") {
         dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}