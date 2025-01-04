$(document).ready(function () {
    // Inicializimi i statistikave me animacion për t'u shfaqur gradualisht
    $(".stat-number").each(function () {
      $(this).prop("Counter", 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  
    // Shfaqja e më shumë statistikave me një animacion slide
    $("#show-more-stats").click(function () {
      $(this).hide(); // Fshih butonin
      $("<p>Ne kemi ndihmuar mbi 5000 individë të gjejnë mundësi pune!</p>").hide().appendTo("#statistics").fadeIn(1000);
      $("<p>Platforma jonë ka më shumë se 30 partnerë globalë!</p>").hide().appendTo("#statistics").fadeIn(1000);
    });
  });
  