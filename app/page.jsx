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
    <a href={href} className='link-button' target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}

export default function Page() {
  const [locale, setLocale] = useState('en')
  const [lang, setLang] = useState(English)
  const [showBackground, setShowBackground] = useState(true)
  const [translation, setTranslation] = useState(en)

  const backgroundColor = '#12071f'

  useLayoutEffect(() => {
    document.body.style.backgroundColor = backgroundColor
  })

  const changeLanguage = () => {
    setLang(lang == Finnish ? English : Finnish)
    setLocale(locale == 'fi' ? 'en' : 'fi')
    setTranslation(locale == 'fi' ? fi : en)
  }

  const toggleBackground = () => {
    setShowBackground(showBackground === true ? false : true)

    const content = document.getElementById('main-content')
    const background = document.getElementById('background')

    if (showBackground) {
      content.style.display = 'none'
      background.style.background = 'rgba(0, 0, 0, 0)'
    } else {
      content.style.display = ''
      background.style.background = 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <>
      {/* Background */}
      <div className='background relative size-full'>
        <View orbit={showBackground ? true : false} className='relative size-full' style={{ touchAction: 'none' }}>
          <Suspense>
            <Stars position={[0, 0, 0]} />
            <Common color={backgroundColor} />
          </Suspense>
        </View>
      </div>
      {/* Main page */}
      <IntlProvider locale={locale} messages={lang}>
        <div id='background' className='overlay container mx-auto text-white'>
          <div className='flex justify-end' style={{ marginTop: '10px' }}>
            <button className='language-button' onClick={changeLanguage}>
              <Image
                width={40}
                height={40}
                src={locale === 'fi' ? FlagFi : FlagEn}
                alt='test'
                style={{ borderRadius: '10%' }}
              />
            </button>
            <button className='background-button' onClick={toggleBackground}>
              <FormattedMessage id='toggleBackground' defaultMessage='Toggle background' />
            </button>
          </div>

          <div className='my-20 flex flex-col' id='main-content'>
            <div className='intro-div text-center'>
              <h1 className='my-4 text-5xl font-bold leading-tight'>Hey, I&apos;m Jori</h1>
              <h1 className=''>- Web developer</h1>
              <h1 className=''>Jori and web developer with different styling, some animations</h1>
              <a href='#about' className='learn-button'>
                <FormattedMessage id='learn-more' defaultMessage='Learn more' />
              </a>
            </div>
            <div className='text-center' id='about'>
              <h1 className='my-4 text-5xl font-bold leading-tight'>
                <FormattedMessage id='about' defaultMessage='About' />
              </h1>
              <div>
                <h1>{translation.description}</h1>
              </div>
              <div className='text-center' style={{ margin: '100px' }}>
                <h1 className='my-4 text-5xl font-bold leading-tight'>
                  Here something about my coding techonologies/stacks
                </h1>
                <h1>Vue, Vuetify?, MongoDB, HTML, CSS, GIT, JS Smaller icons for React, Python, TS, SQL</h1>
              </div>
            </div>
            <div className='text-center'>
              <h1 className='my-4 text-5xl font-bold leading-tight'>
                <FormattedMessage id='projectsTitle' defaultMessage='Projects' />
              </h1>
            </div>
            <div className='mt-10 flex'>
              <Image
                className='project-image'
                width={700}
                height={700}
                src='/img/WebGIS_Example.png'
                alt='Image of WebGIS project'
              ></Image>
              <div className='px-6 py-4'>
                <div className='mb-2 text-xl font-bold'>WebGIS Silkroad</div>
                <p className='text-base text-gray-300'>{translation.webgisDescription}</p>
                <p className='text-base text-gray-300'>Add zoom/animation to images</p>
                <p className='text-base text-gray-300'>
                  Make the project layout responsive (buttons are hidden if small screen)
                </p>
                <LinkButton href='https://webgis-silkroad.onrender.com/' className='link-button'>
                  <FormattedMessage id='visit' defaultMessage='Visit' />
                </LinkButton>
                <LinkButton className='link-button' href='https://github.com/purkkilo/WebGIS-Silkroad'>
                  <FormattedMessage id='learn-more' defaultMessage='Learn more' />
                </LinkButton>
              </div>
            </div>
            <div className='mt-10 flex'>
              <Image
                className='project-image'
                width={700}
                height={700}
                src='/img/Fisustaja_Example.png'
                alt='Image of Fisustaja project'
              ></Image>
              <div className='px-6 py-4'>
                <div className='mb-2 text-xl font-bold'>Fisustaja</div>
                <p className='text-base text-gray-300'>{translation.fisustajaDescription}</p>
                <LinkButton href='https://fisustaja.onrender.com/' className='link-button'>
                  <FormattedMessage id='visit' defaultMessage='Visit' />
                </LinkButton>
                <LinkButton className='link-button' href='https://github.com/purkkilo/Fisustaja'>
                  <FormattedMessage id='learn-more' defaultMessage='Learn more' />
                </LinkButton>
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
      </IntlProvider>
    </>
  )
}
