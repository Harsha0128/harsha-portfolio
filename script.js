const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');

if (menu && links) {
    menu.addEventListener('click', () => {
        if (links.style.display === 'flex') {
            links.style.display = 'none';
        } else {
            links.style.display = 'flex';
            links.style.flexDirection = 'column';
            links.style.position = 'absolute';
            links.style.top = '72px';
            links.style.right = '4%';
            links.style.padding = '18px';
            links.style.background = '#0b1728';
            links.style.border = '1px solid #243a53';
            links.style.borderRadius = '12px';
        }
    });
}