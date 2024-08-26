const imgDivArray = document.querySelectorAll(".click-img"); 
const sideInfo = document.getElementById("side-info");

const infoImage = document.getElementById("info-image"); 

imgDivArray.forEach(function(sideInfo) {
    sideInfo.addEventListener("click", function(e) {
        document.getElementById("side-info").style.display = "block"
        document.getElementById("necklaces").style.width = "75%"
        document.getElementById("necklaces").style.float = "right"
        document.getElementById("necklaces").style.marginBottom = "50px"
        document.getElementById("bracelets").style.width = "70%"
        document.getElementById("bracelets").style.float = "right"
        document.getElementById("bracelets").style.marginBottom = "50px"
        document.getElementById("earrings").style.width = "75%"
        document.getElementById("earrings").style.float = "right"
        document.getElementById("earrings").style.marginBottom = "50px"
        document.getElementById("rings").style.width = "75%"
        document.getElementById("rings").style.float = "right"
        document.getElementById("rings").style.marginBottom = "50px"
        document.getElementById("contact").style.width = "75%"
        document.getElementById("contact").style.float = "right"
        infoImage.src = e.target.src;
    });
}); 

document.getElementById("fa-x").addEventListener("click", () => {
    document.getElementById("side-info").style.display = "none"
    document.getElementById("necklaces").style.width = "100%"
        document.getElementById("necklaces").style.float = "none"
        document.getElementById("bracelets").style.width = "100%"
        document.getElementById("bracelets").style.float = "none"
        document.getElementById("earrings").style.width = "100%"
        document.getElementById("earrings").style.float = "none"
        document.getElementById("rings").style.width = "100%"
        document.getElementById("rings").style.float = "none"
        document.getElementById("contact").style.width = "100%"
        document.getElementById("contact").style.float = "none"
}) 

function showSidebar(){
    const sidebar = document.querySelector(".sidebar"); 
    const menu = document.querySelector(".menu"); 

    if (sidebar.style.display === "none") {
       sidebar.style.display = "flex"
    } else {
       sidebar.style.display = "none"
    }
 } 

 const next = document.querySelector(".next"); 
 const prev = document.querySelector(".prev"); 

 next.addEventListener("click", function(){
   const items = document.querySelectorAll(".item"); 
   document.querySelector(".slide").appendChild(items[0])
 }) 

 prev.addEventListener("click", function(){
   const items = document.querySelectorAll(".item"); 
   document.querySelector(".slide").prepend(items[items.length - 1])
 }) 

//  setTimeout(function(){
//    document.getElementById('footer').classList.remove('hide');
//   }, 50000); 

// setTimeout(function(){
//    document.getElementById('bg-vid').classList.add('hide');
//   }, 50000); 

  let style = document.createElement("style"); 
  let position = "right"; 

  style.innerHTML = `
  @keyframes my-animation{
   0%{${position}: -${document.querySelector(".quote").offsetWidth + 20}px;}
   100%{${position}: 100%;}

  }`;

  document.head.append(style);


  const sliddes = document.querySelectorAll(".slidde"); 

  sliddes.forEach((slidde) => {
    slidde.addEventListener("click", () => {
      removeActiveClasses(); 
      slidde.classList.add("active")
    })
  }) 

  function removeActiveClasses() {
    sliddes.forEach((slidde) => {
      slidde.classList.remove("active")
    })
  }