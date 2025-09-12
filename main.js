document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('show-financial-table-link');
  var tableSection = document.getElementById('financial-table');
  if (link && tableSection) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      tableSection.classList.remove('hidden-financial-table');
      link.style.display = 'none';
      tableSection.scrollIntoView({behavior: 'smooth'});
    });
  }
});
