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