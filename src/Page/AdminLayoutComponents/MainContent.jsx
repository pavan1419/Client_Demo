import React from 'react';
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import AdminUsers from '../AdminUsers';
import { AdminContacts } from '../AdminContacts';
import AdminUpdate from '../AdminUpdate';

const MainContent = () => {
  return (
    <Box mt='80px' p={10} flex='1'>
      {' '}
      {/* Adjust the margin-top to avoid overlap */}
      <Routes>
        <Route path='users' element={<AdminUsers />} />
        <Route path='contacts' element={<AdminContacts />} />
        <Route path='users/:id/edit' element={<AdminUpdate />} />
      </Routes>
    </Box>
  );
};

export default MainContent;
