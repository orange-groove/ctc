'use client'

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useDisclosure,
  HStack,
  IconButton,
  useBreakpointValue,
  Container,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Image from 'next/image'

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Text
      as="a"
      href={href}
      onClick={handleClick}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'background.secondary',
      }}
      cursor="pointer"
      color="text.primary"
    >
      {children}
    </Text>
  )
}

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box bg="background.primary" px={4} boxShadow={'lg'} position="sticky" top={0} zIndex={1000} borderBottom="1px solid" borderColor="border.medium">
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box 
              cursor="pointer" 
              onClick={handleLogoClick}
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s"
            >
              <Image
                src="/logo.webp"
                alt="Fire Wave logo"
                width={48}
                height={48}
                priority
              />
            </Box>
            
            {!isMobile && (
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#gear">Gear</NavLink>
                {/* <NavLink href="#clients">Clients</NavLink>
                <NavLink href="#testimonials">Testimonials</NavLink> */}
                <NavLink href="#contact">Contact</NavLink>
              </HStack>
            )}
          </HStack>

          <Flex alignItems={'center'}>
            {!isMobile && (
              <Button
                bg="brand.500"
                color="white"
                _hover={{
                  bg: 'brand.600',
                }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Get Started
              </Button>
            )}
            {isMobile && (
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
                color="text.primary"
                bg="transparent"
                _hover={{ bg: 'background.secondary' }}
              />
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#gear">Gear</NavLink>
              {/* <NavLink href="#clients">Clients</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink> */}
              <NavLink href="#contact">Contact</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
} 