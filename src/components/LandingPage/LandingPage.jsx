import React from 'react'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  IconButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion'
import './landingpage.css'
import NavBar from "../NavBar/NavBar.jsx"
import Footer from "../Footer/Footer.jsx"

function LandingPage() {

  return (
    <>
      <div className='landingPage'>
        <NavBar />
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.3 }}
          animate={{
            opacity: 1
          }}>

          <Container maxW={'8xl'} bgColor={'#bed2ed'}>
            <Stack
              align={'center'}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 30, md: 19 }}
              direction={{ base: 'column', md: 'row' }}>
              <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                position={'relative'}
                w={'full'}>
                <Box
                  position={'relative'}
                  height={'500px'}
                  rounded={'2xl'}
                  boxShadow={'2xl'}
                  width={'full'}
                >
                  <IconButton
                    aria-label={'Play Button'}
                    variant={'ghost'}
                    _hover={{ bg: 'transparent' }}
                    size={'lg'}
                    color={'white'}
                    position={'absolute'}
                    left={'50%'}
                    top={'50%'}
                    transform={'translateX(-50%) translateY(-50%)'}
                  />
                  <Image
                    alt={'Hero Image'}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={'100%'}
                    src={
                      'https://www.docunecta.com/hubfs/DocunectaWeb2019/img_portada_slide.svg'
                    }
                  />
                </Box>
              </Flex>
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                  <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                      content: "''",
                      width: 'full',
                      height: '30%',
                      position: 'absolute',
                      bottom: 1,
                      left: 0,
                      bg: '#090964',
                      zIndex: -1,
                    }}>
                    Achrono Documentali
                  </Text>
                  <br />
                  <Text as={'span'} color={'blue.300'}>
                    ¡Descubre todo lo que tenemos preparado para ti!
                  </Text>
                </Heading>
                <Text color={'black'}>
                  Achrono Documentali es la única app web archivística, que pretende brindar soluciones a la medida de cada empresa, esta aplicación es 100% gratuita, podrán obtener información de manera oportuna y directa con los profesionales en el área de gestión documental, basta de excusas organizar tu información nuca había sido tan fácil, ¿que estas esperando ¿ingresa ya a la aplicación y solicita tu asesoría en línea.
                </Text>
              </Stack>
            </Stack>
          </Container>
        </motion.div>
        <Footer />
      </div>
    </>
  )
}


export default LandingPage