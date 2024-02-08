import { Header, HeaderSubtitle, HeaderTitle } from '@/components/ui/header';
import { useGetCustomersQuery } from '@/state/api';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Customers = () => {
  const theme = useTheme() as any;
  const { data, isLoading } = useGetCustomersQuery(null);

  return (
    <Box m="1.5rem 2.5rem">
      <Header>
        <HeaderTitle>CUSTOMERS</HeaderTitle>
        <HeaderSubtitle>List of Customers</HeaderSubtitle>
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
          rows={data || []}
          getRowId={(row) => row._id}
          columns={[
            {
              field: '_id',
              headerName: 'ID',
              flex: 1,
            },
            {
              field: 'name',
              headerName: 'Name',
              flex: 0.5,
            },
            {
              field: 'email',
              headerName: 'Email',
              flex: 1,
            },
            {
              field: 'phoneNumber',
              headerName: 'Phone Number',
              flex: 0.5,
              renderCell: (params) => params.value.replace(/^(\d{3})(\d{3})(\d{4})/, '($1)$2-$3'),
            },
            {
              field: 'country',
              headerName: 'Country',
              flex: 0.4,
            },
            {
              field: 'occupation',
              headerName: 'Occupation',
              flex: 1,
            },
            {
              field: 'role',
              headerName: 'Role',
              flex: 0.5,
            },
          ]}
          loading={isLoading || !data}
        />
      </Box>
    </Box>
  );
};

export default Customers;
