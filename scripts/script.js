let currentGrid = 'music';

function toggleGrid(mode) {
    const grid1 = document.getElementById('buttonGrid1');
    const grid2 = document.getElementById('buttonGrid2');
    const controlButtons = document.getElementById('controlButtons');

    if (mode === 'vfx') {
        grid1.style.display = 'none';
        grid2.style.display = 'flex';
        document.body.style.background = 'linear-gradient(180deg,rgba(255, 188, 188, 0.76),rgb(49, 49, 118), transparent), url("./images/vfxbg.webp")'; 
        document.body.style.backgroundSize = 'cover'; // Para que la imagen cubra todo el fondo
        currentGrid = 'vfx';
        controlButtons.style.display = 'none'; // Ocultar botones de control en VFX
    } else {
        grid1.style.display = 'flex';
        grid2.style.display = 'none';
        document.body.style.background = 'linear-gradient(180deg,rgba(255, 188, 188, 0.76),rgb(49, 49, 118), transparent), url("./images/musicbg.jpg")'; 
        document.body.style.backgroundSize = 'cover'; // Para que la imagen cubra todo el fondo
        currentGrid = 'music';
        controlButtons.style.display = 'block'; // Mostrar botones de control en Música
    }
}