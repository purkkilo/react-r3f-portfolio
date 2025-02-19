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

const Stars = dynamic(() => import('@/components/canvas/Stars').then((mod) => mod.Stars), {
  ssr: false,
})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: Loading,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const LinkButton = ({ href, children }) => {
  return (
    <a href={href} id='link-button' className='menu-button' target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}

const MenuButtons = ({ locale, changeLanguage, toggleBackground }) => {
  return (
    <div className='flex flex-row text-white' style={{ top: 10, right: 150, position: 'absolute', zIndex: 100 }}>
      <button className='menu-button tooltip' id='language-button' onClick={changeLanguage}>
        <Image
          width={40}
          height={40}
          src={locale === 'fi' ? FlagFi : FlagEn}
          alt='test'
          style={{ borderRadius: '10%' }}
        />
        <span style={{ left: '-40px' }} className='tooltiptext'>
          FI/EN
        </span>
      </button>

      <button className='menu-button' id='background-button' onClick={toggleBackground}>
        <FormattedMessage id='toggleBackground' defaultMessage='Toggle background' />
      </button>
    </div>
  )
}

const MainContent = ({ showBackground, translation }) => {
  if (showBackground) {
    return (
      <div id='background' className='overlay container mx-auto text-white'>
        <div className='my-20 flex flex-col' id='main-content'>
          <div className='intro-div text-center'>
            <h1 className='my-4 text-5xl leading-tight'>
              <FormattedMessage id='introMessage' defaultMessage='Hey, I am' />
              <span id='name-title'> Jori</span>
            </h1>
            <h1 className='font-bold' id='job-title'>
              Web developer
            </h1>
            <a href='#about' id='learn-button' className='menu-button'>
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
                  Vue
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
          <div
            className='flex-col'
            style={{
              marginBottom: '50px',
              margin: '30px',
              paddingTop: '30px',
              backgroundColor: '#12071f',
              borderRadius: '10px',
            }}
          >
            <h1 className='col-span-2 mb-2 text-center text-xl font-bold'>WebGIS Silkroad</h1>
            <Image
              className='project-image'
              width={600}
              height={600}
              src='/img/WebGIS_Example.png'
              alt='Image of WebGIS project'
            ></Image>
            <div className='justify-items-center px-20 py-10 text-center'>
              <p className='col-span-2 text-base text-gray-300'>{translation.webgisDescription}</p>
              <div style={{ marginTop: '20px' }} className='flex justify-around'>
                <LinkButton href='https://webgis-silkroad.onrender.com/'>
                  <FormattedMessage id='visit' defaultMessage='Visit' />
                </LinkButton>
                <LinkButton href='https://github.com/purkkilo/WebGIS-Silkroad'>
                  <Image width={20} height={20} src={'https://skillicons.dev/icons?i=github'} alt='Github icon' />
                  <FormattedMessage id='learn-more' defaultMessage='Learn more' />
                </LinkButton>
              </div>
            </div>
          </div>
          <div
            className='flex-col'
            style={{
              marginBottom: '50px',
              margin: '30px',
              paddingTop: '30px',
              backgroundColor: '#12071f',
              borderRadius: '10px',
            }}
          >
            <h1 className='mb-2 text-center text-xl font-bold'>Fisustaja</h1>
            <Image
              className='project-image'
              width={600}
              height={600}
              src='/img/Fisustaja_Example.png'
              alt='Image of Fisustaja project'
            ></Image>
            <div className='justify-items-center px-20 py-10 text-center'>
              <p className='col-span-2 text-base text-gray-300'>{translation.fisustajaDescription}</p>
              <div style={{ marginTop: '20px' }} className='flex justify-around'>
                <LinkButton href='https://fisustaja.onrender.com/'>
                  <FormattedMessage id='visit' defaultMessage='Visit' />
                </LinkButton>

                <LinkButton href='https://github.com/purkkilo/Fisustaja'>
                  <Image width={20} height={20} src={'https://skillicons.dev/icons?i=github'} alt='Github icon' />
                  <FormattedMessage id='learn-more' defaultMessage='Learn more' />
                </LinkButton>
              </div>
            </div>
          </div>
          <div className='mt-10 text-center'>
            <h1 className='my-4 text-5xl font-bold leading-tight'>
              <FormattedMessage id='contact' defaultMessage='Contact' />
            </h1>
            <div>
              <h1>jori.kosonen@gmail.com</h1>
            </div>
          </div>
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
  /* TODO adjust star position */
  return (
    <>
      {/* Background */}
      <div className='background relative size-full'>
        <View orbit={showBackground ? false : true} className='relative size-full' style={{ touchAction: 'none' }}>
          <Suspense>
            <Stars position={[0, 0, 0.5]} />
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
        ></MainContent>
      </IntlProvider>
    </>
  )
}
