import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  Flex,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useAuth } from '../Store/Auth';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const [isFormDataSet, setIsFormDataSet] = useState(false);
  const toast = useToast();
  const { user, token } = useAuth();

  useEffect(() => {
    // Set the form data if the user is logged in
    if (!isFormDataSet && user) {
      setFormData({
        username: user.username || '',
        email: user.email || '',
        message: '',
      });
      setIsFormDataSet(true);
    }
  }, [isFormDataSet, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/form/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Message sent.',
          description: 'Your message has been sent successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setFormData({ username: '', email: '', message: '' });
      } else {
        toast({
          title: 'Error.',
          description: 'There was an error sending your message.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error.',
        description: 'There was an error sending your message.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box py={10} px={5}>
      <Flex
        align='center'
        justify='center'
        direction='column'
        bg={useColorModeValue('gray.100', 'gray.900')}
        py={20}
        px={10}
        mb={10}
      >
        <Heading as='h1' size='2xl' mb={4}>
          Contact Us
        </Heading>
        <Text fontSize='lg' textAlign='center' maxW='600px'>
          We'd love to hear from you! Whether you have a question about
          features, pricing, need a demo, or anything else, our team is ready to
          answer all your questions.
        </Text>
      </Flex>

      {/* Contact Form Section */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Heading as='h2' size='lg' mb={4}>
            Contact Information
          </Heading>
          <Text fontSize='lg' mb={2}>
            <strong>Address:</strong> 1234 Street Name, City, State, 12345
          </Text>
          <Text fontSize='lg' mb={2}>
            <strong>Phone:</strong> (123) 456-7890
          </Text>
          <Text fontSize='lg' mb={2}>
            <strong>Email:</strong> contact@yourcompany.com
          </Text>
        </Box>
        <Box>
          <Heading as='h2' size='lg' mb={4}>
            Get in Touch
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id='username' mb={4} isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type='text'
                name='username'
                value={formData.username}
                onChange={handleChange}
                placeholder='Your Name'
              />
            </FormControl>
            <FormControl id='email' mb={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Your Email'
              />
            </FormControl>
            <FormControl id='message' mb={4} isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Your Message'
              />
            </FormControl>
            <Button type='submit' colorScheme='blue' size='lg'>
              Send Message
            </Button>
          </form>
        </Box>

        {/* Contact Information Section */}
      </SimpleGrid>

      {/* Map Section */}
      <Box mt={10}>
        <Heading as='h2' size='lg' mb={4} textAlign='center'>
          Our Location
        </Heading>
        <Box
          as='iframe'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0b1b1a1b1!2sEnvato!5e0!3m2!1sen!2sus!4v1611812475467!5m2!1sen!2sus'
          width='100%'
          height='450'
          frameBorder='0'
          style={{ border: 0 }}
          allowFullScreen=''
          aria-hidden='false'
          tabIndex='0'
        />
      </Box>
    </Box>
  );
};

export default Contact;
