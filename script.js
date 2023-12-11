$(".box") .click (function () {
    $ (".box") .removeClass ("active");
    $ (this) .addClass ("active");
});

function openContactWindow(carName) {
    var contactWindow = document.getElementById("contact-window");
    var carNameField = document.getElementById("name");
    carNameField.value = carName;
    contactWindow.classList.remove("hidden");
    carNameField.focus();
}

function closeContactWindow() {
    var contactWindow = document.getElementById("contact-window");
    contactWindow.classList.add("hidden");
}

window.addEventListener("load", function() {
    var cars = document.getElementsByClassName("car");
    
    for (var i = 0; i < cars.length; i++) {
        (function(i) {
            cars[i].addEventListener("click", function() {
                var carImages = this.getElementsByTagName("img");
                
                if (carImages.length > 0) {
                    var currentImageIndex = 0;
                    
                    var slideshowInterval = setInterval(function() {
                        currentImageIndex++;
                        
                        if (currentImageIndex >= carImages.length) {
                            currentImageIndex = 0;
                        }
                        
                        for (var j = 0; j < carImages.length; j++) {
                            carImages[j].style.display = "none";
                        }
                        
                        carImages[currentImageIndex].style.display = "block";
                    }, 2000);
                    
                    // Здесь можно добавить логику для остановки слайд-шоу при клике
                }
            });
        })(i);
    }
$(".box") .click (function () {
    $ (".box") .removeClass ("active");
    $ (this) .addClass ("active");
});