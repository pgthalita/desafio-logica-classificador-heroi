let nomeHeroi = "Atena"
let xpDoHeroi = 15070
let nivel 

if (xpDoHeroi <= 1000){
    nivel = "Ferro"
}
else if (xpDoHeroi >= 1001 && xpDoHeroi < 2000){
    nivel = "Bronze"
}
else if (xpDoHeroi >= 2001 && xpDoHeroi < 5000){
    nivel = "Prata"
}
else if (xpDoHeroi >= 5001 && xpDoHeroi < 7000){
    nivel = "Ouro"
}
else if (xpDoHeroi >= 7001 && xpDoHeroi < 8000){
    nivel = "Platina"
}
else if (xpDoHeroi >= 8001 && xpDoHeroi < 9000){
    nivel = "Ascendente"
}
else if (xpDoHeroi >= 9001 && xpDoHeroi < 1000){
    nivel = "Imortal"
}
else {
    nivel = "Radiante"
}

console.log("Parabéns Heroína " + nomeHeroi + " por chegar no nível " + nivel + "!")