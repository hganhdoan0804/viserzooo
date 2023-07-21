//Mobile Bar
var navBarMobile = document.querySelector(".navbar-mobile_btn");
var navBarMobileList = document.querySelector(".nav-mobile__list");

navBarMobile.onclick = function () {
    navBarMobileList.classList.toggle("nav-mobile-open");
}

//Animal section
const animalCards = document.querySelectorAll(".animal-card-js");
const animalCardsLength = animalCards.length;
const animalButtons = document.querySelectorAll(".animals-btn");
const animalButtonsLength = animalButtons.length;
// Add active when click button 
Array.from(animalButtons).forEach(function (element) {
    element.addEventListener("click", function () {
        for (var i = 0; i < animalButtonsLength; i++) {
            animalButtons[i].classList.remove("active");
        }
        this.classList.add("active");

        // Get data filter
        let animalFilter = element.dataset.filter;
        Array.from(animalCards).forEach(function (item) {
            let animalItem = item.dataset.item;

            if (animalItem === animalFilter || animalFilter === "all") {
                item.style.display = "block";
                item.style.animation = "mobileBarGrowth 0.5s linear"
            }
            else {
                item.style.display = "none";
            }
        })
    })
})
// Animal section overlay
const arrayImage = ["animal-card_img-1", "animal-card_img-2",
    "animal-card_img-3", "animal-card_img-4",
    "animal-card_img-5", "animal-card_img-6", "animal-card_img-7",
    "animal-card_img-8", "animal-card_img-9",
    "animal-card_img-10", "animal-card_img-11",
    "animal-card_img-12", "animal-card_img-13",
    "animal-card_img-14", "animal-card_img-15",
    "animal-card_img-16"];
const arrayImageLength = arrayImage.length;
const animalModal = document.querySelector(".animal-modal");
const animalModalImage = document.querySelector(".animal-modal__img");
const animalCard = document.querySelectorAll(".animal-card");
let arrayImageIndex = 0;

// Get animal image name
Array.from(animalCard).forEach(function (elementCards) {
    elementCards.addEventListener("click", function () {
        let firstChildImage = elementCards.firstElementChild.src;
        console.log(firstChildImage);
        let imgIndexNumber = firstChildImage.indexOf("img");
        let pngIndexNumber = firstChildImage.indexOf(".png");
        let imageName = firstChildImage.slice(imgIndexNumber + 4, pngIndexNumber);
        // Show animal image
        animalModal.style.display = "flex";
        animalModalImage.style.backgroundImage = `url(https://anhakadoan84.github.io/viserzooo/assets/img/${imageName}.png)`;
        for (let i = 0; i < arrayImageLength; i++) {
            if (imageName === arrayImage[i]) {
                arrayImageIndex = i;
            }
        }
    })
})
//Move animal image
const rightButton = document.querySelector(".arrow-right");
const leftButton = document.querySelector(".arrow-left");
rightButton.addEventListener("click", function () {
    arrayImageIndex++;
    if (arrayImageIndex > arrayImageLength - 1) {
        arrayImageIndex = 0;
    }
    animalModalImage.style.backgroundImage = `url(https://anhakadoan84.github.io/viserzooo/assets/img/${arrayImage[arrayImageIndex]}.png)`;
    console.log(arrayImageIndex);

})

leftButton.addEventListener("click", function () {
    arrayImageIndex--;
    if (arrayImageIndex < 0) {
        arrayImageIndex = arrayImageLength - 1;
    }
    animalModalImage.style.backgroundImage = `url(https://anhakadoan84.github.io/viserzooo/assets/img/${arrayImage[arrayImageIndex]}.png)`;
    console.log(arrayImageIndex);

})

//Click to close animal modal
const animalCloseButton = document.querySelector(".animal-modal__close");
animalCloseButton.addEventListener("click", function () {
    animalModal.style.display = "none";
})

//Interactions
setTimeout(function () {
    odometer1.innerHTML = 156;
}, 100);

setTimeout(function () {
    odometer2.innerHTML = 2;
}, 100);

setTimeout(function () {
    odometer3.innerHTML = 1.5;
}, 100);

setTimeout(function () {
    odometer4.innerHTML = 35;
}, 100);

//Feedback
$(document).ready(function () {
    $(".feedback__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type='button' class='slick-prev pull-left text-white'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right text-white'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        cssEase: 'ease-in-out',
        speed: 500,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false,
                    speed: 300,
                    infinite: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false,
                    speed: 300,
                    infinite: false,
                }
            },
        ]
    });
});

//Back to top button
var backToTopBtn = document.querySelector(".back-to-top");
window.onscroll = function () {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        backToTopBtn.style.display = "block";
    }
    else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Preloading page
var loader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

//Search-btn
var searchBtns = document.querySelectorAll(".search");
var modal = document.querySelector(".search-modal");
var modalForm = document.querySelector(".search-modal__form");

function showSearch() {
    modal.classList.add("active");
}

function closeSearch() {
    modal.classList.remove("active");
}

//Click search button to show search 
for (var searchBtn of searchBtns) {
    searchBtn.addEventListener("click", showSearch);
}

//Click to hide search
modal.addEventListener("click", closeSearch);

//Stop Propagation
modalForm.addEventListener("click", function (event) {
    event.stopPropagation();
})

