const img = document.querySelector("img");

const container = document.getElementById("container");

  container.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const Y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${Y}px`;
    img.style.transform = "scale(2)";
  });

  container.addEventListener("mouseleave",()=>{
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)"
  })