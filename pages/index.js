import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Button } from 'flowbite-react'
import Nav from './nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
    <Nav></Nav>
    <h1 className='text-5xl '>Hello</h1>
    <h3>How are you</h3>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   
  </div>
  )
}
