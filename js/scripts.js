 var icon = document.getElementById("theme-icon");
var box = document.getElementById("box");
var facebook = document.getElementById("facebook");
var twitter = document.getElementById("twitter");
var github = document.getElementById("github");
var youtube = document.getElementById("youtube");
var link1 = document.getElementById("icon-link1");
var link2 = document.getElementById("icon-link2");
var link4 = document.getElementById("icon-link4");
var link5 = document.getElementById("icon-link5");
if(localStorage.getItem("theme")=="null"){
    localStorage.setItem("theme","dark");
}

let localData = localStorage.getItem("theme");

if(localData=="light"){
    icon.src="../assets/icons/moon.png";
    icon.style.backgroundColor="rgba(17, 25, 235, 0.4)";
    box.style.backgroundColor="rgba(17, 25, 235, 0.167)";
    facebook.style.color="#3B5999";
    twitter.style.color="#46C1F6";
    github.style.color="#333";
    youtube.style.color="#DE463B";
    //facebook-hover
    link1.addEventListener('mouseover', function handleMouseOver() {
        facebook.style.color="white";
    });
    link1.addEventListener('mouseout', function handleMouseOut() {
        facebook.style.color="#3B5999";
    });
    //twitter-hover
    link2.addEventListener('mouseover', function handleMouseOver() {
        twitter.style.color="white";
    });
    link2.addEventListener('mouseout', function handleMouseOut() {
        twitter.style.color="#46C1F6";
    });
    //github-hover
    link4.addEventListener('mouseover', function handleMouseOver() {
        github.style.color="white";
    });
    link4.addEventListener('mouseout', function handleMouseOut() {
        github.style.color="#333";
    });
    //youtube-hover
    link5.addEventListener('mouseover', function handleMouseOver() {
        youtube.style.color="white";
    });
    link5.addEventListener('mouseout', function handleMouseOut() {
        youtube.style.color="#DE463B";
    });
    document.body.style.backgroundColor="#5261b4d2";
    document.body.style.backgroundImage = "url('../assets/img/back.jpg')";
    document.body.classList.add("light-theme");
}
else if(localData=="dark"){
    icon.src="../assets/icons/sun.png";
    icon.style.backgroundColor="rgba(0,0,0,0.6)";
    box.style.backgroundColor="rgba(0, 0, 0, 0.6)";
    facebook.style.color="black";
    twitter.style.color="black";
    github.style.color="black";
    youtube.style.color="black";
    //facebook-hover
    link1.addEventListener('mouseover', function handleMouseOver() {
        facebook.style.color="white";
    });
    link1.addEventListener('mouseout', function handleMouseOut() {
        facebook.style.color="black";
    });
    //twitter-hover
    link2.addEventListener('mouseover', function handleMouseOver() {
        twitter.style.color="white";
    });
    link2.addEventListener('mouseout', function handleMouseOut() {
        twitter.style.color="black";
    });
    //github-hover
    link4.addEventListener('mouseover', function handleMouseOver() {
        github.style.color="white";
    });
    link4.addEventListener('mouseout', function handleMouseOut() {
        github.style.color="black";
    });
    //youtube-hover
    link5.addEventListener('mouseover', function handleMouseOver() {
        youtube.style.color="white";
    });
    link5.addEventListener('mouseout', function handleMouseOut() {
        youtube.style.color="black";
    });
    document.body.style.backgroundColor="#333";
    document.body.style.backgroundImage = "url('../assets/img/background.jpg')";
    document.body.classList.remove("light-theme");
}

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="../assets/icons/moon.png";
        icon.style.backgroundColor="rgba(17, 25, 235, 0.4)";
        box.style.backgroundColor="rgba(17, 25, 235, 0.167)";
        facebook.style.color="#3B5999";
        twitter.style.color="#46C1F6";
        github.style.color="#333";
        youtube.style.color="#DE463B";
        //facebook-hover
        link1.addEventListener('mouseover', function handleMouseOver() {
            facebook.style.color="white";
        });
        link1.addEventListener('mouseout', function handleMouseOut() {
            facebook.style.color="#3B5999";
        });
        //twitter-hover
        link2.addEventListener('mouseover', function handleMouseOver() {
            twitter.style.color="white";
        });
        link2.addEventListener('mouseout', function handleMouseOut() {
            twitter.style.color="#46C1F6";
        });
        //github-hover
        link4.addEventListener('mouseover', function handleMouseOver() {
            github.style.color="white";
        });
        link4.addEventListener('mouseout', function handleMouseOut() {
            github.style.color="#333";
        });
        //youtube-hover
        link5.addEventListener('mouseover', function handleMouseOver() {
            youtube.style.color="white";
        });
        link5.addEventListener('mouseout', function handleMouseOut() {
            youtube.style.color="#DE463B";
        });
        document.body.style.backgroundColor="#5261b4d2";
        document.body.style.backgroundImage = "url('../assets/img/back.jpg')";
        localStorage.setItem("theme","light");
    }else{
        icon.src="../assets/icons/sun.png";
        icon.style.backgroundColor="rgba(0,0,0,0.6)";
        box.style.backgroundColor="rgba(0, 0, 0, 0.6)";
        facebook.style.color="black";
        twitter.style.color="black";
        github.style.color="black";
        youtube.style.color="black";
        //facebook-hover
        link1.addEventListener('mouseover', function handleMouseOver() {
            facebook.style.color="white";
        });
        link1.addEventListener('mouseout', function handleMouseOut() {
            facebook.style.color="black";
        });
        //twitter-hover
        link2.addEventListener('mouseover', function handleMouseOver() {
            twitter.style.color="white";
        });
        link2.addEventListener('mouseout', function handleMouseOut() {
            twitter.style.color="black";
        });
        //github-hover
        link4.addEventListener('mouseover', function handleMouseOver() {
            github.style.color="white";
        });
        link4.addEventListener('mouseout', function handleMouseOut() {
            github.style.color="black";
        });
        //youtube-hover
        link5.addEventListener('mouseover', function handleMouseOver() {
            youtube.style.color="white";
        });
        link5.addEventListener('mouseout', function handleMouseOut() {
            youtube.style.color="black";
        });
        document.body.style.backgroundColor="#333";
        document.body.style.backgroundImage = "url('../assets/img/background.jpg')";
        localStorage.setItem("theme","dark");
    }
};
