'use client'

import {
  Box,
  Container,
  
} from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'
import { getContent } from '../lib/content'


export default function Hero() {
  const content = getContent()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <Box 
      position="relative" 
      h="100vh" 
      w="100vw" 
      overflow="hidden"
      bg="background.primary"
    >
      

      {/* Content */}
      <Box
        position="relative"
        zIndex={3}
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxW="container.xl" display="flex" justifyContent="center" alignItems="center" >
          <Image
            key={currentImageIndex} // Force re-render for each image
            src={'/logo.svg'}
            alt="Cole Tree Service Logo"
            height={600}
            width={600}
            priority={currentImageIndex === 0}
          />
        </Container>
      </Box>
    </Box>
  )
} 