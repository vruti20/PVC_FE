import React, { useEffect, useState } from 'react';
import { Typography, Grid, Paper, Table, TableHead, TableCell, TableBody, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useMediaQuery } from '@mui/material';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import AnchorTemporaryDrawer from '../../../component/customeradd';
import AnchorProductDrawer from '../../../component/productadd';
import 'react-toastify/dist/ReactToastify.css';
import { createDeliveryChallan, getallDeliverychallan, updateDileveryChallan } from 'store/thunk';
import { fetchAllProducts, fetchAllCustomers } from 'store/thunk';
import { Link } from 'react-router-dom';

import { Deliverychallanview } from 'store/thunk';
import { useNavigate, useParams } from 'react-router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useCan from 'views/permission managenment/checkpermissionvalue';

const Deliverychallan = () => {
  const isMobileX = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const { id } = useParams();
  console.log(id, 'id');
  const isMobile = useMediaQuery('(max-width:600px)');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { canCreateCustomer, canCreateProduct } = useCan();
  const [rows, setRows] = useState([{ product: '', qty: '' }]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [customer, setcustomer] = useState([]);
  const [selectcustomer, setSelectcustomer] = useState('');
  const [customername, setCustomername] = useState('');
  const [product, setProduct] = useState([]);
  const [selectproduct, setSelectproduct] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isproductDrawerOpen, setIsproductDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    customerId: '',
    date: new Date(),
    challanno: 0
  });
  const [canCreateCustomerValue, setCanCreateCustomerValue] = useState(null);
  const [canCreateProductvalue, setCanCreateProductvalue] = useState(null);
  useEffect(() => {
    setCanCreateCustomerValue(canCreateCustomer());
    setCanCreateProductvalue(canCreateProduct());
  }, [canCreateCustomer, canCreateProduct]);
  // to add multiple row for product item
  const handleAddRow = () => {
    const newRow = {
      product: '',
      qty: ''
    };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  useEffect(() => {
    const updateTotalQuantity = () => {
      let total = 0;
      rows.forEach((row) => {
        total += parseInt(row.qty);
      });
      setTotalQuantity(total);
    };
    updateTotalQuantity();
  }, [rows]);
  //set input's target value
  const handleInputChange = (index, field, value) => {
    const updatedRows = rows.map((row, rowIndex) => {
      if (rowIndex === index) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setRows(updatedRows);
    let total = 0;
    rows.forEach((row) => {
      total += parseInt(row.qty);
    });
    setTotalQuantity(total);
  };

  // use for delete row
  const handleDeleteRow = async (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
    // dispatch(deleteDileveryChallan(id));
  };

  //use for select customer name from dropdown
  const handleSelectChange = (selectedOption) => {
    if (selectedOption && selectedOption.label === 'Create New Customer') {
      setIsDrawerOpen(true);
    } else {
      formData.customerId = selectedOption.value;
      setFormData(formData);
      setCustomername(selectedOption.label);
      setIsDrawerOpen(false);
    }
  };

  //use for select product name from dropdown
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
            product: selectedOption.label
          };
        }
        return row;
      });

      setRows(updatedRows);
      setSelectproduct(selectedOption.value);
      setIsproductDrawerOpen(false);
    }
  };
  const handleChallanDateChange = (date) => {
    setFormData({ ...formData, date: date });
  };
  // call all customer and all product api's
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchAllCustomers());
        if (Array.isArray(response)) {
          const options = response.map((customer) => ({ value: customer.id, label: customer.accountname }));
          setcustomer([{ value: 'new', label: 'Create New Customer' }, ...options]);
          if (!canCreateCustomerValue) {
            setcustomer(options);
          }
        }
        const productResponse = await dispatch(fetchAllProducts());
        if (Array.isArray(productResponse)) {
          const options = productResponse.map((product) => ({
            value: product.id,
            label: product.productname
          }));
          setProduct([{ value: 'new', label: 'Create New Product' }, ...options]);
          if (!canCreateProductvalue) {
            setProduct(options);
          }
        } else {
          console.error('fetchAllProducts returned an unexpected response:', productResponse);
        }
      } catch (error) {
        console.error('Error fetching delivery challan:', error);
      }
    };
    if (canCreateCustomerValue !== null || canCreateProductvalue !== null) {
      fetchData();
    }
  }, [dispatch, id, canCreateCustomerValue, canCreateProductvalue]);

  useEffect(() => {
    const data = async () => {
      if (id) {
        console.log(id, 'viewid');
        const response = await dispatch(Deliverychallanview(id));
        const { DeliveryCustomer, date, challanno } = response;
        console.log(response.DeliveryCustomer, 'response');
        setFormData({ customerId: DeliveryCustomer.id, date, challanno });
        setSelectcustomer(DeliveryCustomer.id);
        setCustomername(DeliveryCustomer.accountname);
        const updatedRows = response.items.map((item) => ({
          id: item.id,
          productId: item.DeliveryProduct.id,
          product: item.DeliveryProduct.productname,
          qty: item.qty
        }));
        setRows(updatedRows);
      }
    };

    const generateAutoChallanNumber = async () => {
      if (!id) {
        try {
          const ChallanResponse = await dispatch(getallDeliverychallan());
          let nextChallanNumber = 1;
          if (ChallanResponse.length === 0) {
            const ChallanNumber = nextChallanNumber;
            setFormData((prevFormData) => ({
              ...prevFormData,
              challanno: Number(ChallanNumber)
            }));
            return;
          }
          const existingChallanNumbers = ChallanResponse.map((Challan) => {
            const ChallanNumber = Challan.challanno;
            return parseInt(ChallanNumber);
          });
          const maxChallanNumber = Math.max(...existingChallanNumbers);
          if (!isNaN(maxChallanNumber)) {
            nextChallanNumber = maxChallanNumber + 1;
          }

          const ChallanNumber = nextChallanNumber;
          setFormData((prevFormData) => ({
            ...prevFormData,
            challanno: Number(ChallanNumber)
          }));
        } catch (error) {
          console.error('Error generating auto Delivery Challan number:', error);
        }
      }
    };

    generateAutoChallanNumber();
    data();
  }, [dispatch, id]);

  //call craete and update deliverychallan and deliverychallan items
  const handlecreatedeliverychallan = async () => {
    try {
      if (id) {
        const payload = {
          ...formData,
          challanno: formData.challanno,
          totalQty: totalQuantity,
          items: rows.map((row) => ({
            productId: row.productId,
            qty: Number(row.qty)
          }))
        };
        dispatch(updateDileveryChallan(id, payload, navigate));
      } else {
        const payload = {
          ...formData,
          totalQty: totalQuantity,
          items: rows.map((row) => ({
            productId: row.productId,
            qty: Number(row.qty)
          }))
        };
        await dispatch(createDeliveryChallan(payload, navigate));
        console.log(selectcustomer, 'Deliverychallan');
      }
    } catch (error) {
      console.error('Error creating delivery challan:', error);
    }
  };

  return (
    <Paper elevation={4} style={{ padding: '24px' }}>
      <div>
        {id ? (
          <Typography variant="h4" align="center" gutterBottom id="mycss">
            Update Delivery Challan
          </Typography>
        ) : (
          <Typography variant="h4" align="center" gutterBottom id="mycss">
            Create Delivery Challan
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
                Challan No. : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <input
                placeholder="0001"
                id="challanno"
                value={formData.challanno}
                onChange={(e) => setFormData({ ...formData, challanno: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">
                Challan Date : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
              </Typography>
              <DatePicker
                selected={formData.date}
                onChange={(date) => handleChallanDateChange(date)}
                dateFormat="dd/MM/yyyy"
                isClearable={false}
                showTimeSelect={false}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} style={isMobileX ? { overflowX: 'auto' } : {}}>
            <div style={{ maxWidth: '100%' }}>
              <Table>
                <TableHead>
                  <TableCell sx={{ fontSize: '12px' }}>
                    PRODUCT : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
                  </TableCell>
                  <TableCell sx={{ fontSize: '12px' }}>
                    QTY:<span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
                  </TableCell>
                  <TableCell sx={{ fontSize: '12px' }}>DELETE</TableCell>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <React.Fragment key={index}>
                      <TableRow>
                        <TableCell id="newcs">
                          <Select
                            color="secondary"
                            onChange={(selectedOption) => handleSelectproductChange(selectedOption, index)}
                            options={product}
                            value={{ value: row.productId, label: row.product }}
                          />
                        </TableCell>
                        <AnchorProductDrawer open={isproductDrawerOpen} onClose={() => setIsproductDrawerOpen(false)} />

                        <TableCell id="newcs">
                          <input placeholder="qty" value={row.qty} onChange={(e) => handleInputChange(index, 'qty', e.target.value)} />
                        </TableCell>
                        {console.log(totalQuantity, 'totalQuantity')}
                        <TableCell sx={{ display: 'flex', justifyContent: 'left' }}>
                          <DeleteIcon onClick={() => handleDeleteRow(index)} />
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
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

          {/* <Grid item xs={12}>
            {isMobile ? (
              // For mobile screens, show each total on separate lines
              <>
                <div id="subtotalcs">
                  <p>Sub Total</p>
                  <p>₹{subtotal}</p>
                </div>
              </>
            ) : (
              // For larger screens, show all totals on one line
              <div style={{ float: 'right', width: '30%' }}>
                <div id="subtotalcs">
                  <p>Sub Total</p>
                  <p>₹{subtotal}</p>
                </div>
              </div>
            )}
          </Grid> */}

          {isMobile ? (
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Link to="/deliverychallanlist" style={{ textDecoration: 'none' }}>
                  <button id="savebtncs">Cancel</button>
                </Link>
                <button id="savebtncs" style={{ marginLeft: '5px' }} onClick={handlecreatedeliverychallan}>
                  Save
                </button>
              </div>
            </Grid>
          ) : (
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0px' }}>
              <div>
                <Link to="/deliverychallanlist" style={{ textDecoration: 'none' }}>
                  <button id="savebtncs">Cancel</button>
                </Link>
              </div>
              <div style={{ display: 'flex' }}>
                {/* <button id="savebtncs" style={{ marginRight: '5px' }} onClick={handlecreatedeliverychallan}>
                  Save & Next
                </button> */}
                <button id="savebtncs" onClick={handlecreatedeliverychallan}>
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

export default Deliverychallan;
