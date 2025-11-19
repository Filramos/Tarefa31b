// header.js

document.addEventListener("DOMContentLoaded", function () {
  const headerHtml = `
    <div id="mainRowHeader" class="row bg-dark">
      <div id="navMenu" class="col-3 col-lg-8 order-0 order-lg-1">
        <nav class="navbar navbar-dark navbar-expand-lg">
          <button id="btn-MenuPrincipal" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link disabled" href="/">Animais</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="/">Utilizadores</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="/">Quizzes e Questões</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Admin</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div id="navLogo" class="col-6 col-lg-3 order-1 order-lg-0">
        <a class="navbar-brand" href="index.html">
          <img id="headerLogo" src="img/animalec.png" alt="Logo Animalec">
        </a>
      </div>
      <div id="dadosPessoais" class="col-3 col-lg-1 order-2">
        <span>Utilizador</span><br />
        <span><a href="#">logout</a></span>
      </div>
    </div>
  `;

  // Inserir o HTML no corpo do documento
  const headerContainer = document.getElementById("headerContainer");
  if (headerContainer) {
    headerContainer.innerHTML = headerHtml;
  }
});
