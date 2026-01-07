import confetti from "https://cdn.skypack.dev/canvas-confetti";
const button_one_a = document.getElementById("button_one_a");
const button_one_b = document.getElementById("button_one_b");
const button_two_a = document.getElementById("button_two_a");
const button_two_b = document.getElementById("button_two_b");
const button_three_a = document.getElementById("button_three_a");
const button_three_b = document.getElementById("button_three_b");
const button_foor_a = document.getElementById("button_foor_a");
const button_foor_b = document.getElementById("button_foor_b");
const output = document.getElementById("output");
const points = document.getElementById("P");
let P_1 = 0; // Startwert_Frage 1
let P_2 = 0; // Startwert_Frage 2
let P_3 = 0; // Startwert_Frage 3
let P_4 = 0; //Startwert_Frage 4
let P = 0; // Startwert_gesamt
let P_1_1 = 0
let P_2_1 = 0
let P_3_1 = 0
let P_4_1 = 0
//KI
function starteKonfetti() {
    const dauer = 2500; // 5 Sekunden
    const ende = Date.now() + dauer;

    (function frame() {
        confetti({
            particleCount: 10,
            spread: 700,
            origin: { x: Math.random(), y: 0 },
            scalar: 1.5,
        });

        if (Date.now() < ende) {
            requestAnimationFrame(frame);
        }
    })();
}
//KI
// Frage 1 a
button_one_a.addEventListener("click", function(){
    if (P_1_1 < 1){
        output.textContent = "Falsch.";
        output.style.color = "red";
        P_1_1++;
        P_1--;
        button_one_a.style.backgroundColor = "red"
        P_1 = Math.max(P_1, 0);
        let P = P_1 + P_2 + P_3 + P_4;
        points.textContent = "Punkte: " + P;
        if (P >= 4) {
            starteKonfetti();
        }
    }
    else {}
})
// Frage 1 b
button_one_b.addEventListener("click", function() {
    if (P_1_1 < 1) {
        output.textContent = "Gut gemacht.";
        output.style.color = "green";
        button_one_b.style.backgroundColor = "green"
        P_1++;
        P_1_1++;
        let P = P_1 + P_2 + P_3 + P_4;
        points.textContent = "Punkte: " + P;
        if (P >= 4) {
            starteKonfetti();
        }
    }
    else{}
});
// Frage 2 a
button_two_a.addEventListener("click", function(){
    if (P_2_1 < 1){
        output.textContent = "Richtig! very good.";
        output.style.color = "green";
        P_2_1++;
        P_2++;
        button_two_a.style.backgroundColor = "green";
        let P = P_1 + P_2 + P_3 + P_4;
        points.textContent = "Punkte: " + P;
        if (P >= 4) {
            starteKonfetti();
        }
    }
    else {}
})
// Frage 2 b
button_two_b.addEventListener("click", function(){
    if (P_2_1 < 1){
        output.textContent = "Falsch.";
        output.style.color = "red";
        P_2_1++;
        P_2--;
        button_two_b.style.backgroundColor = "red";
        P_2 = Math.max(P_2, 0);
        let P = P_1 + P_2 + P_3 + P_4;
        points.textContent = "Punkte: " + P;
        if (P >= 4) {
            starteKonfetti();
        }
        
    }
    else {}
})
// Frage 3 a
button_three_a.addEventListener("click", function(){
    if (P_3_1 < 1){
        output.textContent = "Das ist Falsch";
        output.style.color = "red";
        P_3_1++;
        P_3--;
        P_3 = Math.max(P_3, 0);
        button_three_a.style.backgroundColor = "red"
        P_3 = Math.min(P_3, 1);
        let P = P_1 + P_2 + P_3 + P_4;
        points.textContent = "Punkte: " + P;
        if (P >= 4) {
            starteKonfetti();
        }
    }
    else {}
})
// Frage 3 b
button_three_b.addEventListener("click", function(){
    if (P_3_1 < 1){
        output.textContent = "Richtig! very good.";
        output.style.color = "green";
        P_3_1++;
        P_3++;
        button_three_b.style.backgroundColor = "green"
        P_3 = Math.min(P_3, 1);
        let P = P_1 + P_2 + P_3 + P_4;
        P = Math.max(P, 0);
        points.textContent = "Punkte: " + P;
        if (P >= 4) {
            starteKonfetti();
        }
    }
    else {}
})
// Frage 4 a
button_foor_a.addEventListener("click", function(){
    if (P_4_1 < 1){
        output.textContent = "Richtig!";
        output.style.color = "green";
        P_4_1++;
        P_4++;
        P_4 = Math.max(P_4, 0);
        button_foor_a.style.backgroundColor = "green";
        let P = P_1 + P_2 + P_3 + P_4;
        points.textContent = "Punkte: " + P;
        if (P >= 4) {
            starteKonfetti();
        }
    }
    else {}
})
// Frage 4 b
button_foor_b.addEventListener("click", function(){
    if (P_4_1 < 1){
        output.textContent = "Falsch";
        output.style.color = "red";
        P_4_1++;
        P_4--;
        button_foor_b.style.backgroundColor = "red"
        P_4 = Math.min(P_4, 1);
        let P = P_1 + P_2 + P_3 + P_4;
        P = Math.max(P, 0);
        points.textContent = "Punkte: " + P;
        if (P >= 4) {
            starteKonfetti();
        }
    }
    else {}
})