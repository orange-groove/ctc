'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react'
import { FaMicrophone, FaMusic, FaHeadphones } from 'react-icons/fa'
import { getContent } from '../lib/content'

const iconMap = {
  FaMicrophone,
  FaMusic,
  FaHeadphones,
}

export default function Services() {
  const content = getContent()

  return (
    <Box bg="background.primary" py={16} id="services">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center" color="text.primary">
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {content.services.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              return (
                <VStack key={service.id} spacing={4} p={8} bg="background.primary" rounded="lg" shadow="lg" border="1px solid" borderColor="border.medium">
                  <Icon as={IconComponent} w={12} h={12} color="brand.400" />
                  <Heading as="h3" size="md" color="text.primary">
                    {service.title}
                  </Heading>
                  <Text textAlign="center" color="text.primary">
                    {service.description}
                  </Text>
                </VStack>
              )
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
} 