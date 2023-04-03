import './Faqs.css';
import {
  Box,
  Container,
  Heading,
  Icon,
  Text,
  Stack,
  Button,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { ArrowLeftIcon, CheckIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../NavBar/NavBar.jsx';
import NavbarHome from '../NavbarHome/NavbarHome.jsx';
import Footer from '../Footer/Footer.jsx';

// Replace test data with your own
const features = Array.apply(null, Array(4)).map(function (x, i) {
  return {
    id: i,
    title: '¿Cómo seleccionamos a los psicologos?',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  };
});


export default function Services() {

  const navigate = useNavigate();

  const tokenClient = window.localStorage.getItem('tokenClient')
  const tokenPsychologist = window.localStorage.getItem('tokenPsychologist')

  return (
    <div className='faqsContainer'>
      {
        tokenClient || tokenPsychologist ? <NavbarHome /> : <NavBar />
      }
      <Box p={4} bgColor={'#E2E8F0'}>
        <Link to={'/'}>
          <ArrowLeftIcon color={'#090964'} alignItems={'left'} onClick={() => navigate(-1)} />
        </Link>

        <Stack spacing={4} as={Container} maxW={'6xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Servicios</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Es necesario resaltar, que las necesidades del cliente se enfocan en la Heterogeneidad, debido a que este nos indica que ningún cliente es igual a otro, por lo cual ninguno de los servicios será similares o iguales; por ello el plus principal para nuestro cliente es la personalización de los servicios brindando soluciones a la medida de sus necesidades.
          </Text>
          <Link to="/home">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#090964"}
              href={"/signup"}
              _hover={{
                bg: "white",
                color: "#090964"
              }}
            >
              Cotizar
            </Button>
          </Link>
        </Stack>

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.3 }}
          animate={{
            opacity: 1
          }}>
          <Container maxW={'8xl'} mt={10} marginBottom='10%'>
            <Stack spacing={10}>
              {/* {features.map((feature) => (
                <HStack key={feature.id} align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>{feature.title}</Text>
                    <Text color={'gray.600'}>{feature.text}</Text>
                  </VStack>
                </HStack>
              ))} */}
              <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text color={'gray.600'}>En segundo lugar, la clave para la organización de un archivo son los elementos adecuados, que permitan la conservación de la memoria institucional de las empresas, es importante identificar los procesos que utilizan las organizaciones para salvaguarda su información, por eso en achrono documentali  brindara asesorías de confianza para selección de servicios que les permita obtener los mejores resultados, con la intención de poder  brindar  soluciones, ofreciendo seguridad en su compra para cualquier tipo de servicio desde el aplicativo web, teniendo en cuenta el tamaño de la entidad  siempre pensando en el cumplimiento de la normatividad archivística colombiana. </Text>
                </VStack>
              </HStack>
              <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Asesorías </Text>
                  <Text color={'gray.600'}>El objetivo de este servicio es poder orientar a las empresas y brindarles las herramientas correctas para una buenas gestión documental, donde se brindarán consultas, asesorías y acompañamiento en el desarrollo de proyectos como en la implementación y elaboración de tablas de retención documental y tablas de valoración documental, de acuerdo a lo establecido en el marco normativo y con el ánimo de contribuir a mejoras dentro de las entidades, con la intención de ofrecer a nuestros clientes las mejores opciones, se brindarán servicios de asesorías en consultorías para la elaboración e implementación del sistema integrado de conservación, temas como limpieza y desinfección de los documentos, programa de capacitación y sensibilización entre otros elementos claves. Con base en lo anterior, los usuarios podrán encontrar consultas y asesorías para la custodia y conservación documental, asesorías en procesos de gestión documental, elaboración del programa de gestión podrán solicitar un diagnóstico integral de archivo, estos servicios se podrán solicitar desde la aplicación web con tan solo unos cuantos clips, los clientes podrán elegir las de manera presencial estas se harán en las instalaciones de la entidad solicitante con una duración de hasta 3 horas, las consultas virtuales por medio de video conferencias. </Text>
                </VStack>
              </HStack>
              <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Diagnóstico integral del archivo </Text>
                  <Text color={'gray.600'}>
                    El objetivo de este servicio es poder identificar la situación en la que se encuentra el archivo de la empresa y establecer el nivel de organización documental, analizando las mejoras en los planes estratégicos planteados, para así aplicar los formatos de diagnóstico integral del archivo propuestos por el archivo general de la nación, acá será necesario establecer algunos datos de plata física, nombre del archivo, año de creación y ubicación.
                  </Text>
                </VStack>
              </HStack>
              <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Organización e intervención de archivo  </Text>
                  <Text color={'gray.600'}>
                    El objetivo de este servicio es garantizar su integridad física y funcionalidad de los documentos favoreciendo a la conservación de los mismos y facilitando la búsqueda y localización de la información producida  por la empresa, es por esto que se  prestarán servicios para la organización e intervención de los fondos acumulados para transformarlos en archivos, para ello se hará uso de los principios de procedencia tal y como lo establece el acuerdo 5 de 2013 del archivo General de la Nación, sobre el principio de orden original, identificación, clasificación y ordenación.
                  </Text>
                </VStack>
              </HStack>
              <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Digitalización</Text>
                  <Text color={'gray.600'}>Su principal objetivo es prestar servicios profesionales de digitalización o escaneo de documentos, donde se trasformarán los documentos de papel en documentos digitales que permitirán la conservación y el acceso de la información de manera más oportuna, utilizando las mejores marcas en escáner para la digitalización y de esta manera poder garantizar una nitidez y una alta comprensión y calidad en los documentos,Para aplicar este servicio es necesario tener en cuenta e identificar y definir si se desea escanear o digitalizar los documentos, de esta manera determinar el tipo de archivo que desea ser digitalizado, es decir, si es el archivo histórico, central o de gestión para poder llevar un orden. Por otro lado, se debe definir con el cliente por qué y para qué del servicio y lograr definir si lo requiere para liberar espacio físico en la oficina, como respaldo de la información. </Text>
                </VStack>
              </HStack>
            </Stack>
          </Container>
        </motion.div>
      </Box>

      <Footer />

    </div>
  );
}