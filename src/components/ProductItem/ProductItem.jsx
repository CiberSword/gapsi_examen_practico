import { Grid, Typography } from '@mui/material';

export const ProductItem = ({ productData }) => {
  return (
    <Grid item size={3} sx={{ backgroundColor: 'red', height: '15rem' }}>
      <img
        src={productData.image}
        alt={productData.name}
        style={{ objectFit: 'contain', width: '100%', height: '70%' }}
      />
      <Typography variant="body2">{productData?.priceInfo?.linePrice}</Typography>
      <Typography variant="body2">{productData.name}</Typography>
    </Grid>
  );
};
