document.addEventListener('DOMContentLoaded', () => {
    if (!navigator.geolocation) {
        alert("Geolocation API is not supported in your browser.");
    }

    const getCurrentLocation = (position) => {
        const {latitude, longitude, accuracy} = position.coords
        const coords = new google.maps.LatLng(latitude, longitude);
        const mapOptions = {
            zoom: 15,
            center: coords,
            mapTypeControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        const locationElm = document.getElementById("locationInfo");
        locationElm.innerHTML = "latitude: " + latitude + ", longitude: " + ", accuracy: " + accuracy;

        map = new google.maps.Map(document.getElementById("mapContainer"), mapOptions);
        const marker = new google.maps.Marker({
            position: coords,
            map: map,
            title: "Your location"
        });
    };

    const geoLocationError = (msg) => {
        alert('Please enable your GPS position feature. Because: ' + msg);
    }

    const options = {maximumAge:10000, timeout:5000, enableHighAccuracy: true};
    navigator.geolocation.getCurrentPosition(getCurrentLocation, geoLocationError, options);
});
