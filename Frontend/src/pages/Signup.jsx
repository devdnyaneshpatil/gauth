import React, { useState } from 'react'
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function Signup() {
  const [formdata,setFormdata]=useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormdata(prevState=>({
      ...prevState,
      [name]:value
    }))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      if (response.ok) {
       
        console.log("Signup successful");
      } else {
       
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
          />
          <FormHelperText>We'll never share your Password.</FormHelperText>
        </FormControl>
        <Button type="submit" colorScheme="facebook">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Signup