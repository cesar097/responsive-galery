const fulImgbox = document.getElementById("fulimgBox");
const fullImg = document.getElementById("fullimg");

function openFullImg(reference){
    fulImgbox.style.display = "flex";
    fullImg.src = reference;
}
function closeImg(){
    fulImgbox.style.display = "none";
}