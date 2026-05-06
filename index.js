let placingPhase = true;


function disableBoard(board) {
    board.forEach(r => r.style.pointerEvents = "none");
}

function enableBoard(board) {
    board.forEach(r => {
        if (r.textContent === "") {
            r.style.pointerEvents = "auto";
        }
    });
}

const rutor = document.querySelectorAll('.box');





          window.alert("sätt ut din första båt(4 rutor)");
          
     
          let aktivSpelare = 1;
        let båtlängd = [2, 4, 3, 3, 5];
        let aktuellBåt = 0;
        let valdaRutor = [];
        
        rutor.forEach(ruta => {
            ruta.addEventListener('click', () => {

                if (aktivSpelare !== 1 || !placingPhase) return;
                if(aktuellBåt >= båtlängd.length){
                    alert("nu har du lagt ut alla dina båtar");

                    rutor.forEach(ruta => {
                        ruta.style.backgroundColor = "white";
                    });
                    
                    aktivSpelare = 2;
                    
                    return;
                }
        
                let id = Number(ruta.id.replace("ruta", ""));
        
                // första klicket
                if (valdaRutor.length === 0) {
                    ruta.style.backgroundColor = "green";
                    ruta.dataset.ship = "true";
                    valdaRutor.push(id);
                    return;
                }
        
                let senaste = valdaRutor[valdaRutor.length - 1];
        
                let giltig =
                    (Math.abs(id - senaste) === 1 &&
                     Math.floor((id - 1) / 10) === Math.floor((senaste - 1) / 10))
                    ||
                    (Math.abs(id - senaste) === 10);
        
                if (!giltig) {
                    alert("Du måste bygga båten i en rak linje!");
                    return;
                }
        
                ruta.style.backgroundColor = "green";
                ruta.dataset.ship = "true";
                valdaRutor.push(id);
        
                // ✔ Kolla AFTER push
                if (valdaRutor.length === båtlängd[aktuellBåt]) {
                    alert("Båt klar!");
                    aktuellBåt++;
                    valdaRutor = [];
                }
               
        
            });
        });
    
     //  alert("spelare två lägg ut dina båtar");

let aktuellBåt2 = 0;
let valdaRutor2 = [];
       const rutor2 = document.querySelectorAll('.ruta');

       rutor2.forEach(ruta => {
        ruta.addEventListener('click', () => {
            if ((aktivSpelare !== 2) || (!placingPhase)) return;
            if(aktuellBåt2 >= båtlängd.length){
                alert("nu har du lagt ut alla dina båtar");
                
                return;
            }
    
            let id = Number(ruta.id.replace("ruta", ""));
    
            // första klicket
            if (valdaRutor2.length === 0) {
                ruta.style.backgroundColor = "green";
                ruta.dataset.ship = "true";
                valdaRutor2.push(id);
                return;
            }
    
            let senaste = valdaRutor2[valdaRutor2.length - 1];
    
            let giltig =
                (Math.abs(id - senaste) === 1 &&
                 Math.floor((id - 1) / 10) === Math.floor((senaste - 1) / 10))
                ||
                (Math.abs(id - senaste) === 10);
    
            if (!giltig) {
                alert("Du måste bygga båten i en rak linje!");
                return;
            }
    
            ruta.style.backgroundColor = "green";
            ruta.dataset.ship = "true";
            valdaRutor2.push(id);

            if (valdaRutor2.length === båtlängd[aktuellBåt2]) {
                alert("Båt klar!");
                aktuellBåt2++;
                valdaRutor2 = [];
            
                if (aktuellBåt2 === båtlängd.length) {
                    alert("Spelare 2 klar!");

                    rutor2.forEach(ruta => {
                        ruta.style.backgroundColor = "white";
                    });
                    
                    startGame();    // <-- NU STARTAR ATTACKFASEN
                }
            }
            
    
            // ✔ Kolla AFTER push
           /* if (valdaRutor2.length === båtlängd[aktuellBåt2]) {
                alert("Båt klar!");
                aktuellBåt2++;
                valdaRutor2 = [];
            }*/
           
    
        });
    });

    const board1 = document.querySelectorAll(".box");
const board2 = document.querySelectorAll(".ruta");


    let currentPlayer = 1;

function startGame() {
        placingPhase = false;
    alert("Spelet börjar! Spelare 1 attackerar.");

    board2.forEach(ruta => {
        ruta.addEventListener("click", attackPlayer2);
    });

    board1.forEach(ruta => {
        ruta.addEventListener("click", attackPlayer1);
    });

}

function attackPlayer2(e) {
    if (currentPlayer !== 1) return;

    let ruta = e.target;
    doAttack(ruta);

    currentPlayer = 2;

}

function attackPlayer1(e) {
    if (currentPlayer !== 2) return;

    let ruta = e.target;
    doAttack(ruta);

    currentPlayer = 1;
  
}

function doAttack(ruta) {
    let isHit = ruta.dataset.ship === "true";

    if (isHit) {
        ruta.style.backgroundColor = "red";
        ruta.textContent = "X";
    } else {
        ruta.style.backgroundColor = "lightblue";
        ruta.textContent = "O";
    }

    ruta.style.pointerEvents = "none";
}




     
   /* const playerBoard = document.querySelectorAll(".box");
const enemyBoard = document.querySelectorAll(".ruta");

 let currentPlayer = 1;
    
  enemyBoard.forEach((ruta, index) => {
    ruta.addEventListener("click", () => {
        if (currentPlayer !== 1) return;
        


        attack(index, ruta);

        function attack(index, ruta) {
        
            let isHit = ruta.dataset.ship === "true";

            if (isHit) {
                ruta.style.backgroundColor = "red";
                ruta.textContent = "X";
            } else {
                ruta.style.backgroundColor = "lightblue";
                ruta.textContent = "O";
            }
        
            ruta.style.pointerEvents ="none"
        
    
            currentPlayer = 2;
        
            setTimeout(enemyTurn, 1000);
        }
        
    });
});














 /*rutor.forEach(ruta => {
     ruta.addEventListener('click', () => {
         ruta.style.backgroundColor = "green";
          alert("Du klickade på ${ruta.id}"); }); });*/




















































/*for(let i = 0; i <= 200; i++){
    if(i%2 ==  0){
        window.alert("player 1 turn");

    }
    if(i%2 != 0){
        window.alert("player 2 turn");
    }*/
