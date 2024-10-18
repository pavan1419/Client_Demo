import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AdminUsers } from './AdminUsers';
import { AdminContacts } from './AdminContacts';
import AdminUpdate from './AdminUpdate';

export const AdminLayout = () => {
  return (
    <Box>
      {/* Top Navigation */}
      <Box bg='blue.500' color='white' py={4} px={10}>
        <Heading as='h1' size='lg'>
          Admin Panel
        </Heading>
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          <NavLink to='/admin/users'>Users</NavLink>
          <NavLink to='contacts'>Contacts</NavLink>
          <Button colorScheme='whiteAlpha'>Logout</Button>
        </HStack>
      </Box>

      {/* Main Content */}
      <Box py={10} px={10}>
        <Routes>
          <Route path='users' element={<AdminUsers />} />
          <Route path='contacts' element={<AdminContacts />} />
          <Route path='users/:id/edit' element={<AdminUpdate />} />
        </Routes>
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
