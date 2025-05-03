import { Presentation } from '../types';
import telma from '../images/telma.jpeg';
import elidia from '../images/elidia.jpeg';
import aline from '../images/aline.jpeg';
import carolina from '../images/carolina.jpeg';
import gabriela from '../images/gabriela.jpeg';
import marcela from '../images/marcela.jpeg';

export const presentations: Presentation[] = [
  {
    id: '1',
    title: 'Telma',
    date: 'March 2023',
    location: 'Coordenadora de Enfermagem',
    description: 'Sua abordagem prática e empática tem sido fundamental para o crescimento pessoal e profissional da nossa equipe. Você é uma verdadeira líder e inspiração! Gratidão 🌻',
    imageUrl: telma,
  },
  {
    id: '2',
    title: 'Elídia',
    date: 'November 2022',
    location: 'Coordenadora de Médica',
    description: 'A consultoria tem ajudado a trabalhar minha síndrome de impostora, reforçando meus pontos fortes, e trabalhando minhas inseguranças. Ainda me ajuda no aprendizado do mundo corporativo, e o trabalho com as palavras na hora de liderar.',
    imageUrl: elidia,
  },
  {
    id: '3',
    title: 'Aline',
    date: 'June 2022',
    location: 'Enfermeira de Qualidade',
    description: 'O treinamento dela em Urgência e emergência  melhorou tempo e qualidade na triagem e atendimentos de PCR 🥰 a forma prática do treinamento foi essencial para fortalecer as informações teóricas',
    imageUrl: aline,
  },
  {
    id: '4',
    title: 'Carolina',
    date: 'February 2022',
    location: 'Enfermeira Intensivista',
    description: 'Receber treinamento beira leito dentro da UTI é para poucos, e ela faz isso com excelência!',
    imageUrl: carolina,
  },
  {
    id: '5',
    title: 'Gabriela 🏳️‍⚧️',
    date: 'February 2022',
    location: 'Enfermeira Intensivista',
    description: 'Juntamente com ela criamos políticas de inclusão e diversidade dentro do ambiente de trabalho, para que seja inclusivo e respeitoso!',
    imageUrl: gabriela,
  },
  {
    id: '6',
    title: 'Marcela',
    date: 'February 2022',
    location: 'Enfermeira Assistencial',
    description: 'Atuei anos com ela e posso definir que comunicação, trabalho em equipe e gestão de conflito defini como profissional',
    imageUrl: marcela,
  },
];