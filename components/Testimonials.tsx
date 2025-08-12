'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import { getContent } from '../lib/content'

export default function Testimonials() {
  const content = getContent()

  return (
    <Box py={16} id="testimonials" bg="background.primary">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center" color="text.primary">
            What Our Clients Say
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            {content.testimonials.map((testimonial) => (
              <VStack key={testimonial.id} spacing={4} p={6} bg="background.primary" rounded="lg" align="start" border="1px solid" borderColor="border.medium">
                <HStack>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} as={FaStar} color="warning.400" />
                  ))}
                </HStack>
                <Text fontSize="lg" fontStyle="italic" color="text.primary">
                  &ldquo;{testimonial.text}&rdquo;
                </Text>
                <Text fontWeight="bold" color="text.primary">
                  - {testimonial.clientName}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
} 