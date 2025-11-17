'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Suspense, useEffect, useLayoutEffect } from 'react'
import Loading from '@/components/other/Loading'
import { IntlProvider } from 'react-intl'
import { FormattedMessage } from 'react-intl'
import Finnish from '../public/locales/fi/translation.json'
import English from '../public/locales/en/translation.json'
import { useState } from 'react'
import FlagFi from '../public/img/flags/fi.svg'
import FlagEn from '../public/img/flags/gb.svg'
import { fi } from 'public/locales/fi/translations'
import { en } from 'public/locales/en/translations'
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import StackIcon from 'tech-stack-icons'

const Stars = dynamic(() => import('@/components/canvas/Stars').then((mod) => mod.Stars), {
  ssr: false,
})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: Loading,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const Project = dynamic(() => import('@/components/ui/Project').then((mod) => mod.Project), { ssr: false })

const MenuButtons = ({ locale, changeLanguage, toggleBackground }) => {
  return (
    <div className='flex flex-row text-white' style={{ top: 20, marginLeft: 150, position: 'absolute', zIndex: 100 }}>
      <button className='tooltip rounded-lg' id='language-button' onClick={changeLanguage}>
        <Image
          style={{ height: 'auto' }}
          width={40}
          src={locale === 'fi' ? FlagFi : FlagEn}
          alt='language button english/finnish'
        />
        <span style={{ left: '-40px' }} className='tooltiptext'>
          FI/EN
        </span>
      </button>

      <button id='background-button' className='rounded-lg' style={{ marginLeft: '20px' }} onClick={toggleBackground}>
        <FormattedMessage id='toggleBackground' defaultMessage='Toggle background' />
      </button>
    </div>
  )
}

const MainContent = ({ showBackground, translation, projects, skills }) => {
  const [shownProjects, setShownProjects] = useState(projects)
  const types = [...new Set(projects.map((p) => p.type))]

  const [technologies, setTechonologies] = useState(
    types.map((t) => {
      return { type: t, selected: true }
    }),
  )
  const [tempTechs, setTempTechs] = useState(technologies)

  useEffect(() => {
    console.log('useEffect')
    setTechonologies(tempTechs)
    console.log(tempTechs), console.log('----------')
    console.log(projects)
    console.log('---------- filter ------')
    console.log(projects.filter((p) => tempTechs.find((t) => t.type == p.type).selected))
    setShownProjects(projects.filter((p) => tempTechs.find((t) => t.type == p.type).selected))
  }, [technologies, projects, tempTechs])

  if (showBackground) {
    return (
      // Main content
      // Background
      <div id='background' className='overlay container mx-auto text-white'>
        <div className='my-20 flex flex-col' id='main-content'>
          {/* Intro */}
          <div className='intro-div slide-right text-center'>
            <h1 className='my-4 text-5xl leading-tight text-blue-300'>
              <FormattedMessage id='introMessage' defaultMessage='Hey, I am' />
              <span id='name-title' className='text-skills' style={{ marginLeft: '15px' }}>
                Jori
              </span>
            </h1>
            <h1 className='slide-left font-bold text-blue-300' id='job-title'>
              <FormattedMessage id='introJob' defaultMessage='Web Developer & Software Engineer' />
            </h1>
            <div className='flex flex-row items-center justify-center' id='learn-button'>
              <FaArrowDown size={20} style={{ marginRight: '5px', marginTop: '5px' }}></FaArrowDown>
              <a href='#about'>
                <FormattedMessage id='learn-me' defaultMessage='More about me' />
              </a>
              <FaArrowDown size={20} style={{ marginLeft: '5px', marginTop: '5px' }}></FaArrowDown>
            </div>
          </div>
          {/* About */}
          <div className='text-center' id='about'>
            <h1 className='my-4 text-5xl font-bold leading-tight text-skills'>
              <FormattedMessage id='about' defaultMessage='About' />
            </h1>
            <div className='text-box justify-center chrome'>
              <p className='text-wrap text-lg text-gray-300'>{translation.description}</p>
            </div>
            {/* First row of skills */}
            <div className='flex justify-around scrolling-horizontal' style={{ marginTop: '80px' }}>
              {skills.primary.map((skill, index) => (
                <div key={index} className='flex flex-col items-center scroller-inner'>
                  <StackIcon name={skill.icon} style={{ height: '100px', width: '100px' }} />
                  <p className='font-semibold'>{skill.name}</p>
                </div>
              ))}
            </div>
            {/* Second row of skills */}
            <div className='flex justify-around' style={{ margin: '80px' }}>
              {skills.secondary.map((skill, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <StackIcon name={skill.icon} style={{ height: '80px', width: '80px' }} />
                  <p className='font-semibold'>{skill.name}</p>
                </div>
              ))}
            </div>
            {/* Other skills */}
            <div className='flex justify-around' style={{ margin: '80px' }}>
              {skills.other.map((skill, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <StackIcon name={skill.icon} style={{ height: '60px', width: '60px' }} />
                  <p className='font-semibold'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Projects */}
          <div className='text-center' style={{ marginTop: '400px' }}>
            <h1 className='my-4 text-5xl font-bold leading-tight  text-skills'>
              <FormattedMessage id='projectsTitle' defaultMessage='Projects' />
            </h1>
          </div>
          <div className='text-center'>
            <h1 className='my-4 text-2xl font-bold'>
              <FormattedMessage id='technologiesTitle' defaultMessage='Technologies' />
            </h1>
          </div>
          <div className='flex' style={{ padding: 20, alignSelf: 'center' }}>
            {technologies.map((t, index) => (
              <div
                key={index}
                style={{
                  cursor: 'pointer',
                  padding: 30,
                  margin: 10,
                  borderRadius: 10,
                  borderColor: t.selected ? 'green' : 'white',
                }}
                className='border hover:bg-green-800'
                onClick={() => {
                  console.log('Clicked')
                  setTempTechs((prev) => {
                    const n = [...prev]
                    n[index].selected = !n[index].selected
                    return n
                  })
                  t.selected = !t.selected
                }}
              >
                <p className='font-semibold'>{t.type.toUpperCase()}</p>
              </div>
            ))}
          </div>
          <div>
            {shownProjects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
          {/* Contact */}
          <div className='mt-10 flex flex-col'>
            <h1 className='my-4 content-center text-center text-5xl font-bold text-skills'>
              <FormattedMessage id='contact' defaultMessage='Contact' />
            </h1>
            <div className='m-10 p-10 text-center'>
              <div className='flex content-center justify-center'>
                <FaEnvelope size={25} style={{ marginRight: '10px' }} /> <span>jori.kosonen@gmail.com</span>
              </div>
              <div className='flex content-center justify-center' style={{ marginTop: '10px' }}>
                <FaGithub size={25} style={{ marginRight: '10px' }} />{' '}
                <a className='contact-link' href='https://github.com/purkkilo/purkkilo'>
                  GitHub
                </a>
              </div>
              <div className='flex content-center justify-center' style={{ marginTop: '10px' }}>
                <FaLinkedin size={25} color={'#0a66c2'} style={{ marginRight: '10px' }} />{' '}
                <a className='contact-link' href='https://www.linkedin.com/in/joriko/'>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className='footer text-center text-white'>
          <p>© 2025 Jori Kosonen, Site WIP and more projects to come</p>
        </div>
      </div>
    )
  }
  return (
    <div className='text-white' style={{ position: 'absolute', zIndex: 2, top: 70, left: 20 }}>
      <h1>
        <FormattedMessage id='hint' defaultMessage='Hint: Try to left click and move your mouse' />
      </h1>
    </div>
  )
}

export default function Page() {
  const [showBackground, setShowBackground] = useState(true)
  const [locale, setLocale] = useState('en')
  const [lang, setLang] = useState(English)
  const [translation, setTranslation] = useState(en)
  const backgroundColor = '#12071f'
  const projects = [
    {
      name: 'WebGIS Silkroad',
      dateCompleted: '3.11.2023',
      dateUpdated: '12.2.2025',
      imageLink: '/img/WebGIS_Example.png',
      imageAlt: 'Image of WebGIS project',
      type: 'web',
      description: translation.webgisDescription,
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
      description: translation.fisustajaDescription,
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
      description: translation.portfolioDescription,
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
      description: translation.wordPressDescription,
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
      description: translation.webgisDescription,
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
      description: translation.receiptShareDescription,
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

  const changeLanguage = () => {
    setLang(lang == Finnish ? English : Finnish)
    setLocale(locale == 'fi' ? 'en' : 'fi')
    setTranslation(locale == 'fi' ? en : fi)
  }

  useLayoutEffect(() => {
    document.body.style.backgroundColor = backgroundColor
  })

  const toggleBackground = () => {
    setShowBackground(showBackground === true ? false : true)
  }

  return (
    <>
      {/* Background */}
      <div className='background relative size-full'>
        <View orbit={showBackground ? false : true} className='relative size-full' style={{ touchAction: 'none' }}>
          <Suspense>
            <Stars position={[0, 0, 0]} />
            <Common color={backgroundColor} />
          </Suspense>
        </View>
      </div>
      {/* Main page */}
      <IntlProvider locale={locale} messages={lang}>
        <MenuButtons locale={locale} changeLanguage={changeLanguage} toggleBackground={toggleBackground}></MenuButtons>
        <MainContent
          translation={translation}
          toggleBackground={toggleBackground}
          showBackground={showBackground}
          projects={projects}
          skills={skills}
        ></MainContent>
      </IntlProvider>
    </>
  )
}
