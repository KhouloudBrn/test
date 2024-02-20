document.addEventListener("DOMContentLoaded", function() {
    const motivationGallery = document.getElementById('motivation-gallery');
    const slides = document.querySelectorAll('.motivation-slide');
  
    let currentIndex = 0;
  
    function showSlide(index) {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
  
      const translateValue = -currentIndex * 100 + '%';
      motivationGallery.style.transform = 'translateX(' + translateValue + ')';
    }
  
    
    setInterval(function() {
      currentIndex++;
      showSlide(currentIndex);
    }, 5000);
  });
  