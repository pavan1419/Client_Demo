import { useEffect, useState } from 'react';
import { useAuth } from '../Store/Auth';
import {
  Box,
  Heading,
  Text,
  Container,
  useColorModeValue,
  Button,
  ButtonGroup,
  List,
  ListItem,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (userId) => {
    navigate(`/admin/users/${userId}/edit`);
  };

  const { AuthorizationTOken } = useAuth();
  const getAllUsers = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/admin/users', {
        method: 'GET',
        headers: {
          Authorization: AuthorizationTOken,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError('Response is not JSON');
      }

      const jsonData = await response.json();
      console.log(jsonData);
      setUsers(jsonData);
    } catch (err) {
      console.error('Fetch error:', err.message);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // Use Chakra UI's color mode utilities
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  // Placeholder functions for CRUD operations
  const handleCreate = () => {
    console.log('Create user');
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/admin/users/delete${userId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: AuthorizationTOken,
          },
        }
      );
      console.log(response);

      // Check if the response is OK and is JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError('Response is not JSON');
      }

      const jsonData = await response.json();
      console.log(jsonData);

      // Update the users state after deletion
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Delete error:', error.message);
    }
  };

  return (
    <Container maxW='container.xl' py={8}>
      <Heading as='h1' mb={8}>
        Users
      </Heading>
      <List spacing={3}>
        {users.map((CurrentUser, index) => (
          <ListItem
            key={index}
            p={5}
            shadow='md'
            borderWidth='1px'
            borderRadius='md'
            bg={bg}
            color={color}
          >
            <Flex justify='space-between' align='center'>
              <Box>
                <Heading fontSize='xl'>{CurrentUser.username}</Heading>
                <Text mt={2}>Email: {CurrentUser.email}</Text>
                <Text mt={2}>Phone: {CurrentUser.phone}</Text>
                <Text mt={2}>Admin: {CurrentUser.isAdmin ? 'Yes' : 'No'}</Text>
              </Box>
              <ButtonGroup>
                <Button
                  colorScheme='yellow'
                  onClick={() => handleEdit(CurrentUser._id)}
                >
                  Edit
                </Button>
                <Button
                  colorScheme='red'
                  onClick={() => handleDelete(CurrentUser._id)}
                >
                  Delete
                </Button>
              </ButtonGroup>
            </Flex>
          </ListItem>
        ))}
      </List>
      <Button mt={8} colorScheme='green' onClick={handleCreate}>
        Create New User
      </Button>
    </Container>
  );
};

export default AdminUsers;
