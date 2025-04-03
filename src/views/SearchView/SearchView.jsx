import { Box, LinearProgress } from '@mui/material';
import { useMemo, useState } from 'react';
import { getProducts } from '@/services/apiServices.js';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductItem } from '@/components/ProductItem/ProductItem.jsx';
import { ItemContainer } from '@/components/ItemContainer/ItemContainer.jsx';
import { SearchBar } from '@/components/SearchBar/SearchBar.jsx';

export const SearchView = () => {
  const [searchValue, setSearchValue] = useState('');
  const [triggerReset, setTriggerReset] = useState(false);

  const handleSearch = () => {
    refetch();
  };

  const handleSearchValue = (newValue) => setSearchValue(newValue);

  const {data: productList, fetchNextPage, hasNextPage, refetch} = useInfiniteQuery({
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
    if (triggerReset){
      setTriggerReset(false);
      return { info: null, results: [] }
    }

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
          width: '95%',
          height: '100vh',
          gap: '2rem',
        }}
      >
        <SearchBar searchValue={searchValue} handleSearch={handleSearch} handleSearchValue={handleSearchValue} />
        <InfiniteScroll
          dataLength={productsArray ? productsArray?.results?.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={<LinearProgress />}>
          <ItemContainer>
            {productsArray?.results?.map((product, index) => (
              <ProductItem productData={product} key={index} />
            ))}
          </ItemContainer>
        </InfiniteScroll>
      </Box>
    </>
  );
};
