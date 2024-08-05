(function($) {
    "use strict"
    jQuery(document).ready(function() {
        // Navigation for Mobile Device
        $('.custom-navbar').on('click', function(){
            $('.main-menu ul').slideToggle(500);
        });
        $(window).on('resize', function(){
            if ( $(window).width() > 767 ) {
                $('.main-menu ul').removeAttr('style');
            }
        });

        // Employee Slider
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });

        // Nice Select
        $('select').niceSelect();

        // Date Picker
        jQuery('#datepicker').datetimepicker({
            timepicker:false,
            format:'d.m.Y',
        });

        // Time Picker
        jQuery('#datepicker2').datetimepicker({
            datepicker:false,
            format:'H:i'
        });

        // Google Map
        if ($('#mapBox').length) {
            var $lat = $('#mapBox').data('lat');
            var $lon = $('#mapBox').data('lon');
            var $zoom = $('#mapBox').data('zoom');
            var $info = $('#mapBox').data('info');
            var $markerLat = $('#mapBox').data('mlat');
            var $markerLon = $('#mapBox').data('mlon');
            
            function initMap() {
                var mapOptions = {
                    center: new google.maps.LatLng($lat, $lon),
                    zoom: $zoom,
                    scrollwheel: false,
                    scaleControl: true,
                    streetViewControl: false,
                    panControl: true,
                    disableDoubleClickZoom: true,
                    mapTypeControl: false
                };

                var map = new google.maps.Map(document.getElementById('mapBox'), mapOptions);

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng($markerLat, $markerLon),
                    map: map,
                    title: $info
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: $info
                });

                marker.addListener('click', function() {
                    infoWindow.open(map, marker);
                });
            }

            google.maps.event.addDomListener(window, 'load', initMap);
        }
        // Function to Open WhatsApp
        window.openWhatsApp = function() {
            var whatsappNumber = '917892110473';
            var url = `https://wa.me/${whatsappNumber}`;
            window.location.href = url;
        };
    });

    jQuery(window).on('load', function() {
        // WOW JS
        new WOW().init();
        // Preloader
        $('.preloader').fadeOut(500);
    });
})(jQuery);
