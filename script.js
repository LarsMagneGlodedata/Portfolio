// BURGER MENU
document.addEventListener("DOMContentLoaded", () => {
  let isNavOpen = false
  const burger = document.querySelector(".burger")
  const navMenu = document.querySelector(".navMenu")
  const main = document.querySelector("main")
  const overlay = document.querySelector(".overlay")
  // const push = document.querySelector(".pushdown")

  // function for å åpne nav
   function openNav() {
      navMenu.style.height = "193px"
      overlay.style.height = "450%"
      burger.classList.toggle("change")
      // push.style.height = "271px"
      if (navMenu)
      navMenu.style.height === "193px"
      isNavOpen = true
   }

  //  function for å lukke nav
   function closeNav() {
      navMenu.style.height = "0"
      overlay.style.height = "0"
      burger.classList.toggle("change")
      // push.style.height = "78px"
      if (navMenu)
      navMenu.style.height === "0"
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
        target.style.height = "50px"
        target.style.width = "50px"
        target.style.backgroundColor = "purple"
    })

    function reset() {
        target.style = ""
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