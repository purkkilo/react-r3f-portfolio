  export const selfDescriptions = {
    fi:     `Olen rauhallinen korkean työmoraalin omaava verkko- ja ohjelmistokehityksestä kiinnostunut yksilö.
    Kokemukseni LUT-yliopistossa ja henkilökohtaisissa projekteissa ovat antaneet minulle monenlaisia taitoja
    varsinkin frontend-kehitykseen, ja olen aina kiinnostunut oppimaan lisää.
    Omaan kanditaatin tutkinnon LUT-yliopistosta ja tällä hetkellä maisterintutkintoni
    (Software Engineering and Digital Transformation) on opinnäytetyötä vaille valmis,
    ja aktiivisesti etsin aihetta työtä varten jotta saisin opintoni päätökseen.
    Tykkään ratkoa erilaisia pulmia, vapaa-ajalla harrastan saleilua,
    elokuvien katsomista ja kaikenlaisia pulmapelejä ARG jutuista koodauspulmiin ja shakkiin.`
,
    en:     `I'm calm person with high work ethic and passion
    for web- and software development.
    My time in LUT university, and developing my own projects,
    has prepared me for many scenarios.
    Frontend is my thing, but I'm always prepared to learn more.
    I have my bachelor's in techonology from computer science,
    and I'm looking for a subject to finish my master's
    (Software Engineering and Digital Transformation).
    On my free time I like to go to gym, watch movies
    and solve all kinds of puzzles, from ARGs and coding puzzles to chess.`,
  }
  
  
  const projects = [
    {
      name: 'WebGIS Silkroad',
      dateCompleted: '3.11.2023',
      dateUpdated: '12.2.2025',
      imageLink: '/img/WebGIS_Example.png',
      imageAlt: 'Image of WebGIS project',
      type: 'web',
      descriptions: {
        fi: `Verkkosovellus silkkitien ja sen varrella olevien kaupunkien tarkastelemiseen.
  Tehty yliopiston GIS (Geographic Information Systems) kurssia varten. Silkkitien lisäksi matkalta näkyy kaupungit ja kolme lähintä hotellia.
  `,
        en: `Web app for viewing cities along the silkroad.
  Made for university's GIS (Geographic Information Systems) course. From the map you can find their coordinates,
  and 3 of the closest hotels for most of the cities.
  `
      },
      visitLink: 'https://webgis-silkroad.onrender.com/',
      githubLink: 'https://github.com/purkkilo/WebGIS-Silkroad',
      stack: [
        { name: 'Vue 2', icon: 'vuejs' },
        { name: 'Vuetify', icon: 'vuejs' },
        { name: 'Vue CLI', icon: 'vuejs' },
        { name: 'JavaScript', icon: 'js' },
      ],
    },
    {
      name: 'Fisustaja',
      dateCompleted: '1.4.2023',
      dateUpdated: '14.6.2025',
      imageLink: '/img/Fisustaja_Example.png',
      imageAlt: 'Image of Fisustaja project',
      type: 'web',
      descriptions: {
        fi: `Verkkosovellus kalastuskilpailujen pitämiseen, joko Cup kokonaisuutena tai yksittäin.
  MongoDB, JavaScript and Vue 2 stack. Projektin tarkoitus oli opetella edellämainittuja teknologioita. *Projekti pyörii ilmaiseksi Renderissä, joten voi kestää minuutin kunnes serveri käynnistyy.
  `,
        en: `Application that is made for
  hosting fishing competitions (in Cup type setting, or standalone).
  Application was made for myself and for the purpose of learning Node,
  MongoDB, JavaScript and Vue 2 stack. *The project is hosted on Render for free, so it might take a minute for the server to start.
  `
      },
      visitLink: 'https://fisustaja.onrender.com/',
      githubLink: 'https://github.com/purkkilo/Fisustaja',
      stack: [
        { name: 'Vue 2', icon: 'vuejs' },
        { name: 'Vuetify', icon: 'vuejs' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'JavaScript', icon: 'js' },
      ],
    },
    {
      name: 'Portfolio',
      dateCompleted: '23.3.2025',
      dateUpdated: '26.6.2025',
      imageLink: '/img/Portfolio_Example.png',
      imageAlt: 'Image of this portfolio project',
      descriptions: {
        fi: `Verkkosivusto tehty React, Next.js ja TailwindCSS teknologioilla.
  Taustan "tähdet" on tehty Three.js ja React-three-fiber:llä.
  Sivusto on tehty esittelemään taitojani ja projektejani. Sivu on saatavilla englanniksi sekä suomeksi.`
,
        en: `Web portfolio made with React, Next.js and TailwindCSS.
  Backgound "stars" were made with Three.js and React-three-fiber.
  The site is made to showcase my skills and projects and is available in English and Finnish.`

      },
      type: 'web',
      visitLink: '#main-content',
      githubLink: 'https://github.com/purkkilo/react-r3f-portfolio',
      stack: [
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'TailwindCSS', icon: 'tailwindcss' },
        { name: 'JavaScript', icon: 'js' },
      ],
    },
    {
      name: 'Wordpress Homepage for PPK Group OY',
      dateCompleted: '19.6.2025',
      dateUpdated: '19.6.2025',
      imageLink: '/img/Wordpress_Example.png',
      imageAlt: 'Image of the PPK Group OY homepage',
      type: 'web',
      description: 'Wordpress homepage for PPK Group OY',
      visitLink: 'https://ppkgroup.fi/',
      descriptions: {
        fi: `PPK Group OY:lle suunnitellut ja toteutetut kotisivut.
Sivusto on toteutettu WordPressillä hyödyntäen Otter Blocks lisäosaa.
Sivuston tarkoitus on esitellä yritystä, sen palveluita ja yhteystietoja.`
,
        en: `WordPress site made for PPK Group OY.
  The site is made with Otter Blocks plugin.
  The purpose of the site is to showcase the company, its services and contact information.
  Only available in Finnish.`

      },
      githubLink: '',
      stack: [
        { name: 'WordPress', icon: 'wordpress' },
        { name: 'Otter Blocks', icon: 'wordpress' },
        { name: 'HTML', icon: 'html5' },
        { name: 'CSS', icon: 'css3' },
      ],
    },
    {
      name: 'Electricity Widget',
      dateCompleted: '19.08.2025',
      dateUpdated: '14.3.2025',
      imageLink: '/img/Electricity_Example.jpg',
      imageAlt: 'Image of Electricity Widget project',
      type: 'mobile',
      descriptions: {
        fi: `Sähkön hinta widget on verkkosovellus,
  joka mahdollistaa käyttäjien tarkastella sähkön hintoja Suomessa.
  Sovelluksessa on widget, joka voidaan lisätä käyttäjän kotinäyttöön,
  ja se päivittää hinnat tunnin välein. Testattu Androidilla ja verkkoselaimella (iOS ei tuettu)
`,
        en: `Electricity widget is a web application
  that allows users to view current electricity prices in Finland.
  The app has a widget that can be added to the user's home screen,
  and it updates the prices every hour. Tested on Android and web browser (iOS excluded)
  `
      },
      visitLink: '',
      githubLink: 'https://github.com/purkkilo/electricity-widget',
      stack: [
        { name: 'React Native', icon: 'react' },
        { name: 'Expo', icon: 'react' },
        { name: 'Typescript', icon: 'typescript' },
        { name: 'Jest', icon: 'jest' },
      ],
    },
    {
      name: 'Receipt Share',
      dateCompleted: '15.11.2025',
      dateUpdated: '15.11.2025',
      imageLink: '/img/ReceiptShare_Example.jpg',
      imageAlt: 'Image of Receipt Share project',
      type: 'mobile',
      descriptions: {
        fi: `Tällä sovelluksella voit lukea tiedot kuitista digitaaliseen muotoon,
muokata tai lisätä tuotteita manuaalisesti, lisätä omia kuluja, ja jakaa nämä kulut osallistujien kesken
tuote kerrallaan`,
        en: `With this app you can read price information from receipts, modify them manually, add your own expenses, and share these expenses product by product.`

      },
      visitLink: '',
      githubLink: 'https://github.com/purkkilo/receipt-share',
      stack: [
        { name: 'React Native', icon: 'react' },
        { name: 'Expo', icon: 'react' },
        { name: 'Typescript', icon: 'typescript' },
        { name: 'OCR (react-native-mlkit-ocr)', icon: 'js' },
      ],
    },
  ]
  const primarySkills = [
    { name: 'JavaScript', icon: 'js' },
    { name: 'Vue 2', icon: 'vuejs' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'CSS', icon: 'css3' },
    { name: 'Git', icon: 'git' },
  ]
  const secondarySkills = [
    { name: 'React', icon: 'react' },
    { name: 'Python', icon: 'python' },
    { name: 'SQL', icon: 'mysql' },
    { name: 'TypeScript', icon: 'typescript' },
  ]

  const otherSkills = [{ name: 'WordPress', icon: 'wordpress' }]

  const skills = { primary: primarySkills, secondary: secondarySkills, other: otherSkills }


  export const careerData = {
    projects,
    skills,
  }
