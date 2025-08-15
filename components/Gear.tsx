'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { getContent } from '../lib/content'

export default function Gear() {
  const content = getContent()

  return (
    <Box py={16} id="gear" bg="background.primary">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center" color="text.primary">
            Studio Equipment
          </Heading>
          <Text fontSize="lg" color="text.secondary" maxW="3xl" textAlign="center">
            Professional-grade equipment to capture your sound with clarity and precision
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            {content.gear.map((category) => (
              <VStack key={category.id} spacing={4} p={6} bg="background.primary" rounded="lg" align="start" border="1px solid" borderColor="border.medium">
                <Heading as="h3" size="md" color="text.primary">
                  {category.category}
                </Heading>
                <List spacing={2} w="full">
                  {category.items.map((item, index) => (
                    <ListItem key={index} color="text.primary" display="flex" alignItems="center">
                      <ListIcon as={FaCheckCircle} color="brand.500" />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
} 