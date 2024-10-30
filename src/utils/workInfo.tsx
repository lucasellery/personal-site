import { FiMapPin, FiBriefcase, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

export const workInfo = [
  {
    label: 'Fortaleza - CE, Brasil',
    icon: <FiMapPin color="#837E9F" />,
  },
  {
    label: 'OSF Digital',
    icon: <FiBriefcase color="#837E9F" />,
  },
  {
    label: 'lucasellery',
    icon: <FiGithub color="#837E9F" />,
    link: 'https://github.com/lucasellery',
    secondaryIcon: <BsBoxArrowInUpRight style={{ marginLeft: 4 }} />
  },
  {
    label: 'Lucas Ellery',
    icon: <FiLinkedin color="#837E9F" />,
    link: 'https://www.linkedin.com/in/lucas-ellery-82753118a/',
    secondaryIcon: <BsBoxArrowInUpRight style={{ marginLeft: 4 }} />
  },
  {
    label: 'olucasellery@gmail.com',
    icon: <FiMail color="#837E9F" />,
  },
];

export const experiencesList = [
  {
    company: 'OSF Digital',
    date: 'Novembro de 2021 - atualmente',
    position: 'Front-end Developer',
  },
  {
    company: 'Somapay',
    date: 'Setembro de 2021 - novembro de 2021',
    position: 'Front-end/Mobile Developer',
  },
  {
    company: 'Somapay',
    date: 'Setembro de 2020 - Setembro de 2021',
    position: 'Front-end/Mobile Developer - intern',
  },
  {
    company: 'Casa Magalhães',
    date: 'Março 2020',
    position: 'Java developer - intern',
  },
  {
    company: 'IFCE (bolsista)',
    date: 'Novembro 2019 - fevereiro 2020',
    position: 'Flutter developer',
  },
];

export const technologiesList = [
  {
    tech: 'Javascript',
    background: '#ffe8c2',
    color: '#111',
  },
  {
    tech: 'HTML5',
    background: '#f78764',
    color: '#111',
  },
  {
    tech: 'CSS3',
    background: '#80a1d4',
    color: '#111',
  },
  {
    tech: 'ReactJS',
    background: '#18206f',
    color: '#fff',
  },
  {
    tech: 'React Native',
    background: '#4f1271',
    color: '#fff',
  },
  {
    tech: 'TypeScript',
    background: '#88ccf1',
    color: '#c1c11',
  },
  {
    tech: 'Styled Components',
    background: '#e0acd5',
    color: '#c1c11',
  },
  {
    tech: 'TailwindCSS',
    background: '#177e89',
    color: '#fff'
  },
  {
    tech: 'Salesforce',
    background: '#0dbcd3',
    color: '#ffffffd5'
  },
  {
    tech: 'LWC',
    background: '#00aeffbc',
    color: '#ebebeb'
  },
];

export const educationList = [
  {
    institution: 'JStack',
    date: 'Atualmente',
    course: 'Javascript, ReactJS, React Native, AWS, NodeJS',	
  },
  {
    institution: 'IFCE',
    date: 'Interrompido',
    course: 'Ciência da Computação',	
  },
  {
    institution: 'Alura',
    date: '2020',
    course: 'Formação front-end com ReactJS',	
  },
  {
    institution: 'Rocketseat',
    course: 'NLW',	
  },
];
