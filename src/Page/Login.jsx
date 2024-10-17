import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  Link as ChakreLink,
} from '@chakra-ui/react';
import SignInImage from '../assets/Login.jpg';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/Auth';

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { storeTokenLS } = useAuth();

  // Handling the input value
  const HandleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
    //input handler for email and password
    // console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //fetching the data from the server
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //convert the user object to JSON string
        body: JSON.stringify(user),
      });
      if (response.ok) {
        // Registration successful, response from the server
        const res_Data = await response.json();
        console.log(res_Data);

        //import  this form AUth context
        storeTokenLS(res_Data.token);
        //storing the token in the local storage
        //we have to pass this token multiple times , so we are creating context hook for global use
        // localStorage.setItem('token', res_Data.token);

        alert('Login Successful');
        navigate('/');
      } else {
        alert('Login Failed');
      }
      console.log(response);
    } catch (error) {
      console.log('login', error);
    }
  };

  //for password visibility
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
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        rounded={'lg'}
        overflow={'hidden'}
      >
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
          <GridItem>
            <Image
              src={SignInImage}
              objectFit={'cover'}
              width={'100%'}
              height={'100%'}
              alt='SigIn'
              display={{ base: 'none', md: 'block' }}
            ></Image>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            p={8}
          >
            <Box w='full'>
              <Box textAlign='center' mb={6}>
                <Heading
                  as='h2'
                  size='x1'
                  mt={4}
                  color={useColorModeValue('gray.800', 'white')}
                >
                  Login
                </Heading>
              </Box>
              <Stack
                fontWeight={'bold'}
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                <FormControl id='email' isRequired>
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
                      ></IconButton>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  onClick={handleSubmit}
                  colorScheme='blue'
                  size='lg'
                  mt={4}
                  width='full'
                >
                  Login
                </Button>
                <Text>
                  New User
                  <ChakreLink
                    as={Link}
                    to='/Registration'
                    color='teal.500'
                    style={{ as: 'u' }}
                  >
                    SignUp
                  </ChakreLink>
                </Text>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};
