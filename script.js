function changeImage(image) {
    var image = document.getElementById('homeImg1');
    if (image.src.match("images/homeImg1.png")) {
        image.src = "images/homeImg2.png";
    }
    else {
        image.src = "images/homeImg1.png";
    }
}

var images = ['images/homeImg1.png','images/homeImg2.png2'],i=0;
setTimeout(function(){
    changeImage(images[i]);
    i++;
    if(i>images.length)
    i=0;
},2000);