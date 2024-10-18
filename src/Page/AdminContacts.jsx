import React, { useState, useEffect } from 'react';
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
import { useAuth } from '../Store/Auth';

export const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { AuthorizationTOken } = useAuth();

  useEffect(() => {
    // Fetch contacts data
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          'http://localhost:4000/api/admin/contacts',
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

        const contactsData = await response.json();
        setContacts(contactsData);
      } catch (error) {
        console.error('Fetch error:', error.message);
      }
    };

    fetchContacts();
  }, [AuthorizationTOken]);

  const handleDelete = async (contactId) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        const response = await fetch(
          `http://localhost:4000/api/admin/contacts/${contactId}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: AuthorizationTOken,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setContacts(contacts.filter((contact) => contact._id !== contactId));
      } catch (error) {
        console.error('Delete error:', error.message);
      }
    }
  };

  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Container maxW='container.xl' py={8}>
      <Heading as='h1' mb={8}>
        Contacts
      </Heading>
      <List spacing={3}>
        {contacts.map((contact, index) => (
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
                <Heading fontSize='xl'>{contact.name}</Heading>
                <Text mt={2}>Email: {contact.email}</Text>
                <Text mt={2}>Message: {contact.message}</Text>
              </Box>
              <ButtonGroup>
                <Button
                  colorScheme='red'
                  onClick={() => handleDelete(contact._id)}
                >
                  Delete
                </Button>
              </ButtonGroup>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AdminContacts;
