async function loadProjects() {
  const projectsContainer = document.getElementById("projects-section");
  try {
    const response = await fetch("projects.json");
    if (!response.ok) {
      throw new Error(`HTTP помилка! Статус: ${response.status}`);
    }
    const projects = await response.json();
    projects.forEach((project) => {
      const projectArticle = document.createElement("article");
      const projectTitle = document.createElement("h3");
      projectTitle.textContent = project.name;
      const projectDescription = document.createElement("p");
      projectDescription.textContent = project.description;
      const projectLink = document.createElement("a");
      projectLink.textContent = "Переглянути проєкт";
      projectLink.href = project.link;
      projectLink.target = "_blank";

      projectArticle.appendChild(projectTitle);
      projectArticle.appendChild(projectDescription);
      projectArticle.appendChild(projectLink);

      projectsContainer.appendChild(projectArticle);
    });
  } catch (error) {
    console.error("Не вдалося завантажити проєкти:", error);
    projectsContainer.innerHTML =
      "<p>Не вдалося завантажити проєкти. Подивіться помилку в консолі.</p>";
  }
}
loadProjects();
