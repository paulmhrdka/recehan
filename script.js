const URL_BASE = "https://candaan-api.vercel.app/api";
const btnText = document.querySelector('.candaan-text');
const btnImg = document.querySelector('.candaan-image');
const cardText = document.querySelector(".card-text");
const cardImg = document.querySelector(".card-image");

// show Candaan in First Load
document.addEventListener("DOMContentLoaded", function () {
    getCandaanText();
    getCandaanImg();
})

// function to getCandaan (text)
async function getCandaanText() {
    try {
        const get = await fetch(`${URL_BASE}/text/random?count=1`);
        const res = await get.json();
        cardText.innerHTML = showText(res);
    } catch (e) {
        return console.error(e);
    }
}

// function to getCandaan (image)
async function getCandaanImg() {
    try {
        const get = await fetch(`${URL_BASE}/image/random?count=1`);
        const res = await get.json();
        cardImg.innerHTML = showImg(res.data);
    } catch (e) {
        return console.error(e);
    }
}

// button to get new Candaan (text)
btnText.addEventListener("click", function(){
    getCandaanText();
})

// button to get new Candaan (image)
btnImg.addEventListener("click", function(){
    getCandaanImg();
})

// show Candaan Text
function showText(res){
    return `<p class="text-center font-semibold">${res.data}</p>`;
}

// show Candaan Image
function showImg(res){
    return `<img src="${res.url}" class="max-h-screen max-w-screen" />`;
}