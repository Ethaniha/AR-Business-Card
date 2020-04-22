AFRAME.registerComponent('markerhandler', {

    init: function () {
        //const barcodeMarker = document.querySelector("#barcode-marker");
        const aEntity = document.querySelector("#button-linkedin");

        // every click, we make our model grow in size :)
        aEntity.addEventListener('click', function (ev, target) {
            window.open("https://www.linkedin.com/in/filippo-perini-525553aa/");
        }
        );
    }
});