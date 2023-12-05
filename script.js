// This .on("click") function will trigger the fetch() Call
$("#search-button").on("click", function (event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();
    getMovieResults();
    getNewsResults();
    
    });

function getMovieResults() {  
    // Here we grab the text from the input box
    var movie = $("#search-input").val();
  
    // construct our URL
    var queryURL = "https://api.themoviedb.org/3/search/multi?query=" + movie + "%20&include_adult=false&language=en-US&page=1&api_key=e7942451abadfbecdc2ebc370f0781ac";
  

    // fetch the data
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });

      
  
    // -----------------------------------------------------------------------
    }

function getNewsResults() {

    var news = $("#search-input").val();

    var queryURL = "https://api.currentsapi.services/v1/search?keywords=" + news + "&language=en&apiKey=KSPwA6FKSdpnL53Uj6Mofz_OsBlL2E62hiZPojCTXf0LvC2z";

    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    }
  