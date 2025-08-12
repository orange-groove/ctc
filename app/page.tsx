'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
  Image as ChakraImage,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FaMicrophone, FaMusic, FaHeadphones, FaStar, FaPlay } from 'react-icons/fa'

export default function Home() {
  const toast = useToast()

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <Box bg="dark.950">
      {/* Hero Section with Logo */}
      <Box bg="dark.950" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Image
              src="/logo.png"
              alt="Fire Wave logo"
              width={600}
              height={600}
              priority
            />
            <Text
              fontSize="xl"
              color="text.primary"
              maxW="2xl"
            >
              Professional audio recording, mixing, and mastering services
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={16} id="about" bg="dark.950">
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Heading as="h2" size="xl" textAlign="center" color="text.primary">
              About Us
            </Heading>
            <Text fontSize="lg" color="text.primary" maxW="3xl" textAlign="center" lineHeight="tall">
              Fire Wave is a premier audio production studio specializing in bringing your musical vision to life. 
              With years of experience in the industry, we provide top-quality recording, mixing, and mastering 
              services for artists, bands, and producers. Our state-of-the-art equipment and passionate team 
              ensure that every project receives the attention it deserves.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box bg="dark.950" py={16} id="services">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading as="h2" size="xl" textAlign="center" color="text.primary">
              Our Services
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <VStack spacing={4} p={8} bg="dark.900" rounded="lg" shadow="lg" border="1px solid" borderColor="border.medium">
                <Icon as={FaMicrophone} w={12} h={12} color="brand.400" />
                <Heading as="h3" size="md" color="text.primary">
                  Audio Recording
                </Heading>
                <Text textAlign="center" color="text.primary">
                  Professional recording sessions in our acoustically treated studio. 
                  We capture the perfect take with premium microphones and equipment.
                </Text>
              </VStack>
              
              <VStack spacing={4} p={8} bg="dark.900" rounded="lg" shadow="lg" border="1px solid" borderColor="border.medium">
                <Icon as={FaMusic} w={12} h={12} color="brand.400" />
                <Heading as="h3" size="md" color="text.primary">
                  Mixing
                </Heading>
                <Text textAlign="center" color="text.primary">
                  Expert mixing services to balance and enhance your tracks. 
                  We bring clarity and depth to your music with precision and creativity.
                </Text>
              </VStack>
              
              <VStack spacing={4} p={8} bg="dark.900" rounded="lg" shadow="lg" border="1px solid" borderColor="border.medium">
                <Icon as={FaHeadphones} w={12} h={12} color="brand.400" />
                <Heading as="h3" size="md" color="text.primary">
                  Mastering
                </Heading>
                <Text textAlign="center" color="text.primary">
                  Final polish and optimization for release. 
                  We ensure your music sounds great on all platforms and devices.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Clients Section */}
      <Box py={16} id="clients" bg="dark.950">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading as="h2" size="xl" textAlign="center" color="text.primary">
              Featured Clients
            </Heading>
            <Text fontSize="lg" color="text.secondary" maxW="3xl" textAlign="center">
              We've had the privilege of working with amazing artists and bands across various genres
            </Text>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              <VStack spacing={4} p={6} bg="dark.900" rounded="lg" border="1px solid" borderColor="border.medium">
                <Box w="full" h="120px" bg="dark.800" rounded="md" display="flex" alignItems="center" justifyContent="center">
                  <Text color="text.secondary" fontSize="lg" fontWeight="bold">The Midnight Echoes</Text>
                </Box>
                <Text fontSize="sm" color="text.secondary" textAlign="center">
                  Alternative Rock
                </Text>
              </VStack>
              
              <VStack spacing={4} p={6} bg="dark.900" rounded="lg" border="1px solid" borderColor="border.medium">
                <Box w="full" h="120px" bg="dark.800" rounded="md" display="flex" alignItems="center" justifyContent="center">
                  <Text color="text.secondary" fontSize="lg" fontWeight="bold">Sarah Chen</Text>
                </Box>
                <Text fontSize="sm" color="text.secondary" textAlign="center">
                  Singer-Songwriter
                </Text>
              </VStack>
              
              <VStack spacing={4} p={6} bg="dark.900" rounded="lg" border="1px solid" borderColor="border.medium">
                <Box w="full" h="120px" bg="dark.800" rounded="md" display="flex" alignItems="center" justifyContent="center">
                  <Text color="text.secondary" fontSize="lg" fontWeight="bold">Urban Beats</Text>
                </Box>
                <Text fontSize="sm" color="text.secondary" textAlign="center">
                  Hip-Hop/R&B
                </Text>
              </VStack>
              
              <VStack spacing={4} p={6} bg="dark.900" rounded="lg" border="1px solid" borderColor="border.medium">
                <Box w="full" h="120px" bg="dark.800" rounded="md" display="flex" alignItems="center" justifyContent="center">
                  <Text color="text.secondary" fontSize="lg" fontWeight="bold">Crystal Clear</Text>
                </Box>
                <Text fontSize="sm" color="text.secondary" textAlign="center">
                  Pop/Electronic
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box py={16} id="testimonials" bg="dark.950">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading as="h2" size="xl" textAlign="center" color="text.primary">
              What Our Clients Say
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              <VStack spacing={4} p={6} bg="dark.900" rounded="lg" align="start" border="1px solid" borderColor="border.medium">
                <HStack>
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} as={FaStar} color="warning.400" />
                  ))}
                </HStack>
                <Text fontSize="lg" fontStyle="italic" color="text.primary">
                  "Fire Wave transformed our sound completely. The mixing and mastering 
                  brought out the best in our music. Highly recommended!"
                </Text>
                <Text fontWeight="bold" color="text.primary">
                  - The Midnight Echoes
                </Text>
              </VStack>
              
              <VStack spacing={4} p={6} bg="dark.900" rounded="lg" align="start" border="1px solid" borderColor="border.medium">
                <HStack>
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} as={FaStar} color="warning.400" />
                  ))}
                </HStack>
                <Text fontSize="lg" fontStyle="italic" color="text.primary">
                  "Professional, creative, and incredibly talented. They understood 
                  our vision and delivered beyond our expectations."
                </Text>
                <Text fontWeight="bold" color="text.primary">
                  - Sarah Chen, Solo Artist
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box bg="dark.950" py={16} id="contact">
        <Container maxW="container.md">
          <VStack spacing={8}>
            <Heading as="h2" size="xl" textAlign="center" color="text.primary">
              Get In Touch
            </Heading>
            <Box as="form" onSubmit={handleContactSubmit} w="full" maxW="lg">
              <VStack spacing={6}>
                <FormControl isRequired>
                  <FormLabel color="text.primary">Name</FormLabel>
                  <Input placeholder="Your name" />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel color="text.primary">Email</FormLabel>
                  <Input type="email" placeholder="your.email@example.com" />
                </FormControl>
                
                <FormControl>
                  <FormLabel color="text.primary">Phone</FormLabel>
                  <Input placeholder="Your phone number" />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel color="text.primary">Message</FormLabel>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    rows={5}
                  />
                </FormControl>
                
                <Button 
                  type="submit" 
                  colorScheme="brand" 
                  size="lg" 
                  w="full"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
