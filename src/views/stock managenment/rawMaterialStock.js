import React, { useEffect, useState } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Card,
  TableHead,
  TablePagination,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
  Grid
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { getAllRawStock, updateRowStoke, viewSingleRawStock } from 'store/thunk';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import useCan from 'views/permission managenment/checkpermissionvalue';

const columns = [
  { id: 'product', label: 'Product Name', minWidth: 100, align: 'center' },
  // { id: 'hsncode', label: 'HSN Code', minWidth: 100, align: 'center' },
  { id: 'stock', label: 'Stock', minWidth: 70, align: 'center' },
  // { id: 'lowstock', label: 'Low Stock', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' }
];

const RawMaterial = () => {
  const { canUpdateRawStoke, canViewRawStoke } = useCan();
  const [stoke, setStoke] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOpenDialog] = useState(false);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [viewStock, setViewStock] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenDialog = (row) => {
    setSelectedRow(row);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedRow(null);
  };

  const handleSave = async () => {
    try {
      const paylod = {
        productId: selectedRow.productId,
        qty: selectedRow.qty
      };
      await dispatch(updateRowStoke(selectedRow.id, paylod, navigate));
      const updatedData = await dispatch(getAllRawStock());
      setStoke(updatedData);
      handleCloseDialog();
    } catch (error) {
      console.error('Error updating stoke', error);
    }
  };

  const handleViewLowStock = async (id) => {
    const data = await dispatch(viewSingleRawStock(id));
    setViewStock(data);
    setOpenViewDialog(true);
  };
  const handleCloseViewDialog = () => {
    setOpenViewDialog(false);
    setSelectedRow(null);
  };

  useEffect(() => {
    const fetchStoke = async () => {
      try {
        const data = await dispatch(getAllRawStock());
        setStoke(data);
      } catch (error) {
        if (error.response.status === 401) {
          navigate('/');
        }
        console.error('fetching data of stoke', error);
      }
    };
    fetchStoke();
  }, [dispatch, navigate]);

  return (
    <Card style={{ width: 'auto', padding: '20px' }}>
      {/* <Typography variant="h4" align="center" id="mycss">
        Stock List
      </Typography> */}
      <Table style={{ border: '1px solid lightgrey' }}>
        <TableHead sx={{ backgroundColor: 'rgba(66, 84, 102, 0.8)', color: 'white' }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {stoke?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? 'white' : 'rgba(66, 84, 102, 0.1)' }}>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.id === 'action' ? (
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      <IconButton
                        sizeSmall
                        style={{
                          backgroundColor: canViewRawStoke() ? 'Blue' : 'gray',
                          color: canViewRawStoke() ? 'white' : 'white',
                          borderRadius: 0.8,
                          ...(canViewRawStoke() && { opacity: 1 }),
                          ...(!canViewRawStoke() && { opacity: 0.5 }),
                          ...(!canViewRawStoke() && { backgroundColor: 'gray' })
                        }}
                        disabled={!canViewRawStoke()}
                        onClick={() => handleViewLowStock(row.id)}
                      >
                        <RemoveRedEyeIcon style={{ fontSize: '16px' }} />
                      </IconButton>
                      <IconButton
                        sizeSmall
                        style={{
                          backgroundColor: canUpdateRawStoke() ? 'green' : 'gray',
                          color: canUpdateRawStoke() ? 'white' : 'white',
                          borderRadius: 0.8,
                          ...(canUpdateRawStoke() && { opacity: 1 }),
                          ...(!canUpdateRawStoke() && { opacity: 0.5 }),
                          ...(!canUpdateRawStoke() && { backgroundColor: 'gray' })
                        }}
                        disabled={!canUpdateRawStoke()}
                        onClick={() => handleOpenDialog(row, row.productStock.id)}
                      >
                        <Edit style={{ fontSize: '16px' }} />
                      </IconButton>
                    </div>
                  ) : column.id === 'product' ? (
                    row.productStock.productname
                  ) : column.id === 'stock' ? (
                    row.qty
                  ) : (
                    row[column.id]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={stoke?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Stock</DialogTitle>
        <DialogContent>
          <Grid item container spacing={2}>
            <Grid item sm={6}>
              <Typography variant="subtitle1">Product Name:</Typography>
              <input
                disabled
                value={selectedRow?.productStock.productname || ''}
                onChange={(e) =>
                  setSelectedRow({ ...selectedRow, productStock: { ...selectedRow.productStock.id, productname: e.target.value } })
                }
              />
            </Grid>
            <Grid item sm={6}>
              <Typography variant="subtitle1">
                Product QTY: <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <input value={selectedRow?.qty || ''} onChange={(e) => setSelectedRow({ ...selectedRow, qty: e.target.value })} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary" id="savebtncs" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSave} color="secondary" id="savebtncs" variant="outlined">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openViewDialog} onClose={handleCloseViewDialog}>
        <DialogTitle align="center" variant="h5">
          View Stock
        </DialogTitle>
        <DialogContent>
          <Grid item container spacing={4}>
            <Grid item sm={6}>
              <Typography variant="subtitle1">Product name:</Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography>{viewStock?.productStock?.productname}</Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={4}>
            <Grid item sm={6}>
              <Typography variant="subtitle1">Stock:</Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography>{viewStock?.qty}</Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={4}>
            <Grid item sm={6}>
              <Typography variant="subtitle1">Updated By:</Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography>{viewStock?.stockUpdateUser?.username}</Typography>
            </Grid>
          </Grid>
          <DialogActions>
            <Button onClick={handleCloseViewDialog} color="secondary" id="savebtncs" variant="outlined">
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default RawMaterial;
