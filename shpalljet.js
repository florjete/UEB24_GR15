
document.getElementById("myInput").onclick = function(event) {
  event.stopPropagation();
};
document.getElementById("myInput2").onclick = function(event) {
  event.stopPropagation();
};
document.getElementById("myInput3").onclick = function(event) {
  event.stopPropagation();
};
function filterFunction2() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
  function filterFunction2() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown2");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  function filterFunction3() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput3");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown3");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
 window.onclick = function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn *')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    function toggleDropdown(event, dropdownId) {
 
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          dropdowns[i].classList.remove("show");
      }

      event.stopPropagation();


      document.getElementById(dropdownId).classList.toggle("show");
  }
  document.addEventListener("DOMContentLoaded", function () {
    const kartat = document.querySelectorAll(".puna");
  
    kartat.forEach((karta) => {
        karta.addEventListener("mouseenter", () => {
            karta.style.transform = "scale(1.02)";
            karta.style.transition = "all 0.3s ease-in-out";
            karta.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });
  
        karta.addEventListener("mouseleave", () => {
            karta.style.transform = "scale(1)";
            karta.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        });
    });
  });
  function filterByCity(element) {
    let zgjedhur = element.innerText.trim(); // Merr qytetin nga dropdown
    let punet = document.querySelectorAll('.puna'); // Merr të gjitha punët

    punet.forEach(puna => {
        let lokacioni = puna.querySelector('.lokacioni').innerText.trim(); // Lexo përmbajtjen e spanit
        if (zgjedhur === "Të gjitha" || zgjedhur === lokacioni) {
            puna.style.display = "block"; // Shfaq punën
        } else {
            puna.style.display = "none"; // Fshi punën
        }
    });
}
function filterByCategory(element) {
  let zgjedhur = element.innerText.trim(); // Merr qytetin nga dropdown
  let punet = document.querySelectorAll('.puna'); // Merr të gjitha punët

  punet.forEach(puna => {
      let kategoria = puna.querySelector('.kategoria').innerText.trim(); // Lexo përmbajtjen e spanit
      if (zgjedhur === "Të gjitha" || zgjedhur === kategoria) {
          puna.style.display = "block"; // Shfaq punën
      } else {
          puna.style.display = "none"; // Fshi punën
      }
  });
}
function filterByCity(element) {
  let zgjedhur = element.innerText.trim(); // Merr qytetin nga dropdown
  let punet = document.querySelectorAll('.puna'); // Merr të gjitha punët

  punet.forEach(puna => {
      let lokacioni = puna.querySelector('.lokacioni').innerText.trim(); // Lexo përmbajtjen e spanit
      if (zgjedhur === "Të gjitha" || zgjedhur === lokacioni) {
          puna.style.display = "block"; // Shfaq punën
      } else {
          puna.style.display = "none"; // Fshi punën
      }
  });
}