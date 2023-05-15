//CRIAR NÚMERO DE LINHAS E COLUNAS
var nLinhas = prompt("Digite o número de linhas da matriz: ");
var nColunas = prompt("Digite o número de colunas da matriz: ");

var matriz = [];
for (var i = 0; i < nLinhas; i++) {
    matriz[i] = [];
    for (var r = 0; r < nColunas; r++) {
        matriz[i][r] = Math.round(Math.random() * 10);
    }
}

var matriz1 = [];
for (var i = 0; i < nLinhas; i++) {
    matriz1[i] = [];
    for (var r = 0; r < nColunas; r++) {
        matriz1[i][r] = Math.round(Math.random() * 10);
    }
}

//APARECER NO HTML MATRIZ
document.write("<div id=Matrizes>"); //botar as matrizes lado a lado
document.write("<table border=2>");
for (var i = 0; i < nLinhas; i++) {
    document.write("<tr>");
    for (var r = 0; r < nColunas; r++) {
        document.write("<td>" + matriz[i][r] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("<h1>+/-</h1>")

//APARECER NO HTML MATRIZ 1
document.write("<table border=2>");
for (var i = 0; i < nLinhas; i++) {
    document.write("<tr>");
    for (var r = 0; r < nColunas; r++) {
        document.write("<td>" + matriz1[i][r] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");

//FUNÇÃO SOMA
function somaMatriz() {
    document.write("<table border=2>");    
    var nLinhas = matriz.length;
    var nColunas = matriz[0].length;
    var resultado = [];
    for (var i = 0; i < nLinhas; i++) {
        resultado[i] = [];
        for (var r = 0; r < nColunas; r++) {
            resultado[i][r] = matriz[i][r] + matriz1[i][r];
        }
    }

    for (var i = 0; i < nLinhas; i++) {
        document.write("<tr>");
        for (var r = 0; r < nColunas; r++) {
            document.write("<td>" + resultado[i][r] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    return resultado;
}

document.write("<h1>Resultado soma</h1>");

somaMatriz();

document.write("<h1>Resultado subtração</h1>");

//FUNÇÃO SUBTRAÇÃO
function subtracaoMatriz() {
    document.write("<table border=2>");    
    var nLinhas = matriz1.length;
    var nColunas = matriz1[0].length;
    var resultado2 = [];
    for (var i = 0; i < nLinhas; i++) {
        resultado2[i] = [];
        for (var r = 0; r < nColunas; r++) {
            resultado2[i][r] = matriz[i][r] - matriz1[i][r];
        }
    }

    for (var i = 0; i < nLinhas; i++) {
        document.write("<tr>");
        for (var r = 0; r < nColunas; r++) {
            document.write("<td>" + resultado2[i][r] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    return resultado2;
}

subtracaoMatriz();
