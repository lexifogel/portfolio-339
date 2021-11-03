
// function showCurrent() {
    
//     // ????
//     document.querySelector(".dropdown-content").innerHTML += "<br>Go Blue!\n";
// }

// function submitMessage() {

//     <button onclick="alert('Message sent!')">Submit</button>
// }


/* Set the width of the sidebar to Xpx and the left margin of the page content to Xpx */
function openNav() {
    document.querySelector("#mySidebar").style.width = "200px";
    document.querySelector("#main").style.marginLeft = "200px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.querySelector("#mySidebar").style.width = "0";
    document.querySelector("#main").style.marginLeft = "0";
  }