import React from 'react'
import homeSrc from '/public/1.jpg'
import Hero from '../componets/hero'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Home',
  description: 'Welcome to my website',
}

export default function Page() {
  return (
    <Hero imgurl={homeSrc} altTxt="Welcome to my website" content="This is a description of my website"/>
  )
}

