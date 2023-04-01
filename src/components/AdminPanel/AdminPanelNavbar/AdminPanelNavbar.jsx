import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Stack, Text, Box, Button } from '@chakra-ui/react';
import { BsPersonCircle } from "react-icons/bs";


function AdminPanelNavbar() {
  const navigate = useNavigate()

  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    dropdown ? setDropdown(false) : setDropdown(true)
  }

  const handleSignOut = () => {
    window.localStorage.clear();
    navigate('/adminpanel/login');
  }

  return (
    <Stack pt='0.5em' pb='0.5em' pr='2em' pl='2em' width='100%' direction='row' height='3em' bg='gray.100' justifyContent='space-between' alignItems='center'>

      <Text fontWeight='bold' fontSize='lg' color='#2D3748'>PANEL DE ADMINISTRACIÓN</Text>

      <Stack width='12em' direction='column' align='center' position='relative'>

        <Button
          width='100%'
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color="white"
          bg="#090964"
          // href={"/signup"}
          _hover={{
            bg: "white",
            color:"#090964"
          }}
        >
          <Text fontWeight='semibold' fontSize='lg' mr='1em' onClick={handleDropdown}>
            Administrador
          </Text>
          <BsPersonCircle />
        </Button>

        {
          dropdown
            ? (
              <Button bg='#090964' borderRadius='0' position='absolute' width='100%' top='2em' color={"gray.200"} _hover={{
                bg: "white",
                color: "#090964"}} onClick={handleSignOut}>
                Cerrar sesión
              </Button>
            ) : null
        }

      </Stack>

    </Stack>
  )
}

export default AdminPanelNavbar;