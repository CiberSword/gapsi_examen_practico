import { Grid } from '@mui/material';

export const ItemContainer = ({ children }) => {
  return <Grid container spacing={3}>{children}</Grid>;
};
