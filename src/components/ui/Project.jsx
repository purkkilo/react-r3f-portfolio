'use client'
import SkillsDisplay from './SkillsDisplay'
import { FormattedMessage } from 'react-intl'
import { FaArrowUp, FaGithub, FaLink } from 'react-icons/fa'
import Image from 'next/image'

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
      <a
        href={href}
        id='link-button'
        className='rounded-lg'
        target={href === '#main-content' ? '' : '_blank'}
        rel='noopener noreferrer'
      >
        <div className='flex items-center' style={{ padding: '5px' }}>
          {href === '#main-content' ? (
            <FaArrowUp size={30}></FaArrowUp>
          ) : (
            <FaLink size={30} color='grey' style={{ marginRight: '5px' }} />
          )}

          {children}
        </div>
      </a>
    )
  }
}

export const Project = ({ project, locale }) => {
  return (
    <div className='fade-in m-2 flex-col rounded-lg bg-[#1f2e48] p-5 shadow-lg sm:m-10 sm:p-10'>
      <div className='image-title rounded-lg'>{project.name}</div>
      <Image
        className='project-image rounded-lg'
        width={400}
        height={400}
        src={project.imageLink}
        alt={project.imageAlt}
      ></Image>

      <div className='justify-items-center p-3 text-center sm:p-10'>
        <p className='text-gray-300'>{project.descriptions[locale]}</p>
        <SkillsDisplay skills={project.stack} />
        <div style={{ marginTop: '20px' }} className='flex content-start justify-around'>
          {project.visitLink ? (
            <LinkButton href={project.visitLink} isGithub={false}>
              <FormattedMessage id='visit' defaultMessage='Visit' />
            </LinkButton>
          ) : (
            <></>
          )}
          {project.githubLink ? (
            <LinkButton href={project.githubLink} isGithub={true}>
              <FormattedMessage id='learn-more' defaultMessage='Learn More' />
            </LinkButton>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}
