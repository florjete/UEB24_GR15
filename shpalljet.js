function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
  }
  
  function filterFunction() {
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