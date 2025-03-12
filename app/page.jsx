'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Suspense, useLayoutEffect } from 'react'
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
  if (showBackground) {
    return (
      // Main content
      // Background
      <div id='background' className='overlay container mx-auto text-white'>
        <div className='my-20 flex flex-col' id='main-content'>
          {/* Intro */}
          <div className='intro-div slide-right text-center'>
            <h1 className='my-4 text-5xl leading-tight '>
              <FormattedMessage id='introMessage' defaultMessage='Hey, I am' />
              <span id='name-title' className='text-skills' style={{ marginLeft: '15px' }}>
                Jori
              </span>
            </h1>
            <h1 className='slide-right font-bold' id='job-title'>
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
            <h1 className='my-4 text-5xl font-bold leading-tight  text-skills'>
              <FormattedMessage id='about' defaultMessage='About' />
            </h1>
            <div className='text-box justify-center'>
              <p className='text-wrap text-lg text-gray-300'>{translation.description}</p>
            </div>
            {/* First row of skills */}
            <div className='flex justify-around' style={{ marginTop: '80px' }}>
              {skills.primary.map((skill, index) => (
                <div key={index}>
                  <Image className='shaky' width={80} height={80} src={skill.icon} alt={skill.name} />
                  <p className='font-semibold text-skills'>{skill.name}</p>
                </div>
              ))}
            </div>
            {/* Second row of skills */}
            <div className='flex justify-around' style={{ margin: '80px' }}>
              {skills.secondary.map((skill, index) => (
                <div key={index}>
                  <Image className='shaky' width={60} height={60} src={skill.icon} alt={skill.name} />
                  <p className='font-semibold text-skills'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Projects */}
          <div className='text-center'>
            <h1 className='my-4 text-5xl font-bold leading-tight  text-skills'>
              <FormattedMessage id='projectsTitle' defaultMessage='Projects' />
            </h1>
          </div>
          <div>
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
          {/* Contact */}
          <div className='mt-10 flex flex-col'>
            <h1 className='my-4 content-center text-center text-5xl font-bold  text-skills'>
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
      imageLink: '/img/WebGIS_Example.png',
      imageAlt: 'Image of WebGIS project',
      description: translation.webgisDescription,
      visitLink: 'https://webgis-silkroad.onrender.com/',
      githubLink: 'https://github.com/purkkilo/WebGIS-Silkroad',
      stack: [
        { name: 'Vue 2', icon: 'https://skillicons.dev/icons?i=vue' },
        { name: 'Vuetify', icon: 'https://skillicons.dev/icons?i=vuetify' },
        { name: 'Vue CLI', icon: 'https://skillicons.dev/icons?i=vue' },
        { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
      ],
    },
    {
      name: 'Fisustaja',
      imageLink: '/img/Fisustaja_Example.png',
      imageAlt: 'Image of Fisustaja project',
      description: translation.fisustajaDescription,
      visitLink: 'https://fisustaja.onrender.com/',
      githubLink: 'https://github.com/purkkilo/Fisustaja',
      stack: [
        { name: 'Vue 2', icon: 'https://skillicons.dev/icons?i=vue' },
        { name: 'Vuetify', icon: 'https://skillicons.dev/icons?i=vuetify' },
        { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
        { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
        { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
      ],
    },
    {
      name: 'Portfolio',
      imageLink: '/img/Portfolio_Example.png',
      imageAlt: 'Image of this portfolio project',
      description: translation.portfolioDescription,
      visitLink: '#main-content',
      githubLink: 'https://github.com/purkkilo/react-r3f-portfolio',
      stack: [
        { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
        { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=next' },
        { name: 'TailwindCSS', icon: 'https://skillicons.dev/icons?i=tailwindcss' },
        { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
      ],
    },
  ]
  const primarySkills = [
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'Vue 2', icon: 'https://skillicons.dev/icons?i=vue' },
    { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
  ]

  const secondarySkills = [
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
    { name: 'SQL', icon: 'https://skillicons.dev/icons?i=sqlite' },
    { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
  ]
  const skills = { primary: primarySkills, secondary: secondarySkills }

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
