import gapsiLogo from '@/assets/gapsi/logo.png';
import { Typography } from '@mui/material';

export const NavBar = () => {
  return (
    <nav style={{ display: 'flex', padding: 3 }}>
      <img src={gapsiLogo} alt={'Gapsi Logo'} />
      <Typography>
        e-Commerce Gapsi
      </Typography>
    </nav>
  );
};
