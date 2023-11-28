// menu parters start
    const dropdownButton = document.getElementById('span-button-mob');
    const dropdownMenu1 = document.querySelector('.dropdown-menu-partners');
    const parentElement = dropdownButton.parentElement;
    let isDropdownOpen = false;

    function adjustParentHeight() {
        if (isDropdownOpen) {
            parentElement.style.height = '300px'; 
    } else {
            parentElement.style.height = '';
        }
    }

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
        adjustParentHeight();
    }

    dropdownButton.addEventListener('click', toggleDropdown);

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            isDropdownOpen = false;
            adjustParentHeight();
        });
    });

    document.addEventListener('click', (event) => {
        if (isDropdownOpen && !parentElement.contains(event.target)) {
            isDropdownOpen = false;
            adjustParentHeight();
        }
    });
//   menu parters end

// header block start
    document.addEventListener('DOMContentLoaded', function () {
    let shareButton = document.querySelector('.share-trigger'); let socialOptions = document.querySelector('.social-options');
    shareButton.addEventListener('click', function(event) { event.stopPropagation(); socialOptions.style.display = (socialOptions.style.display === 'flex') ? 'none' : 'flex'; });
    document.addEventListener('click', function() { socialOptions.style.display = 'none'; }); });
// header block end

//burger menu start
    let isMenuOpen = false;

    function toggleMenu() {
        const menuBox = document.getElementById("menuBox");
        const burgerImg = document.querySelector(".burger-img");
        const closeImg = document.querySelector(".close-img");

        menuBox.classList.toggle("active");
        isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
            burgerImg.style.display = "none";
            closeImg.style.display = "block";
    } else {
            burgerImg.style.display = "block";
            closeImg.style.display = "none";
    }
    }

    function navigateTo(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
    }
    }

    function closeMenu() {
        const menuToggle = document.getElementById("menu__toggle");
        menuToggle.checked = false;
        document.body.style.overflow = "auto";
        isMenuOpen = false; // Закриваємо меню

    const burgerImg = document.querySelector(".burger-img");
    const closeImg = document.querySelector(".close-img");
    burgerImg.style.display = "block";
    closeImg.style.display = "none";
    }
//burger menu end

// button sharing start
const shareButton = document.querySelector(".share-trigger");
const socialOptions = document.querySelector(".social-options");
const menuButton = document.querySelector(".share-button");

shareButton.addEventListener("click", (e) => {
    e.stopPropagation();
    socialOptions.classList.toggle("active");
    menuButton.classList.toggle("active");
});

socialOptions.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.addEventListener("click", () => {
    socialOptions.classList.remove("active");
    menuButton.classList.remove("active");
});
// button sharing end

// Video block start
function plusSlides(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let slideIndex1 = 1;
showSlides(slideIndex1);

function plusSlides(n) {
    showSlides((slideIndex1 += n));
}

function currentSlide(n) {
    showSlides((slideIndex1 = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let videoElements = document.querySelectorAll('.iframe_video');
    if (n > slides.length) {
        slideIndex1 = 1;
    }
    if (n < 1) {
        slideIndex1 = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (n < 1) {
        slideIndex1 = videoElements.length;
    }
    for (let i = 0; i < videoElements.length; i++) {
    videoElements[i].pause(); 
    }  
    slides[slideIndex1 - 1].style.display = "block";
    dots[slideIndex1 - 1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex1);
// Video block end
$(document).ready(function () {
    // footer start
    const scrollUp = $("#footer .scroll-up");
    const offset = 100;
    const getTop = () =>
    window.pageYOffset || document.documentElement.scrollTop;
    if (scrollUp) {
        window.addEventListener("scroll", () => {
            if (getTop() > offset) {
                scrollUp.addClass("scroll-up-active");
            } else {
                scrollUp.removeClass("scroll-up-active");
            }
        });
        scrollUp.on("click", (event) => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
    // Delay the removal of the element to ensure it's available in the DOM
    let Inter;
    $(".arrow").on("mouseenter", function () {
        $(".hov-1").slideUp(300).fadeIn(100);
        $(".hov-2").slideUp(200).fadeIn(200);
        $(".hov-3").slideUp(100).fadeIn(300);
        Inter = setInterval(function () {
            $(".hov-1").slideUp(300).fadeIn(100);
            $(".hov-2").slideUp(200).fadeIn(200);
            $(".hov-3").slideUp(100).fadeIn(300);
        }, 600);
    });
    $(".arrow").on("click", function () {
        clearInterval(Inter);
    });
    $(".arrow").on("mouseleave", function () {
        clearInterval(Inter);
    });
    // footer section end
});

//start validatio
const closeButton = document.querySelector("#registerModalToggle .close");
const form = document.getElementById("register-participants");

function highlightField(inputId) {
  const inputElement = document.getElementById(inputId);
  inputElement.classList.add("error");
}

function clearFieldHighlight(inputId) {
  const inputElement = document.getElementById(inputId);
  inputElement.classList.remove("error");
}

const lang = document.documentElement.lang;
let isFormValid = false;
let elemForCheckCaptcha;
document.querySelectorAll(".check-form").forEach((elem) =>
    elem.addEventListener("click", (event) => {
        event.preventDefault();
        const isform = elem.closest(".registration-form");
        elemForCheckCaptcha = isform;
        function checkName() {
        const inputName = isform.querySelector(".input-name");
        const regexName =
        /^(?:(.)(?!\1{2,}))[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s'-]*$/;
        if (inputName.value.trim() == "") {
            switch (lang) {
                case "uk":
                    inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").textContent =
                        "Це поле є обов’язковим для заповнення";
                    break;
                case "en":
                    inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").textContent =
                        "This field is required";
                    break;
                default:
                    break;
            }
            
            inputName
            .closest(".input-wrapper")
            .querySelector("input")
            .classList.add("error-box");
            } else if (!regexName.test(inputName.value)) {
                switch (lang) {
                    case "uk":
                        inputName
                            .closest(".input-wrapper")
                            .querySelector(".error-text").innerHTML =
                            "Поле має містити не менше двох символів";
                        break;
                    case "en":
                        inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").innerHTML =
                        "The field must contain at least two characters";
                        break;
                    default:
                        break;
                }
            inputName
            .closest(".input-wrapper")
            .querySelector("input")
            .classList.add("error-box");
            } else {
            inputName
            .closest(".input-wrapper")
            .querySelector(".error-text").innerHTML = "";
            inputName.closest(".input-wrapper").classList.remove("error");
            inputName
            .closest(".input-wrapper")
            .querySelector("input")
            .classList.remove("error-box");
            }
            return regexName.test(inputName.value);
        }

        function CheckSurname() {
        const inputName = isform.querySelector(".input-surname");
        const regexName =
        /^(?:(.)(?!\1{2,}))[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s'-]*$/;
        if (inputName.value.trim() == "") {
            switch (lang) {
                case "uk":
                    inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").textContent =
                        "Це поле є обов’язковим для заповнення";
                    break;
                case "en":
                    inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").textContent =
                        "This field is required";
                    break;
                default:
                    break;
            }
            inputName
                .closest(".input-wrapper")
                .querySelector("input")
                .classList.add("error-box");
        } else if (!regexName.test(inputName.value)) {
            switch (lang) {
                case "uk":
                    inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").innerHTML =
                        "Поле має містити не менше двох символів";
                    break;
                case "en":
                    inputName
                    .closest(".input-wrapper")
                    .querySelector(".error-text").innerHTML =
                    "The field must contain at least two characters";
                    break;
                default:
                    break;
            }
            inputName
                .closest(".input-wrapper")
                .querySelector("input")
                .classList.add("error-box");
        } else {
            inputName
                .closest(".input-wrapper")
                .querySelector(".error-text").innerHTML = "";
            inputName.closest(".input-wrapper").classList.remove("error");
            inputName
                .closest(".input-wrapper")
                .querySelector("input")
                .classList.remove("error-box");
        }
        return regexName.test(inputName.value);
        }

        function checkEmail() {
        const inputPhone = isform.querySelector(".input-email");
        const regexPhone = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (inputPhone.value.trim() == "") {
            switch (lang) {
            case "uk":
                inputPhone
                .closest(".input-wrapper")
                .querySelector(".error-text").textContent =
                "Це поле є обов’язковим для заповнення";
                break;
            case "en":
                inputPhone
                .closest(".input-wrapper")
                .querySelector(".error-text").textContent =
                "This field is required";
                break;
            default:
                break;
            }
            inputPhone
            .closest(".input-wrapper")
            .querySelector("input")
            .classList.add("error-box");
        } else if (!regexPhone.test(inputPhone.value)) {
            switch (lang) {
            case "uk":
                inputPhone
                .closest(".input-wrapper")
                .querySelector(".error-text").textContent =
                "Поле заповнено не коректно";
                break;
            case "en":
                inputPhone
                .closest(".input-wrapper")
                .querySelector(".error-text").textContent =
                "The field is filled out incorrectly";
                break;
            default:
                break;
            }
            inputPhone
            .closest(".input-wrapper")
            .querySelector("input")
            .classList.add("error-box");
        } else {
            inputPhone
            .closest(".input-wrapper")
            .querySelector(".error-text").textContent = "";
            inputPhone
            .closest(".input-wrapper")
            .querySelector("input")
            .classList.remove("error-box");
        }
        return regexPhone.test(inputPhone.value);
        }

        function checkPhone() {
            const inputPhone = form.querySelector(".phone-number");
            const regexPhone =  /[0-9]/;
            if (inputPhone.value.trim() == "") {
                switch (lang) {
                    case "uk":
                        inputPhone
                            .closest(".input-wrapper")
                            .querySelector(".error-text").textContent =
                            "Це поле є обов’язковим для заповнення";
                        break;
                    case "en":
                        inputPhone
                            .closest(".input-wrapper")
                            .querySelector(".error-text").textContent =
                            "This field is required";
                        break;
                    default:
                        break;
                }
                inputPhone
                    .closest(".input-wrapper")
                    .querySelector("input")
                    .classList.add("error-box");
            } else if (!regexPhone.test(inputPhone.value)) {
                switch (lang) {
                    case "uk":
                        inputPhone
                            .closest(".input-wrapper")
                            .querySelector(".error-text").textContent =
                            "Поле заповнено не коректно";
                        break;
                    case "en":
                        inputPhone
                            .closest(".input-wrapper")
                            .querySelector(".error-text").textContent =
                            "The field is filled out incorrectly";
                        break;
                    default:
                        break;
                }
                inputPhone.closest(".input-wrapper").classList.add("error");
                inputPhone
                    .closest(".input-wrapper")
                    .querySelector("input")
                    .classList.add("error-box");
            } else {
                inputPhone
                    .closest(".input-wrapper")
                    .querySelector(".error-text").textContent = "";
                inputPhone
                    .closest(".input-wrapper")
                    .querySelector("input")
                    .classList.remove("error-box");
                inputPhone
                    .closest(".input-wrapper")
                    .classList.remove("error");
            }
            return regexPhone.test(inputPhone.value);
        }
        function CheckExperience() {
            const inputName = isform.querySelector(".input-experience");
            const regexName =
            /^(?:(.)(?!\1{2,}))[a-zA-Zа-яА-ЯїЇєЄіІґҐ\d\s'-]*$/
            if (inputName.value.trim() == "") {
                switch (lang) {
                    case "uk":
                        inputName
                            .closest(".input-wrapper")
                            .querySelector(".error-text").textContent =
                            "Це поле є обов’язковим для заповнення";
                        break;
                    case "en":
                        inputName
                            .closest(".input-wrapper")
                            .querySelector(".error-text").textContent =
                            "This field is required";
                        break;
                    default:
                        break;
                }
                inputName
                    .closest(".input-wrapper")
                    .querySelector("input")
                    .classList.add("error-box");
                } else {
                inputName
                    .closest(".input-wrapper")
                    .querySelector(".error-text").innerHTML = "";
                inputName.closest(".input-wrapper").classList.remove("error");
                inputName
                    .closest(".input-wrapper")
                    .querySelector("input")
                    .classList.remove("error-box");
            }
            return regexName.test(inputName.value);
            }
        checkName();
        CheckSurname();
        checkEmail();
        checkPhone();
        CheckExperience()
        if (checkName() && CheckSurname() && checkEmail()&&checkPhone()&&CheckExperience() ) {
        isFormValid = true;
        }else {
            isFormValid = false; // Reset to false if not all fields are valid
        }
    })
);

document.getElementById("register-participants").addEventListener("submit", function (event) {
    event.preventDefault();
    // Validation of fields
    if (isFormValid) {
        this.submit(); // We send the form
    } else {
        alert('Будь ласка, заповніть всі обов’язкові поля правильно.');
    }
    isFormValid = false; // Reset to false after sending or unsuccessful validation

});

//end validatio

//start button close
document.getElementById("close-second-window").addEventListener("click", () => {
    document.getElementById("responseModal").style.display = "none";
    document.getElementById("registerModalToggle").style.display = "none";
    // field clearing
    document
    .querySelectorAll(".registration-form ")
    .forEach((elem) => (elem.value = ""));
});
//end button close

//reCAPTCHA KEY START
listenSubmit();
function listenSubmit() {
    document.querySelectorAll(".check-form").forEach((elem) =>
        elem.addEventListener("click", (event) => {
            event.preventDefault();
            // submit to the server if the form is valid
            if (isFormValid) {
                grecaptcha.ready(function () {
                grecaptcha.execute(
                    "6LcwRRUaAAAAADavxcmw5ShOEUt1xMBmRAcPf6QP",
                    { action: "submit" }
                    )
                    .then(function (token) {
                        if (isFormValid) {
                            const actionUrl =
                                "https://intita.com/api/v1/entrant";
                            const entrantFormData = new FormData(
                                form
                            );
                            entrantFormData.append(
                                "g-recaptcha-response",
                                token
                            );
                            const http = new XMLHttpRequest();
                            http.open("POST", actionUrl, true);
                            http.send(entrantFormData);
                            http.onreadystatechange = function () {
                                if (
                                    +http.readyState === 4 &&
                                    +http.status === 201
                                ) {
                                    entrantSubmitResponse();
                                } else if (+http.status === 400) {
                                    switch (lang) {
                                        case "uk":
                                            entrantSubmitResponse(
                                                "Сервер тимчасово перевантажений. Будь ласка, cпробуйте пізніше"
                                            );
                                            break;
                                        case "en":
                                            entrantSubmitResponse(
                                                "The server is temporary busy. Please try again later"
                                            );
                                            break;
                                        default:
                                            break;
                                    }
                                }
                            };
                            http.onload = function () {
                                if (+http.status !== 201) {
                                    switch (lang) {
                                        case "uk":
                                            entrantSubmitResponse(
                                                "Сервер тимчасово перевантажений. Будь ласка, cпробуйте пізніше"
                                            );
                                            break;
                                        case "en":
                                            entrantSubmitResponse(
                                                "The server is temporary busy. Please try again later"
                                            );
                                            break;
                                        default:
                                            break;
                                    }
                                    return;
                                }
                                entrantSubmitResponse();
                            };
                        }
                    });
                });
            }
        })
    );
}

function entrantSubmitResponse(errorStr) {
    const secondWindow = document.getElementById("responseModal");
    if (getComputedStyle(secondWindow, null).display === "none") {
        const elementAnketeText =
            document.querySelector("#responseMessage");
        if (errorStr) {
            elementAnketeText.innerText = errorStr;
            document.getElementById("registerModalToggle").style.display ="block";
            document.getElementById("responseModal").style.display =
                "block";
        } else {
            switch (lang) {
                case "uk":
                    elementAnketeText.innerHTML =
                        "Дякую!<br> Я зателефоную Вам найближчим часом!";
                    break;
                case "en":
                    elementAnketeText.innerHTML =
                      "Thank you!<br> I will call you soon!";
                    break;
                default:
                    break;
            }
            document.getElementById("responseModal").style.display = "flex";
        }
        secondWindow.style.display = "block";
        document.getElementById("registerModalToggle").style.display = "none";
        document.getElementById("responseModal").style.display = "block";
    }
}
//reCAPTCHA KEY end
// We get a link to the modal window start
const modal = document.getElementById("registerModalToggle");
// We get all the form fields that need to be cleared
const formFields = modal.querySelectorAll("input, textarea");
// We add an event handler for closing the modal window
modal.addEventListener("hidden.bs.modal", function () {
    // Clear the values of all form fields
    formFields.forEach(function (field) {
        field.value = "";
    });
});
//modal erasure of data upon closing end

// menu scroll start
    const dropdownMenuButton = document.getElementById('dropdownMenuButton');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownMenuButton.addEventListener('click', function() {
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'block';
            document.body.style.overflow = 'hidden'; 
        } else {
            dropdownMenu.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        }
    });
// menu scroll end

//menu span start//
    const spanElement = document.getElementById("span-button");
    const iconElement = document.getElementById("icon");

    spanElement.addEventListener("click", function () {
        if (iconElement.classList.contains("bi-caret-down-fill")) {
            iconElement.classList.remove("bi-caret-down-fill");
            iconElement.classList.add("bi-caret-up-fill");
        } else {
            iconElement.classList.remove("bi-caret-up-fill");
            iconElement.classList.add("bi-caret-down-fill");
        }
    });
//menu span end//
//menu span-mob start//
    const spanElement1 = document.getElementById("span-button-mob");
    const iconElement1 = document.getElementById("icon-mob");

    spanElement1.addEventListener("click", function () {
        if (iconElement1.classList.contains("bi-caret-down-fill")) {
            iconElement1.classList.remove("bi-caret-down-fill");
            iconElement1.classList.add("bi-caret-up-fill");
        } else {
            iconElement1.classList.remove("bi-caret-up-fill");
            iconElement1.classList.add("bi-caret-down-fill");
        }
    });
//menu span-mob end//

// validation name oninput start
document.addEventListener("DOMContentLoaded", function () {
    const clientInputs = document.querySelectorAll(".input-name, .input-surname");
    clientInputs.forEach(function (input) {
      input.addEventListener("input", function () {
        const inputValue = input.value;
        const sanitizedValue = sanitizeInput(inputValue);
        if (inputValue !== sanitizedValue) {
          input.value = sanitizedValue;
        }
      });
    });
    function sanitizeInput(input) {
      const regex = /[^a-zA-Zа-яА-ЯїЇєЄіІґҐ'-]/g;
      return input.replace(regex, "");
    }
});
// validation name oninput end

//clearing the fields start
document.addEventListener("DOMContentLoaded", function () {
const modal = document.getElementById("registerModalToggle"); // We get a link to the modal window
// We get all form fields that need to be cleared and highlighted
const formFields = modal.querySelectorAll("input, textarea");
// We add an event handler for closing the modal window
modal.addEventListener("hidden.bs.modal", function () {
    // We clear the values of all form fields and remove the backlight
    formFields.forEach(function (field) {
        field.value = ""; // Clear the field values
        field.classList.remove("error-box"); // We remove the backlight with a red border
    });
    // We clean up the error text
    const errorTexts = modal.querySelectorAll(".error-text");
    errorTexts.forEach(function (errorText) {
        errorText.textContent = "";
    });
    // We remove the backlight with a red border from all the fields of the city
    const cityFields = modal.querySelectorAll("#current-city, #current-city-2");
    cityFields.forEach(function (cityField) {
        cityField.style.borderBottom = "none";
    });
    // Remove the red color for the labels
    const labels = modal.querySelectorAll("label");
    labels.forEach(function (label) {
        label.style.color = "";
    });
    // Отримуємо всі чекбокси за їх класом "check"
    const checkboxes = document.querySelectorAll(".check");
        // Проходимося по усіх чекбоксах і знімаємо їх позначення
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });

    });
});
//clearing the fields end
// sharing on twitter start
function shareOnTwitter() {
    let title = encodeURIComponent(document.querySelector('meta[name="twitter:title"]').getAttribute('content'));
    let image = encodeURIComponent(document.querySelector('meta[name="twitter:image"]').getAttribute('content'));
    let description = encodeURIComponent(document.querySelector('meta[name="twitter:description"]').getAttribute('content'));
    let url = encodeURIComponent(document.querySelector('meta[name="twitter:url"]').getAttribute('content'));

    let twitterUrl = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + description + '&title=' + title + '&image=' + image;

    window.open(twitterUrl, '_blank');
}
// sharing on twitter end
//mask telefon start
jQuery(".phone-number").inputmask({
    mask: "+99 (999) 999-99-99",
    greedy: false,
    regex: "^\\+\\d{11,12}$"
});
//mask telefon end

