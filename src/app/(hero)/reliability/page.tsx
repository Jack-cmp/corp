import React from 'react'
import Hero from '../../componets/hero'
import reliability from '/public/3.jpg'
import { Metadata } from 'next'


export const metadata:Metadata = {
  title: 'reliability',
}
export default function Page() {
  return (
    <div>
      
      <Hero imgurl={reliability} altTxt="reliability" content="reliability"/>
    </div>
  )
}



