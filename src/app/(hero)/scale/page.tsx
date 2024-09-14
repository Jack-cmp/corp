
import React from 'react'
import Hero from '../../componets/hero'
import scale from '/public/4.jpg'
import { Metadata } from 'next'


export const metadata:Metadata = {
  title: 'scale',
}

export default function Page() {
  return (
    <div>
      
      <Hero imgurl={scale} altTxt="performanscalece" content="scale"/>
    </div>
  )
}

