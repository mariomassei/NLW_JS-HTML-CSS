const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      resposta: [
        "Uma linguagem de programação para desenvolvimento mobile",
        "Um framework para design de interfaces",
        "Uma linguagem de programação para desenvolvimento web"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      resposta: [
        "Verificar se uma variável é indefinida",
        "Retornar o tipo de dado de uma variável",
        "Inverter o valor booleano de uma expressão"
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      resposta: [
        "var minhaVariavel = 10;",
        "let minhaVariavel = 10;",
        "const minhaVariavel = 10;"
      ],
      correta: 2
    },
    {
      pergunta: "O que é um array em JavaScript?",
      resposta: [
        "Um tipo de dado para armazenar textos",
        "Um tipo de dado para armazenar números inteiros",
        "Um tipo de dado para armazenar coleções de valores"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      resposta: [
        "Adicionar um elemento ao DOM",
        "Adicionar um evento a um elemento",
        "Remover um elemento do DOM"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      resposta: [
        "A capacidade de elevar um elemento no DOM",
        "O comportamento de elevar a declaração de uma variável ou função",
        "A técnica de animação de elementos em uma página web"
      ],
      correta: 1
    },
    {
      pergunta: "Como se faz uma iteração em um array em JavaScript?",
      resposta: [
        "Usando a estrutura de repetição 'for'",
        "Usando a estrutura de repetição 'if'",
        "Usando a estrutura de decisão 'switch'"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      resposta: [
        "Não há diferença, ambos são usados da mesma forma",
        "let é usado para variáveis mutáveis e const para variáveis imutáveis",
        "const é usado para variáveis locais e let para variáveis globais"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      resposta: [
        "Uma linguagem de programação para manipulação de documentos",
        "Uma técnica de otimização de código",
        "A representação em memória de um documento HTML que pode ser manipulada por scripts"
      ],
      correta: 2
    },
    {
      pergunta: "Como se chama a função que é executada após o carregamento completo de uma página em JavaScript?",
      resposta: [
        "initFunction()",
        "loadComplete()",
        "onload()"
      ],
      correta: 2
    }
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.resposta) {
      
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if (estaCorreta){
        
          corretas.add(item)
        }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
  
     
    }
    quizItem.querySelector('dl dt').remove()
    //alert(item.perguntas)
    quiz.appendChild(quizItem)
    }