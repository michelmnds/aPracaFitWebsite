const classesData = [
  {
    id: 1,
    image: "https://i.imgur.com/gBIGfpA.png",
    name: "PUMP",
    teachers: [
      { id: 1, name: "João Tiago", image: "https://i.imgur.com/vuZSfdI.png" },
      { id: 2, name: "Ricardo Lima", image: "https://i.imgur.com/zkPQnWv.png" },
      {
        id: 3,
        name: "André Ribeiro",
        image: "https://i.imgur.com/unEx0O2.png",
      },
    ],
    description:
      "O Pump é uma modalidade de exercício físico que combina o uso de barras e anilhas com movimentos coreografados ao som de música motivadora.",
  },
  {
    id: 2,
    image: "https://i.imgur.com/gEAlYYH.png",
    name: "JUMP FIT",
    teachers: [
      { id: 1, name: "Paula Vilela", image: "https://i.imgur.com/rUwwqto.png" },
      {
        id: 2,
        name: "Raquel Duarte",
        image: "https://i.imgur.com/JhorxA0.png",
      },
    ],
    description:
      "É uma modalidade de exercício que utiliza o minitrampolim. Este tipo de treino combina movimentos aeróbicos, coreografias simples e exercícios de força realizados sobre o trampolim.",
  },
  {
    id: 3,
    image: "https://i.imgur.com/TkAymHJ.png",
    name: "CYCLING",
    teachers: [
      {
        id: 1,
        name: "Valvani Santos",
        image: "https://i.imgur.com/FnmI4E3.png",
      },
      {
        id: 2,
        name: "Dino Santos",
        image: "https://i.imgur.com/CqiBJGB.png",
      },
      {
        id: 3,
        name: "Raquel Duarte",
        image: "https://i.imgur.com/JhorxA0.png",
      },
      {
        id: 4,
        name: "André Ribeiro",
        image: "https://i.imgur.com/unEx0O2.png",
      },
    ],
    description:
      "É uma modalidade de exercício que utiliza bicicletas estacionárias em ambientes fechados. As aulas geralmente são ministradas por instrutores que guiam os participantes por diferentes intensidades e simulações de terreno ao ritmo de música motivadora.",
  },
  {
    id: 4,
    image: "https://i.imgur.com/9EA8v9N.jpg",
    name: "PILATES",
    teachers: [
      {
        id: 1,
        name: "Ana Reis",
        image: "https://i.imgur.com/alhYQoY.png",
      },
      {
        id: 2,
        name: "Catarina Fonseca",
        image: "https://i.imgur.com/iw630Jv.png",
      },
      {
        id: 3,
        name: "Raquel Duarte",
        image: "https://i.imgur.com/JhorxA0.png",
      },
    ],
    description:
      "O Pilates é um sistema de exercícios desenvolvido por Joseph Pilates na década de 1920. Essa prática é conhecida por enfatizar o desenvolvimento equilibrado do corpo através do fortalecimento, flexibilidade e controle do centro de força, conhecido como 'powerhouse'.",
  },
  {
    id: 5,
    image: "https://i.imgur.com/Jd3Bv1H.png",
    name: "HIIT",
    teachers: [
      { id: 1, name: "João Tiago", image: "https://i.imgur.com/vuZSfdI.png" },
      {
        id: 2,
        name: "Miguel Trindade",
        image: "https://i.imgur.com/6E76c5C.png",
      },
    ],
    description:
      "O HIIT, é uma forma de exercício que alterna períodos de esforço intenso com períodos de descanso ou recuperação. Esse método de treino pode ser aplicado a diversas modalidades de exercícios, como corrida, ciclismo, treino com pesos, entre outros.",
  },
  {
    id: 6,
    image: "https://i.imgur.com/FCEYq2N.jpg",
    name: "3B",
    teachers: [
      {
        id: 1,
        name: "André Ribeiro",
        image: "https://i.imgur.com/unEx0O2.png",
      },
    ],
    description:
      "É uma aula intensa, onde os praticantes executam os exercícios ao ritmo de música brasileira, tendo como foco principal o treino dos membros inferiores e abdominais com maior incidência sobre a zona dos glúteos! Para além do divertimento, a tonificação dos glúteos, abdominais e pernas.",
  },
  {
    id: 7,
    image: "https://i.imgur.com/SNf9uI1.png",
    name: "STRONG",
    teachers: [
      {
        id: 1,
        name: "Catarina Fonseca",
        image: "https://i.imgur.com/iw630Jv.png",
      },
    ],
    description:
      "Strong é uma modalidade de treino físico que combina exercícios de alta intensidade, movimentos de treino de força e cardio com música sincronizada, enfatizando mais a intensidade e a condição física.",
  },
  {
    id: 8,
    image: "https://i.imgur.com/UsrILaf.png",
    name: "ZUMBA",
    teachers: [
      {
        id: 1,
        name: "Sandra Ferreira",
        image: "https://i.imgur.com/jfoQ0wj.png",
      },
      {
        id: 2,
        name: "Catarina Fonseca",
        image: "https://i.imgur.com/iw630Jv.png",
      },
    ],
    description:
      "O Zumba é uma modalidade de exercício físico que combina movimentos de dança com elementos de treino cardiovascular. Foi criado na década de 1990 pelo dançarino e coreógrafo colombiano Alberto 'Beto' Pérez. O Zumba se tornou extremamente popular ao redor do mundo devido à sua abordagem divertida e eficaz para o fitness.",
  },
  {
    id: 9,
    image: "https://i.imgur.com/HXLJTlh.jpg",
    name: "STRETCHING",
    teachers: [
      {
        id: 1,
        name: "Daniel Andrade",
        image: "https://i.imgur.com/ec7Jljn.png",
      },
    ],
    description:
      "Uma aula de stretching, é uma prática que se concentra em estender e relaxar os músculos para melhorar a flexibilidade e a amplitude de movimento. Essas aulas podem variar em termos de abordagem, podendo ser parte de uma rotina de exercícios mais ampla, como o alongamento estático ou dinâmico.",
  },
  {
    id: 10,
    image: "https://i.imgur.com/hCaC0oX.jpg",
    name: "STEP",
    teachers: [
      { id: 1, name: "Paula Vilela", image: "https://i.imgur.com/rUwwqto.png" },
    ],
    description:
      "O step é uma modalidade de exercício que utiliza um pequeno degrau ou plataforma (chamado de 'step') para realizar uma variedade de movimentos coreografados. Essa prática pode ser incorporada em aulas de grupo, como o 'Step Aeróbico', que se tornou popular nas décadas de 1980 e 1990, ou ser parte de rotinas de treino individual.",
  },
  {
    id: 11,
    image: "https://i.imgur.com/iuWqICZ.png",
    name: "LOCAL",
    teachers: [
      { id: 1, name: "João Tiago", image: "https://i.imgur.com/vuZSfdI.png" },
      { id: 2, name: "Paula Vilela", image: "https://i.imgur.com/rUwwqto.png" },
    ],
    description:
      "É uma modalidade de exercício que visa trabalhar grupos musculares específicos em uma região do corpo, geralmente com o uso de peso corporal ou pequenos acessórios como halteres, elásticos e caneleiras.",
  },
  {
    id: 12,
    image: "https://i.imgur.com/Sq6j4KP.png",
    name: "GAP",
    teachers: [
      {
        id: 1,
        name: "Valvani Santos",
        image: "https://i.imgur.com/FnmI4E3.png",
      },
      { id: 2, name: "Paula Vilela", image: "https://i.imgur.com/rUwwqto.png" },
    ],
    description:
      "A aula de GAP (Glúteos, Abdómen e Pernas) é uma modalidade de exercício que tem como foco o fortalecimento e tonificação dessas regiões específicas do corpo.",
  },
];

export default classesData;
