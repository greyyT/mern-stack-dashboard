import { Box, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

import { Header, HeaderSubtitle, HeaderTitle } from '@/components/ui/header';
import { useGetUserPerformanceQuery } from '@/state/api';
import { DataGrid } from '@mui/x-data-grid';
import DataGridCustomColumnMenu from '@/components/data-grid-custom-column-menu';

const Performance = () => {
  const theme = useTheme() as any;
  const userId = useSelector((state: any) => state.global.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);

  return (
    <Box m="1.5rem 2.5rem">
      <Header>
        <HeaderTitle>PERFORMANCE</HeaderTitle>
        <HeaderSubtitle>Track your Affiliate Sales Performance Here</HeaderSubtitle>
      </Header>
      <Box
        mt="40px"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.primary.light,
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: 'none',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={(data && data.sales) || []}
          getRowId={(row) => row._id}
          columns={[
            {
              field: '_id',
              headerName: 'ID',
              flex: 1,
            },
            {
              field: 'userId',
              headerName: 'User ID',
              flex: 1,
            },
            {
              field: 'createdAt',
              headerName: 'Created At',
              flex: 1,
            },
            {
              field: 'products',
              headerName: '# of Products',
              flex: 0.5,
              sortable: false,
              renderCell: (params) => params.value.length,
            },

            {
              field: 'cost',
              headerName: 'Cost',
              flex: 1,
              renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
            },
          ]}
          loading={isLoading || !data}
          slots={{
            columnMenu: DataGridCustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  );
};

export default Performance;
