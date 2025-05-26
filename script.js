document.addEventListener('DOMContentLoaded', () => {
    const roles = document.querySelectorAll('.role');
    let currentRole = 0;
    let isAnimating = false;

    // Initially hide all roles except the first one
    roles.forEach((role, index) => {
        if (index !== 0) {
            role.style.display = 'none';
            role.style.opacity = '0';
            role.style.transform = 'translateY(20px)';
        } else {
            role.style.opacity = '1';
            role.style.transform = 'translateY(0)';
        }
    });

    // Function to switch roles with typing animation
    function switchRole() {
        if (isAnimating) return;
        isAnimating = true;

        const currentElement = roles[currentRole];
        const nextIndex = (currentRole + 1) % roles.length;
        const nextElement = roles[nextIndex];

        // Fade out current role
        currentElement.style.opacity = '0';
        currentElement.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            currentElement.style.display = 'none';
            nextElement.style.display = 'block';
            
            // Fade in next role
            requestAnimationFrame(() => {
                nextElement.style.opacity = '1';
                nextElement.style.transform = 'translateY(0)';
            });

            currentRole = nextIndex;
            
            // Reset animation flag after transition
            setTimeout(() => {
                isAnimating = false;
            }, 500);
        }, 500);
    }

    // Switch roles every 3 seconds
    setInterval(switchRole, 3000);
});
