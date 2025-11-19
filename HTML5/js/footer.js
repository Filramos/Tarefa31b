// footer.js

document.addEventListener("DOMContentLoaded", function () {
  const footerHtml = `
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Criadores</h4>
            <p class="lead mb-0">
              <a href="mailto:ricardo.queiros@gmail.com" target="_blank">Ricardo Queirós</a><br>
              <a href="mailto:filipeportela@iotech.pt" target="_blank">Filipe Portela</a>
            </p>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">PRESENÇA DIGITAL</h4>
            <a href="#" class="btn btn-outline-light btn-social mx-1"><i class="fab fa-fw fa-facebook-f"></i></a>
            <a href="#" class="btn btn-outline-light btn-social mx-1"><i class="fab fa-fw fa-twitter"></i></a>
            <a href="#" class="btn btn-outline-light btn-social mx-1"><i class="fab fa-fw fa-linkedin-in"></i></a>
            <a href="#" class="btn btn-outline-light btn-social mx-1"><i class="fab fa-fw fa-dribbble"></i></a>
          </div>
          <div class="col-lg-4">
            <h4 class="text-uppercase mb-4">Sobre o Animalec</h4>
            <p class="lead mb-0">Animalec usa tema de Bootstrap com licença MIT, gratuito e criado por <a href="http://startbootstrap.com" target="_blank">StartBootstrap</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Inserir o HTML no corpo do documento
  const footerContainer = document.getElementById("footerContainer");
  if (footerContainer) {
    footerContainer.innerHTML = footerHtml;
  }
});
