// --- Toggle Menu (hamburger) ---
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const mainContent = document.getElementById('main-content');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        sideMenu.classList.toggle('open');
        mainContent.classList.toggle('shifted');
    });

    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            menuToggle.click();
        }
    });
}

// --- Submenu Toggle ---
function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    const arrow = submenu.querySelector('.arrow');

    submenu.classList.toggle('open');

    if (submenu.classList.contains('open')) {
        arrow.innerHTML = '▴';
    } else {
        arrow.innerHTML = '▾';
    }
}

document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        const id = arrow.dataset.target;
        toggleSubmenu(id);
    });
});
