import { Box, Button, TextField } from '@mui/material';
import { NavBar } from '@/components/NavBar/NavBar.jsx';
import { useMemo, useState } from 'react';
import { getProducts } from '@/services/apiServices.js';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loading } from '@/components/Loading/Loading.jsx';
import { ProductItem } from '@/components/ProductItem/ProductItem.jsx';
import { ItemContainer } from '@/components/ItemContainer/ItemContainer.jsx';

export const MainView = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    refetch();
  };

  const {data: productList, error, fetchNextPage, status, hasNextPage, isFetching, refetch} = useInfiniteQuery({
    queryKey:['products'],
    queryFn: async ({pageParam}) => getProducts(searchValue, pageParam),
    initialPageParam: 1,
    getNextPageParam: ( lastPage ) => {
      const currentPage = lastPage?.item?.props?.pageProps?.initialData?.searchResult?.paginationV2?.pageProperties?.page;
      const maxPage = lastPage?.item?.props?.pageProps?.initialData?.searchResult?.paginationV2?.maxPage;
      if (currentPage === maxPage) return undefined;
      return currentPage + 1;
    },
    enabled: false
  }
);

  const productsArray = useMemo(() => productList?.pages.reduce((prev, page) => {
    return {
      info: page?.item?.props?.pageProps?.initialData?.searchResult?.paginationV2?.pageProperties,
      results: [...prev.results, ...(page?.item?.props?.pageProps?.initialData?.searchResult?.itemStacks[0]?.items || [])]
    };
  }, { info: null, results: [] }), [productList]);

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
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            label={'Ingresa el producto a buscar'}
            sx={{ backgroundColor: 'white' }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button variant="contained" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass" />
          </Button>
        </Box>
        <InfiniteScroll
          dataLength={productsArray ? productsArray?.results?.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
        >
          <ItemContainer>
            {productsArray?.results?.map((product, index) => (
              <ProductItem productData={product} key={index} />
            ))}
          </ItemContainer>
          {isFetching && <Loading/>}
        </InfiniteScroll>

      </Box>
    </>
  );
};
