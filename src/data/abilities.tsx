import {
  FaCloud,
  FaReact,
  SiKotlin,
  GiTechnoHeart,
  CgGames
} from 'react-icons/all'

const abilities = [
  {
    title: 'Desarrollo Web',
    description: 'Tengo experiencia en desarrollo web con React y Redux, desde dar mantimiento hasta construir sitios web enteros, amplio conocimiento con las ultimas caracteristicas de React, ES6, HTMl y CSS',
    icon: <FaReact size={34} />
  },
  {
    title: 'Desarrollo Movil',
    description: 'Experiencia en desarrollo movil con React Native (Vanilla y ExpoSDK) ademas de Android nativo con Kotlin y Java',
    icon: <SiKotlin size={34} />
  },
  {
    title: 'Desarrollo Backend',
    description: 'Puedo desarrollar sistemas Backend con Django, NodeJS/Express y ASP.Net Core con estandar API Rest, tambien tengo capacidades para usar bases de datos SQL y NoSQL dominando especialmente Postgresql.',
    icon: <FaCloud size={34} />
  },
  {
    title: 'Experimentar con diferentes tecnologias',
    description: 'Me gusta mucho aprender sobre muchas tecnologias y me he atrevido a hacer mods para un par de juegos, he aprendido conceptos basicos de varios de lenguajes y herramientas de programacion y siempre estoy dispuestos a sumergirme en nuevas areas.',
    icon: <GiTechnoHeart size={34} />
  },
  {
    title: 'Pasatiempos',
    description: 'Soy una persona de Videojuegos e historias, ciencia y memorizar una cantidad enorme de... datos raros, alguien muy curioso y con quien podras compartir grandes momentos.',
    icon: <CgGames size={34} />
  },
]

export default abilities;
