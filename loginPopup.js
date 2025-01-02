document.addEventListener('DOMContentLoaded', () => {
    const checkLoginIcon = () => {
        const loginIcon = document.getElementById('loginIcon');
        if (loginIcon) {
            loginIcon.addEventListener('click', (e) => {
                e.preventDefault();
                const loginModal = document.getElementById('loginModal');
                loginModal.style.display = 'flex';
            });
        } else {
            console.warn('loginIcon nuk është gjetur ende.');
        }
    };

    // Kontrollo DOM-in me një vonesë
    setTimeout(checkLoginIcon, 500);
});
