const perguntas = [
    {
      pergunta: "Qual é o tipo de dado primitivo em JavaScript para representar valores verdadeiros ou falsos?",
      respostas: [ 
        "Boolean",
        "String",
        "Number",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função JavaScript é usada para imprimir algo no console do navegador?",
      respostas: [ 
        "console.print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'charAt()' faz em JavaScript?",
      respostas: [ 
        "Remove caracteres de uma string",
        "Substitui caracteres em uma string",
        "Retorna o caractere em uma posição específica de uma string",
      ],
      correta: 2
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [ 
        "var myVar;",
        "variable myVar;",
        "let myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual dessas opções é uma estrutura de controle de fluxo em JavaScript?",
      respostas: [ 
        "foreach",
        "switch",
        "indexof",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o símbolo usado para comentários de linha em JavaScript?",
      respostas: [ 
        "//",
        "/* */",
        "<!-- -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [ 
        "Retorna o valor absoluto de um número",
        "Arredonda um número para o inteiro mais próximo",
        "Converte uma string em um número inteiro",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [ 
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código JavaScript: console.log(2 + '2')?",
      respostas: [ 
        "22",
        "4",
        "TypeError",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'slice()' faz em JavaScript?",
      respostas: [ 
        "Remove elementos de um array",
        "Copia parte de uma string para outra string",
        "Adiciona elementos ao final de um array",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal  = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //**loop/laço de repetição
  //irá trocar "perguntas 1' por 'perguntas quiz'
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  //**loop/laço de repetição
  //irá trocar "resposta a' por 'respostas quiz'
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', "pergunta" + perguntas.indexOf(item))
    //fazer com que seja 0,1,2 ao inves de 0,0,0
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    //fez a troca de resposta A para as certas
    ///**input é mudança/troca
    dt.querySelector('input').onchange = (event) => {
      //vai comparar o valor 
      const estaCorreta = event.target.value == item.correta
      //se errar deleta, se acertar mantem
      corretas.delete(item)
      if (estaCorreta){//usando boolean 
        corretas.add(item)    
        }//adicionar quantidade de certas
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
  
    quizItem.querySelector('dl').appendChild(dt)
  
  } //remover o "resposta A"
    quizItem.querySelector("dl dt").remove()
  
    //coloca as perguntas na tela
    quiz.appendChild(quizItem)
  }const perguntas = [
  {
    pergunta: "Qual é o tipo de dado primitivo em JavaScript para representar valores verdadeiros ou falsos?",
    respostas: [ 
      "Boolean",
      "String",
      "Number",
    ],
    correta: 0
  },
  {
    pergunta: "Qual função JavaScript é usada para imprimir algo no console do navegador?",
    respostas: [ 
      "console.print()",
      "log()",
      "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "O que o método 'charAt()' faz em JavaScript?",
    respostas: [ 
      "Remove caracteres de uma string",
      "Substitui caracteres em uma string",
      "Retorna o caractere em uma posição específica de uma string",
    ],
    correta: 2
  },
  {
    pergunta: "Como você declara uma variável em JavaScript?",
    respostas: [ 
      "var myVar;",
      "variable myVar;",
      "let myVar;",
    ],
    correta: 2
  },
  {
    pergunta: "Qual dessas opções é uma estrutura de controle de fluxo em JavaScript?",
    respostas: [ 
      "foreach",
      "switch",
      "indexof",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o símbolo usado para comentários de linha em JavaScript?",
    respostas: [ 
      "//",
      "/* */",
      "<!-- -->",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
    respostas: [ 
      "Retorna o valor absoluto de um número",
      "Arredonda um número para o inteiro mais próximo",
      "Converte uma string em um número inteiro",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o operador de atribuição em JavaScript?",
    respostas: [ 
      "=",
      "==",
      ":=",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a saída do seguinte código JavaScript: console.log(2 + '2')?",
    respostas: [ 
      "22",
      "4",
      "TypeError",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'slice()' faz em JavaScript?",
    respostas: [ 
      "Remove elementos de um array",
      "Copia parte de uma string para outra string",
      "Adiciona elementos ao final de um array",
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal  = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//**loop/laço de repetição
//irá trocar "perguntas 1' por 'perguntas quiz'
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

//**loop/laço de repetição
//irá trocar "resposta a' por 'respostas quiz'
for(let resposta of item.respostas){
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', "pergunta" + perguntas.indexOf(item))
  //fazer com que seja 0,1,2 ao inves de 0,0,0
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  //fez a troca de resposta A para as certas
  ///**input é mudança/troca
  dt.querySelector('input').onchange = (event) => {
    //vai comparar o valor 
    const estaCorreta = event.target.value == item.correta
    //se errar deleta, se acertar mantem
    corretas.delete(item)
    if (estaCorreta){//usando boolean 
      corretas.add(item)    
      }//adicionar quantidade de certas
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }



  quizItem.querySelector('dl').appendChild(dt)

} //remover o "resposta A"
  quizItem.querySelector("dl dt").remove()

  //coloca as perguntas na tela
  quiz.appendChild(quizItem)
}