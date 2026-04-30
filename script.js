let currentLevel = '';
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

const quizQuestions = {
    easy: [
        {
            question: "Qual país sediou a primeira Copa do Mundo em 1930?",
            options: ["Brasil", "Uruguai", "Itália", "França"],
            answer: "Uruguai"
        },
        {
            question: "Quantas estrelas a camisa da seleção brasileira tem, representando os títulos mundiais?",
            options: ["4", "5", "6", "7"],
            answer: "5"
        },
        {
            question: "Qual jogador é conhecido como 'Rei do Futebol'?",
            options: ["Maradona", "Messi", "Pelé", "Cristiano Ronaldo"],
            answer: "Pelé"
        },
        {
            question: "Em que ano o Brasil ganhou sua primeira Copa do Mundo?",
            options: ["1950", "1958", "1962", "1970"],
            answer: "1958"
        },
        {
            question: "Qual país venceu a Copa do Mundo de 2018?",
            options: ["Brasil", "Alemanha", "França", "Argentina"],
            answer: "França"
        },
        {
            question: "Qual é o nome da taça entregue ao campeão da Copa do Mundo?",
            options: ["Taça Jules Rimet", "Taça FIFA", "Taça do Campeão", "Taça de Ouro"],
            answer: "Taça FIFA"
        },
        {
            question: "Qual seleção é a maior campeã da Copa do Mundo?",
            options: ["Alemanha", "Itália", "Brasil", "Argentina"],
            answer: "Brasil"
        },
        {
            question: "De quanto em quanto tempo a Copa do Mundo é realizada?",
            options: ["2 anos", "3 anos", "4 anos", "5 anos"],
            answer: "4 anos"
        },
        {
            question: "Qual continente sediou a Copa do Mundo de 2010?",
            options: ["Europa", "América do Sul", "África", "Ásia"],
            answer: "África"
        },
        {
            question: "Qual foi o placar da final da Copa do Mundo de 2014 entre Alemanha e Argentina?",
            options: ["1x0", "2x1", "3x0", "0x0 (pênaltis)"],
            answer: "1x0"
        }
    ],
    medium: [
        {
            question: "Qual jogador marcou o gol do título na final da Copa do Mundo de 2014?",
            options: ["Müller", "Götze", "Klose", "Schürrle"],
            answer: "Götze"
        },
        {
            question: "Qual foi o único país a participar de todas as edições da Copa do Mundo?",
            options: ["Alemanha", "Itália", "Brasil", "Argentina"],
            answer: "Brasil"
        },
        {
            question: "Em que ano a Taça Jules Rimet foi roubada e nunca mais recuperada?",
            options: ["1966", "1970", "1983", "1994"],
            answer: "1983"
        },
        {
            question: "Qual foi o artilheiro da Copa do Mundo de 2002?",
            options: ["Rivaldo", "Ronaldo", "Klose", "Miroslav Klose"],
            answer: "Ronaldo"
        },
        {
            question: "Qual país sediou a Copa do Mundo de 2002, sendo a primeira vez na Ásia?",
            options: ["Japão", "Coreia do Sul", "Japão e Coreia do Sul", "China"],
            answer: "Japão e Coreia do Sul"
        },
        {
            question: "Qual jogador é o maior artilheiro da história das Copas do Mundo?",
            options: ["Pelé", "Ronaldo", "Miroslav Klose", "Gerd Müller"],
            answer: "Miroslav Klose"
        },
        {
            question: "Qual foi o resultado do famoso 'Maracanazo' na Copa de 1950?",
            options: ["Brasil 1 x 2 Uruguai", "Brasil 2 x 1 Uruguai", "Brasil 0 x 1 Uruguai", "Brasil 1 x 1 Uruguai"],
            answer: "Brasil 1 x 2 Uruguai"
        },
        {
            question: "Qual país foi o primeiro a vencer a Copa do Mundo fora de seu continente?",
            options: ["Brasil", "Alemanha", "Itália", "Argentina"],
            answer: "Brasil"
        },
        {
            question: "Quantas vezes a Holanda chegou à final da Copa do Mundo sem nunca ter vencido?",
            options: ["2", "3", "4", "5"],
            answer: "3"
        },
        {
            question: "Qual foi o ano da Copa do Mundo em que a 'Mão de Deus' de Maradona aconteceu?",
            options: ["1982", "1986", "1990", "1994"],
            answer: "1986"
        },
        {
            question: "Qual país sediou a Copa do Mundo de 1994?",
            options: ["Itália", "França", "Estados Unidos", "México"],
            answer: "Estados Unidos"
        },
        {
            question: "Qual jogador foi expulso na final da Copa do Mundo de 2006 por uma cabeçada?",
            options: ["Zidane", "Materazzi", "Henry", "Buffon"],
            answer: "Zidane"
        },
        {
            question: "Qual foi o placar da final da Copa do Mundo de 1998 entre Brasil e França?",
            options: ["1x0", "2x0", "3x0", "4x0"],
            answer: "3x0"
        },
        {
            question: "Qual país venceu a Copa do Mundo de 2010?",
            options: ["Alemanha", "Holanda", "Espanha", "Itália"],
            answer: "Espanha"
        },
        {
            question: "Qual é o nome do mascote da Copa do Mundo de 2014 no Brasil?",
            options: ["Fuleco", "Zakumi", "Goleo", "Willie"],
            answer: "Fuleco"
        },
        {
            question: "Qual foi o primeiro país africano a sediar uma Copa do Mundo?",
            options: ["Egito", "Nigéria", "África do Sul", "Marrocos"],
            answer: "África do Sul"
        },
        {
            question: "Qual jogador é conhecido por ter marcado o gol mais rápido da história das Copas?",
            options: ["Pelé", "Ronaldo", "Hakan Şükür", "Just Fontaine"],
            answer: "Hakan Şükür"
        },
        {
            question: "Qual país venceu a Copa do Mundo de 2022?",
            options: ["Brasil", "França", "Argentina", "Alemanha"],
            answer: "Argentina"
        },
        {
            question: "Qual foi o país que sediou a Copa do Mundo de 1970, a primeira transmitida em cores?",
            options: ["México", "Alemanha", "Inglaterra", "Suécia"],
            answer: "México"
        },
        {
            question: "Qual jogador é o único a ter vencido 3 Copas do Mundo como jogador?",
            options: ["Garrincha", "Pelé", "Cafu", "Zagallo"],
            answer: "Pelé"
        }
    ],
    hard: [
        {
            question: "Qual foi o único goleiro a ser eleito o melhor jogador de uma Copa do Mundo?",
            options: ["Lev Yashin", "Gordon Banks", "Oliver Kahn", "Gianluigi Buffon"],
            answer: "Oliver Kahn"
        },
        {
            question: "Qual país foi o primeiro a vencer a Copa do Mundo duas vezes consecutivas?",
            options: ["Brasil", "Itália", "Uruguai", "Alemanha"],
            answer: "Itália"
        },
        {
            question: "Qual foi o placar da final da Copa do Mundo de 1958 entre Brasil e Suécia?",
            options: ["3x2", "4x1", "5x2", "6x3"],
            answer: "5x2"
        },
        {
            question: "Qual jogador marcou o gol mais rápido em uma final de Copa do Mundo?",
            options: ["Vavá", "Pelé", "Johan Neeskens", "Zidane"],
            answer: "Johan Neeskens"
        },
        {
            question: "Qual foi o país que sediou a Copa do Mundo de 1966, conhecida pela polêmica do gol de Wembley?",
            options: ["Alemanha Ocidental", "Inglaterra", "Itália", "Suécia"],
            answer: "Inglaterra"
        },
        {
            question: "Qual jogador é o único a ter marcado em quatro Copas do Mundo diferentes?",
            options: ["Pelé", "Miroslav Klose", "Cristiano Ronaldo", "Messi"],
            answer: "Cristiano Ronaldo"
        },
        {
            question: "Qual foi o resultado da semifinal da Copa do Mundo de 2014 entre Brasil e Alemanha?",
            options: ["1x7", "2x6", "0x5", "3x4"],
            answer: "1x7"
        },
        {
            question: "Qual país foi o primeiro a sediar duas Copas do Mundo?",
            options: ["Brasil", "México", "Itália", "França"],
            answer: "México"
        },
        {
            question: "Qual foi o ano da Copa do Mundo em que a Alemanha Ocidental venceu a 'Batalha de Berna' contra a Hungria?",
            options: ["1950", "1954", "1958", "1962"],
            answer: "1954"
        },
        {
            question: "Qual jogador é o maior artilheiro em uma única edição da Copa do Mundo?",
            options: ["Pelé", "Gerd Müller", "Just Fontaine", "Ronaldo"],
            answer: "Just Fontaine"
        },
        {
            question: "Qual foi o país que sediou a Copa do Mundo de 1934?",
            options: ["França", "Itália", "Alemanha", "Suíça"],
            answer: "Itália"
        },
        {
            question: "Qual foi o único país a vencer a Copa do Mundo como anfitrião e não ter vencido nenhuma outra vez?",
            options: ["Uruguai", "Inglaterra", "França", "Argentina"],
            answer: "Uruguai"
        },
        {
            question: "Qual foi o placar da final da Copa do Mundo de 1970 entre Brasil e Itália?",
            options: ["3x1", "4x1", "2x0", "3x2"],
            answer: "4x1"
        },
        {
            question: "Qual jogador é conhecido como 'O Fenômeno'?",
            options: ["Ronaldinho Gaúcho", "Ronaldo Nazário", "Romário", "Kaká"],
            answer: "Ronaldo Nazário"
        },
        {
            question: "Qual foi o primeiro país asiático a chegar às semifinais de uma Copa do Mundo?",
            options: ["Japão", "Coreia do Sul", "Arábia Saudita", "China"],
            answer: "Coreia do Sul"
        },
        {
            question: "Qual foi o ano da Copa do Mundo em que a 'Laranja Mecânica' da Holanda encantou o mundo, mas não venceu?",
            options: ["1970", "1974", "1978", "1982"],
            answer: "1974"
        },
        {
            question: "Qual foi o país que sediou a Copa do Mundo de 1982?",
            options: ["México", "Espanha", "Itália", "Argentina"],
            answer: "Espanha"
        },
        {
            question: "Qual jogador é o único a ter marcado em duas finais de Copa do Mundo diferentes?",
            options: ["Pelé", "Vavá", "Zidane", "Ronaldo"],
            answer: "Vavá"
        },
        {
            question: "Qual foi o placar da final da Copa do Mundo de 2002 entre Brasil e Alemanha?",
            options: ["1x0", "2x0", "2x1", "3x0"],
            answer: "2x0"
        },
        {
            question: "Qual país foi o primeiro a ter um jogador expulso em uma final de Copa do Mundo?",
            options: ["Argentina", "Alemanha", "Itália", "Brasil"],
            answer: "Argentina"
        },
        {
            question: "Qual foi o ano da Copa do Mundo em que a 'Batalha de Santiago' entre Chile e Itália ocorreu?",
            options: ["1958", "1962", "1966", "1970"],
            answer: "1962"
        },
        {
            question: "Qual jogador é o maior artilheiro da seleção brasileira em Copas do Mundo?",
            options: ["Pelé", "Ronaldo", "Romário", "Ademir de Menezes"],
            answer: "Ronaldo"
        },
        {
            question: "Qual foi o país que sediou a Copa do Mundo de 1978, em meio a uma ditadura militar?",
            options: ["Brasil", "Chile", "Argentina", "Uruguai"],
            answer: "Argentina"
        },
        {
            question: "Qual foi o placar da final da Copa do Mundo de 1986 entre Argentina e Alemanha Ocidental?",
            options: ["2x1", "3x2", "3x1", "4x2"],
            answer: "3x2"
        },
        {
            question: "Qual jogador é o único a ter marcado um hat-trick em uma final de Copa do Mundo?",
            options: ["Pelé", "Geoff Hurst", "Ronaldo", "Kylian Mbappé"],
            answer: "Geoff Hurst"
        },
        {
            question: "Qual foi o país que sediou a Copa do Mundo de 1990?",
            options: ["Itália", "Alemanha Ocidental", "Espanha", "Estados Unidos"],
            answer: "Itália"
        },
        {
            question: "Qual foi o único país a ter dois jogadores dividindo a artilharia em uma Copa do Mundo?",
            options: ["Brasil", "Alemanha", "Argentina", "França"],
            answer: "Brasil"
        },
        {
            question: "Qual foi o placar da final da Copa do Mundo de 2006 entre Itália e França?",
            options: ["1x1 (Itália vence nos pênaltis)", "2x1", "1x0", "0x0 (França vence nos pênaltis)"],
            answer: "1x1 (Itália vence nos pênaltis)"
        },
        {
            question: "Qual jogador é o mais jovem a ter jogado em uma Copa do Mundo?",
            options: ["Pelé", "Norman Whiteside", "Samuel Eto'o", "Femi Opabunmi"],
            answer: "Norman Whiteside"
        },
        {
            question: "Qual foi o país que sediou a Copa do Mundo de 2014?",
            options: ["África do Sul", "Brasil", "Rússia", "Alemanha"],
            answer: "Brasil"
        }
    ]
};


function startGame(level) {
    console.log("Iniciando jogo no nível:", level); // Linha de depuração
    currentLevel = level;
    questions = quizQuestions[level];
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('level-selection').style.display = 'none';
    document.getElementById('quiz-game').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('feedback').textContent = '';

    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionNumberElement = document.getElementById('question-number');

    optionsContainer.innerHTML = ''; // Limpa as opções anteriores
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-button').style.display = 'none';

    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        questionNumberElement.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
        questionElement.textContent = q.question;

        q.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(option, q.answer);
            optionsContainer.appendChild(button);
        });
    } else {
        showResults();
    }
}

function checkAnswer(selectedOption, correctAnswer) {
    const optionsButtons = document.querySelectorAll('#options-container button');
    const feedbackElement = document.getElementById('feedback');

    optionsButtons.forEach(button => {
        button.disabled = true; // Desabilita todos os botões após a escolha
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption) {
            button.classList.add('incorrect');
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
        feedbackElement.textContent = 'Correto!';
        feedbackElement.style.color = '#28a745';
    } else {
        feedbackElement.textContent = `Errado! A resposta correta era: ${correctAnswer}`;
        feedbackElement.style.color = '#dc3545';
    }

    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        // Remove as classes de cor dos botões para a próxima pergunta
        const optionsButtons = document.querySelectorAll('#options-container button');
        optionsButtons.forEach(button => {
            button.classList.remove('correct', 'incorrect');
            button.disabled = false; // Reabilita os botões
        });
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-game').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').textContent = score;
    document.getElementById('total-questions').textContent = questions.length;
}

function restartGame() {
    document.getElementById('level-selection').style.display = 'block';
    document.getElementById('quiz-game').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    // Limpa classes de cor dos botões para um novo jogo
    const optionsButtons = document.querySelectorAll('#options-container button');
    optionsButtons.forEach(button => {
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
    });
}