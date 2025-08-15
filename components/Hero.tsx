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

export default function Hero() {
  const content = getContent()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Box bg="background.primary" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={8} textAlign="center">
          <Box
            transition="all 3s ease-in-out"
            transform={isLoaded ? 'scale(1.1)' : 'scale(1)'}
            overflow="visible"
          >
            <Image
              src="/logo.png"
              alt="Fire Wave logo"
              width={600}
              height={600}
              priority
            />
          </Box>
          <Text
            fontSize="xl"
            color="text.primary"
            maxW="2xl"
          >
            {content.hero.subtitle}
          </Text>
        </VStack>
      </Container>
    </Box>
  )
} 