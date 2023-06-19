var jogadorAtual = "X";
var tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function fazerJogada(linha, coluna) {
    if (tabuleiro[linha][coluna] === "") {
        tabuleiro[linha][coluna] = jogadorAtual;
        document.getElementById("tabuleiro").rows[linha].cells[coluna].innerHTML = jogadorAtual;
        
        if (verificarVitoria(jogadorAtual)) {
            alert("O jogador " + jogadorAtual + " venceu!");
            reiniciarJogo();
        } else if (verificarEmpate()) {
            alert("O jogo terminou em empate!");
            reiniciarJogo();
        } else {
            jogadorAtual = (jogadorAtual === "X") ? "O" : "X";
        }
    }
}

function verificarVitoria(jogador) {
    for (var i = 0; i < 3; i++) {
        if (
            (tabuleiro[i][0] === jogador && tabuleiro[i][1] === jogador && tabuleiro[i][2] === jogador) ||
            (tabuleiro[0][i] === jogador && tabuleiro[1][i] === jogador && tabuleiro[2][i] === jogador)
        ) {
            return true;
        }
    }

    if (
        (tabuleiro[0][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][2] === jogador) ||
        (tabuleiro[0][2] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][0] === jogador)
    ) {
        return true;
    }

    return false;
}


function verificarEmpate() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === "") {
                return false;
            }
        }
    }
    
    return true;
}

function reiniciarJogo() {
    jogadorAtual = "X";
    tabuleiro = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    
    var cells = document.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
}
