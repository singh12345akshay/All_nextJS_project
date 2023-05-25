import { Box, Button, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import SideBarComponent from 'src/components/sideBar/sideBarComponent';

interface ApiResponse{

}
const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#242A38",
    fontSize: 16,
    fontWeigth: 700,
    letterSpacing: 0.5,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "rgb(17, 24, 39)",
  },
  color: "rgb(209, 213, 219)",
  borderBottom: "1px solid rgb(45, 55, 72)",
  minWidth: "120px",
}));


export default function CustomerRequest() {
     const [data, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const storedData = localStorage.getItem("authToken");

        if (storedData) {
            const authToken = JSON.parse(storedData);
            try {
                // Make a GET request to the API endpoint
                const response = await axios.get(
                    "https://chatbotapps.mindpath.tech/api/v1/request/request",
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    }
                );
                setData(response.data.body);
                setIsLoading(false);
                //   const data= response.data.body;
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
    }
    useEffect(()=>{
        fetchData();
    }, []);
  
  const getChipColor = (status) => {
    status=status.toLowerCase()
    switch (status) {
      case "new":
        return "blue";
      case "inprogress":
        return "orange";
      case "completed":
        return "green";
      default:
        return "default";
    }
  };
console.log(data)
    return (
      <SideBarComponent>
        <div>
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#242A38", color: "white" }}>
                    <StyledTableCell>Request ID</StyledTableCell>
                    <StyledTableCell>Description</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((data) => (
                    <TableRow
                      key={data._id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}>
                      <StyledTableCell component="th" scope="row">
                        {data.requestId}
                      </StyledTableCell>
                      <StyledTableCell>{data.description}</StyledTableCell>
                      <StyledTableCell>
                        {/* <Button
                          variant="outlined"
                          style={{
                            color: "white",
                            backgroundColor: getChipColor(data.status),
                          }}>
                          {data.status}
                        </Button> */}
                        <Chip
                          label={data.status}
                          variant="filled"
                          color="success"
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <Box sx={{ display: "flex" }}>
                          <Button sx>
                            <EditIcon />
                          </Button>
                          <Button>
                            <DeleteIcon />
                          </Button>
                        </Box>
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      </SideBarComponent>
    );
}
