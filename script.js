document.addEventListener('DOMContentLoaded', function () {
    // Get all project titles
    var projectTitles = document.querySelectorAll('.project h3');

    // Add click event listeners to each project title
    projectTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            // Toggle the visibility of the next sibling element (project description)
            var projectDescription = title.nextElementSibling;
            projectDescription.style.display = projectDescription.style.display === 'none' ? 'block' : 'none';
        });
    });
});
