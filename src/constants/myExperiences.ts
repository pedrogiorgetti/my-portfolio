export interface IMyExperience {
  companyName: string;
  isEducation: boolean;
  period: string;
  resume: string;
  title: string;
}

const myExperiences: IMyExperience[] = [
  {
    companyName: 'Fixxer',
    resume: '',
    title: 'Front-end developer',
    period: '2023 - PRESENT',
    isEducation: false,
  },
  {
    companyName: 'Alter Solutions Benelux',
    resume: '',
    title: 'React consultant',
    period: '2022 - 2023',
    isEducation: false,
  },
  {
    companyName: 'RAC Systems Consultoria & Desenvolvimento',
    resume: `Development and maintenance of projects using JavaScript, and conversion of smart layouts with a focus on user experience.
    Direct participation in the creation of layouts and integrations of internal and external projects,
    predominantly using React, React Native or NextJS in the Frontend and NodeJS for the Backend.
    Creation and conversion of the layout of a project that works as an arm of the company's ERP (main
    system): 'Pedido Eletrônico' (fully integrated web platform for customers who have the company's ERP
    so that customers can place orders, control panel of the highly customizable platform, being able to
    change filters, main color, logo, favicon, columns, banners, promotional images, terms, external scripts
    and much more. Frontend in NextJS for better SEO, Styled-Components for creating styles and
    backend in NodeJS with TypeORM).
    Creating images for social media posts.`,
    title: 'Front-end developer | UI Designer',
    period: '2020 - 2022',
    isEducation: false,
  },
  {
    companyName: 'LAM Digital',
    resume: `Project and team management, organization and distribution of tasks using Trello and documentation.
    Development and maintenance of projects using JavaScript, and conversion of smart layouts with a
    focus on user experience.
    Complete layout conversion and partial integration of the company's main platform: Open365 (a WEB
    management platform for small businesses, order control, website customization, WEB platform for
    customers to place orders,
    Bluetooth and thermal printer integration through a desktop application developed in Electron for
    Frontend or a mobile application developed in React Native for Frontend).`,
    title: 'Front-end developer',
    period: '2018 - 2020',
    isEducation: false,
  },
  {
    companyName: 'Geodados Geoprocessamento e S.A.E',
    resume: `Intern responsible for analyzing satellite images and signaling through demarcations (contours and
      detailing) to verify possible irregularities in constructions using the company's own program.
      In November 2016, upon receiving the internship, I was also promoted to the position of Evaluator of
      data geoprocessing assistant, thus having the responsibility to verify possible irregularities in the
      analyzes and demarcations made by the geoprocessing assistants.`,
    title: 'Geoprocessing Assistant',
    period: '2015 - 2018',
    isEducation: false,
  },
  {
    companyName: 'FATEC - Faculdade de tecnologia do estado de São Paulo',
    resume: '',
    title: 'Technologist in Systems Analysis and Development',
    period: '2015 - 2017',
    isEducation: true,
  },
];

export default myExperiences;
