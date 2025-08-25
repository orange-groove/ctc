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
  '/room_1.png',
  '/room_2.png',
  '/room_3.png',
  '/room_4.png',
]

export default function Hero() {
  const content = getContent()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageZoom, setImageZoom] = useState(false)

  useEffect(() => {
    // Trigger logo animation after component mounts
    const logoTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Image transition timer
    const imageTimer = setInterval(() => {
      // Reset zoom and loading states for new image
      setImageZoom(false)
      
      setCurrentImageIndex((prevIndex) => 
        prevIndex === studioImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => {
      clearTimeout(logoTimer)
      clearInterval(imageTimer)
    }
  }, [])

  const handleImageLoad = () => {
    // Start zoom effect after image loads
    setTimeout(() => {
      setImageZoom(true)
    }, 100)
  }

  return (
    <Box 
      position="relative" 
      h="100vh" 
      w="100vw" 
      overflow="hidden"
      bg="background.primary"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={1}
      >
        <Image
          key={currentImageIndex} // Force re-render for each image
          src={studioImages[currentImageIndex]}
          alt={`Studio image ${currentImageIndex + 1}`}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: imageZoom ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 8s ease-out',
          }}
          priority={currentImageIndex === 0}
          sizes="100vw"
          onLoad={handleImageLoad}
        />
      </Box>

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
              <Text fontSize={['40px', '60px', '80px']} color="text.primary">Fire Wave Studios</Text>
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