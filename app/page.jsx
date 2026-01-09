'use client'
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MenuButtons } from '@/components/ui/MenuButtons'
import SkillsDisplay from '@/components/ui/SkillsDisplay'
import dynamic from 'next/dynamic'
import { Suspense, useLayoutEffect } from 'react'
import Loading from '@/components/other/Loading'
import { IntlProvider } from 'react-intl'
import { FormattedMessage } from 'react-intl'
import Finnish from '../public/locales/fi/translation.json'
import English from '../public/locales/en/translation.json'
import { useState } from 'react'
import { careerData, selfDescriptions } from 'public/data/careerData'

const Stars = dynamic(() => import('@/components/canvas/Stars').then((mod) => mod.Stars), {
  ssr: false,
})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: Loading,
})

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const Project = dynamic(() => import('@/components/ui/Project').then((mod) => mod.Project), { ssr: false })

const MainContent = ({ showBackground, locale, projects, skills }) => {
  const [shownProjects, setShownProjects] = useState(projects)
  const types = [...new Set(projects.map((p) => p.type))]
  const [technologies, setTechonologies] = useState(
    types.map((t) => {
      return { type: t, selected: true }
    }),
  )
  const description = selfDescriptions[locale] || selfDescriptions['en']

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
            <h1 className='text-skills my-4 text-5xl font-bold leading-tight'>
              <FormattedMessage id='about' defaultMessage='About' />
            </h1>
            <div className='text-box justify-center'>
              <p className='text-wrap text-lg text-gray-300'>{description}</p>
            </div>
            {/* First row of skills */}
            <SkillsDisplay skills={skills.primary} />
            {/* Second row of skills */}
            <SkillsDisplay skills={skills.secondary} />
            {/* Other skills */}
            <SkillsDisplay skills={skills.other} />
          </div>
          {/* Projects */}
          <div className='text-center' style={{ marginTop: '400px' }}>
            <h1 className='text-skills my-4 text-5xl font-bold  leading-tight'>
              <FormattedMessage id='projectsTitle' defaultMessage='Projects' />
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
                  borderColor: 'white',
                  backgroundColor: t.selected ? '#2c005f' : null,
                }}
                className='tooltip border hover:bg-purple-950'
                onClick={() => {
                  t.selected = !t.selected
                  setShownProjects(projects.filter((p) => technologies.find((t) => t.type == p.type).selected))
                }}
              >
                <p className='font-semibold'>{t.type.toUpperCase()}</p>
                <span style={{ top: 88, left: t.type == 'web' ? -10 : 1 }} className='tooltiptext'>
                  <FormattedMessage id='filterProjects' defaultMessage='Click to filter' />
                </span>
              </div>
            ))}
          </div>
          <div>
            {shownProjects.map((project, index) => (
              <Project key={index} project={project} locale={locale} />
            ))}
          </div>
          {/* Contact */}
          <div className='mt-10 flex flex-col'>
            <h1 className='text-skills my-4 content-center text-center text-5xl font-bold'>
              <FormattedMessage id='contact' defaultMessage='Contact' />
            </h1>
            <div className='m-10 p-10 text-center'>
              <div className='flex place-content-center'>
                <FaEnvelope size={25} style={{ marginRight: '10px' }} /> <span>jori.kosonen@gmail.com</span>
              </div>
              <div className='flex place-content-center' style={{ marginTop: '10px' }}>
                <FaGithub size={25} style={{ marginRight: '10px' }} />{' '}
                <a className='contact-link' href='https://github.com/purkkilo/purkkilo'>
                  GitHub
                </a>
              </div>
              <div className='flex place-content-center' style={{ marginTop: '10px' }}>
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
  const backgroundColor = '#12071f'
  const { projects, skills } = careerData

  const changeLanguage = () => {
    setLang(lang == Finnish ? English : Finnish)
    setLocale(locale == 'fi' ? 'en' : 'fi')
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
          locale={locale}
          toggleBackground={toggleBackground}
          showBackground={showBackground}
          projects={projects}
          skills={skills}
        ></MainContent>
      </IntlProvider>
    </>
  )
}
