let currentGrid = 'music-bg';

function toggleGrid(mode) {
    const grid1 = document.getElementById('buttonGrid1');
    const grid2 = document.getElementById('buttonGrid2');
    const controlButtons = document.getElementById('controlButtons');

    if (mode === 'vfx') {
        grid1.style.display = 'none';
        grid2.style.display = 'flex';
        document.body.className = 'vfx-bg'; // Aplica una clase específica para el fondo VFX
        currentGrid = 'vfx';
        controlButtons.style.display = 'none'; // Ocultar botones de control en VFX
    } else {
        grid1.style.display = 'flex';
        grid2.style.display = 'none';
        document.body.className = 'music-bg'; // Aplica una clase específica para el fondo de música
        currentGrid = 'music';
        controlButtons.style.display = 'flex'; // Mostrar botones de control en Música
    }
}