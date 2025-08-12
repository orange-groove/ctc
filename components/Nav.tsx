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

  return (
    <Box bg="background.primary" px={4} boxShadow={'lg'} position="sticky" top={0} zIndex={1000} borderBottom="1px solid" borderColor="border.medium">
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>            
            {!isMobile && (
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#clients">Clients</NavLink>
                <NavLink href="#testimonials">Testimonials</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </HStack>
            )}
          </HStack>

          <Flex alignItems={'center'}>
            
            {isMobile && (
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
                color="text.primary"
                bg="transparent"
              />
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#clients">Clients</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
} 