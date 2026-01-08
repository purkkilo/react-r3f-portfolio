'use client'
import React from 'react'
import SkillIcon from '@/components/icons/SkillIcon'

const SkillsDisplay = ({ skills }) => {
  return (
    <div className='scrolling-horizontal flex justify-around' style={{ marginTop: '80px' }}>
      {skills.map((skill, index) => (
        <div key={index} className='flex flex-col items-center gap-1'>
          <SkillIcon
            name={skill.icon}
            style={{
              width: 'clamp(32px, 6vw, 64px)',
              height: 'clamp(32px, 6vw, 64px)',
            }}
          />
          <p className='font-semibold text-sm sm:text-base'>{skill.name}</p>
        </div>
      ))}
    </div>
  )
}

export default SkillsDisplay
