const menuitem = document.querySelectorAll(".menuitem");
const wrapper = document.querySelector(".slidewrapper");

menuitem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform= `translateX(${-100 * index}vw)`;
    })
})



/*   ---->  payment section <-----*/ 
const productButtons = document.querySelectorAll(".btn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    payment.style.display = "block";
  });
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});









