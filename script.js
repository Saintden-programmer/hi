function checkName() {
    const name = document.getElementById("nameInput").value.trim().toLowerCase();

    if (name === "mikay") {

        // Hide name input section
        document.getElementById("nameSection").style.display = "none";

        // Show confession
        document.getElementById("message").classList.remove("hidden");

        createHearts();
    } 
    else if (name === "") {
        alert("Type your name muna 😣");
    } 
    else {
        alert("Hala! Parang hindi ikaw yan 😆 Try ulit!");
    }
}

function createHearts() {
    for(let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "%";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }
}

/* ------------------------------------------------
   YES & NO LOGIC SECTION
---------------------------------------------------*/

let noClickCount = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES → GO TO FINAL PAGE
yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html"; 
});

// NO → 4 clicks
noBtn.addEventListener("click", handleNo);
noBtn.addEventListener("touchstart", handleNo);

function handleNo() {
    noClickCount++;

    if (noClickCount === 1) {
        alert("Sure kana po ba?");
    }
    else if (noClickCount === 2) {
        alert("Hindi na talaga magbabago isip?");
    }
    else if (noClickCount === 3) {
        alert("Okay, I respect your decision.");
    } 
    else {
        const x = Math.random() * window.innerWidth * 0.7;
        const y = Math.random() * window.innerHeight * 0.7;

        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
}
