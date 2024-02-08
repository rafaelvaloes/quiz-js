const perguntas = [
    {
      pergunta: "O que representa a sigla 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Management"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma função em JavaScript?",
      respostas: [
        "function = minhaFuncao()",
        "let function = minhaFuncao()",
        "function minhaFuncao()"
      ],
      correta: 2
    },
    {
      pergunta: "Como você faz um comentário de uma única linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
      respostas: [
        "Modificar estilos CSS",
        "Manipular eventos do DOM",
        "Criar elementos HTML"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '2 + '2' em JavaScript?",
      respostas: [
        "4",
        "22",
        "Erro"
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador 'typeof' faz em JavaScript?",
      respostas: [
        "Verifica se duas variáveis são do mesmo tipo",
        "Retorna o tipo de uma variável",
        "Compara o valor e o tipo de duas variáveis"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'slice()' em uma string?",
      respostas: [
        "Divide a string em substrings",
        "Remove caracteres no início da string",
        "Copia parte da string para outra variável"
      ],
      correta: 2
    },
    {
      pergunta: "O que representa o operador '===' em JavaScript?",
      respostas: [
        "Compara apenas o valor de dois operandos",
        "Compara apenas o tipo de dois operandos",
        "Compara o valor e o tipo de dois operandos"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'map()' em arrays JavaScript?",
      respostas: [
        "Filtrar elementos do array",
        "Modificar cada elemento do array",
        "Encontrar o valor máximo do array"
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável global em JavaScript?",
      respostas: [
        "global minhaVariavel;",
        "let minhaVariavel = global;",
        "minhaVariavel = 10;"
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  for(let item of perguntas){
  
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  
  } 