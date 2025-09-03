'use client'

import {
  Box,
  Container,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { getContent } from '../lib/content'

export default function Hero() {
  const content = getContent()

  return (
    <Box 
      position="relative" 
      h="100vh" 
      w="100vw" 
      overflow="hidden"
      bg="#ffffff"
    >
      {/* Background Image */}
      {/* <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={1}
      >
        <Image
          src="/bg.jpg"
          alt="Tree service background"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
          priority
          sizes="100vw"
        />
      </Box> */}

      {/* Dark Overlay */}
      {/* <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.4)"
        zIndex={2}
      /> */}

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
            src={'/logo.svg'}
            alt="Cole Tree Service Logo"
            height={600}
            width={600}
          />
        </Container>
      </Box>
    </Box>
  )
} 