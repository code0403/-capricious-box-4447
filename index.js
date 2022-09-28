document.querySelector("#openIcon").addEventListener("click",openNav);
    function openNav(){
      document.getElementById("mysidenav").style.width ="100";
    }
    
    function closeNav(){
        document.getElementById("mysidenav").style.width = "0";
    }