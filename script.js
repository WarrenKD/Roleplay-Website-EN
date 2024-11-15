let first = null;
let second = "https://discord.gg/mu7HH6gtEJ";
let third = "TeamSpeak Link";

function copyText(text) {
    if (text === "first") {
        const secipContent = document.getElementById('first').textContent;
        
        if (secipContent === "Unknown") {
            // Redirect to a specific URL if server is under development
            window.location.href = "https://example.com/development-info"; // Replace with your actual URL
        } else {
            // Copy the content if available
            var input = document.createElement('input');
            input.setAttribute('value', secipContent);
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            alert("Copied: " + secipContent);
        }
    }
    if (text === "second") {
        const secipContent = document.getElementById('second').textContent;
        
        if (secipContent === "Unknown") {
            // Redirect to a specific URL if server is under development
            window.location.href = "https://example.com/development-info"; // Replace with your actual URL
        } else {
            // Copy the content if available
            var input = document.createElement('input');
            input.setAttribute('value', secipContent);
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            alert("Copied: " + secipContent);
        }
    }
    if (text === "third") {
        var input = document.createElement('input');
        input.setAttribute('value', third); // Ensure 'third' is defined with content
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input);
        return result;
    }
}

function openLink(value) {
    if (value == "first") {
        window.location.href = "https://google.com";
    }
    if (value == "second") {
        window.location.href = "https://discord.gg/mu7HH6gtEJ";
    }
    if (value == "third") {
        window.location.href = "ts3server://";
    }
    if (value == "start") {
        window.location.href = "index.html";
    }
    if (value == "about") {
        window.location.href = "about.html";
    }
    if (value == "contact") {
        window.location.href = "contact.html";
    }
    if (value == "apply") {
        window.location.href = "apply.html";
    }
    if (value == "imprint") {
        window.location.href = "imprint.html";
    }
    if (value == "partner") {
        window.location.href = "partner.html";
    }
    if (value == "rules" || value == "whitelist") {
        alert('Not Implemented yet!')
    }
}

setTimeout(function() {
    startTime();
}, 50);

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementsByClassName('sec1time')[0].innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function aboutSlide(value) {
    if (value == 1) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "0vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = "0.2vw solid rgb(60, 169, 24)";
        document.getElementsByClassName('about-title2')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title3')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title4')[0].style.borderBottom = null;
    }
    if (value == 2) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "40vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title2')[0].style.borderBottom = "0.2vw solid rgb(60, 169, 24)";
        document.getElementsByClassName('about-title3')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title4')[0].style.borderBottom = null;
    }
    if (value == 3) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "80vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title2')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title3')[0].style.borderBottom = "0.2vw solid rgb(60, 169, 24)";
        document.getElementsByClassName('about-title4')[0].style.borderBottom = null;
    }
    if (value == 4) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "120vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title2')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title3')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title4')[0].style.borderBottom = "0.2vw solid rgb(60, 169, 24)";
    }
}

function selectRang(value) {
    console.log(value);
    if (value == "Developer") {
        document.getElementsByClassName('dev')[0].style.display = "block";
    } else {
        document.getElementsByClassName('dev')[0].style.display = "none";
    }

    if (value == "Supporter") {
        document.getElementsByClassName('sup')[0].style.display = "block";
    } else {
        document.getElementsByClassName('sup')[0].style.display = "none";
    }

    if (value == "Concept") {
        document.getElementsByClassName('kon')[0].style.display = "block";
    } else {
        document.getElementsByClassName('kon')[0].style.display = "none";
    }

    if (value == "others") {
        document.getElementsByClassName('son')[0].style.display = "block";
    } else {
        document.getElementsByClassName('son')[0].style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    checkServerStatus();
});

function checkServerStatus() {
    const serverIP = "198.244.230.175:30106";
    const statusElement = document.getElementById("serverStatus");

    fetch(`https://${serverIP}/info.json`)
        .then(response => {
            if (response.ok) {
                statusElement.textContent = "Online";
                statusElement.style.color = "green";
            } else {
                throw new Error("Server offline");
            }
        })
        .catch(error => {
            statusElement.textContent = "Offline";
            statusElement.style.color = "red";
            console.error("Error checking server status:", error);
        });
}

function toggleDescription(element) {
    // Toggle the 'active' class on the clicked team member
    element.classList.toggle('active');
}