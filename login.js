// Show error message
        function showError(input, message) {
            input.classList.add('error');
            input.classList.remove('success');
            
            let errorDiv = input.parentNode.querySelector('.error-message');
            if (!errorDiv) {
                errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                input.parentNode.appendChild(errorDiv);
            }
            
            errorDiv.textContent = message;
            errorDiv.classList.add('show');
        }

        // Show success state
        function showSuccess(input) {
            input.classList.add('success');
            input.classList.remove('error');
            
            const errorDiv = input.parentNode.querySelector('.error-message');
            if (errorDiv) {
                errorDiv.classList.remove('show');
            }
        }

        // Form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const loginEmail = document.getElementById('loginEmail');
            const loginPassword = document.getElementById('loginPassword');
            
            let isValid = true;
            
            // Validate email/username
            if (loginEmail.value.trim() === '') {
                showError(loginEmail, 'Username or email is required');
                isValid = false;
            } else {
                showSuccess(loginEmail);
            }
            
            // Validate password
            if (loginPassword.value.trim() === '') {
                showError(loginPassword, 'Password is required');
                isValid = false;
            } else {
                showSuccess(loginPassword);
            }
            
            if (isValid) {
                alert('Login successful! Welcome back to Chope!');
                window.location.href = 'index.html';
            }
        });

        // Real-time validation
        document.addEventListener('input', function(e) {
            if (e.target.value.trim() !== '') {
                showSuccess(e.target);
            }
        });