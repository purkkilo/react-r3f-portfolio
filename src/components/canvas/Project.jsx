'use client'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'

const LinkButton = ({ href, iconLink, iconAlt, children }) => {

  if(iconLink !== undefined) {
    return (
      <a href={href} id='link-button' className='rounded-lg' target='_blank' rel='noopener noreferrer'>
        <div className="flex justify-center content-center">
          <Image width={30} height={30} src={'https://skillicons.dev/icons?i=github'} alt='Github icon' />
          <div style={{padding:'5px'}}>
            {children}
          </div>
        </div>
      </a>
    )
  }
  else {
    return (
      <a href={href} id='link-button' className='menu-button rounded-lg' target='_blank' rel='noopener noreferrer'>
        <div className="flex justify-center content-center" style={{padding:'5px'}}>
        {children}
        </div>
      </a>
    )

  }
}


export const Project = ({ name, imageLink, imageAlt, description, visitLink, githubLink
}) => {


  return(
    <div
      className='flex-col'
      style={{
        marginBottom: '50px',
        margin: '30px',
        paddingTop: '30px',
        borderRadius: '10px',
      }}
    >
      <h1 className='mb-2 text-center text-xl font-bold'>{name}</h1>
      <Image
      className='project-image rounded-lg'
      width={600}
      height={600}
      src={imageLink}
      alt={imageAlt}
      ></Image>
      <div className='justify-items-center px-20 py-10 text-center'>
        <p className='text-gray-300'>{description}</p>
        <div style={{ marginTop: '20px' }} className='flex justify-around'>
          <LinkButton href={visitLink} iconAlt={''}>
            <FormattedMessage id='visit'  defaultMessage='Visit' />
          </LinkButton>

          <LinkButton href={githubLink} iconLink={'https://skillicons.dev/icons?i=github'} iconAlt={'Github Icon'}>
            <FormattedMessage id='learn-more'  defaultMessage='Learn More' />
          </LinkButton>

        </div>
      </div>
    </div>


  )
}



