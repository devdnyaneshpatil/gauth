import { Container, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'


function Login() {
  return (
    <Container>
      <form>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
          <FormHelperText>We'll never share your Password.</FormHelperText>
        </FormControl>
      </form>
    </Container>
  );
}

export default Login