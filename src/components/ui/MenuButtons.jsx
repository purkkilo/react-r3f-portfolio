'use client'
import Image from 'next/image'
import FlagFi from '@/../public/img/flags/fi.svg'
import FlagEn from '@/../public/img/flags/gb.svg'
import { FormattedMessage } from 'react-intl'
import { useEffect, useState } from 'react'

export const MenuButtons = ({ locale, changeLanguage, toggleBackground }) => {
  const [flag, setFlag] = useState(FlagEn)

  useEffect(() => {
    setFlag(locale === 'fi' ? FlagFi : FlagEn)
  }, [locale])

  return (
    <div className='flex flex-row text-white' style={{ top: 20, marginLeft: 150, position: 'absolute', zIndex: 100 }}>
      <button className='tooltip rounded-lg' id='language-button' onClick={changeLanguage}>
        <Image style={{ height: 'auto' }} width={40} src={flag} alt='language button english/finnish' />
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
