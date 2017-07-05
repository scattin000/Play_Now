function loadGameListJSON(calback) {
    //setting up the new request
    var xhr = new XMLHttpRequest();

    /* set up the elements to be changed in the HTML*/
    // this is the variable for the popular games 
    document.getElementById('result').innerHTML = 'Most popular';
    //CHANGE THIS TO GAMEimage
    document.getElementById('moviePosters').innerHTML = '';

    // GET --> PATH TO FILE
    xhr.open('GET', 'games.json', true);
    xhr.onload = function() {
            if (xhr.status === 200) {
                // read the data in the JSON 
                var myData = JSON.parse(xhr.responseText);
            } else {
                alert('Request failed.  Returned status of ' + xhr.status);
            }
        } //end onload

    console.log(myData);
    // baseurl = window.movies_image_url;
    //console.log(baseurl);
    posterSizes = window.movies_posters_sizes;


}