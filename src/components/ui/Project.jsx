'use client'
import Image from 'next/image'
import { FaArrowUp, FaGithub, FaLink } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import SkillsDisplay from './SkillsDisplay'

const LinkButton = ({ href, children, isGithub }) => {
  if (isGithub) {
    return (
      <a href={href} id='link-button' className='rounded-lg' target='_blank' rel='noopener noreferrer'>
        <div className='flex items-center p-1'>
          <FaGithub size={30} className='mr-1' />
          {children}
        </div>
      </a>
    )
  }

  return (
    <a
      href={href}
      id='link-button'
      className='rounded-lg'
      target={href === '#main-content' ? undefined : '_blank'}
      rel='noopener noreferrer'
    >
      <div className='flex items-center p-1'>
        {href === '#main-content' ? <FaArrowUp size={30} /> : <FaLink size={30} color='grey' className='mr-1' />}
        {children}
      </div>
    </a>
  )
}

export const Project = ({ project, locale, index }) => {
  const side = index % 2 === 0 ? 'left' : 'right'

  return (
    <div className='purple-glow p-2 project-card' data-side={side}>
      <div className='project-title mt-5'>{project.name}</div>

      <div className={`flex flex-col rounded-lg p-3 sm:flex-row justify-center items-center gap-6 mt-5`}>
        <div className='project-image'>
          <Image
            className='purple-glow rounded-lg transition-transform duration-200 ease-out hover:scale-110'
            width={250}
            height={250}
            src={project.imageLink}
            alt={project.imageAlt}
          />
        </div>

        <div className='project-content text-center mt-8 sm:mt-0 sm:ml-10'>
          <p className='text-gray-300'>{project.descriptions[locale]}</p>
          <SkillsDisplay skills={project.stack} />
        </div>
      </div>

      <div className='flex justify-around m-10'>
        {project.visitLink && (
          <LinkButton href={project.visitLink}>
            <FormattedMessage id='visit' defaultMessage='Visit' />
          </LinkButton>
        )}
        {project.githubLink && (
          <LinkButton href={project.githubLink} isGithub>
            <FormattedMessage id='learn-more' defaultMessage='Learn More' />
          </LinkButton>
        )}
      </div>
    </div>
  )
}
export default Project
