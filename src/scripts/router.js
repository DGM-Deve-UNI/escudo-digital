// src/scripts/router.js
import { renderHome } from "../pages/home.js";
import { renderQuiz } from "../pages/quiz.html";
import { renderSaibaMais } from "../pages/saiba-mais.html";

export function initRouter() {
  // Mapeamento de rotas
  const routes = {
    "/": renderHome,
    "/quiz": renderQuiz,
    "/saiba-mais": renderSaibaMais,
  };

  // Captura eventos de navegação
  window.addEventListener("popstate", () => {
    const path = window.location.pathname;
    const renderFunction = routes[path] || renderHome;
    renderFunction();
  });

  // Intercepta cliques em links
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-spa-link]")) {
      e.preventDefault();
      const path = e.target.getAttribute("href");
      navigate(path);
    }
  });
}

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("popstate"));
}
