import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/Auth';

const AdminUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { AuthorizationTOken } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
  });

  const [isFormDataSet, setIsFormDataSet] = useState(false);

  useEffect(() => {
    // Fetch user data by ID
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/admin/users/${id}`,
          {
            method: 'GET',
            headers: {
              Authorization: AuthorizationTOken,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError('Response is not JSON');
        }

        const userData = await response.json();
        console.log('Fetched user data:', userData); // Debugging log
        setFormData({
          username: userData.username || '',
          email: userData.email || '',
          phone: userData.phone || '',
        });
        setIsFormDataSet(true);
      } catch (error) {
        console.error('Fetch error:', error.message);
      }
    };

    if (!isFormDataSet) {
      fetchUserData();
    }
  }, [id, AuthorizationTOken, isFormDataSet]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to update this user?')) {
      try {
        const response = await fetch(
          `http://localhost:4000/api/admin/users/${id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: AuthorizationTOken,
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          toast({
            title: 'User updated.',
            description: 'The user details have been updated successfully.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          navigate('/admin/users');
        } else {
          toast({
            title: 'Error.',
            description: 'There was an error updating the user details.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (error) {
        toast({
          title: 'Error.',
          description: 'There was an error updating the user details.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  const handleCancel = () => {
    navigate('/admin/users');
  };

  return (
    <Box p={5}>
      <Heading as='h1' mb={5}>
        Update User
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id='username' mb={4} isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
          />
        </FormControl>
        <FormControl id='email' mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
          />
        </FormControl>
        <FormControl id='phone' mb={4} isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Phone'
          />
        </FormControl>
        <Button type='submit' colorScheme='blue' mr={3}>
          Update
        </Button>
        <Button colorScheme='gray' onClick={handleCancel}>
          Cancel
        </Button>
      </form>
    </Box>
  );
};

export default AdminUpdate;
