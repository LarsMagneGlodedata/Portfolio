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

     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 5000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }

    trykkMeg.addEventListener("click", () => {
        StartTextAnimation(0)
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

     function StartTextAnimation(i) { 
        if (typeof dataText[i] == 'undefined'){
             setTimeout(function() {
               StartTextAnimation(0);
            }, 5000);
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
             StartTextAnimation(i + 1);
            });
        }
    }

    StartTextAnimation(0)
})
*/

// Skreve av meg, men med mykje hjelp frå internett.
document.addEventListener('DOMContentLoaded', function(event) {
    let dataText = ["Hei, dette er en test!", "Dette er en skrivemaskin-animasjon", "Takk for meg... :D"];
    let heroP = document.querySelector(".heroP");

    function typeWriter(text, i, Callback) {
        if (i < text.length) {
            heroP.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, Callback);
            }, 50);
        } else if (typeof Callback == 'function') {
            setTimeout(Callback, 3000);
        }
    }

    function deleteText(text, i, Callback) {
        if (i >= !text.length) {
            heroP.innerHTML = text.substring(0, i) + '<span aria-hidden="true"></span>';
            setTimeout(function() {
                deleteText(text, i - 1, Callback);
            }, 20);
        } else if (typeof Callback == 'function') {
            setTimeout(Callback, 500);
        }
    }

    function StartTextAnimation(i) {
        if (i < dataText.length) {
            typeWriter(dataText[i], 0, function() {
                deleteText(dataText[i], dataText[i].length, function() {
                    StartTextAnimation(i + 1);
                });
            });
        } else {
            setTimeout(function() {
                StartTextAnimation(0);
            }, 3000);
        }
    }

    StartTextAnimation(0);
});