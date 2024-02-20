document.addEventListener("DOMContentLoaded", function() {
    const disorderSections = document.querySelectorAll('.disorder-info');
  
    disorderSections.forEach(section => {
      section.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
      });
  
      section.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
      });
    });
  });
  