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