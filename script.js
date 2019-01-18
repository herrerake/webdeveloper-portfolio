  // delays the a tag from firing so that the loading div can function
  $(function () {
      $("a").click(function (evt) {
          evt.preventDefault();
          var link = $(this).attr("href");
          setTimeout(function () {
              window.location.href = link;
          }, 1000);
          fadeInLoadingDiv()
      });
  });

  //Loading Div
  function fadeInLoadingDiv() {
      $('#loadingDiv').fadeIn("slow");
      $("#contentDiv").css({ // this is just for style
          "opacity": "0.08",
          "z-index": "999",
          "display": "block"
      });

      setTimeout(function () {
          /* Loading Div fadeout after page return */
          $('#loadingDiv').fadeOut("slow");
          $("#contentDiv").css({ // this is just for style
              "opacity": "1",
              "z-index": "0",
              "display": "none"
          });
      }, 1000);
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }