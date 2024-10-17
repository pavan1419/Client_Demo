import { HStack, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useAuth } from '../../Store/Auth.jsx';

const MotionLink = motion.create(Link);

const NavLinks = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
      <MotionLink
        href={'/'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Home
      </MotionLink>
      <MotionLink
        href={'/Contact'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Contact
      </MotionLink>
      <MotionLink
        href={'/About'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        About
      </MotionLink>
      <MotionLink
        href={'/services'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Services
      </MotionLink>
      {isLoggedIn ? (
        <MotionLink
          href={'/logout'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Logout
        </MotionLink>
      ) : (
        <>
          <MotionLink
            href={'/login'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Login
          </MotionLink>
          <MotionLink
            href={'/registration'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Sign Up
          </MotionLink>
        </>
      )}
    </HStack>
  );
};

export default NavLinks;
