import React from 'react'
import Hero from '../../componets/hero'
import performance from '/public/2.jpg'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'performance',
}

export default function Page() {
  return (
    <div>
      
      <Hero imgurl={performance} altTxt="performance" content="performance"/>
    </div>
  ) 
}
