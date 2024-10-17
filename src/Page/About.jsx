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
import { FaUsers, FaBullseye, FaHandsHelping } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import teamImage from '../assets/creative.jpg'; // Adjust the path as necessary
import { useAuth } from '../Store/Auth';

const Feature = ({ title, text, icon }) => {
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

const About = () => {
  const { user } = useAuth();
  const username = user ? user.username : 'there';

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
          <Heading as='h5' size='1xl' mb={4}>
            Welcome, <>{username}</>
          </Heading>
          <Heading as='h1' size='2xl' mb={4}>
            About Us
          </Heading>
          <Text fontSize='lg' mb={6}>
            Learn more about our mission, vision, and the team behind our
            success.
          </Text>
          <Button
            as={RouterLink}
            to='/contact'
            colorScheme='blue'
            size='lg'
            mb={{ base: 4, md: 0 }}
          >
            Contact Us
          </Button>
        </Box>
        <Box flex='1' textAlign='center'>
          <Image
            src={teamImage}
            alt='Team Image'
            borderRadius='md'
            boxShadow='lg'
            maxW='100%'
          />
        </Box>
      </Flex>

      {/* Mission Section */}
      <Box py={20} px={10} bg={useColorModeValue('white', 'gray.800')}>
        <Heading as='h2' size='xl' textAlign='center' mb={10}>
          Our Mission
        </Heading>
        <Text fontSize='lg' textAlign='center' mb={6}>
          Our mission is to deliver the best products and services to our
          customers, ensuring their satisfaction and success.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FaBullseye} w={10} h={10} />}
            title='Our Vision'
            text='To be the leading provider of innovative solutions in our industry.'
          />
          <Feature
            icon={<Icon as={FaHandsHelping} w={10} h={10} />}
            title='Our Values'
            text='Integrity, Excellence, and Customer Focus.'
          />
          <Feature
            icon={<Icon as={FaUsers} w={10} h={10} />}
            title='Our Team'
            text='A dedicated team of professionals committed to your success.'
          />
        </SimpleGrid>
      </Box>

      {/* Team Section */}
      <Box py={20} px={10}>
        <Heading as='h2' size='xl' textAlign='center' mb={10}>
          Meet Our Team
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box textAlign='center'>
            <Image
              src='https://via.placeholder.com/150'
              alt='Team Member'
              borderRadius='full'
              boxSize='150px'
              mb={4}
            />
            <Text fontWeight={600}>John Doe</Text>
            <Text color='gray.600'>CEO</Text>
          </Box>
          <Box textAlign='center'>
            <Image
              src='https://via.placeholder.com/150'
              alt='Team Member'
              borderRadius='full'
              boxSize='150px'
              mb={4}
            />
            <Text fontWeight={600}>Jane Smith</Text>
            <Text color='gray.600'>CTO</Text>
          </Box>
          <Box textAlign='center'>
            <Image
              src='https://via.placeholder.com/150'
              alt='Team Member'
              borderRadius='full'
              boxSize='150px'
              mb={4}
            />
            <Text fontWeight={600}>Alice Johnson</Text>
            <Text color='gray.600'>COO</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer Section */}
      <Box
        bg={useColorModeValue('gray.800', 'gray.900')}
        color='white'
        py={10}
        textAlign='center'
      >
        <Text>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
