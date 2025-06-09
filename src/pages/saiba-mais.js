function SaibaMaisPage() {
  return `
      <main class="container my-5">
          <div class="row">
              <div class="col-lg-11 mx-auto">
                  <div class="card shadow-lg border-0">
                      <div class="card-header gradient-bg text-white d-flex align-items-center py-4">
                          <div class="security-icon icon-pulse p-4 me-3">
                              <i class="cil-shield-alt text-white" style="font-size: 2rem;"></i>
                          </div>
                          <div>
                              <h1 class="mb-2">Segurança Digital</h1>
                              <p class="mb-0 opacity-75">Proteja-se no mundo digital com conhecimento e práticas seguras</p>
                          </div>
                      </div>
                      
                      <div class="card-body p-5">
                          <div class="row mb-5">
                              <div class="col-12 text-center">
                                  <p class="lead text-muted">
                                      A segurança digital é fundamental nos dias atuais. Conheça os principais riscos, 
                                      aprenda como se proteger e saiba onde buscar ajuda especializada.
                                  </p>
                              </div>
                          </div>
  
                          
                          <!-- Principais Ameaças -->
                          <div class="row g-4 mb-5">
                              <div class="col-12">
                                  <h2 class="text-gradient pb-2 mb-4">
                                      <i class="cil-bug me-2"></i>
                                      Principais Ameaças Digitais
                                  </h2>
                              </div>
                              
                              <div class="col-md-6 col-lg-4">
                                  <div class="card h-100 border-0 shadow-sm card-hover" id="phishing">
                                      <div class="card-body text-center">
                                          <div class="mb-3">
                                              <i class="cil-envelope-open text-danger" style="font-size: 3rem;"></i>
                                          </div>
                                          <h5 class="card-title text-danger">Phishing</h5>
                                          <p class="card-text small">
                                              Tentativa de roubar dados pessoais fingindo ser uma instituição confiável através de 
                                              emails, SMS ou mensagens falsas.
                                          </p>
                                          <div class="alert-box p-3 rounded">
                                              <small class="text-muted">
                                                  <strong>Como identificar:</strong> Verifique o remetente completo, 
                                                  links suspeitos e urgência excessiva na mensagem.
                                              </small>
                                          </div>
                                          <div class="mt-3">
                                              <strong class="text-danger">Dados mais roubados:</strong><br>
                                              <small>Senhas bancárias, CPF, números de cartão</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="col-md-6 col-lg-4">
                                  <div class="card h-100 border-0 shadow-sm card-hover" id="malware">
                                      <div class="card-body text-center">
                                          <div class="mb-3">
                                              <i class="cil-bug text-warning" style="font-size: 3rem;"></i>
                                          </div>
                                          <h5 class="card-title text-warning">Malware</h5>
                                          <p class="card-text small">
                                              Software malicioso que pode infectar seus dispositivos através de downloads, 
                                              anexos ou sites comprometidos.
                                          </p>
                                          <div class="alert-box p-3 rounded">
                                              <small class="text-muted">
                                                  <strong>Prevenção:</strong> Use antivírus atualizado e evite downloads 
                                                  de fontes desconhecidas.
                                              </small>
                                          </div>
                                          <div class="mt-3">
                                              <strong class="text-warning">Principais Tipos:</strong><br>
                                              <small>E-mails falsos, mensagens no WhatsApp, sites clonados</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="col-md-6 col-lg-4">
                                  <div class="card h-100 border-0 shadow-sm card-hover">
                                      <div class="card-body text-center">
                                          <div class="mb-3">
                                              <i class="cil-wifi text-info" style="font-size: 3rem;"></i>
                                          </div>
                                          <h5 class="card-title text-info">Redes Inseguras</h5>
                                          <p class="card-text small">
                                              Redes Wi-Fi públicas podem ser interceptadas por criminosos para capturar 
                                              dados transmitidos.
                                          </p>
                                          <div class="info-box p-3 rounded">
                                              <small class="text-muted">
                                                  <strong>Dica:</strong> Use VPN em redes públicas e evite acessar 
                                                  dados sensíveis.
                                              </small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          <!-- Como se Proteger - Senhas -->
                          <section id="senhas" class="mb-5">
                              <div class="card shadow">
                                  <div class="card-header bg-warning text-dark">
                                      <h2><i class="cil-lock-locked me-2"></i>Crie Senhas Fortes e Seguras</h2>
                                  </div>
                                  <div class="card-body">
                                      <div class="row">
                                          <div class="col-md-6">
                                              <h3>Regras Básicas:</h3>
                                              <ul>
                                                  <li><i class="cil-check text-success me-2"></i>Use senhas com pelo menos 12 caracteres</li>
                                                  <li><i class="cil-check text-success me-2"></i>Combine letras, números e símbolos</li>
                                                  <li><i class="cil-check text-success me-2"></i>Evite informações pessoais óbvias</li>
                                                  <li><i class="cil-check text-success me-2"></i>Troque a cada 3 meses</li>
                                              </ul>
                                          </div>
                                          <div class="col-md-6">
                                              <h3>Exemplos Práticos:</h3>
                                              <table class="table">
                                                  <thead>
                                                      <tr>
                                                          <th>Ruim</th>
                                                          <th>Boa</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td class="text-danger">marcia123</td>
                                                          <td class="text-success">M@rc!a-2023-Segura</td>
                                                      </tr>
                                                      <tr>
                                                          <td class="text-danger">senha</td>
                                                          <td class="text-success">S3nh@F0rt3!XYZ</td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
  
                                      <h3 class="mt-4"><i class="cil-apps me-2"></i>Gerenciadores de Senhas</h3>
                                      <div class="alert alert-success">
                                          <p>Use ferramentas como:</p>
                                          <ul>
                                              <li><a href="https://bitwarden.com/" target="_blank">Bitwarden</a> (gratuito)</li>
                                              <li><a href="https://1password.com/" target="_blank">1Password</a> (pago)</li>
                                              <li><a href="https://www.lastpass.com/" target="_blank">LastPass</a></li>
                                          </ul>
                                          <p class="mb-0">Eles criam e armazenam senhas complexas automaticamente.</p>
                                      </div>
                                  </div>
                              </div>
                          </section>
  
                          <!-- Dicas de Proteção -->
                          <div class="row g-4 mb-5" id="protecao">
                              <div class="col-12">
                                  <h2 class="text-gradient mb-4">
                                      <i class="cil-shield-alt me-2"></i>
                                      Como Se Proteger
                                  </h2>
                              </div>
  
                              <div class="col-md-6">
                                  <div class="card h-100 border-0 shadow-sm card-hover">
                                      <div class="card-body">
                                          <div class="d-flex align-items-center mb-3">
                                              <i class="cil-mobile text-primary fs-2 me-3"></i>
                                              <h5 class="card-title mb-0">Autenticação 2FA</h5>
                                          </div>
                                          <p class="mb-3">
                                              A autenticação de dois fatores adiciona uma camada extra de segurança, 
                                              exigindo um segundo método de verificação além da senha.
                                          </p>
                                          <div class="tip-box p-3 rounded">
                                              <small class="text-muted">
                                                  <strong>Ative 2FA em:</strong> Email, redes sociais, bancos, 
                                                  e-commerce e serviços importantes.
                                              </small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="col-md-6">
                                  <div class="card h-100 border-0 shadow-sm card-hover">
                                      <div class="card-body">
                                          <div class="d-flex align-items-center mb-3">
                                              <i class="cil-sync text-info fs-2 me-3"></i>
                                              <h5 class="card-title mb-0">Atualizações</h5>
                                          </div>
                                          <p class="mb-3">
                                              Mantenha seus dispositivos, aplicativos e sistemas operacionais 
                                              sempre atualizados para corrigir vulnerabilidades.
                                          </p>
                                          <div class="info-box p-3 rounded">
                                              <small class="text-muted">
                                                  <strong>Configure:</strong> Atualizações automáticas quando possível 
                                                  para maior praticidade.
                                              </small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="col-md-6">
                                  <div class="card h-100 border-0 shadow-sm card-hover">
                                      <div class="card-body">
                                          <div class="d-flex align-items-center mb-3">
                                              <i class="cil-backup-restore text-warning fs-2 me-3"></i>
                                              <h5 class="card-title mb-0">Backup Seguro</h5>
                                          </div>
                                          <p class="mb-3">
                                              Faça backup regular dos seus dados importantes em locais seguros 
                                              e testados periodicamente.
                                          </p>
                                          <div class="tip-box p-3 rounded">
                                              <small class="text-muted">
                                                  <strong>Regra 3-2-1:</strong> 3 cópias, 2 mídias diferentes, 
                                                  1 em local externo.
                                              </small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="col-md-6">
                                  <div class="card h-100 border-0 shadow-sm card-hover">
                                      <div class="card-body">
                                          <div class="d-flex align-items-center mb-3">
                                              <i class="cil-magnifying-glass text-success fs-2 me-3"></i>
                                              <h5 class="card-title mb-0">Verificação de Links</h5>
                                          </div>
                                          <p class="mb-3">
                                              Sempre verifique remetentes e passe o mouse sobre links antes de clicar. 
                                              Bancos nunca pedem senhas por e-mail ou telefone.
                                          </p>
                                          <div class="tip-box p-3 rounded">
                                              <small class="text-muted">
                                                  <strong>Lembre-se:</strong> Cheque o e-mail completo, não apenas o nome 
                                                  do remetente.
                                              </small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          <!-- O que fazer se for vítima -->
                          <div class="row g-4 mb-5">
                              <div class="col-12">
                                  <h2 class="text-gradient mb-4">
                                      <i class="cil-medical-cross me-2"></i>
                                      Se Você For Vítima de Fraude
                                  </h2>
                              </div>
  
                              <div class="col-md-4">
                                  <div class="card h-100 border-0 shadow-sm card-hover">
                                      <div class="card-body text-center">
                                          <div class="mb-3">
                                              <i class="cil-speedometer text-danger" style="font-size: 3rem;"></i>
                                          </div>
                                          <h5 class="card-title text-danger">Ação Imediata</h5>
                                          <ul class="list-unstyled text-start">
                                              <li class="mb-2">🚨 Contate seu banco imediatamente</li>
                                              <li class="mb-2">🔒 Bloqueie cartões comprometidos</li>
                                              <li class="mb-2">📱 Altere todas as senhas</li>
                                              <li class="mb-2">🛡️ Monitore suas contas</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="col-md-4">
                                  <div class="card h-100 border-0 shadow-sm card-hover">
                                      <div class="card-body text-center">
                                          <div class="mb-3">
                                              <i class="cil-description text-warning" style="font-size: 3rem;"></i>
                                          </div>
                                          <h5 class="card-title text-warning">Documentação</h5>
                                          <ul class="list-unstyled text-start">
                                              <li class="mb-2">📄 Registre Boletim de Ocorrência</li>
                                              <li class="mb-2">📸 Capture evidências (prints)</li>
                                              <li class="mb-2">📝 Anote todos os detalhes</li>
                                              <li class="mb-2">🕐 Registre datas e horários</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="col-md-4">
                                  <div class="card h-100 border-0 shadow-sm card-hover">
                                      <div class="card-body text-center">
                                          <div class="mb-3">
                                              <i class="cil-people text-info" style="font-size: 3rem;"></i>
                                          </div>
                                          <h5 class="card-title text-info">Busque Ajuda</h5>
                                          <ul class="list-unstyled text-start">
                                              <li class="mb-2">📞 Canais oficiais das empresas</li>
                                              <li class="mb-2">🏛️ Órgãos de proteção ao consumidor</li>
                                              <li class="mb-2">👨‍💻 Profissionais especializados</li>
                                              <li class="mb-2">📚 Comunidades de segurança</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          <!-- Recursos Confiáveis -->
                          <div class="row g-4 mb-5">
                              <div class="col-12">
                                  <h2 class="text-gradient mb-4">
                                      <i class="cil-external-link me-2"></i>
                                      Recursos Confiáveis
                                  </h2>
                              </div>
  
                              <div class="col-md-6 mb-4">
                                  <div class="card h-100">
                                      <div class="card-header bg-primary text-white">
                                          <h4><i class="cil-globe-alt me-2"></i>Internacional</h4>
                                      </div>
                                      <div class="card-body">
                                          <ul class="list-group list-group-flush">
                                              <li class="list-group-item">
                                                  <a href="https://www.cisa.gov/stopransomware" target="_blank">CISA (EUA) - Guia contra Ransomware</a>
                                              </li>
                                              <li class="list-group-item">
                                                  <a href="https://www.enisa.europa.eu/topics/cybersecurity-education" target="_blank">ENISA (UE) - Educação em Cibersegurança</a>
                                              </li>
                                              <li class="list-group-item">
                                                  <a href="https://www.kaspersky.com.br/resource-center" target="_blank">Kaspersky - Recursos Educativos</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
  
                              <div class="col-md-6 mb-4">
                                  <div class="card h-100">
                                      <div class="card-header bg-success text-white">
                                          <h4><i class="cil-flag me-2"></i>Brasil</h4>
                                      </div>
                                      <div class="card-body">
                                          <ul class="list-group list-group-flush">
                                              <li class="list-group-item">
                                                  <a href="https://cert.br/" target="_blank">CERT.br - Centro de Estudos de Segurança</a>
                                              </li>
                                              <li class="list-group-item">
                                                  <a href="https://www.bcb.gov.br/acessoinformacao/legado?url=https:%2F%2Fwww.bcb.gov.br%2Fpre%2Fbcuniversidade%2FIntroducaoSegurancaDigital%2Fintroducao_seguranca_digital.asp" target="_blank">Banco Central - Segurança Digital</a>
                                              </li>
                                              <li class="list-group-item">
                                                  <a href="https://www.safernet.org.br/denuncie" target="_blank">SaferNet - Denúncias de Crimes Online</a>
                                              </li>
                                              <li class="list-group-item">
                                                  <a href="https://www.procon.sp.gov.br/" target="_blank">Procon - Proteção ao Consumidor</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          <!-- Lembretes Finais -->
                          <div class="row mb-5">
                              <div class="col-12">
                                  <div class="card border-0 shadow-sm" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">
                                      <div class="card-body p-4">
                                          <div class="row align-items-center">
                                              <div class="col-md-2 text-center">
                                                  <i class="cil-lightbulb text-warning" style="font-size: 4rem;"></i>
                                              </div>
                                              <div class="col-md-10">
                                                  <h4 class="text-gradient mb-3">Lembre-se Sempre</h4>
                                                  <p class="mb-3">
                                                      A segurança digital é um processo contínuo que requer vigilância constante. 
                                                      Mantenha-se atualizado sobre novas ameaças e sempre desconfie de ofertas 
                                                      "boas demais para ser verdade".
                                                  </p>
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <div class="tip-box p-3 rounded mb-3">
                                                              <strong>💡 Dica de Ouro:</strong> Quando em dúvida, sempre consulte 
                                                              diretamente a empresa através de canais oficiais.
                                                          </div>
                                                      </div>
                                                      <div class="col-md-6">
                                                          <div class="info-box p-3 rounded mb-3">
                                                              <strong>🎯 Compartilhe:</strong> Ajude amigos e familiares a se 
                                                              protegerem compartilhando essas informações.
                                                          </div>
                                                      </div>
                                                  </div>
                                                  
                                                  <div class="alert alert-info mt-3">
                                                      <h5><i class="cil-lightbulb me-2"></i>Caso Real:</h5>
                                                      <p class="mb-0">Em 2023, golpistas se passaram pelo Banco Central pedindo atualização cadastral. <strong>Nunca caia nisso!</strong> Bancos não solicitam dados por links.</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          <!-- CTA Final -->
                          <div class="text-center py-4 bg-light rounded-3 mb-4">
                              <h3 class="mb-4">Teste seu conhecimento agora!</h3>
                              <a href="#quiz" class="btn btn-primary btn-lg" data-spa-link>
                                  <i class="cil-puzzle me-2"></i>Ir para o Quiz de Segurança
                              </a>
                          </div>
  
                          <div class="text-center">
                              <button onclick="location.hash = 'home'" class="btn btn-outline-primary btn-lg px-5 py-3">
                                  <i class="cil-arrow-left me-2"></i>
                                  Voltar para Início
                              </button>
                          </div>
  
                      </div>
                  </div>
              </div>
          </div>
      </main>
    `;
}
