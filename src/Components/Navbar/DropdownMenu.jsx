import { Menu, MenuButton, MenuList, MenuItem, Link } from '@chakra-ui/react';
import { ChevronDownIcon, useColorModeValue } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const DropdownMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={MotionLink}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition="all 0.2s"
        _hover={{ textDecoration: 'none', color: 'teal.500' }}
        _focus={{ boxShadow: 'outline' }}
        display="flex"
        alignItems="center"
      >
        More <ChevronDownIcon ml={2} />
      </MenuButton>
      <MenuList
        bg={useColorModeValue('white', 'gray.800')}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        boxShadow="lg"
        rounded="md"
        overflow="hidden"
      >
        <MenuItem _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}>Profile</MenuItem>
        <MenuItem _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}>Settings</MenuItem>
        <MenuItem _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
