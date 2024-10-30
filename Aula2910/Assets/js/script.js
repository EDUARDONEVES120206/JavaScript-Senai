document.addEventListener('DOMContentLoaded', function () {
    var myModal = document.getElementById('exampleModal');
    var myInput = document.getElementById('exampleModalLabel');

    myModal.addEventListener('shown.bs.modal', function () {
        myInput.focus();
    });
});
var myCarousel = document.querySelector('carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel)
