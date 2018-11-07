import React from 'react'
import { Navbar, NavbarBrand, Container } from 'reactstrap'

const Header = () => {
  return (
    <Navbar color='primary' dark expand='md'>
      <Container>
        <NavbarBrand href='/'>
          JobBot
        </NavbarBrand>
      </Container>
    </Navbar>
  )
}

export default Header
