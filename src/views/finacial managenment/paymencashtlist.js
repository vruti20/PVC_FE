import React, { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Card,
  TablePagination,
  TableHead,
  TableContainer,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getallPayment } from 'store/thunk';

const columns = [
  { id: 'paymentdate', label: 'Date', align: 'center' },
  { id: 'voucherno', label: 'Vendor', align: 'center' },
  { id: 'amount', label: 'Amount', align: 'center' },
  { id: 'refno', label: 'Description', align: 'center' },
  { id: 'edit', label: 'Edit', align: 'center' },
  { id: 'delete', label: 'Delete', align: 'center' }
];

const PaymentListPage = () => {
  const navigate = useNavigate();
  const [payments, setPayments] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const [openConfirmation, setOpenConfirmation] = useState(false);

  useEffect(() => {
    dispatch(getallPayment())
      .then((data) => {
        setPayments(data.data);
      })
      .catch((error) => {
        console.error('Error fetching payment data:', error);
      });
  }, [dispatch]);

  const handleMakePayment = () => {
    navigate('/paymentcash');
    // console.log('Payment made');
  };

  const handleDeleteConfirmation = () => {
    setOpenConfirmation(true);
    // setSelectedId(id);
  };
  // const handleViewPayment = (id) => {
  //   dispatch(paymentview(id));
  //   navigate(`/paymentview/${id}`);
  // };

  // const handleUpdatePayment = (id) => {
  //   // console.log('id',id);
  //   navigate(`/payment/${id}`);
  // };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    // <Container>
    <Card style={{ width: '100%', padding: '25px' }}>
      {/* <Card style={{ width: '100%' }}> */}
      <Typography variant="h4" align="center" id="mycss">
        Payment Cash List
      </Typography>
      <Button variant="contained" color="secondary" style={{ margin: '16px' }} onClick={handleMakePayment}>
        Payment Cash
      </Button>
      <TableContainer>
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
            {payments?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((payment) => (
              <TableRow key={payment.id}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.id === 'edit' ? (
                      <Button variant="outlined" color="secondary">
                        Edit
                      </Button>
                    ) : column.id === 'delete' ? (
                      <Button variant="outlined" color="secondary" onClick={() => handleDeleteConfirmation(payment.id)}>
                        Delete
                      </Button>
                    ) : column.id === 'paymentdate' ? (
                      new Date(payment[column.id]).toLocaleDateString()
                    ) : (
                      payment[column.id]
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
        count={payments?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={openConfirmation} onClose={() => setOpenConfirmation(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>Are you sure you want to delete this ?</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirmation(false)} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button variant="contained" color="secondary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default PaymentListPage;
