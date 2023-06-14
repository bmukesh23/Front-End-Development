'use-strict';

const latitudeBar = document.querySelector('.lat_bar');                    //51.50354
const longitudeBar = document.querySelector('.long_bar');                  //-0.12768

const geoLocationData = document.querySelector('.geolocation_data_container');
const locationContainer = document.querySelector('.location_container');
const coordinateBtn = document.getElementById('button--coordinate');

const errorContainer = document.querySelector('.error_container');
const errorMessage = document.querySelector('.error_message');



const customFetch = function (url, errorMessage) {
    return fetch(url).then(function (response) {
        console.log(response);
        if (!response.ok) throw new Error(`${errorMessage} ${response.status}`);
        return response.json();
    });
};

const displayErrorInUI = function(errorMessage) {
    errorMessage.textContent = errorMessage;
    errorContainer.classList.remove('container_hidden');
}

const displayLocation = function(){

    const geoKey = '863805558943911828256x46556';

    const geoUrl = `https://geocode.xyz/${latitudeBar.value},${longitudeBar.value}?geoit=JSON&auth=${geoKey}`;

    customFetch(
        geoUrl,
        'failed to make a request for fetching location'
    )
        .then(function(data){
            const { city, country } = data;

            locationContainer.textContent = `You live in ${city}, ${country}`;

            console.log(data);

            geoLocationData.classList.remove('container_hidden');
        })
        .catch(function (error) {
            console.error(error);

            const customMessage = `Error occurred when displaying the location. The error is: ${error.message}`;
            displayErrorInUI(customMessage);

        })
};

coordinateBtn.addEventListener('click', displayLocation);