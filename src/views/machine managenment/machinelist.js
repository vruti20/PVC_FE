import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableRow, TableCell, Card, TableContainer, TableHead, TablePagination, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAllMachine } from 'store/thunk';
import { useDispatch } from 'react-redux';
import useCan from 'views/permission managenment/checkpermissionvalue';

const columns = [
  { id: 'name', label: 'Machine Name', align: 'center' },
  { id: 'model', label: 'Machine Type', align: 'center' },
  { id: 'description', label: 'Description', align: 'center' }
];

const MachineList = () => {
  const navigate = useNavigate();
  const [machineData, setMachineData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { canCreateMachine } = useCan();

  useEffect(() => {
    const fetchSalaryData = async () => {
      try {
        const response = await dispatch(fetchAllMachine());
        setMachineData(response);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate('/');
        }
        console.error('Error fetching machine data:', error);
      }
    };

    fetchSalaryData();
  }, [dispatch, navigate, id]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleaddmachine = () => {
    navigate('/machineadd');
  };

  return (
    <Card style={{ width: '100%', padding: '20px' }}>
      <Typography variant="h4" align="center" id="mycss">
        Machine
      </Typography>
      <Button variant="contained" color="secondary" style={{ margin: '16px' }} onClick={handleaddmachine} disabled={!canCreateMachine()}>
        Add Machine
      </Button>
      <TableContainer sx={{ maxHeight: 575 }}>
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
            {machineData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={row.id} sx={{ backgroundColor: index % 2 === 0 ? 'white' : 'rgba(66, 84, 102, 0.1)' }}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.id === 'description' ? row.description || '-' : row[column.id]}
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
        count={machineData.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
};

export default MachineList;
