import React, { useState, useEffect } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Card,
  TableContainer,
  TableHead,
  TablePagination,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAllEmployeeSalary } from 'store/thunk';
import { useDispatch } from 'react-redux';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import useCan from 'views/permission managenment/checkpermissionvalue';

const columns = [
  { id: 'username', label: 'Name', align: 'center' },
  { id: 'monthStartDate', label: 'Start Date', align: 'center' },
  { id: 'monthEndDate', label: 'End Date', align: 'center' },
  { id: 'amount', label: 'Amount', align: 'center' },
  { id: 'amount', label: 'Payable Amount', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' }
];

const Employeesalary = () => {
  const navigate = useNavigate();
  const [salaryData, setSalaryData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const { canViewCompany, canUpdateCompany } = useCan();

  useEffect(() => {
    const fetchSalaryData = async () => {
      try {
        const response = await dispatch(getAllEmployeeSalary());
        console.log('API response:', response);

        if (response && typeof response === 'object') {
          const aggregatedData = [];
          for (const key in response) {
            if (Object.prototype.hasOwnProperty.call(response, key) && Array.isArray(response[key])) {
              aggregatedData.push(...response[key]);
            }
          }
          console.log('Aggregated Data:', aggregatedData);
          setSalaryData(aggregatedData);
        } else {
          console.error('Unexpected data format:', response);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate('/');
        }
        console.error('Error fetching salary data:', error);
      }
    };

    fetchSalaryData();
  }, [dispatch, navigate]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlepaysalary = () => {
    navigate('/employeesalary');
  };

  return (
    <Card style={{ width: '100%', padding: '20px' }}>
      <Typography variant="h4" align="center" id="mycss">
        Employee Salary
      </Typography>
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
            {salaryData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={row.id} sx={{ backgroundColor: index % 2 === 0 ? 'white' : 'rgba(66, 84, 102, 0.1)' }}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.id === 'username' ? (
                      row.employee?.username
                    ) : column.id === 'monthStartDate' ? (
                      new Date(row.monthStartDate).toLocaleDateString('en-GB')
                    ) : column.id === 'monthEndDate' ? (
                      new Date(row.monthEndDate).toLocaleDateString('en-GB')
                    ) : column.id === 'action' ? (
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <IconButton
                          sizeSmall
                          style={{
                            backgroundColor: canUpdateCompany() ? 'green' : 'gray',
                            color: canUpdateCompany() ? 'white' : 'white',
                            borderRadius: 0.8,
                            ...(canUpdateCompany() && { opacity: 1 }),
                            ...(!canUpdateCompany() && { opacity: 0.5 }),
                            ...(!canUpdateCompany() && { backgroundColor: 'gray' })
                          }}
                          onClick={handlepaysalary}
                          disabled={!canUpdateCompany()}
                        >
                          <AccountBalanceWalletIcon style={{ fontSize: '16px' }} />
                        </IconButton>
                        <IconButton
                          sizeSmall
                          style={{
                            backgroundColor: canViewCompany() ? 'Blue' : 'gray',
                            color: canViewCompany() ? 'white' : 'white',
                            borderRadius: 0.8,
                            ...(canViewCompany() && { opacity: 1 }),
                            ...(!canViewCompany() && { opacity: 0.5 }),
                            ...(!canViewCompany() && { backgroundColor: 'gray' })
                          }}
                          onClick={() => handlecompanyview(row.companyId)}
                          disabled={!canViewCompany()}
                        >
                          <RemoveRedEyeIcon style={{ fontSize: '16px' }} />
                        </IconButton>
                      </div>
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
        count={salaryData.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
};

export default Employeesalary;
