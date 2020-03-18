$(function() {

    var map = L.map('new-modal-map', {
        minZoom: 3,
        maxZoom: 15
    }).setView([39.62,-4.25], 7);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicGVwZWxsb3UiLCJhIjoiY2s3cXV4c3llMDdidzNmcGxybDNwczJmcCJ9.ygIiC_xyqMwtvghc_8qIhA'
    }).addTo(map);

});


