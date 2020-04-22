AFRAME.registerComponent('markerhandler', {

    init: function () {

        const linkedin = document.querySelector("#button-linkedin");
        const facebook = document.querySelector("#button-facebook");
        const instagram = document.querySelector("#button-instagram");
        const twitter = document.querySelector("#button-twitter");

        linkedin.addEventListener('click', function (ev, target) {
            window.open("https://www.linkedin.com/in/filippo-perini-525553aa/");
        }
        );

        facebook.addEventListener('click', function (ev, target) {
            window.open("https://www.facebook.com/Lamborghini/");
        }
        );

        instagram.addEventListener('click', function (ev, target) {
            window.open("https://www.instagram.com/lamborghini/");
        }
        );

        twitter.addEventListener('click', function (ev, target) {
            window.open("https://twitter.com/Lamborghini/");
        }
        );
    }
});