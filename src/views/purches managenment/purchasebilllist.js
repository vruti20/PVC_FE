import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PurchaseBillview, deletePurchasebill, getallPurchaseBill } from 'store/thunk';
import { Card, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useCan from 'views/checkpermissionvalue';

const columns = [
  { id: 'invoicedate', label: 'Invoice Date', minWidth: 100, align: 'center' },
  { id: 'vendor', label: 'Vendor', minWidth: 100, align: 'center' },
  { id: 'duedate', label: 'Due Date', minWidth: 100, align: 'center' },
  { id: 'view', label: 'View', minWidth: 100, align: 'center' },
  { id: 'edit', label: 'Edit', minWidth: 100, align: 'center' },
  { id: 'delete', label: 'Delete', minWidth: 100, align: 'center' }
];

export default function PurchaseBillList() {
  const { canViewPurchasebill, canDeletePurchasebill, canUpdatePurchasebill, canCreatePurchasebill } = useCan();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [purchasebill, setPurchasebill] = useState([]);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [billid, setBillid] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getallPurchaseBill());
        setPurchasebill(response.data);
      } catch (error) {
        console.error('Error fetching purchase bill:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleViewPurchaseBill = (id) => {
    dispatch(PurchaseBillview(id));
    navigate(`/purchasebillview/${id}`);
  };

  const handleUpdatePurchaseBill = (id) => {
    dispatch(PurchaseBillview(id));
    navigate(`/purchasebill/${id}`);
  };
  const handleAddpuchasebill = () => {
    navigate('/purchasebill');
  };

  const handleDeleteConfirmation = (id) => {
    setOpenConfirmation(true);
    setBillid(id);
  };

  const handleDeletePurchasebill = async () => {
    try {
      await dispatch(deletePurchasebill(billid));
      setOpenConfirmation(false);
    } catch (error) {
      console.error('Error deleting Bill:', error);
    }
  };

  return (
    <Card sx={{ width: '100%', padding: '25px' }}>
      <Typography variant="h4" align="center" id="mycss">
        Purchase Bill List
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        style={{ margin: '16px' }}
        onClick={handleAddpuchasebill}
        disabled={!canCreatePurchasebill()}
      >
        Create Purchase Bill
      </Button>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table style={{ border: '1px solid lightgrey' }}>
          <TableHead sx={{ backgroundColor: 'lightgrey', color: 'white' }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {purchasebill?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.id === 'view' ? (
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleViewPurchaseBill(row.id)}
                        disabled={!canViewPurchasebill()}
                      >
                        View
                      </Button>
                    ) : column.id === 'edit' ? (
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleUpdatePurchaseBill(row.id)}
                        disabled={!canUpdatePurchasebill()}
                      >
                        Edit
                      </Button>
                    ) : column.id === 'delete' ? (
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDeleteConfirmation(row.id)}
                        disabled={!canDeletePurchasebill()}
                      >
                        Delete
                      </Button>
                    ) : column.id === 'invoicedate' ? (
                      new Date(row[column.id]).toLocaleDateString('en-GB')
                    ) : column.id === 'duedate' ? (
                      new Date(row[column.id]).toLocaleDateString('en-GB')
                    ) : column.id === 'vendor' ? (
                      row.purchseVendor.accountname
                    ) : (
                      row[column.id]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={purchasebill.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={openConfirmation} onClose={() => setOpenConfirmation(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>Are you sure you want to delete this Bill?</DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setOpenConfirmation(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDeletePurchasebill} variant="contained" color="secondary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
