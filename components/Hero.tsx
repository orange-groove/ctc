'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { getContent } from '../lib/content'

export default function Hero() {
  const content = getContent()

  return (
    <Box bg="background.primary" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={8} textAlign="center">
          <Image
            src="/logo.png"
            alt="Fire Wave logo"
            width={600}
            height={600}
            priority
          />
          <Heading
            as="h1"
            size="2xl"
            color="text.primary"
          >
            {content.hero.title}
          </Heading>
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