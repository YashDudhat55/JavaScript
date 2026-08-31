student_Form.addEventListener('submit', (e) => {
    e.preventDefault();

    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.classList.remove('border-danger');
    });;

    document.querySelectorAll('.error').forEach(span => {
        span.innerText = "";
    });

    const student_Form = document.getElementById('student_Form');
    const fullName = document.getElementById('full_name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const mobile = document.getElementById('mobile');
    const birth_date = document.getElementById('birth_date');
    const gender = document.querySelectorAll('input:checked');
    gender.forEach(input => {
        // console.log(input.value);
    });
    const hobby = document.querySelectorAll('input:checked');
    hobby.forEach(input => {
        // console.log(input.value);
    });

    const city = document.getElementById('city');
    const about = document.getElementById('about');

    let isValid = true;


    // Full Name
    if (fullName.value === "") {
        fullName.classList.add('border-danger');
        document.querySelector('#fullNameError').innerText =
            "* Please enter your full name...";
        isValid = false;
    }

    // Email
    if (email.value === "") {
        email.classList.add('border-danger');
        document.querySelector('#emailError').innerText =
            "* Please enter your email...";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('border-danger');
        document.querySelector('#emailError').innerText =
            "* Please enter a valid email address";
        isValid = false;
    }

    // Password
    if (password.value === "") {
        password.classList.add('border-danger');
        document.querySelector('#passwordError').innerText =
            "* Please enter your password...";
        isValid = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password.value)) {
        password.classList.add('border-danger');
        document.querySelector('#passwordError').innerText =
            "* Password must be at least 8 characters with uppercase, lowercase, number and special character";
        isValid = false;
    }

    // Mobile
    if (mobile.value === "") {
        mobile.classList.add('border-danger');
        document.querySelector('#mobileError').innerText =
            "* Please Enter your phone number...";
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile.value)) {
        mobile.classList.add('border-danger');
        document.querySelector('#mobileError').innerText =
            "* Please enter valid phone number";
        isValid = false;
    }

    // Birth Date
    if (birth_date.value === "") {
        birth_date.classList.add('border-danger');
        document.querySelector('#dobError').innerText =
            "* Please select your birth date...";
        isValid = false;
    }

    // Gender
    if (gender.length === 0) {
        document.querySelector('#genderError').innerText =
            "* Please select your gender...";
        isValid = false;
    }

    // Hobby
    if (hobby.length === 0) {
        document.querySelector('#hobbyError').innerText =
            "* Please select your hobby...";
        isValid = false;
    }

    // City
    if (city.value === "") {
        city.classList.add('border-danger');
        document.querySelector('#cityError').innerText =
            "* Please select your city...";
        isValid = false;
    }

    // About
    if (about.value === "") {
        about.classList.add('border-danger');
        document.querySelector('#aboutError').innerText =
            "* Please write something about yourself...";
        isValid = false;
    }

    console.log("Form Submitted...");
});