function Footer() {
  return `
<footer class="bg-dark text-white pt-5 pb-3">
  <div class="container">
    <div class="d-flex justify-content-center">
      <!-- Logo e descrição -->
      <div class="col-md-4">
        <h3 class="h4 mb-3 d-flex justify-content-center align-items-center">
          <img src="/public/imgs/icon-escudo-branco.svg" alt="Ícone de cadeado" width="40" class="me-2">
          Escudo Digital
        </h3>
        <p class="text-white-50">Escudo Digital - Proteção e Segurança para seus Dados</p>
      </div>



    </div>

    <hr class="border-secondary my-4">

    <div class="row">
      <div class="col-md-6 text-center text-md-start">
        <p class="small text-white-50 mb-0">© 2025 Escudo Digital. Todos os direitos reservados.</p>
        <p class="small fw-light fst-italic text-white-50">Projeto Educativo • ADS • Desenvolvido para promover a segurança digital.</p>
      </div>
      <div class="col-md-6 text-center text-md-end">
        <p class="small text-white-50 mb-0">
          <a href="#Política-de-Privacidade" class="text-white-50 text-decoration-none">Política de Privacidade</a> |
          <a href="#Termos-de-Uso" class="text-white-50 text-decoration-none">Termos de Uso</a>
        </p>
      </div>
    </div>
  </div>

</footer>

  `;
}