async function loadBootDevProfile() {
  const container = document.getElementById("bootdev-progress");
  try {
    const response = await fetch("https://www.boot.dev/u/desertedfail01");
    const html = await response.text();

    // Bruk DOMParser for å hente ut informasjon fra HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Eksempler (du må justere disse basert på Boot.dev sin HTML-struktur)
    const lessons = doc.querySelector('[data-testid="lessons-solved"]');
    const courses = [...doc.querySelectorAll('.course-title')].map(c => c.textContent.trim());

    container.innerHTML = `
      <h3>Boot.dev Progress</h3>
      <p><strong>Lessons solved:</strong> ${lessons ? lessons.textContent.trim() : "N/A"}</p>
      <p><strong>Courses completed:</strong></p>
      <ul>${courses.map(c => `<li>${c}</li>`).join("")}</ul>
      <a href="https://www.boot.dev/u/desertedfail01" target="_blank">View full profile</a>
    `;
  } catch (error) {
    container.innerHTML = "<p>Could not load Boot.dev data.</p>";
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", loadBootDevProfile);
