document.addEventListener("DOMContentLoaded", function() {
    const learnMoreBtn = document.querySelector('.btn');
    const projectsSection = document.querySelector('.projects');
  
    learnMoreBtn.addEventListener('click', function(event) {
      event.preventDefault();
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }); 
  });
  