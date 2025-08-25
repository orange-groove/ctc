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
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Trigger logo animation after component mounts
    const logoTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Preload next image
    const preloadNextImage = () => {
      const nextIndex = (currentImageIndex + 1) % studioImages.length
      const img = new window.Image()
      img.src = studioImages[nextIndex]
    }

    // Image transition timer
    const imageTimer = setInterval(() => {
      // Preload next image before transition
      preloadNextImage()
      
      // Start fade out
      setIsTransitioning(true)
      setImageLoaded(false)
      
      // After fade out completes, change image and fade in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === studioImages.length - 1 ? 0 : prevIndex + 1
        )
        setIsTransitioning(false)
      }, 2000) // Change image after 2-second fade out
    }, 6000) // Change image every 6 seconds

    return () => {
      clearTimeout(logoTimer)
      clearInterval(imageTimer)
    }
  }, [currentImageIndex])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <Box 
      position="relative" 
      h="100vh" 
      w="100vw" 
      overflow="hidden"
      bg="background.primary"
    >
      {/* Single Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        opacity={isTransitioning ? 0 : 1}
        transition="opacity 2s ease-in-out"
        zIndex={1}
      >
        <Image
          src={studioImages[currentImageIndex]}
          alt={`Studio image ${currentImageIndex + 1}`}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
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