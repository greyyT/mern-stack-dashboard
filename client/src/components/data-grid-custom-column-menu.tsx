import {
  GridColumnMenuContainer,
  GridColumnMenuItemProps,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
} from '@mui/x-data-grid';

const DataGridCustomColumnMenu = ({ hideMenu, colDef, open }: GridColumnMenuItemProps) => {
  return (
    <GridColumnMenuContainer hideMenu={hideMenu} colDef={colDef} open={open}>
      <GridColumnMenuFilterItem onClick={hideMenu} colDef={colDef} />
      <GridColumnMenuHideItem onClick={hideMenu} colDef={colDef} />
    </GridColumnMenuContainer>
  );
};

export default DataGridCustomColumnMenu;
