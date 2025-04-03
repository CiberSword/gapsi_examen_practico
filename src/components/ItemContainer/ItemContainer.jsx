import { Grid } from '@mui/material';

export const ItemContainer = ({ children }) => {
  return <Grid container spacing={3} padding={'3rem'}>{children}</Grid>;
};
