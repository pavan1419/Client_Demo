import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Link,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaEnvelope, FaHome } from 'react-icons/fa';
import ColorModeSwitch from '../../Components/Navbar/ColorModeSwitch'; // Import the ColorModeSwitch component

const TopNavBar = () => {
  const bg = useColorModeValue('gray.200', 'gray.800'); // Swapped values
  const color = useColorModeValue('gray.800', 'white'); // Swapped values
  const hoverColor = useColorModeValue('blue.500', 'yellow.300'); // Swapped values

  return (
    <Box
      bg={bg}
      color={color}
      py={4}
      px={10}
      position='fixed'
      top={20}
      left={30}
      right={30}
      zIndex={100}
      boxShadow='md'
      borderRadius='0 0 50px 50px'
      border={'1px'} // Add half-round border
    >
      <Flex align='center' justify='space-between'>
        <Flex align='center'>
          <Icon as={FaHome} w={6} h={6} mr={4} />
          <Heading as='h1' size='md'>
            Admin
          </Heading>
        </Flex>
        <HStack as='nav' spacing={8}>
          <Link
            as={NavLink}
            to='/admin/users'
            _hover={{ textDecoration: 'none', color: hoverColor }}
            display='flex'
            alignItems='center'
          >
            <Icon as={FaUsers} w={6} h={6} mr={2} />
            <Box fontSize='sm'>Users</Box>
          </Link>
          <Link
            as={NavLink}
            to='/admin/contacts'
            _hover={{ textDecoration: 'none', color: hoverColor }}
            display='flex'
            alignItems='center'
          >
            <Icon as={FaEnvelope} w={6} h={6} mr={2} />
            <Box fontSize='sm'>Contacts</Box>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default TopNavBar;
