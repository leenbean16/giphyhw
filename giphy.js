      var topics = ["Greece", "Italy", "Sweden", "Ireland", "Thailand"];

      function renderButtons() {

          $("#vacations-view").empty();

          for (var i = 0; i < topics.length; i++) {
              var countryButton = $("<button>");
              countryButton.addClass("gif");
              countryButton.attr("data-name", topics[i]);
              countryButton.text(topics[i]);
              $("#vacations-view").append(countryButton);
              console.log(countryButton);
          }
      }
      $("#add-vacation").on("click", function addButtons(event) {
          event.preventDefault();

          var topic = $("#vacations-input").val().trim();
          topics.push(topic);


          renderButtons();
      });
      renderButtons();

      $('button').on("click", function clickButtons() {
          var vacation = $(this).attr("data-name");
          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + vacation + "&api_key=dc6zaTOxFJmzC&limit=4";

          $.ajax({
              url: queryURL,
              method: "GET"
          }).done(function clickButtons(response) {

              var results = response.data;
              for (var i = 0; i < results.length; i++) {
                  var vacationsDiv = $('<div>');
                  var vacation = $('<img>');
                  vacation.attr('data-state', 'animated');
                  vacation.attr('data-still', results[i].images.fixed_height_still.url);
                  vacation.attr('src', results[i].images.fixed_height.url);
                  vacation.attr('data-animate', results[i].images.fixed_height.url);
                  vacationsDiv.prepend(vacation);
                  $('#vacations-gifs').prepend(vacationsDiv);
              }



              $("img").on("click", function makeStill(results) {
                  var state = $(this).attr('data-state');
                  if (state === "still") {
                      var animated = $(this).attr('data-animate');
                      $(this).attr('src', animated);
                      $(this).attr('data-state', 'animated');
                  } else {
                      var still = $(this).attr('data-still');
                      $(this).attr('src', still);
                      $(this).attr('data-state', 'still');
                  }
              });
          });
      });
