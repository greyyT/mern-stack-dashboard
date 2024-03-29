import DataGridCustomToolbar from '@/components/data-grid-custom-toolbar';
import { Header, HeaderSubtitle, HeaderTitle } from '@/components/ui/header';
import { useGetTransactionsQuery } from '@/state/api';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const Transactions = () => {
  const theme = useTheme() as any;

  // params sent to backend
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });
  const [sort, setSort] = useState<any>({});
  const [search, setSearch] = useState('');

  const [searchInput, setSearchInput] = useState('');

  const { data, isLoading } = useGetTransactionsQuery({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    sort: JSON.stringify(sort[0]),
    search,
  });

  return (
    <Box m="1.5rem 2.5rem">
      <Header>
        <HeaderTitle>TRANSACTIONS</HeaderTitle>
        <HeaderSubtitle>Entire list of transactions</HeaderSubtitle>
      </Header>
      <Box
        height="80vh"
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
          loading={isLoading || !data}
          rows={data?.transactions || []}
          getRowId={(row) => row._id}
          rowCount={data?.total}
          pageSizeOptions={[20, 50, 100]}
          pagination
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          sortingMode="server"
          onSortModelChange={setSort}
          slots={{ toolbar: DataGridCustomToolbar }}
          slotProps={{ toolbar: { searchInput, setSearchInput, setSearch } }}
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
        />
      </Box>
    </Box>
  );
};

export default Transactions;
