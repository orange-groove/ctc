'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react'
import { getContent } from '../lib/content'

export default function Clients() {
  const content = getContent()

  return (
    <Box py={16} id="clients" bg="background.primary">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center" color="text.primary">
            Featured Clients
          </Heading>
          <Text fontSize="lg" color="text.secondary" maxW="3xl" textAlign="center">
            We&apos;ve had the privilege of serving residential, commercial, and municipal clients throughout the region
          </Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
            {content.clients.map((client) => (
              <VStack key={client.id} spacing={4} p={6} bg="background.primary" rounded="lg" border="1px solid" borderColor="border.medium">
                <Box w="full" h="120px" bg="background.primary" rounded="md" display="flex" alignItems="center" justifyContent="center">
                  <Text color="text.secondary" fontSize="lg" fontWeight="bold">{client.name}</Text>
                </Box>
                <Text fontSize="sm" color="text.secondary" textAlign="center">
                  {client.type}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
} 