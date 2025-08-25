'use client'

import {
  Box,
  Container,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getContent } from '../lib/content'

const studioImages = [
  '/board.png',
  '/control_room.png',
  '/drums.png',
  '/drums_2.png',
  '/guitars.png',
  '/mic.png',
  '/pano.png',
  '/room_1.png',
  '/room_2.png',
  '/room_3.png',
  '/room_4.png',
]

export default function Hero() {
  const content = getContent()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Trigger logo animation after component mounts
    const logoTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Image transition timer
    const imageTimer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === studioImages.length - 1 ? 0 : prevIndex + 1
        )
        setIsTransitioning(false)
      }, 500) // Half second fade out, then change image
    }, 5000) // Change image every 5 seconds

    return () => {
      clearTimeout(logoTimer)
      clearInterval(imageTimer)
    }
  }, [])

  return (
    <Box 
      position="relative" 
      h="100vh" 
      w="100vw" 
      overflow="hidden"
      bg="background.primary"
    >
      {/* Background Images */}
      {studioImages.map((image, index) => (
        <Box
          key={image}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          opacity={index === currentImageIndex ? (isTransitioning ? 0 : 1) : 0}
          transition="opacity 1s ease-in-out"
          zIndex={1}
        >
          <Image
            src={image}
            alt={`Studio image ${index + 1}`}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            priority={index === 0}
          />
        </Box>
      ))}

      {/* Black Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={2}
      />

      {/* Content */}
      <Box
        position="relative"
        zIndex={3}
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Box
              transition="all 3s ease-in-out"
              transform={isLoaded ? 'scale(1.1)' : 'scale(1)'}
              overflow="visible"
            >
              <Text fontSize="80px" color="text.primary">Fire Wave Studios</Text>
            </Box>
            <Text
              fontSize="xl"
              color="text.primary"
              maxW="2xl"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
            >
              {content.hero.subtitle}
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
} 