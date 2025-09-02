'use client'

import { Box } from '@chakra-ui/react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <Box bg="background.primary">
      <Hero />
      <About />
      <Services />
     
      <Clients />
      <Testimonials />
      <Contact />
    </Box>
  )
}
