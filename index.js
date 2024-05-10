let nomeHeroi = "Atena"
let pontos = 15070
let nivel 

if (pontos <= 1000){
    nivel = "Ferro"
}
else if (pontos >= 1001 && pontos < 2000){
    nivel = "Bronze"
}
else if (pontos >= 2001 && pontos < 5000){
    nivel = "Prata"
}
else if (pontos >= 5001 && pontos < 7000){
    nivel = "Ouro"
}
else if (pontos >= 7001 && pontos < 8000){
    nivel = "Platina"
}
else if (pontos >= 8001 && pontos < 9000){
    nivel = "Ascendente"
}
else if (pontos >= 9001 && pontos < 1000){
    nivel = "Imortal"
}
else {
    nivel = "Radiante"
}

console.log("Parabéns Heroína " + nomeHeroi + " por chegar no nível " + nivel + "!")