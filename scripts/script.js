let currentGrid = 'music';

function toggleGrid(mode) {
    const grid1 = document.getElementById('buttonGrid1');
    const grid2 = document.getElementById('buttonGrid2');
    const controlButtons = document.getElementById('controlButtons');

    if (mode === 'vfx') {
        grid1.style.display = 'none';
        grid2.style.display = 'flex';
        document.body.style.background = 'linear-gradient(to right, #d3d3d3, #a9a9a9)'; 
        //Si quisiésemos cambiar el fondo por una imagen, podríamos hacerlo así:
        // document.body.style.backgroundImage = 'url("vfx-background.jpg")'; // Imagen de fondo para VFX
        // document.body.style.backgroundSize = 'cover'; // Para que la imagen cubra todo el fondo
        currentGrid = 'vfx';
        controlButtons.style.display = 'none'; // Ocultar botones de control en VFX
    } else {
        grid1.style.display = 'flex';
        grid2.style.display = 'none';
        document.body.style.background = 'linear-gradient(to right, #ffe4e1, #ffb6c1)';
        // document.body.style.backgroundImage = 'url("vfx-background.jpg")'; // Imagen de fondo para VFX
        // document.body.style.backgroundSize = 'cover'; // Para que la imagen cubra todo el fondo
        currentGrid = 'music';
        controlButtons.style.display = 'block'; // Mostrar botones de control en Música
    }
}