function generatePassword() {
    let length = parseInt(document.getElementById('digit').value)
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'; // Characters to include in the password
    let password = '';

    if (typeof(length) === 'number' && length >= 6 && length <= 32) {
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }    
    }

    const passwordField = document.getElementById('password');
    passwordField.value = password;
}
