'use client'
import { useEffect } from 'react'

export default function ProgressBar() {
  useEffect(() => {
    const bar = document.getElementById('progress-bar')
    const mob = document.getElementById('mob-cta')
    const nav = document.querySelector('nav')
    const onScroll = () => {
      if (bar) bar.style.width = (scrollY / (document.body.scrollHeight - innerHeight) * 100) + '%'
      if (mob) mob.classList.toggle('show', scrollY > 360)
      if (nav) nav.classList.toggle('scrolled', scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return null
}