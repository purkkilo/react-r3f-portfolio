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
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Stars = dynamic(() => import('@/components/canvas/Stars').then((mod) => mod.Stars), {
  ssr: false,
})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: Loading,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const Project = dynamic(() => import('@/components/canvas/Project').then((mod) => mod.Project), { ssr: false })

const MenuButtons = ({ locale, changeLanguage, toggleBackground }) => {
  return (
    <div className='flex flex-row text-white' style={{ top: 20, marginLeft: 150, position: 'absolute', zIndex: 100 }}>
      <button className='tooltip rounded-lg' id='language-button' onClick={changeLanguage}>
        <Image width={40} height={40} src={locale === 'fi' ? FlagFi : FlagEn} alt='language button english/finnish' />
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
// TODO: Animations to buttons, links and images
const MainContent = ({ showBackground, translation, projects }) => {
  if (showBackground) {
    return (
      <div id='background' className='overlay container mx-auto text-white'>
        <div className='my-20 flex flex-col' id='main-content'>
          <div className='intro-div gap-y-[50px] text-center'>
            <h1 className='my-4 text-5xl leading-tight'>
              <FormattedMessage id='introMessage' defaultMessage='Hey, I am' />
              <span id='name-title'> Jori</span>
            </h1>
            <h1 className='font-bold' id='job-title'>
              <FormattedMessage id='introJob' defaultMessage='Web Developer & Software Engineer' />
            </h1>
            <a href='#about' id='learn-button'>
              <FormattedMessage id='learn-me' defaultMessage='More about me' />
            </a>
          </div>
          <div className='text-center' id='about'>
            <h1 className='my-4 text-5xl font-bold leading-tight'>
              <FormattedMessage id='about' defaultMessage='About' />
            </h1>
            <div className='text-box justify-center'>
              <p className='text-base text-gray-300'>{translation.description}</p>
            </div>
            <div className='flex justify-around' style={{ marginTop: '40px' }}>
              <div className='tooltip'>
                <Image width={80} height={80} src={'https://skillicons.dev/icons?i=js'} alt='Javascript' />
                <span style={{ marginTop: '40px', left: '-20px' }} className='tooltiptext'>
                  JavaScript
                </span>
              </div>
              <div className='tooltip'>
                <Image width={80} height={80} src={'https://skillicons.dev/icons?i=vue'} alt='Vue icon' />
                <span style={{ marginTop: '40px', left: '-20px' }} className='tooltiptext'>
                  Vue 2
                </span>
              </div>
              <div className='tooltip'>
                <Image width={80} height={80} src={'https://skillicons.dev/icons?i=mongodb'} alt='MongoDB icon' />

                <span style={{ marginTop: '40px', left: '-20px' }} className='tooltiptext'>
                  MongoDB
                </span>
              </div>

              <div className='tooltip'>
                <Image width={80} height={80} src={'https://skillicons.dev/icons?i=css'} alt='Css icon' />
                <span style={{ marginTop: '40px', left: '-20px' }} className='tooltiptext'>
                  CSS
                </span>
              </div>
              <div className='tooltip'>
                <Image width={80} height={80} src={'https://skillicons.dev/icons?i=git'} alt='Git icon' />
                <span style={{ marginTop: '40px', left: '-20px' }} className='tooltiptext'>
                  Git
                </span>
              </div>
            </div>
            <div className='flex justify-around' style={{ margin: '80px' }}>
              <div className='tooltip'>
                <Image width={60} height={60} src={'https://skillicons.dev/icons?i=react'} alt='React icon' />
                <span style={{ marginTop: '20px', left: '-30px' }} className='tooltiptext'>
                  React
                </span>
              </div>
              <div className='tooltip'>
                <Image width={60} height={60} src={'https://skillicons.dev/icons?i=python'} alt='Python icon' />
                <span style={{ marginTop: '20px', left: '-30px' }} className='tooltiptext'>
                  Python
                </span>
              </div>
              <div className='tooltip'>
                <Image width={60} height={60} src={'https://skillicons.dev/icons?i=sqlite'} alt='Sqlite icon' />
                <span style={{ marginTop: '20px', left: '-30px' }} className='tooltiptext'>
                  SQL (Sqlite, oracle sql etc.)
                </span>
              </div>
              <div className='tooltip'>
                <Image width={60} height={60} src={'https://skillicons.dev/icons?i=ts'} alt='Typescript icon' />
                <span style={{ marginTop: '20px', left: '-30px' }} className='tooltiptext'>
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <h1 className='my-4 text-5xl font-bold leading-tight'>
              <FormattedMessage id='projectsTitle' defaultMessage='Projects' />
            </h1>
          </div>
          <div>
            {projects.map((project, index) => (
              <Project
                key={index}
                name={project.name}
                imageLink={project.imageLink}
                imageAlt={project.imageAlt}
                description={project.description}
                visitLink={project.visitLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
          <div className='mt-10 flex flex-col'>
            <h1 className='my-4 content-center text-center text-5xl font-bold'>
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

  const changeLanguage = () => {
    setLang(lang == Finnish ? English : Finnish)
    setLocale(locale == 'fi' ? 'en' : 'fi')
    setTranslation(locale == 'fi' ? en : fi)
  }

  const backgroundColor = '#12071f'

  useLayoutEffect(() => {
    document.body.style.backgroundColor = backgroundColor
  })

  const toggleBackground = () => {
    setShowBackground(showBackground === true ? false : true)
  }

  const projects = [
    {
      name: 'WebGIS Silkroad',
      imageLink: '/img/WebGIS_Example.png',
      imageAlt: 'Image of WebGIS project',
      description: translation.webgisDescription,
      visitLink: 'https://webgis-silkroad.onrender.com/',
      githubLink: 'https://github.com/purkkilo/WebGIS-Silkroad',
    },
    {
      name: 'Fisustaja',
      imageLink: '/img/Fisustaja_Example.png',
      imageAlt: 'Image of Fisustaja project',
      description: translation.fisustajaDescription,
      visitLink: 'https://fisustaja.onrender.com/',
      githubLink: 'https://github.com/purkkilo/Fisustaja',
    },
  ]

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
        ></MainContent>
      </IntlProvider>
    </>
  )
}
