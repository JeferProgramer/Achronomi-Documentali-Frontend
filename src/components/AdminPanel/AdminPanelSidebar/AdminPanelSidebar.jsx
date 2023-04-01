import React from 'react';
import './AdminPanelSidebar.css';
import { NavLink } from 'react-router-dom';
import { Container, Stack, Text, Button } from '@chakra-ui/react';


function AdminPanelSidebar() {
  return (
    <Container width='20%' p='0' height='fit-content' direction='row'>

      <Stack direction='column' mt='0'>
        <NavLink exact to='/adminpanel/inicio'
          className='sidebarButtons'
          style={({ isActive }) => ({
            color: isActive ? '#090964' : 'white',
            background: isActive ? 'white' : '#090964',
          })}>
          <Button fontSize='xl' height='100%' width='100%' bg='blackAlpha' _hover={{ bg: 'white', color: '#090964' }}>
            Inicio
          </Button>
        </NavLink>
        <NavLink exact to='/adminpanel/clients'
          className='sidebarButtons'
          style={({ isActive }) => ({
            color: isActive ? '#090964' : 'white',
            background: isActive ? 'white' : '#090964',
          })}>
          <Button fontSize='xl' height='100%' width='100%' bg='blackAlpha' _hover={{ bg: 'white', color: '#090964' }}>
            Usuarios Clientes
          </Button>
        </NavLink>
        <NavLink exact to='/adminpanel/psychologists'
          className='sidebarButtons'
          style={({ isActive }) => ({
            color: isActive ? '#090964' : 'white',
            background: isActive ? 'white' : '#090964',
          })}>
          <Button fontSize='xl' height='100%' width='100%' bg='blackAlpha' _hover={{ bg: 'white', color: '#090964' }}>
            Usuarios Profesionales
          </Button>
        </NavLink>
        <NavLink exact to='/adminpanel/payments'
          className='sidebarButtons'
          style={({ isActive }) => ({
            color: isActive ? '#090964' : 'white',
            background: isActive ? 'white' : '#090964',
          })}>
          <Button fontSize='xl' height='100%' width='100%' bg='blackAlpha' _hover={{ bg: 'white', color: '#090964' }}>
            Historial de pagos
          </Button>
        </NavLink>
        <NavLink exact to='/adminpanel/statistics'
          className='sidebarButtons'
          style={({ isActive }) => ({
            color: isActive ? '#090964' : 'white',
            background: isActive ? 'white' : '#090964',
          })}>
          <Button fontSize='xl' height='100%' width='100%' bg='blackAlpha' _hover={{ bg: 'white', color: '#090964' }}>
            Estadísticas
          </Button>
        </NavLink>
      </Stack>

    </Container>
  )
}

export default AdminPanelSidebar;