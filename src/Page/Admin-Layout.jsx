import React from 'react';
import { Box } from '@chakra-ui/react';
import TopNavBar from './AdminLayoutComponents/TopNavBar';
import MainContent from './AdminLayoutComponents/MainContent';

const AdminLayout = () => {
  return (
    <Box>
      {/* Top Navigation */}

      <TopNavBar />
      {/* Main Content */}
      <MainContent />
    </Box>
  );
};

export default AdminLayout;
