import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Image,
  Heading,
  Grid,
  GridItem,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import SignUpImage from '../assets/SignUp.jpg'; // Ensure the path is correct
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/Auth';

export const Registration = () => {
  //

  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  // Handling the input value
  const HandleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(e);
    setUser({ ...user, [name]: value });
  };

  const Navigate = useNavigate();

  const { storeTokenLS } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);
    try {
      const response = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      console.log(response);
      if (response.ok) {
        // Registration successful, navigate to login page
        alert('Registration successful');
        const res_Data = await response.json();

        storeTokenLS(res_Data.token);

        setUser({ username: '', email: '', phone: '', password: '' });
        Navigate('/login');
      } else {
        // Handle registration failure (e.g., show error message)
        alert.error('Registration failed');
      }
    } catch (error) {
      console.log('regiaster', error);
    }
  };

  //eye button logic for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Flex
      minHeight='100vh'
      alignItems='center'
      justifyContent='center'
      bg={useColorModeValue('gray.50', 'gray.800')}
      p={4}
    >
      <Box
        maxW={{ base: 'full', md: 'container.md' }}
        w='full'
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow='lg'
        rounded='lg'
        overflow='hidden'
      >
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
          <GridItem>
            <Image
              src={SignUpImage}
              objectFit='cover'
              width='100%'
              height='100%'
              alt='Sign Up'
              display={{ base: 'none', md: 'block' }}
            />
          </GridItem>
          <GridItem
            display='flex'
            justifyContent='center'
            alignItems='center'
            p={8}
          >
            <Box w='full'>
              <Box textAlign='center' mb={6}>
                <Heading
                  as='h2'
                  size='xl'
                  mt={4}
                  color={useColorModeValue('gray.800', 'white')}
                >
                  Register
                </Heading>
              </Box>

              <Stack spacing={4}>
                <FormControl id='username' isRequired mb={4}>
                  <FormLabel
                    fontWeight='bold'
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    Username
                  </FormLabel>
                  <Input
                    type='text'
                    onChange={HandleInputChange}
                    name='username'
                    placeholder={'username'}
                    value={user.username}
                    borderColor='gray.300'
                    focusBorderColor='blue.500'
                  />
                </FormControl>
                <FormControl isRequired id='email' mb={4}>
                  <FormLabel
                    fontWeight='bold'
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    Email
                  </FormLabel>
                  <Input
                    type='email'
                    name='email'
                    onChange={HandleInputChange}
                    placeholder={'email'}
                    value={user.email}
                    borderColor='gray.300'
                    focusBorderColor='blue.500'
                  />
                </FormControl>
                <FormControl isRequired id='phone' mb={4}>
                  <FormLabel
                    fontWeight='bold'
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    Phone
                  </FormLabel>
                  <Input
                    type='phone'
                    name='phone'
                    placeholder={'phone'}
                    onChange={HandleInputChange}
                    value={user.phone}
                    borderColor='gray.300'
                    focusBorderColor='blue.500'
                  />
                </FormControl>
                <FormControl id='password' isRequired mb={4}>
                  <FormLabel
                    fontWeight='bold'
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      name='password'
                      placeholder={'password'}
                      onChange={HandleInputChange}
                      value={user.password}
                      type={showPassword ? 'text' : 'password'}
                      borderColor='gray.300'
                      focusBorderColor='blue.500'
                    />
                    <InputRightElement h={'full'}>
                      <IconButton
                        variant={'ghost'}
                        onClick={handlePasswordVisibility}
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        _hover={{ bg: 'transparent' }}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  onClick={handleSubmit}
                  colorScheme='blue'
                  size='lg'
                  mt={4}
                  width='full'
                  type='submit'
                >
                  Register
                </Button>
                <Text fontWeight='bold'>
                  Already User{' '}
                  <ChakraLink
                    as={Link}
                    to='/login'
                    color='teal.500'
                    // textDecoration='underline'
                    style={{ as: 'u' }}
                  >
                    Login
                  </ChakraLink>
                </Text>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};
