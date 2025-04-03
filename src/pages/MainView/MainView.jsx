import {Box} from "@mui/material";
import { NavBar } from '@/components/NavBar/NavBar.jsx';

export const MainView = () => {

  return (
    <Box sx={{display: "flex", width: "100vw", height: '100vh', backgroundColor: "#00003e"}}>
      <NavBar/>
    </Box>
  );
}