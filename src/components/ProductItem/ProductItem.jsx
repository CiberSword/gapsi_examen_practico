import { Grid, Typography } from '@mui/material';

export const ProductItem = ({ productData }) => {
  return (
    <Grid
      item
      size={3}
      sx={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <img
        src={productData.image}
        alt={productData.name}
        style={{
          objectFit: 'contain',
          width: '100%',
          height: '12rem',
          marginBottom: '0.5rem',
        }}
      />
      <Typography
        sx={{
          fontWeight: 600,
          color: '#0b1134',
          fontSize: '2rem',
        }}
      >
        {productData?.priceInfo?.linePrice}
      </Typography>
      <Typography
        sx={{
          color: 'grey',
          fontSize: '1.1rem',
          letterSpacing: '0.5px',
          lineHeight: 1.4,
        }}
      >
        {productData.name}
      </Typography>
    </Grid>
  );
};
