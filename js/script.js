const SearchBtn=document.getElementById("search-Btn");
const inputBox=document.getElementById("search-content-wrap")
const headerOutterWrap=document.getElementById("header-outter-wrap") 
const crossBtn=document.getElementById("cross-input-Btn")


const cartSlidBtn=document.getElementById("cart-box")
const cartSlider=document.getElementById("drawer-inner-empty")
const SliderCrossBtn=document.getElementById("cart-cross-Btn")


SearchBtn.addEventListener("click",(event)=>{
    
    event.preventDefault()

    inputBox.classList.remove("hidden")
    inputBox.classList.add("display")
    headerOutterWrap.classList.add("hidden")
    // console.log("working")
})
crossBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    inputBox.classList.add("hidden")
    inputBox.classList.remove("display")
    headerOutterWrap.classList.remove("hidden")
})

cartSlidBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    cartSlider.classList.add("slid");

})
SliderCrossBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    cartSlider.classList.remove("slid")
})