document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("text");
    const mobileInput = document.getElementById("password");
    const form = document.getElementById("form");

    nameInput.addEventListener("invalid", function() {
        if (this.validity.patternMismatch) {
            this.setCustomValidity("Please enter only characters.");
        } else if (this.validity.valueMissing) {
            this.setCustomValidity("من فضلك أدخل الأسم");
        } else {
            this.setCustomValidity("");
        }
    });;

    // Clear any set custom validity messages when input becomes valid
    nameInput.addEventListener("input", function() {
        if (this.validity.valid) {
            this.setCustomValidity("");
        }
    });

    mobileInput.addEventListener("input", function() {
        if (this.validity.valid) {
            this.setCustomValidity("");
        }
    });
});




let patharr = window.location.pathname.split("/");
patharr.splice(-1);
let path = patharr.join("/");
let host = window.location.protocol + "//" + window.location.host + path;
let redirectValue = document.getElementById("redDir").value;
document.getElementById("redDir").value = `${host}/thanks.html`;