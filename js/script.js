const SearchBtn=document.getElementById("search-Btn");
const inputBox=document.getElementById("search-content-wrap")
const headerOutterWrap=document.getElementById("header-outter-wrap") 
const crossBtn=document.getElementById("cross-input-Btn")
const cartSlidBtn=document.getElementById("cart-box")
const cartSlider=document.getElementById("drawer-inner-empty")
const SliderCrossBtn=document.getElementById("cart-cross-Btn")
const MegaMenuSlider=document.getElementById("mega-menu-slider")
const burger=document.getElementById("burger")
SearchBtn.addEventListener("click",()=>{  
    inputBox.classList.remove("hidden")
    inputBox.classList.add("display")
    headerOutterWrap.classList.add("hidden")
})
crossBtn.addEventListener("click",()=>{
    inputBox.classList.add("hidden")
    inputBox.classList.remove("display")
    headerOutterWrap.classList.remove("hidden")
})
cartSlidBtn.addEventListener("click",()=>{
    cartSlider.classList.add("slid");
})
SliderCrossBtn.addEventListener("click",()=>{
    cartSlider.classList.remove("slid")
})
function toggleMenu(){
MegaMenuSlider.classList.toggle("hidden")
MegaMenuSlider.classList.toggle("display")
burger.classList.toggle("display")
}