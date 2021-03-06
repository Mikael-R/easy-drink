import React from 'react'

import Title from '@/components/Title'
import Button from '@/components/Button'

import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'

const Header = () => {
  return (
    <header className='flex justify-between'>
      <Title tag='h1'>
        Welcome to
        <br /> Easy Drink 😋
      </Title>

      <div className='flex space-x-3'>
        <a href='https://github.com/Mikael-R' target='_blank' rel='noreferrer'>
          <Button skin='icon' icon={GithubIcon} />
        </a>
        <a
          href='https://www.linkedin.com/in/mikael-r/'
          target='_blank'
          rel='noreferrer'
        >
          <Button skin='icon' icon={LinkedinIcon} />
        </a>
      </div>
    </header>
  )
}

export default Header
