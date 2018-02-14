// Initial array of movies
var movies = ["Pulp Fiction", "Forrest Gump", "Titanic"];


// Function for displaying images

function displayMovieGif() {
	var movie = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=a8761e066005497a87b6e979d453e4b9&limit=12";
	// Creating an AJAX call for the specific movie button being clicked
	$.ajax({
	url: queryURL,
	method: "GET"
	}).done(function(response) {
		var results = response.data;
		$(".gifs-appear-here").html("");
		// Looping through each result item
		for (var i = 0; i < results.length; i++) {
			// Creating and storing a div tag
			var movieDiv = $("<div class='item'>");
			var movieImage = $("<img>");

			// get vanilla object out jquery object, we reference the jquery array index[0]
			// we also need let, as we are in a loop
			let oMovieImage = movieImage[0];

			//console.log(results[i]);
			let animatedSrc = results[i].images.fixed_height.url;
			let stillSrc = results[i].images.fixed_height_still.url;

			// Creating a paragraph tag with the result item's rating
			var p = $("<p>").text("Rating: " + results[i].rating);
			// Creating and storing an image tag
			// Setting the src attribute of the image to a property pulled off the result item
			movieImage.attr("data-still", stillSrc);
			movieImage.attr("data-animate", animatedSrc);
			movieImage.attr("src", stillSrc);

			// when we click, we check the current src. If the src is the data-still src (they match up ), we want to use the
			// animated src. However, if it is already animated, we want to use the data-still src 
			oMovieImage.onclick = () => {
				if(oMovieImage.src === oMovieImage.getAttribute("data-still")){
					oMovieImage.src = oMovieImage.getAttribute("data-animate");
				}
				else{
					oMovieImage.src = oMovieImage.getAttribute("data-still");
				}
			}


			// Appending the paragraph and image tag to the movieDiv
			movieDiv.html(p);
			movieDiv.append(movieImage);
			// Prependng the movieDiv to the HTML page in the "#gifs-appear-here" div
			$(".gifs-appear-here").prepend(movieDiv);
		}
	})
}
function changeMode(movieImg, url) {
	movieImg.src = url;
} 

	// Function for displaying movie buttons
function renderButtons() {

	// Deleting the movies prior to adding new movies
	$("#buttons-view").empty();

	// Looping through the array of movies
	for (var i = 0; i < movies.length; i++) {
		// Then dynamicaly generating buttons for each movie in the array
		var newButton = $("<button>");
		// Adding a class of movie to our button
		newButton.addClass("movie");
		// Adding a data-attribute
		newButton.attr("data-name", movies[i]);
		// Providing the initial button text
		newButton.text(movies[i]);
		// Adding the button to the buttons-view div
		$("#buttons-view").append(newButton);
	}
}

// This function handles events where a movie button is clicked

$("#add-movie").on("click", function(event) {
	$("#gifs-appear-here").empty();
	event.preventDefault();
	$(".gifs-appear-here").html("");
	// This line grabs the input from the textbox

	var movie = $("#movie-input").val().trim();
	// Adding movie from the textbox to our array
	movies.push(movie);
	// Calling renderButtons which handles the processing of our movie array
	renderButtons();
});

// Adding a click event listener to all elements with a class of "movie"
$(document).on("click", ".movie", displayMovieGif);

// Calling the renderButtons function to display the intial buttons
renderButtons();
