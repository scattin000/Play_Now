// MC Section Start
function showFilter() {
    document.getElementById('filterContainer').style.left = "0%";    
} 

function hideFilter(theSection) {
    document.getElementById('filterContainer').style.left = "110%";
}

function ignoreEvent(event) {
    event.stopPropagation()
}

//Age [Slider] ageSlider
var age_Slider = ["No age limit", "8+", "10+", "12+", "13+", "14+"];
function ageSliderValue(newValue) {
        console.log(newValue);
        document.getElementById("ageRange").innerHTML = age_Slider[newValue];
}

//Playing Time [Slider] timeSlider
var time_Slider = ["Any", "30", "45", "60", "75", "90", "105", "120", "135", "150", "165", "180"];
function timeSliderValue(newValue) {
    document.getElementById("timeRange").innerHTML = time_Slider[newValue];
    console.log(newValue);
}

// //Number of Players [Slider] playerSlider
var player_Slider = ["Any", "1", "2", "3", "4", "5", "6"]
function playerSliderValue(newValue) {
        console.log(newValue);
        document.getElementById("playerRange").innerHTML = player_Slider[newValue];
}

// //Type [Slider] typeSlider
var type_Slider = ["Any", "Strategy", "Co-op", "Chance"]
function typeSliderValue(newValue) {
        console.log(newValue);
        document.getElementById("typeRange").innerHTML = type_Slider[newValue];
    }

function submitFilterChanges() {
    console.log();
}// MC Section End

function loadGameListJSON() {
    //setting up the new request
    var xhr = new XMLHttpRequest();

    /* set up the elements to be changed in the HTML*/
    // this is the variable for the popular games 
    document.getElementById('result').innerHTML = 'Most popular';
    //CHANGE THIS TO GAMEimage
    document.getElementById('gameImage').innerHTML = '';

    // GET --> PATH TO FILE
    xhr.open('GET', 'games.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // read the data in the JSON 
            var myData = JSON.parse(xhr.responseText);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }

        console.log(myData);
        baseurl = window.movies_image_url;
        console.log(baseurl);
        posterSizes = window.movies_posters_sizes;

        // initially display the top 3 games 
        for (var i = 0; i < 3; i++) {
            var posters = myData.results[i].Image_path;
            var image_URL = baseurl + posterSizes + posters;
            // make sure it's working
            console.log(image_Url);
            // get the HTML element
            var section = document.getElementById('gameImages');
            var imgContainer = document.createElement('div');
            imgContainer.className = "game_Image"; // creating the class
            // creating image tag 
            var img = document.createElement('img');
            img.setAttribute('src', image_URL);
            //add image to the imgContainer
            imgContainer.appendChild(img);
            // come back to line 69 of the example

            // see sample code for the overlay here... 
            document.getElementById("gameImages").appendChild(imgContainer);
        }
    }; //end onload
    xhr.send();
    // xhr.open()l
}