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
      
      <Hero imgurl={reliability} altTxt="reliability" content="欲穷千里目，更上一层楼"/>
    </div>
  )
}



