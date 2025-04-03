import gapsiLogo from '@/assets/gapsi/logo.png';
import { Typography } from '@mui/material';

export const NavBar = () => {
  return (
    <nav style={{ position: 'absolute', top: 0, z: 10, display: 'flex' }}>
      <img src={gapsiLogo} alt={'Gapsi Logo'} />
      <Typography>
        e-Commerce Gapsi
      </Typography>
    </nav>
  );
};
