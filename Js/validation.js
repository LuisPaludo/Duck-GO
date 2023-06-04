// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

function validate() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const email = document.getElementById("validationCustom06").value;
    const confirmEmail = document.getElementById("validationCustom07").value;

    if (password !== confirmPassword) {
        document.getElementById("confirm_password").classList.add("is-invalid");
        document.getElementById("confirm_password").setCustomValidity("Invalid field.");
    } else {
        document.getElementById("confirm_password").classList.remove("is-invalid");
        document.getElementById("confirm_password").setCustomValidity("");
    }

    if (email !== confirmEmail) {
        document.getElementById("validationCustom07").classList.add("is-invalid");
        document.getElementById("validationCustom07").setCustomValidity("Invalid field.");
    } else {
        document.getElementById("validationCustom07").classList.remove("is-invalid");
        document.getElementById("validationCustom07").setCustomValidity("");
    }
}
