import { Dashboard } from '@/types';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const StatTable = ({ data, isLoading }: { data: Dashboard | undefined; isLoading: boolean }) => {
  const theme = useTheme() as any;

  return (
    <Box
      gridColumn="span 8"
      gridRow="span 3"
      sx={{
        '& .MuiDataGrid-root': {
          border: 'none',
          borderRadius: '5rem',
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
          backgroundColor: theme.palette.background.alt,
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
  );
};

export default StatTable;
