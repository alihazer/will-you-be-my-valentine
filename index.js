function yes() {
    document.getElementById("image").src = "./images/yes.gif";
    document.getElementById("title").innerHTML = "I love you!";
    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";
}

function no() {
    const messages = ["Are u sure?", "Really sure?", "Think Again", "One more time", "You might regret it", "I'm warning you", "Last chance",];
    const message = messages[Math.floor(Math.random() * messages.length)];
    const btn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    btn.innerHTML = message;
    yesBtn.style.width = (yesBtn.offsetWidth + 10) + "px";
    yesBtn.style.height = (yesBtn.offsetHeight + 10) + "px";
    yesBtn.style.fontSize = (yesBtn.offsetHeight / 2) + "px";
    document.getElementById("image").src = "./images/angry.gif";
}