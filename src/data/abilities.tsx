import {
  FaCloud,
  FaReact,
  FaAndroid,
} from 'react-icons/fa';

import {
  GiTechnoHeart,
} from 'react-icons/gi';

import {
  CgGames
} from 'react-icons/cg';

const abilities = [
  {
    title: 'Front-End',
    description: 'I have experience creating websites using React and Redux with a large sort of utilities like StyledComponents, redux-saga, Typescript/Flow and more, I have good code quality and experience with ES6+, CSS/SASS/PostCSS and HTML5.',
    icon: <FaReact size={40} />
  },
  {
    title: 'Mobile Apps',
    description: 'I have experience with React Native (Vanilla and ExpoSDK), native projects with Android and Kotlin and knowledge on RealTime apps using GPS.',
    icon: <FaAndroid size={40} />
  },
  {
    title: 'Back-End',
    description: 'I have experience creating RESTful APIs using DjangoRest, ASP.Net Core and NodeJS/ExpressJS with databases like Postgresql, SQLServer and mongodb.',
    icon: <FaCloud size={40} />
  },
  {
    title: 'Love for Technology',
    description: 'I love experimenting with a lot of things like creating videogames mods, personal tools and always improving my current skills an learning new ones, I\'m not limited to my current abilities.',
    icon: <GiTechnoHeart size={40} />
  },
  {
    title: 'Hobbies',
    description: 'I love videogames, learn about the biggest universe mysteries, eat Pizza and Chinese Food, multiplayer games are one of my specialities and we can spend some hours playing games.',
    icon: <CgGames size={34} />
  },
]

export default abilities;
