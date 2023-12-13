var projects = document.querySelectorAll('.section5-image');
projects.forEach(function (project) {
  project.style.display = 'block';
});

var categories = document.querySelectorAll('.section5-left p');
categories.forEach(function (category) {
  category.addEventListener('click', function () {
    categories.forEach(function (cat) {
      cat.classList.remove('selected');
    });

    this.classList.add('selected');

    var selectedCategory = this.textContent.toLowerCase();

    projects.forEach(function (project) {
      var projectCategory = project
        .querySelector('.section5-text p:nth-child(2)')
        .textContent.toLowerCase();
      if (
        selectedCategory === 'all' ||
        projectCategory.includes(selectedCategory)
      ) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});
