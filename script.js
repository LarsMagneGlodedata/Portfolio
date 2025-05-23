// BURGER MENU
document.addEventListener("DOMContentLoaded", () => {
  let isNavOpen = false
  const burger = document.querySelector(".burger")
  const navMenu = document.querySelector(".navMenu")
  const main = document.querySelector("main")
  const overlay = document.querySelector(".overlay")
  const target = document.querySelector(".catch")
  const targetBall = document.querySelector(".catchBall")
  let mwq = window.matchMedia("(max-width: 699px)")
    
  // function for å åpne nav
   function openNav() {
    if (mwq.matches) {
      navMenu.style.height = "193px"
      overlay.style.height = "450%"
      burger.classList.toggle("change")
      target.style.top = "350px"
      isNavOpen = true
    } else {
        // do nothing
    }
   }

  //  function for å lukke nav
   function closeNav() {
      navMenu.style.height = "0"
      overlay.style.height = "0"
      burger.classList.toggle("change")
      target.style = ""
      targetBall.style = ""
      console.log(targetBall)
      isNavOpen = false
   }


   // Åpne nav når du trykke på burgermenyen
   burger.addEventListener("click", () => {
      if (isNavOpen) {
          closeNav()
      } else {
          openNav()
      }
   })



   // lukker nav når du trykker på main (utenfor menyen)
   main.addEventListener("click", () => {
      if (isNavOpen) {
          closeNav()
      } else {
          // do nothing
      }
   })




   //  åpner og lukker nav når du trykker på "m" og lukker nav når du trykker på "ESC"
   let keypress = {
   }
   document.addEventListener("keydown", handler)
   function handler(x) {
      keypress[x.key] = true
      if ((x.key === "m" || x.key === "Escape") && isNavOpen) {
          closeNav()
      } else if (x.key === "m") {
          openNav()
      } else {
          // do nothing
      }
  }

  // hide/show header on scroll men berre hvis nav menyen ikkje e åpen
  let prevScrollpos = window.scrollY;
  window.onscroll = function hideHeader() {
      let currentScrollPos = window.scrollY;
      if (!isNavOpen) {
          if (prevScrollpos > currentScrollPos) {
              document.querySelector("header").style.top = "0"
          }   else {
              document.querySelector("header").style.top = "-78px"
          }
      } else {
          document.querySelector("header").style.top = "0"
      }
      prevScrollpos = currentScrollPos;
  }

})

// KOPIERT FRA INTERNETT
/*
document.addEventListener('DOMContentLoaded',function(event){
    let dataText = ["Hei, dette er en test!", "Eg skjønne ikkje denne koden", "endå!"];
    let trykkMeg = document.querySelector(".heroH2")
    
    function typeWriter(text, i, Callback) {
      if (i < (text.length)) {
       document.querySelector(".heroP").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
          typeWriter(text, i + 1, Callback)
        }, 100);
      }
      else if (typeof Callback == 'function') {
        setTimeout(Callback, 2000);
      }
    }

     function startTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            startTextAnimation(0);
          }, 5000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         startTextAnimation(i + 1);
       });
      }
    }

    trykkMeg.addEventListener("click", () => {
        startTextAnimation(0)
    })
  });
  */


  /* SKREVE SJØL FOR ØVELSE
document.addEventListener('DOMContentLoaded',function(event){
    let dataText = ["Hei, dette er en test!", "eg begynner å forstå denne koden", "og gjer et forsøk på å skriva den sjøl!"]
    let trykkMeg = document.querySelector(".heroH2")

     function typeWriter(text, i, Callback) {
        if (i < (text.length)) {
         document.querySelector(".heroP").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
          setTimeout(function() {
            typeWriter(text, i + 1, Callback)
            }, 100);
        }
        else if (typeof Callback == 'function') {
            setTimeout(Callback, 2000);
        }
    }

     function startTextAnimation(i) { 
        if (typeof dataText[i] == 'undefined'){
             setTimeout(function() {
               startTextAnimation(0);
            }, 5000);
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
             startTextAnimation(i + 1);
            });
        }
    }

    startTextAnimation(0)
})
*/

// SKRIVEMASKIN
// Skreve av meg, men med mykje hjelp frå internett.
document.addEventListener('DOMContentLoaded', function(event) {
    let dataText = ["learning", "coding", "creating"];
    let prefix = ["<span class='prefix-style'>I enjoy:</span>"]
    let heroP = document.querySelector(".heroP");

    function typeWriter(text, i, Callback) {
        if (i < text.length) {
            heroP.innerHTML = prefix + text.substring(0, i + 1) + '<span class="caret" aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, Callback);
            }, 100);
        } else if (typeof Callback == 'function') {
            setTimeout(Callback, 2000);
        }
    }

    function deleteText(text, i, Callback) {
        if (i >= !text.length) {
            heroP.innerHTML = prefix + text.substring(0, i) + '<span class="caret" aria-hidden="true"></span>';
            setTimeout(function() {
                deleteText(text, i - 1, Callback);
            }, 30);
        } else if (typeof Callback == 'function') {
            setTimeout(Callback, 1000);
        }
    }

    function startTextAnimation(i) {
        if (i < dataText.length) {
            typeWriter(dataText[i], 0, function() {
                deleteText(dataText[i], dataText[i].length, function() {
                    startTextAnimation(i + 1);
                });
            });
        } else {
            setTimeout(function() {
                startTextAnimation(0);
            }, 1);
        }
    }

    startTextAnimation(0);
});


// Denne koden e basically tatt frå Gemini. Men skjønne alt uten om Math.floor(Math.random() * maxX/maxY)
document.addEventListener("DOMContentLoaded", () => {

    const target = document.querySelector('.catch');
    const targetBall = document.querySelector('.catchBall')
    const gameArea = document.querySelector('.hero');

    function getRandomPosition() {
        const maxX = gameArea.offsetWidth - target.offsetWidth;
        const maxY = gameArea.offsetHeight - target.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        return { x: randomX, y: randomY };
    }

    function moveTarget() {
        const newPosition = getRandomPosition();
        target.style.left = newPosition.x + 'px';
        target.style.top = newPosition.y + 'px';
    }

    target.addEventListener("mouseover", () => {
        moveTarget()
        target.style.height = "100px"
        target.style.width = "100px"
        targetBall.style.height = "50px"
        targetBall.style.width = "50px"
        targetBall.style.backgroundColor = "purple"
    })

    function reset() {
        target.style = ""
        targetBall.style = ""
    }

    let keypress = {
    }
    document.addEventListener("keydown", handler) 
    function handler(x) {
       keypress[x.key] = true
       if (x.key === "r") {
           reset()
   } else {
    // do nothing
   }
}

})

// Denne koden e skreve av gemini, med å bruka min egen animasjon laga i styles.css
// Animasjon i styles.css e kommentert ut, men e berre å fjerna kommentaren
// hvis du vil sjå den animasjon gå automatisk.
// har brukt heile dagen på å prøva å skriva denne koden sjøl, men fekk da ikkje til å sjå fint ut
// så derfor brukte eg gemini til å hjelpa
// skjønne lite av denne koden, men ska bruka meir tid på å prøva å skriva lignanes sjøl dei neste dagane!
/*
document.addEventListener("DOMContentLoaded", () => {
  const blokk = document.querySelector('.blokk');
  let isLeft = true;

    function animation() {
        blokk.addEventListener('mouseover', () => {
          if (isLeft) {
            blokk.animate(
              [
                { transform: 'translateX(-50px)', width: '5em' },
                { transform: 'translateX(0px)', width: '10em' },
                { transform: 'translateX(50px)', width: '5em' }
              ],
              {
                duration: 500,
                easing: 'linear',
                fill: 'forwards'
              }
            );
            isLeft = false;
          } else {
            blokk.animate(
              [
                { transform: 'translateX(50px)', width: '5em' },
                { transform: 'translateX(0px)', width: '10em' },
                { transform: 'translateX(-50px)', width: '5em' } 
              ],
              {
                duration: 500,
                easing: 'linear',
                fill: 'forwards'
              }
            );
            isLeft = true;
          }
        });
      }
      if (blokk) {
        animation();
      }
      
})
*/

// Skreve på min egen måte som eg forstår lettare sjøl med å bruka to functions som eg calle i ein eventlistener.
document.addEventListener("DOMContentLoaded", () => {
  const blokk = document.querySelector(".blokk")
  let isLeft = true
  let isUp = true

    function slideRight() {
        blokk.animate(
          [
          {transform: 'translateX(-50px) translateY(-50px)', width: '100px'},
          {transform: 'translateX(0px) translateY(-50px)', width: '200px'},
          {transform: 'translateX(50px) translateY(-50px)', width: '100px'}
        ],
        {
          duration: 500,
          easing: 'linear',
          fill: 'forwards'
        }
        )
        isLeft = false
    }

// På up & down function skjer da nåke interessant. Når du øke width, så øke da i begge retninga, men i height så øke da berre nedover. så for å kompensera for økningen må eg på slideDown øka height og så flytta den med shrinkingen. og i slideUp må eg flytta den med økningen og så shrinka den. Mens i width må eg flytta mens den øke og shrinke. 

    function slideDown() {
      blokk.animate(
        [
        {transform: 'translateY(-50px) translateX(50px)', height: '100px'},
        {transform: 'translateY(-50px) translateX(50px)', height: '200px'},
        {transform: 'translateY(50px) translateX(50px)', height: '100px'}
      ],
      {
        duration: 500,
        easing: 'linear',
        fill: 'forwards'
      }
      )
      isUp = false
  }

  function slideUp() {
    blokk.animate(
      [
      {transform: 'translateY(50px) translateX(-50px)', height: '100px'},
      {transform: 'translateY(-50px) translateX(-50px)', height: '200px'},
      {transform: 'translateY(-50px) translateX(-50px)', height: '100px'}
    ],
    {
      duration: 500,
      easing: 'linear',
      fill: 'forwards'
    }
    )
    isUp = true
}

    function slideLeft() {
        blokk.animate(
          [
          {transform: 'translateX(50px) translateY(50px)', width: '100px'},
          {transform: 'translateX(0px) translateY(50px)', width: '200px'},
          {transform: 'translateX(-50px) translateY(50px)', width: '100px'}
        ],
        {
          duration: 500,
          easing: 'linear',
          fill: 'forwards'
        }
        )
        isLeft = true
    }

    blokk.addEventListener("mouseover", () => {
      if (isLeft && isUp) {
        slideRight()
      } else if (!isLeft && isUp) {
        slideDown()
      } else if (!isLeft && !isUp) {
        slideLeft()
      } else if (isLeft && !isUp) {
        slideUp()
      }
    })
})