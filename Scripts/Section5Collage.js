var projects=document.querySelectorAll(".section5-image");projects.forEach(function(e){e.style.display="block"});var categories=document.querySelectorAll(".section5-left p");categories.forEach(function(e){e.addEventListener("click",function(){categories.forEach(function(e){e.classList.remove("selected")}),this.classList.add("selected");var e=this.textContent.toLowerCase();projects.forEach(function(t){var c=t.querySelector(".section5-text p:nth-child(2)").textContent.toLowerCase();"all"===e||c.includes(e)?t.style.display="block":t.style.display="none"})})});