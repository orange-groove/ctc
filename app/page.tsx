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
  FormErrorMessage,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FaMicrophone, FaMusic, FaHeadphones, FaStar } from 'react-icons/fa'
import { useState } from 'react'
import { getContent } from '../lib/content'

const iconMap = {
  FaMicrophone,
  FaMusic,
  FaHeadphones,
}

export default function Home() {
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  // Load content from JSON
  const content = getContent()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Please fill in all required fields correctly.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        toast({
          title: "Failed to send message",
          description: result.error || "Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box bg="background.primary">
      {/* Hero Section with Logo */}
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

      {/* About Section */}
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

      {/* Services Section */}
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

      {/* Clients Section */}
      <Box py={16} id="clients" bg="background.primary">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading as="h2" size="xl" textAlign="center" color="text.primary">
              Featured Clients
            </Heading>
            <Text fontSize="lg" color="text.secondary" maxW="3xl" textAlign="center">
              We&apos;ve had the privilege of working with amazing artists and bands across various genres
            </Text>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              {content.clients.map((client) => (
                <VStack key={client.id} spacing={4} p={6} bg="background.primary" rounded="lg" border="1px solid" borderColor="border.medium">
                  <Box w="full" h="120px" bg="background.primary" rounded="md" display="flex" alignItems="center" justifyContent="center">
                    <Text color="text.secondary" fontSize="lg" fontWeight="bold">{client.name}</Text>
                  </Box>
                  <Text fontSize="sm" color="text.secondary" textAlign="center">
                    {client.genre}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Testimonials Section */}
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

      {/* Contact Section */}
      <Box bg="background.primary" py={16} id="contact">
        <Container maxW="container.md">
          <VStack spacing={8}>
            <Heading as="h2" size="xl" textAlign="center" color="text.primary">
              {content.contact.title}
            </Heading>
            <Box as="form" onSubmit={handleContactSubmit} w="full" maxW="lg">
              <VStack spacing={6}>
                <FormControl isRequired isInvalid={!!errors.name}>
                  <FormLabel color="text.primary">Name</FormLabel>
                  <Input 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                
                <FormControl isRequired isInvalid={!!errors.email}>
                  <FormLabel color="text.primary">Email</FormLabel>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                
                <FormControl>
                  <FormLabel color="text.primary">Phone</FormLabel>
                  <Input 
                    placeholder="Your phone number" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </FormControl>
                
                <FormControl isRequired isInvalid={!!errors.message}>
                  <FormLabel color="text.primary">Message</FormLabel>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>
                
                <Button 
                  type="submit" 
                  colorScheme="brand" 
                  size="lg" 
                  w="full"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
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
