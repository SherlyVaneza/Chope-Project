document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('registerForm');
            const fullNameInput = document.getElementById('fullName');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirmPassword');
            const addressInput = document.getElementById('address');
            const cityInput = document.getElementById('city');
            const stateInput = document.getElementById('state');
            const zipCodeInput = document.getElementById('zipCode');

            form.addEventListener('submit', function (event) {
                event.preventDefault();

                validateInput(fullNameInput, 'Full Name cannot be blank');
                validateEmail(emailInput);
                validatePhone(phoneInput);
                validatePassword(passwordInput);
                validateConfirmPassword(confirmPasswordInput, passwordInput);
                validateInput(addressInput, 'Address cannot be blank');
                validateInput(cityInput, 'City cannot be blank');
                validateInput(stateInput, 'State cannot be blank');
                validateZipCode(zipCodeInput);

                if (form.querySelectorAll('.form-group input.error').length === 0) {
                    alert('Registration Successful!');
                    form.reset();
                }
            });

            function validateInput(inputElement, errorMessage) {
                if (inputElement.value.trim() === '') {
                    setError(inputElement, errorMessage);
                } else {
                    setSuccess(inputElement);
                }
            }

            function validateEmail(emailInput) {
                const emailValue = emailInput.value.trim();
                if (emailValue === '') {
                    setError(emailInput, 'Email cannot be blank');
                } else if (!isValidEmail(emailValue)) {
                    setError(emailInput, 'Not a valid email address');
                } else {
                    setSuccess(emailInput);
                }
            }

            function validatePhone(phoneInput) {
                const phoneValue = phoneInput.value.trim();
                if (phoneValue === '') {
                    setError(phoneInput, 'Phone number cannot be blank');
                } else if (!isValidPhone(phoneValue)) {
                    setError(phoneInput, 'Not a valid phone number');
                } else {
                    setSuccess(phoneInput);
                }
            }

            function validatePassword(passwordInput) {
                const passwordValue = passwordInput.value.trim();
                if (passwordValue === '') {
                    setError(passwordInput, 'Password cannot be blank');
                } else if (passwordValue.length < 8) {
                    setError(passwordInput, 'Password must be at least 8 characters');
                } else {
                    setSuccess(passwordInput);
                }
            }

            function validateConfirmPassword(confirmPasswordInput, passwordInput) {
                const confirmPasswordValue = confirmPasswordInput.value.trim();
                const passwordValue = passwordInput.value.trim();
                if (confirmPasswordValue === '') {
                    setError(confirmPasswordInput, 'Confirm Password cannot be blank');
                } else if (confirmPasswordValue !== passwordValue) {
                    setError(confirmPasswordInput, 'Passwords do not match');
                } else {
                    setSuccess(confirmPasswordInput);
                }
            }

            function validateZipCode(zipCodeInput) {
                const zipCodeValue = zipCodeInput.value.trim();
                if (zipCodeValue === '') {
                    setError(zipCodeInput, 'Zip Code cannot be blank');
                } else if (!isValidZipCode(zipCodeValue)) {
                    setError(zipCodeInput, 'Not a valid zip code');
                } else {
                    setSuccess(zipCodeInput);
                }
            }

            function setError(inputElement, message) {
                const formGroup = inputElement.parentElement;
                const errorDisplay = formGroup.querySelector('.error-message');
                errorDisplay.innerText = message;
                formGroup.classList.add('error');
                formGroup.classList.remove('success');
                errorDisplay.classList.add('show');
                inputElement.classList.add('error');
                inputElement.classList.remove('success');
            }

            function setSuccess(inputElement) {
                const formGroup = inputElement.parentElement;
                const errorDisplay = formGroup.querySelector('.error-message');
                errorDisplay.innerText = '';
                formGroup.classList.add('success');
                formGroup.classList.remove('error');
                errorDisplay.classList.remove('show');
                inputElement.classList.add('success');
                inputElement.classList.remove('error');
            }

            function isValidEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }

            function isValidPhone(phone) {
                const re = /^\d{10}$/;
                return re.test(phone);
            }

            function isValidZipCode(zipCode) {
                const re = /^\d{5}(?:[-\s]\d{4})?$/;
                return re.test(zipCode);
            }
        });