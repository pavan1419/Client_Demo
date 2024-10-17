import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import serviceImage from '../assets/service.png'; // Adjust the path as necessary

export const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/data/service');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        if (data.services && Array.isArray(data.services)) {
          setServices(data.services);
        } else {
          throw new Error('Fetched data is not in the expected format');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <Box py={10} px={5}>
      <Heading as='h1' size='2xl' mb={10} textAlign='center'>
        Our Services
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {services.map((service) => (
          <Box
            key={service._id}
            p={5}
            shadow='lg'
            borderWidth='1px'
            borderRadius='lg'
            bg={useColorModeValue('white', 'gray.800')}
            transition='transform 0.2s'
            _hover={{ transform: 'scale(1.05)', shadow: 'xl' }}
          >
            <Image
              src={serviceImage}
              alt={service.service}
              borderRadius='lg'
              mb={4}
              objectFit='cover'
              height='200px'
              width='100%'
            />
            <Heading
              fontSize='xl'
              mb={2}
              color={useColorModeValue('teal.600', 'teal.300')}
            >
              {service.service}
            </Heading>
            <Text
              mt={2}
              mb={4}
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {service.description}
            </Text>
            <Text
              mt={2}
              fontWeight='bold'
              fontSize='lg'
              color={useColorModeValue('teal.800', 'teal.400')}
            >
              Price: ${service.price}
            </Text>
            <Text
              mt={2}
              fontStyle='italic'
              color={useColorModeValue('gray.500', 'gray.300')}
            >
              Provider: {service.provider}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
