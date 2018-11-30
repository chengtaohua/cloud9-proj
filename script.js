function show(section) {
    var content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    var nav = document.getElementsByClassName("nav");
    for (var j = 0; j < nav.length; j++) {
        if (nav[j].classList.contains("active")) nav[j].classList.remove("active");
    }
    document.getElementById(section).style.display = "block";
    document.getElementById("nav-" + section).classList.add("active");

}