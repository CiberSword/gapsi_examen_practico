import gapsiLogo from '@/assets/gapsi/logo.png';
import { Typography } from '@mui/material';

export const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        padding: '1rem 5rem',
        zIndex: 10,
        width: '100%',
      }}
    >
      <img
        src={gapsiLogo}
        alt="Gapsi Logo"
        style={{
          height: '40px',
          padding: '0 3rem',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontFamily: "'Roboto', sans-serif",
          fontSize: '1.2rem',
          color: 'white',
        }}
      >
        E-COMMERCE-GAPSI
      </Typography>
    </nav>
  );
};
