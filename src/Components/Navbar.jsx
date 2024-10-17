import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import Logo from './Navbar/Logo';
import NavLinks from './Navbar/NavLinks';
import ColorModeSwitch from './Navbar/ColorModeSwitch';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      as='nav'
      position='sticky'
      top='0'
      width='100%'
      zIndex='1000'
      boxShadow='md'
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={handleToggle}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Logo />
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            alignItems={'center'}
            justifyContent={'center'}
            flex={1}
          >
            <NavLinks />
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <ColorModeSwitch />
          <Spacer />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <VStack as={'nav'} spacing={4} alignItems={'center'}>
            <NavLinks />
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
