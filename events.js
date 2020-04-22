AFRAME.registerComponent('markerhandler', {

    init: function () {
        //const barcodeMarker = document.querySelector("#barcode-marker");
        const aEntity = document.querySelector("#button-linkedin");
        const bEntity = document.querySelector("#video");

        // every click, we make our model grow in size :)
        aEntity.addEventListener('click', function (ev, target) {
            window.open("https://www.linkedin.com/in/filippo-perini-525553aa/");
        }
        );
        bEntity.addEventListener('click', function () {
            var v = document.querySelector('#video');
            v.play();
        });
    }
});