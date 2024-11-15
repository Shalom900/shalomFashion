document.getElementById('menuButton').addEventListener('click', function() {
    const toggleMenu = document.getElementById('toggleMenu');
    const menuButton = document.getElementById('menuButton');
    
    // Check if the menu is currently visible
    if (toggleMenu.style.display === 'block') {
        // Hide the menu
        toggleMenu.style.display = 'none';
    } else {
        // Show the menu
        toggleMenu.style.display = 'block';
    }
});
