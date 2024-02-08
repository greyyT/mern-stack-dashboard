import { Box, useMediaQuery } from '@mui/material';

import { ProductItem } from '@/components/product-item';
import { Header, HeaderSubtitle, HeaderTitle } from '@/components/ui/header';
import { useGetProductsQuery } from '@/state/api';

const Products = () => {
  const { data, isLoading } = useGetProductsQuery(null);
  const isNonMobile = useMediaQuery('(min-width: 1000px)');

  return (
    <Box m="1.5rem 2rem">
      <Header>
        <HeaderTitle>PRODUCTS</HeaderTitle>
        <HeaderSubtitle>See your list of products.</HeaderSubtitle>
      </Header>
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
          }}
        >
          {data?.map((product, idx) => (
            <ProductItem product={product} key={idx} />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;
