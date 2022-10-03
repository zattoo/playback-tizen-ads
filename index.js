var ads = [
    {
        "name": "Promo1-1.mkv",
        "path": "https://josezattoo.s3.eu-central-1.amazonaws.com/Promo1-1.mkv"            
    },
    {
        "name": "Promo1-1.webm",
        "path": "https://josezattoo.s3.eu-central-1.amazonaws.com/Promo1-1.webm"            
    },
    {
        "name": "Promo1-noweboptimized.mp4",
        "path": "https://josezattoo.s3.eu-central-1.amazonaws.com/Promo1-noweboptimized.mp4"            
    },
    {
        "name": "Promo1-weboptimized.mp4",
        "path": "https://josezattoo.s3.eu-central-1.amazonaws.com/Promo1-weboptimized.mp4"            
    },
    {
        "name": "promo1.mp4",
        "path": "https://josezattoo.s3.eu-central-1.amazonaws.com/promo1.mp4"            
    }
]

window.onload = function exampleFunction() {

    const video = document.querySelector("video");

    document.getElementById("btnMKV").onclick = function() {
        load("https://josezattoo.s3.eu-central-1.amazonaws.com/Promo1-1.mkv")
    };

    document.getElementById("btnWebM").onclick = function() {
        load("https://josezattoo.s3.eu-central-1.amazonaws.com/Promo1-1.webm")
    };

    document.getElementById("mp4Not").onclick = function() {
        load("https://josezattoo.s3.eu-central-1.amazonaws.com/Promo1-noweboptimized.mp4")
    };

    document.getElementById("mp4Opt").onclick = function() {
        load("https://josezattoo.s3.eu-central-1.amazonaws.com/Promo1-weboptimized.mp4")
    };

    document.getElementById("original").onclick = function() {
        load("https://josezattoo.s3.eu-central-1.amazonaws.com/promo1.mp4")
    };

    document.getElementById("ad2").onclick = function() {
        load("https://josezattoo.s3.eu-central-1.amazonaws.com/ad2.mp4")
    };

    document.getElementById("ad3").onclick = function() {
        load("https://josezattoo.s3.eu-central-1.amazonaws.com/ad3.mp4")
    };

    document.getElementById("ad4").onclick = function() {
        load("https://josezattoo.s3.eu-central-1.amazonaws.com/ad4.mp4")
    };

    function load(videoUrl) { 
        video.src = videoUrl;
        video.play()
        log(videoUrl)
    }

    function log(msg){
        let log = document.getElementById('log');
        log.innerHTML = msg + "<br />" + log.innerHTML;
    }

}

