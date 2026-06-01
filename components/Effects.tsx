'use client'
import { useEffect } from 'react'

export default function Effects() {
  useEffect(() => {
    const handlers: Array<[Element, string, EventListener]> = []

    const add = (el: Element, ev: string, fn: EventListener) => {
      el.addEventListener(ev, fn)
      handlers.push([el, ev, fn])
    }

    // Magnetic buttons
    document.querySelectorAll<HTMLElement>('.btn').forEach((btn) => {
      add(btn, 'mousemove', (e) => {
        const r = btn.getBoundingClientRect()
        const me = e as MouseEvent
        btn.style.transform = `translate(${(me.clientX - r.left - r.width / 2) * 0.15}px,${(me.clientY - r.top - r.height / 2) * 0.15}px) translateY(-1px)`
      })
      add(btn, 'mouseleave', () => { btn.style.transform = '' })
    })

    // 3D tilt on testimonial cards
    document.querySelectorAll<HTMLElement>('.testi-card').forEach((card) => {
      add(card, 'mousemove', (e) => {
        const r = card.getBoundingClientRect()
        const me = e as MouseEvent
        const x = (me.clientX - r.left) / r.width - 0.5
        const y = (me.clientY - r.top) / r.height - 0.5
        card.style.transform = `translateY(-5px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg)`
      })
      add(card, 'mouseleave', () => { card.style.transform = '' })
    })

    return () => {
      handlers.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn))
    }
  }, [])

  return null
}
