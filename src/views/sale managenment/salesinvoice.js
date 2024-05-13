import React, { useEffect, useState } from 'react';
import { Typography, Grid, Paper, Table, TableHead, TableCell, TableBody, TableRow } from '@mui/material';
// import { withStyles } from '@mui/styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import AnchorTemporaryDrawer from '../../component/customerqutation';
import AnchorDeliverychallanProductDrawer from '../../component/deliverychallanproduct';
import {
  fetchAllProducts,
  fetchAllCustomers,
  createSalesInvoice,
  SalesInvoiceview,
  updateSalesinvoice,
  fetchAllCompany
  // deleteProformainvoiceItem
} from 'store/thunk';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Salesinvoice = () => {
  const [rows, setRows] = useState([{ product: '', qty: '', rate: '', mrp: '' }]);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [customername, setCustomername] = useState('');
  const [companystate, setCompanystate] = useState('');
  const [customerState, setCustomerState] = useState('');
  const [gststate, setGststate] = useState('');
  const [plusgst, setPlusgst] = useState(0);
  const [productResponse, setProductResponse] = useState([]);
  const [customer, setcustomer] = useState([]);
  const [selectcustomer, setSelectcustomer] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectproduct, setSelectproduct] = useState([]);
  const [isproductDrawerOpen, setIsproductDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    customerId: '',
    mobileno: '',
    email: '',
    book: '',
    seriesname: '',
    invoiceno: '',
    invoicedate: new Date(),
    terms: '',
    duedate: '',
    ProFormaInvoice_no: ''
  });
  const { id } = useParams();
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();

  const handleAddRow = () => {
    const newRow = { product: '', qty: '', rate: '', mrp: '' };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const handleDeleteRow = async (id, index) => {
    // if (id) {
    //   const updatedRows = [...rows];
    //   const deletedRow = updatedRows.splice(index, 1)[0];
    //   setRows(updatedRows);
    //   // dispatch(deleteProformainvoiceItem(id));

    //   const deletedGstAmount = deletedRow.mrp * (deletedRow.gstrate / 100);
    //   const newPlusgst = plusgst - deletedGstAmount;
    //   setPlusgst(newPlusgst < 0 ? 0 : newPlusgst);

    //   const deletedAmount = deletedRow.mrp;
    //   const newSubtotal = subtotal - deletedAmount;
    //   setSubtotal(newSubtotal < 0 ? 0 : newSubtotal);
    // } else {
    const updatedRows = [...rows];
    const deletedRow = updatedRows.splice(index, 1)[0];
    setRows(updatedRows);

    const deletedGstAmount = deletedRow.mrp * (deletedRow.gstrate / 100);
    const newPlusgst = plusgst - deletedGstAmount;
    setPlusgst(newPlusgst < 0 ? 0 : newPlusgst);

    const deletedAmount = deletedRow.mrp;
    const newSubtotal = subtotal - deletedAmount;
    setSubtotal(newSubtotal < 0 ? 0 : newSubtotal);
    // }
  };

  const handleSelectChange = (selectedOption) => {
    if (selectedOption && selectedOption.label === 'Create New Customer') {
      setIsDrawerOpen(true);
    } else {
      formData.customerId = selectedOption.value;
      setFormData(formData);
      setCustomername(selectedOption.label);
      setCustomerState(selectedOption.state);
      setIsDrawerOpen(false);
    }
  };

  const handleSelectproductChange = (selectedOption, index) => {
    console.log(selectproduct);
    if (selectedOption && selectedOption.label === 'Create New Product') {
      setIsproductDrawerOpen(true);
    } else {
      const updatedRows = rows.map((row, rowIndex) => {
        if (rowIndex === index) {
          return {
            ...row,
            productId: selectedOption.value,
            product: selectedOption.label,
            rate: selectedOption.rate,
            gstrate: selectedOption.gstrate
          };
        }
        return row;
      });

      setRows(updatedRows);
      setSelectproduct(selectedOption.value);
      setIsproductDrawerOpen(false);
    }
  };

  const handleInvoiceDateChange = (date) => {
    const newdeudate = new Date(date);
    newdeudate.setDate(newdeudate.getDate() + 7);
    setFormData({ ...formData, date, duedate: newdeudate });
  };

  const handleDueDateChange = (date) => {
    setFormData({ ...formData, duedate: date });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchAllCustomers());
        if (Array.isArray(response)) {
          const options = response.map((customer) => ({ value: customer.id, label: customer.shortname, state: customer.state }));
          setcustomer([{ value: 'new', label: 'Create New Customer', state: '' }, ...options]);
        }
        const productResponse = await dispatch(fetchAllProducts());
        if (Array.isArray(productResponse)) {
          setProductResponse(productResponse);
          const options = productResponse.map((product) => ({
            value: product.id,
            label: product.productname,
            rate: product.salesprice,
            gstrate: product.gstrate
          }));
          setProduct([{ value: 'new', label: 'Create New Product', rate: '', gstrate: '' }, ...options]);
        } else {
          console.error('fetchAllProducts returned an unexpected response:', productResponse);
        }

        const data = await dispatch(fetchAllCompany());
        const datademo = data[0].state === customerState;
        setCompanystate(data[0].state);
        setGststate(datademo);
      } catch (error) {
        console.error('Error fetching quotations:', error);
      }
    };
    fetchData();
  }, [dispatch, companystate, customerState]);

  useEffect(() => {
    const data = async () => {
      if (id) {
        const response = await dispatch(SalesInvoiceview(id));
        const { InvioceCustomer, mobileno, ProFormaInvoice_no, email, book, seriesname, invoiceno, invoicedate, terms, duedate } = response;
        // console.log(response, 'response');
        setFormData({
          customerId: InvioceCustomer.id,
          mobileno,
          ProFormaInvoice_no,
          email,
          book,
          seriesname,
          invoiceno,
          invoicedate,
          terms,
          duedate
        });
        setSelectcustomer(InvioceCustomer.id);
        setCustomerState(InvioceCustomer.state);
        setCustomername(InvioceCustomer.shortname);
        const updatedRows = response.items.map((item) => ({
          id: item.id,
          productId: item.InvoiceProduct.id,
          product: item.InvoiceProduct.productname,
          qty: item.qty,
          rate: item.rate,
          mrp: item.qty * item.rate,
          gstrate: item.InvoiceProduct.gstrate,
          gst: item.mrp * (item.InvoiceProduct.gstrate / 100)
        }));
        setRows(updatedRows);
        const totalGST = updatedRows.reduce((acc, row) => acc + row.gst, 0);
        setPlusgst(totalGST);
      }
    };
    data();
  }, [dispatch, id]);
  useEffect(() => {
    const initialSubtotal = rows.reduce((acc, row) => acc + row.mrp, 0);
    setSubtotal(initialSubtotal);
  }, [rows]);
  const handleSalesinvoice = async () => {
    try {
      console.log('data>>>>', selectcustomer, setSelectcustomer);
      if (id) {
        const payload = {
          ...formData,
          totalMrp: subtotal,
          mainTotal: Number(subtotal) + Number(plusgst),
          items: rows.map((row) => ({
            productId: row.productId,
            rate: row.rate,
            qty: row.qty,
            mrp: row.mrp
          }))
        };
        const gststate = companystate === customerState ? 'true' : 'false';
        setGststate(gststate);
        if (gststate === 'true') {
          payload.totalSgst = plusgst;
          payload.totalIgst = 0;
        } else {
          payload.totalSgst = 0;
          payload.totalIgst = plusgst;
        }
        await dispatch(updateSalesinvoice(id, payload, navigate));
      } else {
        const payload = {
          ...formData,
          totalMrp: subtotal,
          mainTotal: Number(subtotal) + Number(plusgst),
          items: rows.map((row) => ({
            productId: row.productId,
            mrp: row.mrp,
            rate: row.rate,
            qty: row.qty
          }))
        };
        const gststate = companystate === customerState ? 'true' : 'false';
        setGststate(gststate);
        if (gststate === 'true') {
          payload.totalSgst = plusgst;
          payload.totalIgst = 0;
        } else {
          payload.totalSgst = 0;
          payload.totalIgst = plusgst;
        }
        await dispatch(createSalesInvoice(payload, navigate));
      }
    } catch (error) {
      console.error('Error creating Sales Invoice:', error);
      alert('Failed to create Sales Invoice');
    }
  };
  const handleInputChange = (index, field, value) => {
    const updatedRows = rows.map((row, rowIndex) => {
      if (rowIndex === index) {
        return { ...row, [field]: value };
      }
      return row;
    });

    updatedRows.forEach((row) => {
      const amount = row.qty * row.rate;
      row.mrp = amount;
      const gstAmount = row.mrp * (row.gstrate / 100);
      row.gst = gstAmount;
    });

    const newSubtotal = updatedRows.reduce((acc, row) => acc + row.mrp, 0);
    setSubtotal(newSubtotal);
    if (id && gststate) {
      const newPlusgst = updatedRows.reduce((acc, row) => acc + row.gst, 0);
      setFormData((prevFormData) => ({
        ...prevFormData,
        totalSgst: newPlusgst
      }));
    } else {
      const newPlusgst = updatedRows.reduce((acc, row) => acc + row.gst, 0);
      setFormData((prevFormData) => ({
        ...prevFormData,
        totalIgst: newPlusgst
      }));
    }
    setRows(updatedRows);

    const rowId = rows[index];
    const selectedProduct = productResponse.find((product) => product.gstrate === rowId.gstrate);
    if (selectedProduct) {
      const updatedRowsWithGST = updatedRows.map((row) => {
        const gstAmount = row.mrp * (row.gstrate / 100);
        return { ...row, gst: gstAmount };
      });
      const totalGST = updatedRowsWithGST.reduce((acc, row) => acc + row.gst, 0);
      setPlusgst(totalGST);
    }
  };
  return (
    <Paper elevation={4} style={{ padding: '24px' }}>
      <div>
        {id ? (
          <Typography variant="h4" align="center" gutterBottom id="mycss">
            Update Sales Invoice
          </Typography>
        ) : (
          <Typography variant="h4" align="center" gutterBottom id="mycss">
            Create Sales Invoice
          </Typography>
        )}

        <Grid container style={{ marginBottom: '16px' }}>
          <Grid container spacing={2} style={{ marginBottom: '16px' }}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">
                Customer : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <Select
                color="secondary"
                options={customer}
                value={{ value: formData.customerId, label: customername }}
                onChange={handleSelectChange}
              />
            </Grid>
            <AnchorTemporaryDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">
                Mobile No. : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <input
                placeholder="Enter Mobile No."
                id="mobileno"
                value={formData.mobileno}
                onChange={(e) => setFormData({ ...formData, mobileno: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">
                Email : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <input
                placeholder="Enter Email Address"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginBottom: '16px' }}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">
                Book : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <input id="book" value={formData.book} onChange={(e) => setFormData({ ...formData, book: e.target.value })} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">
                Series Name : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <input
                placeholder="Sales invoice"
                id="seriesname"
                value={formData.seriesname}
                onChange={(e) => setFormData({ ...formData, seriesname: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">
                Invoice No. : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <input
                placeholder="0001"
                id="invoiceno"
                value={formData.invoiceno}
                onChange={(e) => setFormData({ ...formData, invoiceno: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">
                Invoice Date : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <DatePicker
                selected={formData.invoicedate}
                onChange={(date) => handleInvoiceDateChange(date)}
                dateFormat="dd/MM/yyyy"
                isClearable={false}
                showTimeSelect={false}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginBottom: '16px' }}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">
                Terms (Days) : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <input
                placeholder="Terms (Days)"
                id="terms"
                value={formData.terms}
                onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">
                Due Date : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <DatePicker
                selected={formData.duedate}
                onChange={(date) => handleDueDateChange(date)}
                dateFormat="dd/MM/yyyy"
                isClearable={false}
                showTimeSelect={false}
                minDate={formData.date}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">
                Pro forma invoice No. : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <input
                placeholder="Quotation no."
                id="proformainvoice_no"
                value={formData.ProFormaInvoice_no}
                onChange={(e) => setFormData({ ...formData, ProFormaInvoice_no: e.target.value })}
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
              <Table>
                <TableHead>
                  <TableCell width={650} sx={{ fontSize: '12px' }}>
                    PRODUCT : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
                  </TableCell>
                  <TableCell sx={{ fontSize: '12px' }}>
                    QTY : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
                  </TableCell>
                  <TableCell sx={{ fontSize: '12px' }}>
                    RATE (₹) : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
                  </TableCell>
                  <TableCell sx={{ fontSize: '12px' }}>
                    AMOUNT (₹) : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
                  </TableCell>
                  <TableCell sx={{ fontSize: '12px' }}>DELETE</TableCell>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ padding: '5px' }}>
                        <Select
                          color="secondary"
                          onChange={(selectedOption) => handleSelectproductChange(selectedOption, index)}
                          options={product}
                          value={{ value: row.productId, label: row.product }}
                        />
                      </TableCell>
                      <AnchorDeliverychallanProductDrawer
                        open={isproductDrawerOpen}
                        onClose={() => setIsproductDrawerOpen(false)}
                        onSelectProduct={(selectedOption) => handleSelectproductChange(selectedOption, index)}
                      />
                      <TableCell sx={{ padding: '5px' }}>
                        <input placeholder="qty" value={row.qty} onChange={(e) => handleInputChange(index, 'qty', e.target.value)} />
                      </TableCell>
                      <TableCell sx={{ padding: '5px' }}>
                        <input placeholder="rate" value={row.rate} onChange={(e) => handleInputChange(index, 'rate', e.target.value)} />
                      </TableCell>
                      <TableCell id="newcs" style={{ fontSize: '16px' }}>
                        {row.mrp}
                      </TableCell>
                      <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
                        <DeleteIcon onClick={() => handleDeleteRow(row.id, index)} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Grid>
          <Grid item xs={12}>
            <button id="buttoncs" onClick={handleAddRow}>
              <AddIcon sx={{ fontSize: '18px' }} /> Add Row
            </button>
          </Grid>
          <Grid item xs={12}>
            {isMobile ? (
              // For mobile screens, show each total on separate lines
              <>
                {gststate ? (
                  <>
                    <div id="subtotalcs">
                      <p>Sub Total</p>
                      <p>₹{subtotal}</p>
                    </div>
                    <div id="subtotalcs">
                      <p>SGST</p>
                      <p>₹{(plusgst / 2).toFixed(2)}</p>
                    </div>
                    <div id="subtotalcs">
                      <p>CGST</p>
                      <p>₹{(plusgst / 2).toFixed(2)}</p>
                    </div>
                  </>
                ) : (
                  <div id="subtotalcs">
                    <p>IGST</p>
                    <p>₹{plusgst.toFixed(2)}</p>
                  </div>
                )}
                <div id="subtotalcs">
                  <h3>Total Amt.</h3>
                  <h3>₹{(Number(subtotal) + Number(plusgst)).toFixed(2)}</h3>
                </div>
              </>
            ) : (
              // For larger screens, show all totals on one line

              <div style={{ float: 'right', width: '30%' }}>
                <div id="subtotalcs">
                  <p>Sub Total</p>
                  <p>₹{subtotal}</p>
                </div>
                {gststate ? (
                  <>
                    <div id="subtotalcs">
                      <p>SGST</p>
                      <p>₹{(plusgst / 2).toFixed(2)}</p>
                    </div>
                    <div id="subtotalcs">
                      <p>CGST</p>
                      <p>₹{(plusgst / 2).toFixed(2)}</p>
                    </div>
                  </>
                ) : (
                  <div id="subtotalcs">
                    <p>IGST</p>
                    <p>₹{plusgst.toFixed(2)}</p>
                  </div>
                )}
                <div
                  id="subtotalcs"
                  style={{
                    borderBottom: 'none'
                  }}
                >
                  <h3>Total Amt.</h3>
                  <h3>₹{(Number(subtotal) + Number(plusgst)).toFixed(2)}</h3>
                </div>
              </div>
            )}
          </Grid>

          {isMobile ? (
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Link to="/salesinvoicelist" style={{ textDecoration: 'none' }}>
                  <button
                    id="savebtncs"
                    style={{
                      marginRight: '5px'
                    }}
                  >
                    Cancel
                  </button>
                </Link>
                <button id="savebtncs" onClick={handleSalesinvoice}>
                  Save
                </button>
              </div>
            </Grid>
          ) : (
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0px' }}>
              <div>
                <Link to="/salesinvoicelist" style={{ textDecoration: 'none' }}>
                  <button id="savebtncs">Cancel</button>
                </Link>
              </div>
              <div style={{ display: 'flex' }}>
                <button
                  id="savebtncs"
                  style={{
                    marginRight: '10px'
                  }}
                  onClick={handleSalesinvoice}
                >
                  Save & Next
                </button>
                <button id="savebtncs" onClick={handleSalesinvoice}>
                  Save
                </button>
              </div>
            </Grid>
          )}
        </Grid>
      </div>
    </Paper>
  );
};

export default Salesinvoice;
