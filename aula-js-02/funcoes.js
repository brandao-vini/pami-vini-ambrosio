function SomaSimples () { //função ''burra''
    return 3 + 4
}

console.log(SomaSimples())
console.log(SomaSimples()) //duplicando o console, vai retornar o mesmo valor da função


function SomaComParametros(n1, n2) {
    return n1 + n2
}

console.log(SomaComParametros(4, 8))
console.log(SomaComParametros(5, 8)) //quando mudar os parametros, ira alterar o resultado!

//função anônima ou arrow function
const Potencia = (n, e) => {
    let result = Math.pow(n, e)
    console.log(`${n} elevado a ${e} é ${result}`)
}

Potencia(4, 8)

// função que calcule a média do aluno e exiba o resultado
// media >= 6,00 = Aprovado
// media >= 4,00 || < 6,00 = Recuperação
// media < 4,00 = Reprovado


// Função para calcular a média e exibir o resultado
function calcularMedia(nota1, nota2, nota3, nota4) {
    // Calcula a média das quatro notas
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
  
    // Exibe a média calculada
    console.log(`Média: ${media.toFixed(2)}`);
  
    // Condições para determinar o status do aluno
    if (media >= 6.00) {
      // Se a média for maior ou igual a 6,00, o aluno está aprovado
      console.log("Resultado: Aprovado✅!");
    } else if (media >= 4.00 && media < 6.00) {
      // Se a média for maior ou igual a 4,00 e menor que 6,00, o aluno está em recuperação
      console.log("Resultado: Recuperação⚠️!");
    } else {
      // Se a média for menor que 4,00, o aluno está reprovado
      console.log("Resultado: Reprovado❌!");
    }
  }
  
  // Exemplo de uso da função
  calcularMedia(10, 7, 6, 5);
  

