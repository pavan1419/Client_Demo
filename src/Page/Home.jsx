import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Flex,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import heroImage from '../assets/Hero.jpg'; // Adjust the path as necessary
import { useAuth } from '../Store/Auth';

const Feature = ({ title, text, icon }) => {
  const { isLoggedIn } = useAuth();
  return (
    <Stack align='center' p={5} shadow='md' borderWidth='1px' borderRadius='md'>
      <Flex
        w={16}
        h={16}
        align='center'
        justify='center'
        color='white'
        rounded='full'
        bg={useColorModeValue('blue.500', 'blue.200')}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color='gray.600'>{text}</Text>
    </Stack>
  );
};

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex
        align='center'
        justify='center'
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('gray.100', 'gray.900')}
        py={20}
        px={10}
      >
        <Box flex='1' textAlign={{ base: 'center', md: 'left' }}>
          <Heading as='h1' size='2xl' mb={4}>
            Welcome to Our Website
          </Heading>
          <Text fontSize='lg' mb={6}>
            Discover amazing features and enjoy a seamless experience.
          </Text>
          <Button
            as={RouterLink}
            to='/about'
            colorScheme='blue'
            size='lg'
            mb={{ base: 4, md: 0 }}
          >
            Get Started
          </Button>
        </Box>
        <Box flex='1' textAlign='center'>
          <Image
            src={heroImage}
            alt='Hero Image'
            borderRadius='md'
            boxShadow='lg'
            maxW='100%'
          />
        </Box>
      </Flex>

      {/* Features Section */}
      <Box py={20} px={10}>
        <Heading as='h2' size='xl' textAlign='center' mb={10}>
          Our Features
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FaRocket} w={10} h={10} />}
            title='Fast Performance'
            text='Experience blazing fast speeds with our optimized platform.'
          />
          <Feature
            icon={<Icon as={FaLightbulb} w={10} h={10} />}
            title='Innovative Ideas'
            text='We bring you the latest and greatest in technology and design.'
          />
          <Feature
            icon={<Icon as={FaHeart} w={10} h={10} />}
            title='Customer Satisfaction'
            text='Our customers love us! We strive to provide the best service.'
          />
        </SimpleGrid>
      </Box>

      {/* Call to Action Section */}
      <Box
        bg={useColorModeValue('blue.500', 'blue.700')}
        color='white'
        py={20}
        px={10}
        textAlign='center'
      >
        <Heading as='h2' size='xl' mb={4}>
          Ready to Get Started?
        </Heading>
        <Text fontSize='lg' mb={6}>
          Join us today and experience the difference.
        </Text>
        <Button
          as={RouterLink}
          to='/registration'
          colorScheme='whiteAlpha'
          size='lg'
        >
          Sign Up Now
        </Button>
      </Box>

      {/* Footer Section */}
      <Box
        bg={useColorModeValue('gray.800', 'gray.900')}
        color='white'
        py={10}
        textAlign='center'
      >
        {/* <Text>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Text> */}
      </Box>
    </Box>
  );
};

export default Home;
