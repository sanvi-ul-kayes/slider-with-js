let img = document.querySelectorAll(".img");
let pbtv = document.querySelector(".pbtn")
let nbtv = document.querySelector(".nbtn")
let count = 0;

img.forEach((ele , i ) => {
    console.log(ele, i);
    ele.style.left = `${i * 100}%`;
});

pbtv.addEventListener("click", () => {
    if ( count > 0 ) {
        
        count--;
        imgslide();
    }
})
nbtv.addEventListener("click", () => {
    if (count < img.length - 1) {
        count++;
        imgslide();
    }
});


let imgslide = () => {
    img.forEach((ele, i) => {
        ele.style.transform = `translateX(-${count * 100}%)`;
    });
};







