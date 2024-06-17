import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Grid, Typography, Radio, RadioGroup, FormControlLabel, Paper } from '@mui/material';
import Select from 'react-select';
import { createProduct, updateProduct, viewProduct } from 'store/thunk';

const AnchorProductDrawer = ({ open, onClose, id }) => {
  AnchorProductDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    id: PropTypes.string
  };
  const dispatch = useDispatch();
  const [itemtype, setItemType] = React.useState('Product');
  const [openingstock, setOpeningStock] = React.useState(true);
  const [nagativeqty, setNagativeQty] = React.useState(false);
  const [lowstock, setLowStock] = React.useState(false);
  const [cess, setCess] = React.useState(true);
  const [selectedGST, setSelectedGST] = React.useState('');

  const [formData, setFormData] = React.useState({
    productname: '',
    description: '',
    itemgroup: '',
    itemcategory: '',
    unit: '',
    salesprice: Number(),
    purchaseprice: Number(),
    HSNcode: 0,
    gstrate: ''
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: id === 'HSNcode' ? Number(value) : value
    });
  };
  const handleItem = (e) => {
    setItemType(e.target.value);
  };
  const handleOpeningStock = (e) => {
    setOpeningStock(e.target.value === 'true' ? true : false);
  };
  const handleNegativeQty = (e) => {
    setNagativeQty(e.target.value === 'true' ? true : false);
  };
  const handleLowStock = (e) => {
    setLowStock(e.target.value === 'true' ? true : false);
  };
  const handleCess = (e) => {
    setCess(e.target.value === 'true' ? true : false);
  };
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await dispatch(viewProduct(id));
          const productData = response;
          // console.log('Product Data:', productData);
          setFormData({ ...productData });
          setOpeningStock(productData.openingstock);
          setNagativeQty(productData.nagativeqty);
          setLowStock(productData.lowstock);
          setCess(productData.cess);
          setItemType(productData.itemtype);
        }
      } catch (error) {
        console.error('Error fetching Product', error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id, dispatch]);
  const handleGSTChange = (selectedOption) => {
    setSelectedGST(selectedOption.value);
    setFormData({ ...formData, gstrate: selectedOption.value });
    // if (props === true) {
    //   // formData.SGST=selectedOption.value
    //   console.log(selectedOption.value, 'valueSGST');
    //   setFormData({ ...formData, SGST: selectedOption.value, IGST: '0' });
    // } else if (props === false) {
    //   // formData.IGST = selectedOption.value
    //   console.log(selectedOption.value, 'valueIGST');
    //   setFormData({ ...formData, IGST: selectedOption.value, SGST: '0' });
    // }
    // console.log(formData, 'selectedGST');
  };
  const handleSave = async () => {
    try {
      const data = {
        ...formData,
        itemtype,
        openingstock,
        nagativeqty,
        lowstock,
        cess
      };
      if (id) {
        await dispatch(updateProduct(id, data));
      } else {
        await dispatch(createProduct(data));
      }
      // onClose();
    } catch (error) {
      console.error('Error creating Product', error);
    }
  };
  const handleUnitChange = (selectedOption) => {
    setFormData({ ...formData, unit: selectedOption.value });
  };
  const unitOptions = [
    { value: 'kg', label: 'Kilogram (kg)' },
    { value: 'g', label: 'Gram (g)' },
    { value: 't', label: 'Tonne (metric ton)' },
    { value: 'lb', label: 'Pound (lb)' },
    { value: 'm', label: 'Meter (m)' },
    { value: 'mm', label: 'millimeter (mm)' },
    { value: 'cm', label: 'centimeter (cm)' },
    { value: 'in', label: ' inch (in)' }
  ];

  const GST = [
    { value: '5', label: 'GST 5%' },
    { value: '12', label: 'GST 12%' },
    { value: '18', label: 'GST 18%' },
    { value: '28', label: 'GST 28%' }
  ];
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 15px',
          position: 'fixed',
          zIndex: '999',
          width: { xs: '100%', sm: '660px' }
        }}
      >
        <Grid item>
          <Typography variant="h4">New Item</Typography>
        </Grid>
        <Grid item>
          <CancelIcon onClick={onClose} />
        </Grid>
      </Paper>
      <Box sx={{ width: { xs: 320, sm: 660 }, overflowX: 'hidden', '&::-webkit-scrollbar': { width: '0' } }} role="presentation">
        <Grid container spacing={2} sx={{ margin: '1px', paddingTop: '50px' }}>
          <Grid item>
            <Typography variant="subtitle1">
              Item Type : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
            </Typography>
            {/* <RadioGroup row defaultValue="Product" value={formData.itemtype} onChange={handleItem}> */}
            <RadioGroup row defaultValue="Product" value={itemtype} onChange={handleItem}>
              <FormControlLabel value="Product" control={<Radio />} label="Product" />
              <FormControlLabel value="Service" control={<Radio />} label="Service" />
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ margin: '1px' }}>
          <Grid item>
            <Typography variant="subtitle1">
              Product : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
            </Typography>
            <input placeholder="Enter Product" id="productname" value={formData.productname} onChange={handleInputChange} />
          </Grid>
          {/* </Grid>
        <Grid container spacing={2} sx={{ margin: '1px' }}> */}
          <Grid item>
            <Typography variant="subtitle1">Product Description</Typography>
            <input placeholder="Enter Product" id="description" value={formData.description} onChange={handleInputChange} />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ margin: '1px' }}>
          <Grid item>
            <Typography variant="subtitle1">Item Group</Typography>
            <input placeholder="Enter Group" id="itemgroup" value={formData.itemgroup} onChange={handleInputChange} />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">Item Category</Typography>
            <input placeholder="Enter Category" id="itemcategory" value={formData.itemcategory} onChange={handleInputChange} />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ margin: '1px' }}>
          <Grid item>
            <Typography variant="subtitle1">
              Unit : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
            </Typography>
            <Select
              options={unitOptions}
              value={formData.unit ? { label: formData.unit.toUpperCase(), value: formData.unit } : null}
              onChange={handleUnitChange}
            />
          </Grid>

          <Grid item>
            <Typography variant="subtitle1">
              GST Rate(%):<span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
            </Typography>
            {/* <Select options={GST} value={{ label: selectedGST }} onChange={handleGSTChange} /> */}
            <Select
              options={GST}
              value={formData.gstrate ? { label: `GST ${formData.gstrate}%`, value: formData.gstrate } : { label: selectedGST }}
              onChange={handleGSTChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ margin: '1px' }}>
          <Grid item>
            <Typography variant="subtitle1">
              HSN Code:<span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
            </Typography>
            <input placeholder="235645" id="HSNcode" value={formData.HSNcode} onChange={handleInputChange} />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ margin: '1px' }}>
          <Grid item sx={{ margin: '0px 0px' }}>
            <Typography variant="subtitle1">
              Do you want to add batch wise<br></br>
              opening stock?
            </Typography>
            <RadioGroup row defaultValue="No" value={openingstock} onChange={handleOpeningStock}>
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </Grid>
        </Grid>

        <Grid item sx={{ margin: '10px 12px' }}>
          <Typography variant="subtitle1">
            Negative Qty Allowed :<span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
          </Typography>
          <RadioGroup row defaultValue="No" value={nagativeqty} onChange={handleNegativeQty}>
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item sx={{ margin: '10px 12px' }}>
          <Typography variant="subtitle1">
            Low Stock Warning : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
          </Typography>
          <RadioGroup row defaultValue="No" value={lowstock} onChange={handleLowStock}>
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>

        <Grid container spacing={2} sx={{ margin: '0px' }}>
          <Grid item sm={6}>
            <Typography variant="subtitle1">Purchase Price :</Typography>
            <input placeholder="0.000" id="purchaseprice" value={formData.purchaseprice} onChange={handleInputChange} />
          </Grid>
          <Grid item sm={6}>
            <Typography variant="subtitle1">
              Sales Price: <span style={{ color: 'red', fontWeight: 'bold', fontSize: '17px' }}>&#42;</span>
            </Typography>
            <input placeholder="0.000" id="salesprice" value={formData.salesprice} onChange={handleInputChange} />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ margin: '1px' }}>
          <Grid item sx={{ margin: '0px 0px' }} sm={6}>
            <Typography variant="subtitle1">Cess Enable</Typography>
            {/* <RadioGroup row defaultValue="No" value={formData.cess} onChange={handleCess}> */}
            <RadioGroup row defaultValue="No" value={cess} onChange={handleCess}>
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 10px' }}>
          <div>
            <button id="savebtncs" onClick={onClose}>
              Cancel
            </button>
          </div>
          <div style={{ display: 'flex' }}>
            <button id="savebtncs" onClick={handleSave}>
              Save
            </button>
          </div>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default AnchorProductDrawer;
