function swapImage() {
    let img1 = document.getElementById("image1");
    let img2 = document.getElementById("image2");

    if (img1.style.display == "block") {
        img1.style.display = "none";
        img2.style.display = "block";
    }
    else {
        img1.style.display = "block";
        img2.style.display = "none";
    }
}