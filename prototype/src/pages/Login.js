import {
  Box, Typography
} from '@mui/material';

import { Routes, Route } from "react-router-dom";
import MainLayoutLogin from "../components/MainLayoutLogin";
import HomeLogin from "./HomeLogin";

const Login = () => {
  return (
  	<Routes>
  		<Route element={<MainLayoutLogin/>}>
  	  	<Route index element={<HomeLogin />} />
  	  	</Route>
  	</Routes>
    
    // <Box>
    //   <Typography variant="h3" mb={2}>Login</Typography>
    //   <Typography>Example Login Page</Typography>
    // </Box>
  )
}

export default Login;