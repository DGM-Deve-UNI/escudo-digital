function QuizPage() {
  return `
<main class="container my-5 w-100">
  <div class="row">
    <div class="quiz-container">
      <div class="card quiz-card shadow">
        <!-- Header com gradiente -->
        <div class="quiz-header text-white">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h2><i class="fas fa-brain me-3"></i>Quiz de Segurança Digital</h2>
              <p class="quiz-subtitle mb-0">Teste seus conhecimentos sobre proteção online</p>
            </div>
            <div class="question-difficulty difficulty-medium">
              <i class="fas fa-star me-1"></i>Médio
            </div>
          </div>
        </div>

        <!-- Seção de progresso -->
        <div class="progress-section">
          <div class="progress-info">
            <div class="question-counter">
              <i class="fas fa-list-ol me-2"></i>
              Questão <span id="current-question">1</span> de <span id="total-questions">10</span>
            </div>
            <div class="score-display">
              <i class="fas fa-trophy me-1"></i>
              <span id="current-score">0</span>/<span id="max-score">10</span> pontos
            </div>
          </div>
          <div class="progress">
            <div id="progress-bar" class="progress-bar" style="width: 10%" role="progressbar"></div>
          </div>
        </div>
        
        <div class="card-body question-section">
          <!-- Categoria da questão -->
          <div class="question-category">
            <i class="fas fa-shield-alt me-1"></i>
            <span id="question-category">Phishing e Golpes</span>
          </div>
          
          <!-- Questão -->
          <h4 id="question-text" class="question-text">
            Você recebe um e-mail urgente do seu banco pedindo para clicar em um link e atualizar seus dados. O que você deve fazer?
          </h4>

          <!-- Cenário opcional -->
          <div id="question-scenario" class="question-scenario d-none">
            <i class="fas fa-scenario me-2"></i>
            <span id="scenario-text"></span>
          </div>
          
          <!-- Opções -->
          <div id="options-container" class="options-container">
            <div class="option-item">
              <span class="option-letter">A</span>
              Clicar no link imediatamente para resolver o problema
            </div>
            <div class="option-item">
              <span class="option-letter">B</span>
              Ignorar o e-mail e entrar no site do banco diretamente pelo navegador
            </div>
            <div class="option-item">
              <span class="option-letter">C</span>
              Responder o e-mail pedindo mais informações
            </div>
            <div class="option-item">
              <span class="option-letter">D</span>
              Encaminhar o e-mail para amigos perguntando se é verdadeiro
            </div>
          </div>
          
          <!-- Feedback -->
          <div id="feedback" class="feedback d-none">
            <div class="feedback-title">
              <i class="feedback-icon fas fa-check-circle"></i>
              Resposta Correta!
            </div>
            <p class="mb-1">Excelente! Sempre desconfie de e-mails urgentes pedindo dados pessoais.</p>
            <small><strong>Dica:</strong> Bancos nunca pedem informações sensíveis por e-mail.</small>
          </div>
          
          <!-- Botão -->
          <div class="d-flex justify-content-between align-items-center">
            <div class="quiz-stats">
              <div class="stat-item">
                <div class="stat-value" id="streak-count">0</div>
                <div class="stat-label">Sequência</div>
              </div>
              <div class="stat-item">
                <div class="stat-value" id="accuracy">0%</div>
                <div class="stat-label">Precisão</div>
              </div>
              <div class="stat-item">
                <div class="stat-value" id="time-left">30s</div>
                <div class="stat-label">Tempo</div>
              </div>
            </div>
            
            <button id="next-btn" class="btn btn-next text-white mt-3">
              <span class="position-relative">
                Próxima <i class="fas fa-arrow-right ms-2"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    `;
}
