document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidenav').style.width = '250px';
    document.getElementById('menu-toggle').style.display = 'none'; 
});

document.getElementById('close-nav').addEventListener('click', () => {
    document.getElementById('sidenav').style.width = '0';
    document.getElementById('menu-toggle').style.display = 'block';
});