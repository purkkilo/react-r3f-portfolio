'use client'
import Image from 'next/image'
import { FaGithub, FaLink } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'

const LinkButton = ({ href, children, isGithub }) => {
  if (isGithub) {
    return (
      <a href={href} id='link-button' className='rounded-lg' target='_blank' rel='noopener noreferrer'>
        <div className='flex items-center' style={{ padding: '5px' }}>
          <FaGithub size={30} style={{ marginRight: '5px' }} />
          {children}
        </div>
      </a>
    )
  } else {
    return (
      <a href={href} id='link-button' className='rounded-lg' target='_blank' rel='noopener noreferrer'>
        <div className='flex items-center' style={{ padding: '5px' }}>
          <FaLink size={30} color='grey' style={{ marginRight: '5px' }} />
          {children}
        </div>
      </a>
    )
  }
}

export const Project = ({ name, imageLink, imageAlt, description, visitLink, githubLink }) => {
  return (
    <div className='m-10 flex-col rounded-lg bg-[#1f2e48] p-10 shadow-lg'>
      <h1 className='mb-2 text-center text-xl font-bold'>{name}</h1>
      <Image
        styles={{ width: 'auto', height: 'auto' }}
        className='project-image rounded-lg'
        width={800}
        height={800}
        src={imageLink}
        alt={imageAlt}
      ></Image>
      <div className='justify-items-center px-20 py-10 text-center'>
        <p className='text-gray-300'>{description}</p>
        <div style={{ marginTop: '20px' }} className='flex justify-around'>
          <LinkButton href={visitLink} isGithub={false}>
            <FormattedMessage id='visit' defaultMessage='Visit' />
          </LinkButton>

          <LinkButton href={githubLink} isGithub={true}>
            <FormattedMessage id='learn-more' defaultMessage='Learn More' />
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
