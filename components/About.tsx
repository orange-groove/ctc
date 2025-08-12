'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { getContent } from '../lib/content'

export default function About() {
  const content = getContent()

  return (
    <Box py={16} id="about" bg="background.primary">
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center" color="text.primary">
            {content.about.title}
          </Heading>
          <Text fontSize="lg" color="text.primary" maxW="3xl" textAlign="center" lineHeight="tall">
            {content.about.description}
          </Text>
        </VStack>
      </Container>
    </Box>
  )
} 