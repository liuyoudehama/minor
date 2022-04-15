import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayoutLogin = () => {
  return (
    <>
      <Box mt={4}>
        <Container
          maxWidth="lg"
          sx={{
            minHeight: "100vh",
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </>
  );
}

export default MainLayoutLogin;