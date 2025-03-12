'use client'
import Image from 'next/image'
import { FaArrowUp, FaGithub, FaLink } from 'react-icons/fa'
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

export const Project = ({ project }) => {
  return (
    <div className='m-2 flex-col rounded-lg bg-[#1f2e48] p-5 shadow-lg sm:m-10 sm:p-10'>
      <div className='image-title rounded-lg'>{project.name}</div>
      <Image
        className='project-image rounded-lg'
        width={800}
        height={800}
        src={project.imageLink}
        alt={project.imageAlt}
      ></Image>

      <div className='justify-items-center bg-[#0c121d] p-3 text-center sm:p-10'>
        <p className='text-gray-300'>{project.description}</p>
        <div className='flex justify-around rounded-lg bg-[#0c121d] sm:p-5' style={{ marginTop: '40px' }}>
          {project.stack.map((tech, i) => (
            <div key={i}>
              <Image width={100} height={100} src={tech.icon} alt='Javascript' />
              <p className='font-semibold text-skills'>{tech.name}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '20px' }} className='flex content-start justify-around'>
          <LinkButton href={project.visitLink} isGithub={false}>
            <FormattedMessage id='visit' defaultMessage='Visit' />
          </LinkButton>

          <LinkButton href={project.githubLink} isGithub={true}>
            <FormattedMessage id='learn-more' defaultMessage='Learn More' />
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
