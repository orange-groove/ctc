import contentData from '../data/content.json'

export interface Client {
  id: number
  name: string
  genre: string
  image: string
}

export interface Testimonial {
  id: number
  clientName: string
  rating: number
  text: string
  genre: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
}

export interface About {
  title: string
  description: string
}

export interface Hero {
  title: string
  subtitle: string
}

export interface Contact {
  title: string
  description: string
}

export interface ContentData {
  clients: Client[]
  testimonials: Testimonial[]
  services: Service[]
  about: About
  hero: Hero
  contact: Contact
}

export function getContent(): ContentData {
  return contentData as ContentData
}

export function getClients(): Client[] {
  return contentData.clients
}

export function getTestimonials(): Testimonial[] {
  return contentData.testimonials
}

export function getServices(): Service[] {
  return contentData.services
}

export function getAbout(): About {
  return contentData.about
}

export function getHero(): Hero {
  return contentData.hero
}

export function getContact(): Contact {
  return contentData.contact
} 