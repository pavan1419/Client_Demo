import { Box, Image } from '@chakra-ui/react';
import logo from '../../assets/LOGO.jpg'; // Adjust the path as necessary
import { Link as RouterLink } from 'react-router-dom';

const Logo = () => {
  return (
    <Box
      as={RouterLink}
      to='/'
      p={2}
      borderRadius='full'
      boxShadow='lg'
      bg='white'
      display='inline-block'
    >
      <Image
        src={logo}
        alt='Logo'
        boxSize='30px'
        objectFit='contain'
        borderRadius='full'
      />
    </Box>
  );
};

export default Logo;
