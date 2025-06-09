// Adiciona interatividade aos cards
document.addEventListener("DOMContentLoaded", function () {
  // Cards hover effect
  document.querySelectorAll(".enhanced-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Animação de contadores nas estatísticas
  function animateCounters() {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach((counter) => {
      const target = counter.textContent;
      let current = 0;

      if (target.includes("%")) {
        const num = parseInt(target);
        const timer = setInterval(() => {
          current += Math.ceil(num / 100);
          if (current >= num) {
            current = num;
            clearInterval(timer);
          }
          counter.textContent = current + "%";
        }, 20);
      }
    });
  }

  // Ativa animação quando a seção de stats fica visível
  const statsSection = document.querySelector(".stats-section");

  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(statsSection);
  }
});
// ===========================================================
// document.addEventListener("DOMContentLoaded", function () {
//   // Elementos do DOM
//   const optionsContainer = document.getElementById("options-container");
//   const feedbackElement = document.getElementById("feedback");
//   const nextButton = document.getElementById("next-btn");
//   const progressBar = document.getElementById("progress-bar");
//   const currentQuestionSpan = document.getElementById("current-question");
//   const currentScoreSpan = document.getElementById("current-score");
//   const accuracySpan = document.getElementById("accuracy");
//   const streakSpan = document.getElementById("streak-count");

//   // Estado do quiz
//   let currentQuestion = 1;
//   let score = 0;
//   let streak = 0;
//   let maxStreak = 0;
//   let answeredQuestions = 0;
//   let selectedOption = null;

//   // Dados de exemplo do quiz
//   const quizData = [
//     {
//       category: "Phishing e Golpes",
//       difficulty: "medium",
//       question:
//         "Você recebe um e-mail urgente do seu banco pedindo para clicar em um link e atualizar seus dados. O que você deve fazer?",
//       options: [
//         "Clicar no link imediatamente para não perder acesso à conta",
//         "Ignorar o e-mail e ligar diretamente para o banco",
//         "Encaminhar o e-mail para amigos perguntando se é verdadeiro",
//         "Responder o e-mail perguntando se é legítimo",
//       ],
//       correct: 1,
//       explanation:
//         "Bancos nunca pedem informações sensíveis por e-mail. Sempre verifique através dos canais oficiais.",
//     },
//   ];

//   // Adicionar interatividade às opções
//   function initializeOptions() {
//     const options = document.querySelectorAll(".option-item");

//     options.forEach((option, index) => {
//       option.addEventListener("click", function () {
//         if (selectedOption !== null) return; // Já respondeu

//         // Remove seleção anterior
//         options.forEach((opt) => opt.classList.remove("selected"));

//         // Adiciona seleção atual
//         this.classList.add("selected");
//         selectedOption = index;

//         // Mostra feedback após um pequeno delay
//         setTimeout(() => {
//           showFeedback(index);
//         }, 500);
//       });
//     });
//   }

//   // Mostrar feedback
//   function showFeedback(selectedIndex) {
//     const options = document.querySelectorAll(".option-item");
//     const correctIndex = 1; // Resposta correta (B)

//     // Marcar resposta correta
//     options[correctIndex].classList.add("correct");

//     // Marcar resposta incorreta se diferente da correta
//     if (selectedIndex !== correctIndex) {
//       options[selectedIndex].classList.add("incorrect");
//       feedbackElement.classList.add("incorrect");
//       feedbackElement.innerHTML = `
//         <div class="feedback-title">
//           <i class="feedback-icon fas fa-times-circle"></i>
//           Resposta Incorreta
//         </div>
//         <p class="mb-1">A resposta correta é ligar diretamente para o banco.</p>
//         <small><strong>Lembre-se:</strong> Bancos nunca pedem informações sensíveis por e-mail.</small>
//       `;
//     } else {
//       score++;
//       streak++;
//       feedbackElement.classList.add("correct");
//       feedbackElement.innerHTML = `
//         <div class="feedback-title">
//           <i class="feedback-icon fas fa-check-circle"></i>
//           Resposta Correta!
//         </div>
//         <p class="mb-1">Excelente! Sempre desconfie de e-mails urgentes pedindo dados pessoais.</p>
//         <small><strong>Dica:</strong> Bancos nunca pedem informações sensíveis por e-mail.</small>
//       `;
//     }

//     // Atualizar estatísticas
//     updateStats();

//     // Mostrar feedback e botão
//     feedbackElement.classList.remove("d-none");
//     nextButton.classList.remove("d-none");

//     // Desabilitar outras opções
//     options.forEach((option) => {
//       option.style.pointerEvents = "none";
//     });
//   }

//   // Atualizar estatísticas
//   function updateStats() {
//     answeredQuestions++;
//     const accuracy = Math.round((score / answeredQuestions) * 100);

//     currentScoreSpan.textContent = score;
//     accuracySpan.textContent = accuracy + "%";
//     streakSpan.textContent = streak;

//     // Atualizar barra de progresso
//     const progress = (currentQuestion / 10) * 100;
//     progressBar.style.width = progress + "%";
//   }

//   // Timer de contagem regressiva (exemplo)
//   function startTimer() {
//     let timeLeft = 30;
//     const timeElement = document.getElementById("time-left");

//     const timer = setInterval(() => {
//       timeLeft--;
//       timeElement.textContent = timeLeft + "s";

//       if (timeLeft <= 0 || selectedOption !== null) {
//         clearInterval(timer);
//       }
//     }, 1000);
//   }

//   // Botão próxima questão
//   nextButton.addEventListener("click", function () {
//     // Simular próxima questão
//     if (currentQuestion < 10) {
//       currentQuestion++;
//       currentQuestionSpan.textContent = currentQuestion;

//       // Reset para próxima questão
//       selectedOption = null;
//       feedbackElement.classList.add("d-none");
//       feedbackElement.classList.remove("correct", "incorrect");
//       nextButton.classList.add("d-none");

//       const options = document.querySelectorAll(".option-item");
//       options.forEach((option) => {
//         option.classList.remove("selected", "correct", "incorrect");
//         option.style.pointerEvents = "auto";
//       });

//       startTimer();
//     } else {
//       // Finalizar quiz
//       alert(`Quiz finalizado! Sua pontuação: ${score}/10`);
//     }
//   });

//   // Inicializar
//   initializeOptions();
//   startTimer();
// });