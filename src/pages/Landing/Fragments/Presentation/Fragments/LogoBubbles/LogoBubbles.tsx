import React from 'react'
import { ImageBox } from './LogoBubbles.styled'

const LogoBubbles: React.FC = () => {
  return (
    <>
      <ImageBox
        id='bubble'
        src='/images/Instagram_bubble.png'
        alt='instagram_icon'
        $top='2rem'
        $left='4rem'
        animate={{
          x: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ],
          y: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      <ImageBox
        id='bubble'
        src='/images/video_bubble.jpg'
        alt='instagram_icon'
        $top='6rem'
        $left='12rem'
        animate={{
          x: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ],
          y: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      <ImageBox
        id='bubble'
        src='/images/whatsapp_bubble.jpg'
        alt='instagram_icon'
        $top='10rem'
        $left='4rem'
        animate={{
          x: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ],
          y: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      <ImageBox
        id='bubble'
        src='/images/traffic_paid_bubble.jpg'
        alt='instagram_icon'
        $top='2rem'
        $right='4rem'
        animate={{
          x: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ],
          y: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      <ImageBox
        id='bubble'
        src='/images/ads_bubble.jpg'
        alt='ads_icon'
        $top='6rem'
        $right='12rem'
        animate={{
          x: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ],
          y: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      <ImageBox
        id='bubble'
        src='/images/logo_bubble.jpg'
        alt='logo_icon'
        $top='10rem'
        $right='4rem'
        animate={{
          x: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ],
          y: [
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`,
            `${Math.random() * 2}rem`
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
    </>
  )
}

export default LogoBubbles
