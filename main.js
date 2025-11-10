  function redirectToCheckout() {
      var loadingContainer = document.getElementById('loading-container');
      loadingContainer.classList.remove('hide');

      setTimeout(function() {
        window.location.href = "cart.html";
      }, 2000);
    }
function scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
    document.addEventListener('DOMContentLoaded', function() {
      const dropdown = document.querySelector('.dropdown');

      dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdown.classList.toggle('show');
      });
      const creatorsLink = document.querySelector('.dropdown-content a[href="#creators"]');
      creatorsLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "creators.html";
      });

      window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('show');
        }
      });
    });