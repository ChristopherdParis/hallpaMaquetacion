const images = [
    'imgs/EXTERIOR/IMG_5525.JPG', 
    'imgs/EXTERIOR/IMG_5511.JPG',
    'imgs/EXTERIOR/IMG_5519.JPG',
    'imgs/EXTERIOR/IMG_5533.JPG'
  ];
  
  let currentImageIndex = 0;
  
  function changeBackgroundImage() {
    // Cambia la imagen al siguiente índice
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newImage = images[currentImageIndex];
  
    // Añade una clase para animar la transición
    const header = document.getElementById('header');
    header.classList.add('fade-in');
  
    // Después de la animación, cambia la imagen de fondo
    setTimeout(() => {
      header.style.backgroundImage = `url(${newImage})`;
      // Elimina la clase de animación para permitir que se repita
      header.classList.remove('fade-in');
    }, 1000); // Asegúrate de que el tiempo coincida con la duración de la animación
  }
  