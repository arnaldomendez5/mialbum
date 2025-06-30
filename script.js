const album = document.querySelector('.album');
const visor = document.getElementById('visor');
const imagenAmpliada = document.getElementById('imagen-ampliada');

// Delegación: abrir visor al hacer clic en cualquier imagen del álbum
album.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    imagenAmpliada.src = e.target.src;
    imagenAmpliada.alt = e.target.alt;
    visor.style.display = 'flex';
  }
});

// Cerrar visor
function cerrarVisor() {
  visor.style.display = 'none';
}

// Cerrar visor si clickeás fuera de la imagen ampliada
function cerrarSiClickAfuera(event) {
  if (!imagenAmpliada.contains(event.target)) {
    cerrarVisor();
  }
}