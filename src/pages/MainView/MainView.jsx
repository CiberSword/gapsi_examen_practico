import { NavBar } from '@/components/NavBar/NavBar.jsx';
import { SearchView } from '@/views/SearchView/SearchView.jsx';
import { Box } from '@mui/material';

export const MainView = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        gap: '2rem'
      }}
    >
      <NavBar />
      <SearchView />
    </Box>
  );
};
