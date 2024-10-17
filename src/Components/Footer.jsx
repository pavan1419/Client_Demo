import { Box, Flex, Text, Link, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as='footer' bg='gray.900' color='gray.300' py='6' textAlign='center'>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify='space-between'
        align='center'
        maxW='1200px'
        mx='auto'
        px='4'
      >
        <Flex direction='column' align='center' mb={{ base: '4', md: '0' }}>
          <Text fontSize='lg' fontWeight='bold' color='teal.300'>
            Contact Us
          </Text>
          <Link href='mailto:contact@myapp.com' color='teal.200' mt='2'>
            contact@myapp.com
          </Link>
          <Link href='tel:+1234567890' color='teal.200' mt='1'>
            +1 234 567 890
          </Link>
        </Flex>
        <Divider
          orientation='vertical'
          height='50px'
          borderColor='gray.700'
          display={{ base: 'none', md: 'block' }}
        />
        <Text mt={{ base: '4', md: '0' }} color='gray.500'>
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
