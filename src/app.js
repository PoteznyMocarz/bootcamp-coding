let personImg = document.getElementById("personImg");
let nextSlideBtn = document.getElementById("nextBtn");
let previousSlideBtn = document.getElementById("previousBtn");
let mainText = document.getElementById("mainText");
let nameText = document.getElementById("nameText");
let statusText = document.getElementById("statusText");
let textContainer = document.getElementById("textContainer");
let slideNumber = 1;

nextSlideBtn.onclick = function() {
    personImg.classList.add("opacity-[0]");
    setTimeout(() => personImg.classList.remove("opacity-[0]"), 400)
    textContainer.classList.add("lg:scale-[1.1]");
    setTimeout(() => textContainer.classList.remove("lg:scale-[1.1]"), 350)
}

previousSlideBtn.onclick = function() {
    personImg.classList.add("opacity-[0]");
    setTimeout(() => personImg.classList.remove("opacity-[0]"), 400)
    textContainer.classList.add("lg:scale-[1.1]");
    setTimeout(() => textContainer.classList.remove("lg:scale-[1.1]"), 350)
}

function showNextSlide() {
    if(slideNumber === 2) {
        slideNumber = 1;
        setTimeout(() => mainText.innerText = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”", 320);
        setTimeout(() => nameText.innerText = "Tanya Sinclair", 320);
        setTimeout(() => statusText.innerText = "UX Engineer", 320);
    }

    else {
        slideNumber = slideNumber + 1;
        setTimeout(() => mainText.innerText = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”", 320);
        setTimeout(() => nameText.innerText = "John Tarkpor", 320);
        setTimeout(() => statusText.innerText = "Junior Front-end Developer", 320);
    }
    
    if(slideNumber === 2) {
        setTimeout(() => personImg.setAttribute('src', "/images/image-john.jpg"), 360);
    }

    else {
        setTimeout(() => personImg.setAttribute('src', "/images/image-tanya.jpg"), 360);
    }
}

nextSlideBtn.addEventListener("click", showNextSlide);

function showPreviousSlide() {
    if(slideNumber === 1) {
        slideNumber = 2;
        setTimeout(() => mainText.innerText = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”", 320);
        setTimeout(() => nameText.innerText = "John Tarkpor", 320);
        setTimeout(() => statusText.innerText = "Junior Front-end Developer", 320);
    }

    else {
        slideNumber = slideNumber - 1;
        setTimeout(() => mainText.innerText = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”", 320);
        setTimeout(() => nameText.innerText = "Tanya Sinclair", 320);
        setTimeout(() => statusText.innerText = "UX Engineer", 320);
    }
    
    if(slideNumber === 2) {
        setTimeout(() => personImg.setAttribute('src', "/images/image-john.jpg"), 360);
    }

    else {
        setTimeout(() => personImg.setAttribute('src', "/images/image-tanya.jpg"), 360);
    }
}

previousSlideBtn.addEventListener("click", showPreviousSlide);