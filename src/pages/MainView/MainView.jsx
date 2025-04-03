import { Box, Button, TextField } from '@mui/material';
import { NavBar } from '@/components/NavBar/NavBar.jsx';
import { useState } from 'react';
import { getProducts } from '@/services/apiServices.js';
import { ItemContainer } from '@/components/ItemContainer/ItemContainer.jsx';
import { ProductItem } from '@/components/ProductItem/ProductItem.jsx';

export const MainView = () => {
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [productList, setProductList] = useState();

  const handleSearchView = async () => {
    const requestedProducts = await getProducts(searchValue, pageNumber);
    setProductList(requestedProducts?.item?.props?.pageProps?.initialData?.searchResult?.itemStacks[0]?.items);
  }

  console.log("CS_ProductsResponse: ", productList);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0C0C22',
        }}
      >
        <NavBar />
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <TextField
            label={'Ingresa el producto a buscar'}
            sx={{ backgroundColor: 'white' }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSearchView}
          >
            <i className="fa-solid fa-magnifying-glass" />
          </Button>
        </Box>
        <ItemContainer>
          {productList?.map((product, index) => <ProductItem productData={product} key={index} />)}
        </ItemContainer>
      </Box>
    </>
  );
};