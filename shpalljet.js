

document.getElementById("myInput").onclick = function(event) {
  event.stopPropagation();
};
document.getElementById("myInput2").onclick = function(event) {
  event.stopPropagation();
};
function resetFilters() {
  location.reload(); // Rifreskon faqen
}
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
  document.addEventListener('DOMContentLoaded', () => {
    let qytetiIRuajtur = localStorage.getItem('qytetiIFundit');
    if (qytetiIRuajtur) {
      console.log("Aplikimi i filtrit për qytetin:", qytetiIRuajtur);
      filterByCityName(qytetiIRuajtur);
    }
  });
  
  function filterByCity(element) {
    let zgjedhur = element.innerText.trim(); // Merr qytetin e zgjedhur
    console.log("Qyteti i zgjedhur:", zgjedhur);
  
    // Kontrollo nëse është qyteti i parë apo i ndryshëm nga i mëparshmi
    let qytetiIRuajtur = localStorage.getItem('qytetiIFundit');
    if (qytetiIRuajtur && qytetiIRuajtur !== zgjedhur) {
      // Ruaj qytetin e ri në localStorage dhe rifresko faqen
      localStorage.setItem('qytetiIFundit', zgjedhur);
      location.reload(); // Rifresko faqen
      return;
    }
  
    // Përditëso qytetin e ruajtur në localStorage
    localStorage.setItem('qytetiIFundit', zgjedhur);
  
    // Vazhdoni me logjikën normale të filtrimit
    filterByCityName(zgjedhur);
  }
  
  function filterByCityName(qyteti) {
    let container = document.querySelector('#card-container'); // Gjej kontejnerin e kartave
    let kartat = Array.from(document.querySelectorAll('.card')); // Merr të gjitha kartat në DOM
  
    // Pastroni kontejnerin përpara aplikimit të filtrit
    container.innerHTML = "";
  
    let kaRezultat = false; // Variabël për të ndjekur rezultatet
  
    kartat.forEach(card => {
      let lokacioniElement = card.querySelector('.lokacioni'); // Gjej elementin e lokacionit
      let lokacioni = lokacioniElement ? lokacioniElement.innerText.trim() : "";
  
      if (qyteti === "Të gjitha" || qyteti === lokacioni) {
        card.style.display = "block"; // Sigurohu që karta është e dukshme
        container.appendChild(card); // Shto kartën në kontejner
        kaRezultat = true; // Përcakto që ka rezultate
      }
    });
  
    

  // Kontrollo nëse nuk ka rezultate dhe shfaq një mesazh informues
  let noResultsMessage = document.getElementById('no-results');
  if (!kaRezultat) {
    if (!noResultsMessage) {
      noResultsMessage = document.createElement('p');
      noResultsMessage.id = 'no-results';
      noResultsMessage.style.color = 'grey';
      noResultsMessage.innerText = "Nuk u gjetën rezultate për këtë qytet.";
      container.appendChild(noResultsMessage);
    }
  } else {
    if (noResultsMessage) noResultsMessage.remove(); // Fshij mesazhin nëse ka rezultate
  }
}

function filterByCategory(element) {
  let zgjedhur = element.innerText.trim(); // Merr qytetin nga dropdown
  console.log("kategoria e zgjedhur:", zgjedhur);

  let container = document.querySelector('#card-container'); // Container-i që mban kartat
  let kartat = Array.from(container.getElementsByClassName('card')); // Merr të gjitha kartat me klasën 'card'

  let kaRezultat = false; // Variabël për të kontrolluar nëse ka rezultate

  kartat.forEach(card => {
    let kategoriaElement = card.querySelector('.kategoria'); // Merr elementin e lokacionit
    let kategoria = kategoriaElement ? kategoriaElement.innerText.trim() : ""; // Kontrollon përmbajtjen

    if (zgjedhur === "Të gjitha" || zgjedhur === kategoria) {
      card.style.display = "block"; // Shfaq kartën
      container.appendChild(card); // Vendos kartën në fund për renditje të re
      kaRezultat = true; // Gjen rezultat
    } else {
      card.style.display = "none"; // Fsheh kartën që nuk përputhet
    }
  });

  // Kontrollo nëse nuk ka rezultate dhe shfaq një mesazh informues
  let noResultsMessage = document.getElementById('no-results');
  if (!kaRezultat) {
    if (!noResultsMessage) {
      noResultsMessage = document.createElement('p');
      noResultsMessage.id = 'no-results';
      noResultsMessage.style.color = 'grey';
      noResultsMessage.innerText = "Nuk u gjetën rezultate për këtë kategori.";
      container.appendChild(noResultsMessage);
    }
  } else {
    if (noResultsMessage) noResultsMessage.remove(); // Fshij mesazhin nëse ka rezultate
  }

}
