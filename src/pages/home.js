function HomePage() {
  return `
    <!-- Hero Section Premium -->
    <section class="hero-section bg-gradient-primary">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 hero-content">
          <h1 class="display-4 fw-bold text-white mb-4">
            <img src="/escudo-digital/src/imgs/icon-escudo.svg" alt="Ícone de escudo e cadeado" width="80" class="me-2">Escudo Digital
          </h1>
          <p class="lead text-white mb-5">Domine as técnicas de segurança digital e proteja-se contra os golpes mais recentes</p>
          <div class="d-flex flex-wrap gap-3">

            <a href="#quiz" class="btn btn-hero btn-lg text-white" data-spa-link>
              <i class="fas fa-play me-2"></i> Iniciar Quiz
            </a>
            <a href="#saiba-mais" class="btn btn-hero btn-lg text-white" data-spa-link>
              <i class="fas fa-book me-2"></i> Guia Completo
            </a>
          </div>

          <div class="mt-5">
          <p class="display-4 fw-bold fs-4 text-white">
            <i class="cil-shield-alt me-3"></i> Proteja-se Online
          </p>
          <small class="lead fs-6 fw-lighter text-white">Aprenda a identificar golpes digitais e mantenha-se seguro no mundo digital</small>
          </div>

        </div>
        <div class="col-lg-6 text-center hero-image">
          <img src="https://img.icons8.com/fluency/300/000000/security-checked.png" class="img-fluid" alt="Ilustração de segurança digital">
        </div>
      </div>
    </div>
    </section>


<main class="container my-5">
<div class="row">
  <div class="col-lg-10 mx-auto">
    
    <!-- Estatísticas de Segurança -->
    <div class="stats-section">
      <div class="row text-center">
        <div class="col-md-3 stat-item">
          <div class="stat-number">73%</div>
          <small class="text-muted">dos brasileiros já sofreram tentativas de golpe digital</small>
        </div>
        <div class="col-md-3 stat-item">
          <div class="stat-number">R$ 2,9bi</div>
          <small class="text-muted">em prejuízos por crimes digitais em 2024</small>
        </div>
        <div class="col-md-3 stat-item">
          <div class="stat-number">156%</div>
          <small class="text-muted">aumento em golpes via WhatsApp</small>
        </div>
        <div class="col-md-3 stat-item">
          <div class="stat-number">24h</div>
          <small class="text-muted">tempo médio para descobrir um golpe</small>
        </div>
      </div>
    </div>

    <!-- Cards de Dicas Melhorados -->
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card enhanced-card card-primary h-100 shadow-sm">
          <div class="card-header text-white text-center">
            <i class="fas fa-lock icon-lg"></i>
            <h5><i class="fas fa-key me-2"></i>Senhas Inteligentes</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fas fa-ruler me-2 text-primary"></i>
                Use senhas com 12+ caracteres
              </li>
              <li class="list-group-item">
                <i class="fas fa-random me-2 text-primary"></i>
                Combine letras, números e símbolos
              </li>
              <li class="list-group-item">
                <i class="fas fa-ban me-2 text-primary"></i>
                Nunca reuse senhas importantes
              </li>
              <li class="list-group-item">
                <i class="fas fa-mobile-alt me-2 text-primary"></i>
                Use gerenciadores de senha
              </li>
            </ul>
            <div class="security-tip mt-3">
              <small><strong>Dica Pro:</strong> Crie frases fáceis de lembrar como "MeuGato#Dorme@Sol123!"</small>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card enhanced-card card-warning h-100 shadow-sm">
          <div class="card-header text-dark text-center">
            <i class="fas fa-exclamation-triangle icon-lg"></i>
            <h5><i class="fas fa-bug me-2"></i>Golpes em Alta</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between">
                <span><i class="fas fa-envelope me-2 text-warning"></i>Phishing (falsos e-mails)</span>
                <span class="threat-level threat-high">ALTO</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span><i class="fas fa-phone me-2 text-warning"></i>Falsos suportes técnicos</span>
                <span class="threat-level threat-high">ALTO</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span><i class="fas fa-gift me-2 text-warning"></i>Ofertas milagrosas</span>
                <span class="threat-level threat-medium">MÉDIO</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span><i class="fas fa-virus me-2 text-warning"></i>Ransomware</span>
                <span class="threat-level threat-high">ALTO</span>
              </li>
            </ul>
            <div class="security-tip mt-3">
              <small><strong>Novo:</strong> Golpes com IA gerando voz e vídeo falsos estão crescendo 300%</small>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card enhanced-card card-success h-100 shadow-sm">
          <div class="card-header text-white text-center">
            <i class="fas fa-shield-check icon-lg"></i>
            <h5><i class="fas fa-check-circle me-2"></i>Proteção Total</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fas fa-sync me-2 text-success"></i>
                Atualize sistemas regularmente
              </li>
              <li class="list-group-item">
                <i class="fas fa-fingerprint me-2 text-success"></i>
                Use autenticação em dois fatores
              </li>
              <li class="list-group-item">
                <i class="fas fa-search me-2 text-success"></i>
                Verifique URLs antes de clicar
              </li>
              <li class="list-group-item">
                <i class="fas fa-clock me-2 text-success"></i>
                Desconfie de urgências financeiras
              </li>
            </ul>
            <div class="security-tip mt-3">
              <small><strong>Lembre-se:</strong> A pressa é inimiga da segurança. Sempre pare e pense!</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção de Golpes Mais Comuns -->
    <div class="row mt-5">
      <div class="col-12">
        <h3 class="text-center mb-4"><i class="fas fa-eye me-2"></i>Reconheça os Sinais</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="security-tip">
              <h6><i class="fas fa-sms text-danger me-2"></i>SMS Suspeito</h6>
              <p class="mb-1">"Seu CPF foi usado em compra de R$ 1.200. Clique para cancelar: bit.ly/xxx"</p>
              <small class="text-muted">🚩 URL encurtada + urgência + valor alto</small>
            </div>
          </div>
          <div class="col-md-6">
            <div class="security-tip">
              <h6><i class="fas fa-envelope text-danger me-2"></i>Email Falso</h6>
              <p class="mb-1">"Sua conta será bloqueada em 24h. Atualize seus dados aqui."</p>
              <small class="text-muted">🚩 Prazo apertado + link suspeito + ameaça</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chamada para ação melhorada -->
    <div class="card alert-card mt-5 shadow">
      <div class="card-header text-white">
        <h4><i class="fas fa-bell me-2"></i>⚠️ Alerta Crítico de Segurança!</h4>
      </div>
      <div class="card-body text-white">
        <div class="row align-items-center">
          <div class="col-md-8">
            <p class="fs-5 mb-3">
              <strong>NUNCA compartilhe:</strong> Senhas, códigos SMS, dados do cartão ou CPF por telefone, email ou WhatsApp.
            </p>
            <div class="d-flex flex-wrap gap-2 mb-3">
              <span class="badge bg-light text-dark">🏦 Bancos não ligam pedindo dados</span>
              <span class="badge bg-light text-dark">📱 Códigos SMS são pessoais</span>
              <span class="badge bg-light text-dark">💳 Nunca diga o CVV por telefone</span>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <button class="btn btn-light btn-lg mb-2" data-coreui-toggle="modal" data-coreui-target="#emergencyModal">
              <i class="fas fa-phone me-2"></i>Canais Oficiais
            </button>
            <br>
            <small class="text-white-50">Em caso de dúvida, sempre confirme por canal oficial</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal Emergência Melhorado -->
<div class="modal fade" id="emergencyModal" tabindex="-1">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header bg-danger text-white">
        <h5 class="modal-title"><i class="fas fa-life-ring me-2"></i>Central de Ajuda e Canais Oficiais</h5>
          <button type="button" class="btn-close btn-close-white" data-coreui-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <h6><i class="fas fa-university text-primary me-2"></i>Principais Bancos:</h6>
            <ul class="list-unstyled">
              <li><strong>Banco do Brasil:</strong> 4004-0001</li>
              <li><strong>Caixa:</strong> 4004-0104</li>
              <li><strong>Bradesco:</strong> 4004-0022</li>
              <li><strong>Itaú:</strong> 4004-4828</li>
              <li><strong>Santander:</strong> 4004-3535</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h6><i class="fas fa-credit-card text-success me-2"></i>Cartões de Crédito:</h6>
            <ul class="list-unstyled">
              <li><strong>Visa:</strong> 0800-891-3680</li>
              <li><strong>Mastercard:</strong> 0800-891-3172</li>
              <li><strong>Elo:</strong> 0800-729-0172</li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-12">
            <h6><i class="fas fa-exclamation-circle text-warning me-2"></i>Denúncias e Ajuda:</h6>
            <ul class="list-unstyled">
              <li><i class="fas fa-phone text-danger me-2"></i><strong>Polícia Civil:</strong> 181 (Disque Denúncia)</li>
              <li><i class="fas fa-globe text-info me-2"></i><strong>SaferNet:</strong> <a href="https://www.safernet.org.br" target="_blank">www.safernet.org.br</a></li>
              <li><i class="fas fa-building text-secondary me-2"></i><strong>Procon:</strong> 151</li>
              <li><i class="fas fa-shield-alt text-primary me-2"></i><strong>CERT.br:</strong> <a href="https://www.cert.br" target="_blank">www.cert.br</a></li>
            </ul>
          </div>
        </div>
        <div class="alert alert-info mt-3">
          <i class="fas fa-lightbulb me-2"></i>
          <strong>Dica importante:</strong> Sempre que receber uma ligação suspeita, desligue e ligue você mesmo para o número oficial da instituição.
        </div>
      </div>
    </div>
  </div>
</div>
</main>
  `;
}
