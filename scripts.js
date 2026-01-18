 // =========================================================
    // CONFIGURATION 
    // =========================================================
    // Keys are now loaded from constants.js
    // Questions are loaded from questions.js

    const jumps = {
    7:39, 22: 42, 28: 84, 51: 67, 71: 91, 80: 99,
     99: 5, 92: 20, 87: 24, 73: 1, 56: 15, 47: 10
    };
let failedQuestions = []; 

    let playerPosition = 1;
    const totalSquares = 100;
    const board = document.getElementById('board');
    const statusEl = document.getElementById('status');
    const modal = document.getElementById('quiz-modal');
    const lbModal = document.getElementById('leaderboard-modal');
    
    let availableQuestions = []; 
    let timerSeconds = 0;
    let timerInterval;
    let gameActive = true;

    // Security listeners
    modal.addEventListener('contextmenu', e => e.preventDefault());
    modal.addEventListener('copy', e => e.preventDefault());
    
    function startTimer() {
        timerInterval = setInterval(() => {
            if(gameActive) {
                timerSeconds++;
                updateTimerDisplay();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
        const secs = (timerSeconds % 60).toString().padStart(2, '0');
        document.getElementById('timer').innerText = `${mins}:${secs}`;
    }

    // --- LEADERBOARD FUNCTIONS ---

 

    function closeLeaderboard() {
        lbModal.style.display = "none";
    }

    function triggerWin() {
        gameActive = false;
      let finalTimeStr = document.getElementById("timer").innerText;

    // Update status text
    document.getElementById("status").innerText = "Congratulations!";

    // Show the new Win Modal immediately
    showWinModal(finalTimeStr);
        
         

    

if (failedQuestions.length > 0) {
        document.getElementById("review-btn").style.display = "inline-block"; 
    } else {
        // Explicitly ensure it stays hidden if they had a perfect game
        document.getElementById("review-btn").style.display = "none";
    }


document.querySelector('.control-btn').innerText = "Retry";
 document.querySelector('.control-btn').onclick = function() {
        window.location.reload();
    };


    }


        // --- GAME LOGIC ---

    function createBoard() {
        board.innerHTML = "";
        const rows = 10;
        const cols = 10;

        for (let r = rows; r >= 1; r--) {
            let rowBoxNumbers = [];
            let start = (r - 1) * cols + 1; 
            
            for (let c = 0; c < cols; c++) {
                rowBoxNumbers.push(start + c);
            }

            if (r % 2 === 0) {
                rowBoxNumbers.reverse();
            }

            rowBoxNumbers.forEach(num => {
                let box = document.createElement('div');
                box.className = 'box';
                box.id = 'box-' + num;
                box.innerHTML = num;

                // Restored text logic for snakes/ladders
                if(jumps[num]) {
                    let typeClass = jumps[num] > num ? "ladder-text" : "snake-text";
                    let symbol = jumps[num] > num ? "🪜" : "🐍";
                    box.innerHTML += `<div class='special ${typeClass}'>${symbol} -> ${jumps[num]}</div>`;
                }

                board.appendChild(box);
            });
        }
        movePlayerToBox(1);
    }

    function movePlayerToBox(boxNum) {
        const existing = document.getElementById('player');
        if(existing) existing.remove();

        const target = document.getElementById('box-' + boxNum);
        if(target) {
            let p = document.createElement('div');
            p.id = 'player';
            target.appendChild(p);
        }
    }

    function startTurn() {
        if(!gameActive) return; 

        if (typeof questions === 'undefined' || questions.length === 0) {
            alert("Error: 'questions.js' file not found.");
            return;
        }

        if (availableQuestions.length === 0) {
            availableQuestions = [...questions];
        }

        showQuestion();
    }

    function showQuestion() {
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const qData = availableQuestions[randomIndex];
        availableQuestions.splice(randomIndex, 1);
        
        document.getElementById('question-text').innerText = qData.q;
        const optsDiv = document.getElementById('options-container');
        optsDiv.innerHTML = ""; 

        qData.options.forEach((opt, index) => {
            let btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => checkAnswer(index, qData.correct, qData);
            optsDiv.appendChild(btn);
        });

        modal.style.display = "block";
    }

    function checkAnswer(selected, correct, currentQuestion) {

        modal.style.display = "none";
        
        if(selected === correct) {
            rollDice();
        } else {
            statusEl.innerText = "Incorrect! Turn skipped.";
            alert("Wrong Answer! You remain at square " + playerPosition);
failedQuestions.push({
            question: currentQuestion.q,   // The question text
            correctAnswer: currentQuestion.options[currentQuestion.correct] // The correct answer text/index
        });
        }
    }

    function rollDice() {
        let roll = Math.floor(Math.random() * 6) + 1;
        statusEl.innerText = `Correct! Rolled a ${roll}.`;
        updatePosition(roll);
    }

    function updatePosition(roll) {
        playerPosition += roll;
        if (playerPosition > totalSquares) playerPosition = totalSquares;
        
        statusEl.innerText += ` Moved to ${playerPosition}.`;
        movePlayerToBox(playerPosition);

        if(playerPosition === totalSquares) {
            triggerWin();
        }

        if(jumps[playerPosition]) {
            setTimeout(() => {
                let newPos = jumps[playerPosition];
                let msg = newPos > playerPosition ? "Ladder! Going up!" : "Snake! Going down!";
                alert(msg);
                playerPosition = newPos;
                movePlayerToBox(playerPosition);
                statusEl.innerText += ` ${msg} Landed at ${playerPosition}`;
            }, 500);
        }
    }

function showRevision() {

    let reviewHtml = "<h3 style='color: white;'>Revision: Questions you missed</h3>";

    if (failedQuestions.length === 0) {
        reviewHtml += "<p>Perfect score! No mistakes to review.</p>";
    } else {
        reviewHtml += "<ul style='text-align:left;color: white;'>";
        failedQuestions.forEach(item => {
            reviewHtml += `
                <li style="margin-bottom: 10px;">
                    <strong>Q: ${item.question}</strong><br>
                    <span style="color: white;">Correct Answer: ${item.correctAnswer}</span>
                </li>`;
        });
        reviewHtml += "</ul>";
    }

    // Reuse your quiz-modal to show the list
    let modalBody = document.getElementById("quiz-modal"); 
    modalBody.innerHTML = reviewHtml;
    modalBody.style.display = "block"; // Make sure it's visible
    
    // Add a 'Close' button to the revision view so they can get back to the 'Play Again' screen
    modalBody.innerHTML += '<button class="control-btn" onclick="document.getElementById(\'quiz-modal\').style.display=\'none\'">Close</button>';
}


/// WIn modal

// Trigger this when the player wins
function showWinModal(finalTime) {
    const modal = document.getElementById("win-modal");
    
    // 1. Show the time
    document.getElementById("win-time-display").innerText = finalTime;
    
    // 2. Auto-fill name from memory (fixing your previous issue)
    const savedName = localStorage.getItem("savedPlayerName");
    if (savedName) {
        document.getElementById("win-name-input").value = savedName;
    }

    // 3. Show the modal
    modal.style.display = "block";
}

// Trigger this when clicking "Submit Score"
function submitAndClose() {
    const nameInput = document.getElementById("win-name-input");
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter a name!");
        return;
    }
 document.getElementById("win-modal").style.display = "none";

  }



    // Initialize
    createBoard();
    startTimer();