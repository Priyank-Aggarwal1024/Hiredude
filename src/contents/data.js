const imageBaseURL = import.meta.env.VITE_IMAGE_BASE_URL;

const appdev = `${imageBaseURL}/appdev-dk.webp`;
const dataanalytics = `${imageBaseURL}/dataanalytics-dk.webp`;
const datascience = `${imageBaseURL}/datascience-dk.webp`;
const dbms = `${imageBaseURL}/dbms-dk.webp`;
const devops = `${imageBaseURL}/devops-dk.webp`;
const dsawp = `${imageBaseURL}/dsawp-dk.webp`;
const figma = `${imageBaseURL}/figma-dk.webp`;
const flutter = `${imageBaseURL}/flutter-dk.webp`;
const fmv = `${imageBaseURL}/fmv-dk.webp`;
const illustrator = `${imageBaseURL}/illustrator-dk.webp`;
const java = `${imageBaseURL}/java-dk.webp`;
const mern = `${imageBaseURL}/mern-dk.webp`;
const ml = `${imageBaseURL}/ml-dk.webp`;
const photoshop = `${imageBaseURL}/photoshop-dk.webp`;
const python = `${imageBaseURL}/python-dk.webp`;
const react = `${imageBaseURL}/react-dk.webp`;
const reactnative = `${imageBaseURL}/reactnative-dk.webp`;
const risk = `${imageBaseURL}/risk-dk.webp`;
const stockmarket = `${imageBaseURL}/stockmarket-dk.webp`;
const technicalresearch = `${imageBaseURL}/technicalresearch-dk.webp`;
const uiux = `${imageBaseURL}/uiux-dk.webp`;

const data = {
  datascientist: {
    price: 1999,
    pagetitle: "Data Science Pack",
    heroHead: "Data Science",
    curric: [
      {
        title: "Data Science",
        url: "datascience",
        duration: "35hr 10min",
        projects: "7",
        src: datascience,
      },
      {
        title: "Data Analysis",
        url: "dataanalytics",
        duration: "25hr 10min",
        projects: "7",
        src: dataanalytics,
      },
      {
        title: "Python",
        url: "python",
        duration: "35hr 10min",
        projects: "7",
        src: python,
      },
      {
        title: "DSA With Python",
        url: "dsawithpython",
        duration: "35hr 10min",
        projects: "7",
        src: dsawp,
      },
      {
        title: "DBMS with SQL",
        url: "dbms",
        duration: "35hr 10min",
        projects: "7",
        src: dbms,
      },
      {
        title: "Machine Learning",
        url: "machinelearning",
        duration: "35hr 10min",
        projects: "7",
        src: ml,
      },
    ],
  },
  techgeek: {
    pagetitle: "Tech Geeks Pack",
    price: 1999,
    heroHead: "Tech Geeks",
    curric: [
      {
        title: "Python",
        url: "python",
        duration: "35hr 10min",
        projects: "7",
        src: python,
      },
      {
        title: "Java",
        url: "java",
        duration: "35hr 10min",
        projects: "7",
        src: java,
      },
      {
        title: "App Development",
        url: "appdevelopment",
        duration: "35hr 10min",
        projects: "7",
        src: appdev,
      },

      {
        title: "Data Science",
        url: "datascience",
        duration: "35hr 10min",
        projects: "7",
        src: datascience,
      },
      {
        title: "Ethical Hacking",
        url: "ethicalhacking",
        duration: "35hr 10min",
        projects: "7",
        src: appdev,
      },

      {
        title: "MERN Stack",
        url: "mernstack",
        duration: "35hr 10min",
        projects: "7",
        src: mern,
      },
    ],
  },
  fullstackdev: {
    pagetitle: "Full Stack Dev Pack",
    heroHead: "Full Stack Dev",
    price: 1999,
    curric: [
      {
        title: "Mern Stack",
        url: "mernstack",
        duration: "35hr 10min",
        projects: "7",
        src: mern,
      },
      {
        title: "React JS",
        url: "reactjs",
        duration: "35hr 10min",
        projects: "7",
        src: react,
      },
      {
        title: "DSA With Python",
        url: "dsawithpython",
        duration: "35hr 10min",
        projects: "7",
        src: dsawp,
      },
      {
        title: "Devops",
        url: "devops",
        duration: "35hr 10min",
        projects: "7",
        src: devops,
      },
      {
        title: "Python",
        url: "python",
        duration: "35hr 10min",
        projects: "7",
        src: python,
      },
      {
        title: "DBMS",
        url: "dbms",
        duration: "35hr 10min",
        projects: "7",
        src: dbms,
      },
    ],
  },
  business: {
    pagetitle: "Finance Pack",
    heroHead: "Finance",
    price: 1499,
    curric: [
      {
        title: "Financial Modelling valuation",
        url: "financialmodelling",
        duration: "35hr 10min",
        projects: "7",
        src: fmv,
      },

      {
        title: "Financial Risk Management",
        url: "riskmanagement",
        duration: "35hr 10min",
        projects: "7",
        src: risk,
      },
      {
        title: "Stock Market",
        url: "fundamentalanalysis",
        duration: "35hr 10min",
        projects: "7",
        src: stockmarket,
      },
      {
        title: "Technical Research",
        url: "technicalanalysis",
        duration: "35hr 10min",
        projects: "7",
        src: technicalresearch,
      },
    ],
  },
  designing: {
    price: 1499,
    pagetitle: "Designers Pack",
    heroHead: "Designers",
    curric: [
      {
        title: "Adobe Illustrator",
        url: "illustrator",
        duration: "35hr 10min",
        projects: "7",
        src: illustrator,
      },
      {
        title: "Adobe Photoshop",
        url: "photoshop",
        duration: "35hr 10min",
        projects: "7",
        src: photoshop,
      },
      {
        title: "UI/UX",
        url: "uiux",
        duration: "35hr 10min",
        projects: "7",
        src: figma,
      },
      {
        title: "UX Research",
        url: "uxresearch",
        duration: "35hr 10min",
        projects: "7",
        src: uiux,
      },
    ],
  },
  appdev: {
    price: 1999,
    pagetitle: "App Development Pack",
    heroHead: "App Development",
    curric: [
      {
        title: "Java",
        url: "java",
        duration: "35hr 10min",
        projects: "7",
        src: java,
      },
      {
        title: "Flutter",
        url: "flutter",
        duration: "35hr 10min",
        projects: "7",
        src: flutter,
      },
      {
        title: "React Native",
        url: "reactnative",
        duration: "35hr 10min",
        projects: "7",
        src: reactnative,
      },
      {
        title: "React JS",
        url: "reactjs",
        duration: "35hr 10min",
        projects: "7",
        src: react,
      },
      {
        title: "App development",
        url: "appdevelopment",
        duration: "35hr 10min",
        projects: "7",
        src: appdev,
      },
    ],
  },
};

export default data;
