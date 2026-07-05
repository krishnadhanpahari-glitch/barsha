const pages = document.querySelectorAll(".page");

/* PAGE CHANGE */

function nextPage(pageNumber){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document
    .getElementById("page"+pageNumber)
    .classList.add("active");

}

/* LETTER OPEN */

function openLetter(){

    const letter =
    document.getElementById("letter");

    letter.style.display="block";

}

/* FLOWERS */

const petalsContainer =
document.querySelector(".petals");

function createPetal(){

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
    Math.random()*100 + "vw";

    petal.style.animationDuration =
    (6 + Math.random()*6) + "s";

    petal.style.opacity =
    Math.random();

    petal.style.transform =
    `rotate(${Math.random()*360}deg)`;

    petalsContainer.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },12000);

}

setInterval(createPetal,300);

/* HEART EFFECT */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.bottom = "0";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },3000);

}

/* MANY HEARTS */

function heartExplosion(){

    for(let i=0;i<50;i++){

        setTimeout(()=>{
            createHeart();
        },i*80);

    }

}

/* RESULT */

function showResult(type){

    const result =
    document.getElementById("result");

    if(type==="yes"){

        result.innerHTML=
        `
        ❤️
        You just made this birthday
        even more beautiful.
        ❤️
        `;

        heartExplosion();

    }

    else if(type==="time"){

        result.innerHTML=
        `
        🌸
        Sometimes beautiful things
        are worth waiting for.
        🌸
        `;

    }

    else{

        result.innerHTML=
        `
        💔
        Thank you for taking
        this journey.
        Wishing you happiness always.
        🌷
        `;

    }

}

/* TYPING EFFECT */

window.addEventListener("load",()=>{

    const typing =
    document.querySelector(".typewriter");

    if(!typing) return;

    const text =
    typing.innerText;

    typing.innerText="";

    let i=0;

    function type(){

        if(i<text.length){

            typing.innerText += text.charAt(i);

            i++;

            setTimeout(type,40);

        }

    }

    type();

});

/* EXTRA GLOW SPARKLES */

setInterval(()=>{

    const sparkle =
    document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=
    Math.random()*100+"vw";

    sparkle.style.top=
    Math.random()*100+"vh";

    sparkle.style.pointerEvents="none";

    sparkle.style.fontSize=
    (10+Math.random()*15)+"px";

    sparkle.style.opacity=".8";

    sparkle.style.transition="2s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.style.opacity="0";

        sparkle.style.transform=
        "translateY(-30px)";

    },100);

    setTimeout(()=>{
        sparkle.remove();
    },2000);

},500);

/* OPTIONAL MUSIC BUTTON SUPPORT */

function playMusic(){

    const music =
    document.getElementById("bgMusic");

    if(music){

        music.play();

    }

}
