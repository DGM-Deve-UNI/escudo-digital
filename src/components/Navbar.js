function Navbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#home" data-spa-link>
          <img src="/escudo-digital/src/imgs/icon-escudo.svg" alt="Ícone de escudo e cadeado" width="40" class="me-2">
          Escudo Digital
        </a>
        <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home" data-spa-link>
                <i class="cil-home me-1"></i> Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#quiz" data-spa-link>
                <i class="cil-puzzle me-1"></i> Quiz
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#saiba-mais" data-spa-link>
                <i class="cil-info me-1"></i> Saiba Mais
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}
