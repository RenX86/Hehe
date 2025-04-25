/**
 * Password Utilities
 * Handles password-related functionality like toggling visibility
 */

// Function to toggle password visibility
function togglePasswordVisibility(passwordField) {
    const input = passwordField.querySelector('input');
    const button = passwordField.querySelector('.password-toggle');
    
    if (!input || !button) return;
    
    if (input.type === 'password') {
        input.type = 'text';
        button.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        input.type = 'password';
        button.innerHTML = '<i class="bi bi-eye"></i>';
    }
}

// Initialize password toggle functionality
function initPasswordToggles() {
    const passwordFields = document.querySelectorAll('.password-field');
    
    passwordFields.forEach(field => {
        const button = field.querySelector('.password-toggle');
        if (button) {
            button.addEventListener('click', function() {
                togglePasswordVisibility(field);
            });
        }
    });
}

// Check password strength
function checkPasswordStrength(password) {
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    
    // Character variety checks
    if (/[A-Z]/.test(password)) strength += 1; // Has uppercase
    if (/[a-z]/.test(password)) strength += 1; // Has lowercase
    if (/[0-9]/.test(password)) strength += 1; // Has number
    if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Has special char
    
    return {
        score: strength,
        isStrong: strength >= 4,
        isModerate: strength >= 3 && strength < 4,
        isWeak: strength < 3
    };
}

// Validate password requirements
function validatePasswordRequirements(password, requirements) {
    const results = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };
    
    // Update UI for requirements if elements are provided
    if (requirements) {
        for (const [key, element] of Object.entries(requirements)) {
            if (element && results[key]) {
                element.classList.add('valid');
            } else if (element) {
                element.classList.remove('valid');
            }
        }
    }
    
    return results;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initPasswordToggles();
});

// Export functions for use in other scripts
window.passwordUtils = {
    togglePasswordVisibility,
    initPasswordToggles,
    checkPasswordStrength,
    validatePasswordRequirements
};