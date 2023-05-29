import {
  Box,
  Button,
  ButtonBase,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import React, { useState, useEffect, ChangeEvent } from "react";
import SideBarComponent from "src/components/sideBar/sideBarComponent";
import { useSnackbar } from "notistack";

const styledButton = styled(Button)(() => ({
  [`&.${ButtonBase}`]: {
    padding: "8px",
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "transparent",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    color: "white",
    borderRadius: "8px",
    fontSize: "1.125rem",
  },
}));

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

interface IapiResponse {
  status: string;
  _id: string;
  description: string;
  requestId: string;
}
interface ApiResponseArray extends Array<IapiResponse> { }

export default function CustomerRequest() {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit]=useState(false)
  const [isLoading, setIsLoading] = useState(true);
   const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
   const [selectedItem, setSelectedItem] = useState(null);
   const [addRequestDetails, setAddRequestDetails]=useState({
    description:"",
    status:""
   })
  const [requestDetails, setRequestDetails] = useState({
    id: "",
    description: "",
    status: "",
  });
  
  const [dialogOpen, setDialogOpen] = useState(false);

 const handleDeleteClick = (data:IapiResponse) => {
  console.log(data)
    setSelectedItem(data);
    setOpenDeleteDialog(true);
  };
   const handleDeleteCancel = () => {
    setOpenDeleteDialog(false);
  };
const handleAdd=()=>{
  setDialogOpen(true)
  setAddRequestDetails({
        description:"",
        status:""
      })
  
}
  const handleAddDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddRequestDetails({
      description: event.target.value,
      status: addRequestDetails.status,
    });
  }
    const handleAddStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
      setAddRequestDetails({
        description: addRequestDetails.description,
        status: event.target.value,
      });
    };
    const handleEdit = (data: IapiResponse) => {
      setIsEdit(true)
      setRequestDetails({
        id: data._id,
        description: data.description,
        status: data.status,
      });
      setDialogOpen(true);
    };
    const handleClose = () => {
      setDialogOpen(false);
      setIsEdit(false)
      
    };
    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
      setRequestDetails({
        id: requestDetails.id,
        description: event.target.value,
        status: requestDetails.status,
      });
    };
    const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
      setRequestDetails({
        id: requestDetails.id,
        description: requestDetails.description,
        status: event.target.value,
      });
    };

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
      }
    };
    useEffect(() => {
      fetchData();
    }, []);

    const addRequest = async (data) => {
      const payload = {
        description: data.description,
        status: data.status,
      };
      const storedData = localStorage.getItem("authToken");
      if (storedData) {
        const authToken = JSON.parse(storedData);

        const response = await fetch(
          "https://chatbotapps.mindpath.tech/api/v1/request/request",
          {
            method: "POST", // or 'PUT' depending on your API
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(payload),
          }
        );
        console.log(response);
        if (response.ok) {
          fetchData();
          enqueueSnackbar("Request Added seccessfully ", {
            variant: "success",
            autoHideDuration: 2500,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          });
        } else {
          enqueueSnackbar("Request Failed !!", {
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          });
        }
        setDialogOpen(false)
      }
    }
    const editRequest = async (data: IapiResponse) => {
      const payload = {
        description: data.description,
        status: data.status,
        id: data.id,
      };
      const storedData = localStorage.getItem("authToken");
      if (storedData) {
        const authToken = JSON.parse(storedData);

        const response = await fetch(
          "https://chatbotapps.mindpath.tech/api/v1/request/editrequest",
          {
            method: "PUT", // or 'PUT' depending on your API
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(payload),
          }
        );
        console.log(response);
        if (response.ok) {
          fetchData();
          enqueueSnackbar("Request Updated seccessfully ", {
            variant: "success",
            autoHideDuration: 2500,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          });
          console.log(response.message);
        } else {
          enqueueSnackbar("Request Updation Failed !!", {
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          });
          console.error("Update failed");
        }

        setDialogOpen(false);
        setIsEdit(false)
      }
    };

    const deleteRequest = async (data:IapiResponse | ApiResponseArray) => {
      const payload = {
        requestIdList: [],
      };
      if(Array.isArray(data)){
        data.forEach((data) => {
          payload.requestIdList.push(data._id)
      // Process each object in the array
      // ...
    });
      }else if (typeof data === 'object') {
        payload.requestIdList.push(data._id)
    // Handle single object
    // Process the single object
    // ...r
  } else {
    // Invalid argument type
    console.error('Invalid argument type. Expected object or array of objects.');
  }
      
      const storedData = localStorage.getItem("authToken");
      if (storedData) {
        const authToken = JSON.parse(storedData);

        const response = await fetch(
          "https://chatbotapps.mindpath.tech/api/v1/request/deleteRequest",
          {
            method: "DELETE", // or 'PUT' depending on your API
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(payload),
          }
        );
        console.log(response);
        if (response.ok) {
          fetchData();
          enqueueSnackbar("Request Deleted seccessfully ", {
            variant: "success",
            autoHideDuration: 2500,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          });
        } else {
          enqueueSnackbar("Try Again !!", {
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          });
          console.error("Update failed");
        
        }
        setOpenDeleteDialog(false)
      }
    };
    const buttonstyle = {
      minWidth: "auto",
      padding: "8px",
      display: "inline-flex",
      alignItems: "center",
      backgroundColor: "transparent",
      transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      color: "rgb(209, 213, 219)",
      borderRadius: "8px",
      fontSize: "1rem",
    };

    const getChipColor = (status:string) => {
      status = status.toLowerCase();
      switch (status) {
        case "new":
          return "primary";
        case "inprogress":
          return "warning";
        case "completed":
          return "success";
        default:
          return "default";
      }
    };
    // console.log(data)
    return (
      <SideBarComponent>
        <div>
          <Box sx={{
            // display:"flex",
            // alignItems:"flex-end",
            // justifyitems:"center",
            textAlign: "right",
            marginBottom: "8px",
          }}>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              onClick={() => { handleAdd() }}
              color="primary"
            >
              Add Request
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              variant="contained"
              onClick={() => { deleteRequest(data)}}
              color="primary"
              sx={{ marginLeft: "10px" }}>
              Clear All
            </Button>
          </Box>
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
                  {data.map((data: IapiResponse) => (
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
                        <Chip
                          label={data.status}
                          variant="outlined"
                          color={getChipColor(data.status)}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <Box sx={{ display: "flex" }}>
                          <Button
                            style={buttonstyle}
                            onClick={() => {
                              handleEdit(data);
                            }}>
                            <EditIcon sx={{ fontSize: "20px" }} />
                          </Button>

                          <Button
                            style={buttonstyle}
                            onClick={() => {
                              handleDeleteClick(data);
                            }}>
                            <DeleteIcon sx={{ fontSize: "20px" }} />
                          </Button>
                        </Box>
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Dialog
            open={dialogOpen}
            onClose={handleClose}
            PaperProps={{ style: { minWidth: "800px" } }}>
            <DialogTitle
              style={{
                textAlign: "center",
                fontSize: "22px",
                fontWeight: "700",
              }}>
              {isEdit ? "Edit Request" : "Add Request"}
            </DialogTitle>
            <DialogContent sx={{ padding: "15px" }}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={5}
                label="Description"
                value={isEdit ? requestDetails.description : addRequestDetails.description}
                onChange={isEdit ? handleDescriptionChange : handleAddDescriptionChange}
                fullWidth
                sx={{ margin: "8px 0px" }}
              />
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={isEdit ? requestDetails.status : addRequestDetails.status}
                  label="Status"
                  onChange={isEdit ? handleStatusChange : handleAddStatusChange}
                  fullWidth>
                  <MenuItem value="NEW">NEW</MenuItem>
                  <MenuItem value="INPROGRESS">INPROGRESS</MenuItem>
                  <MenuItem value="COMPLETED">COMPLETED</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions
              style={{
                display: "flex",
                justifyContent: "center",
              }}>
              <Button
                variant="contained"
                color="error"
                onClick={handleClose}
                sx={{
                  fontWeight: "700",
                  margin: "10px",
                  textTransform: "Capitalize",
                }}>
                Cancel
              </Button>
              {isEdit ? <Button
                variant="contained"
                color="success"
                onClick={() => {
                  editRequest(requestDetails);
                }}
                sx={{
                  fontWeight: "700",
                  margin: "10px",
                  textTransform: "Capitalize",
                }}>
                Update
              </Button> : <Button
                variant="contained"
                color="success"
                onClick={() => {
                  addRequest(addRequestDetails);
                }}
                sx={{
                  fontWeight: "700",
                  margin: "10px",
                  textTransform: "Capitalize",
                }}>
                Add
              </Button>}
            
            </DialogActions>
          </Dialog>
          <Dialog
            open={openDeleteDialog}
            onClose={handleDeleteCancel}
            PaperProps={{ style: { minWidth: "550px" } }}>
            <DialogTitle>
              <Box
                sx={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "5px auto",
                }}>
                <DeleteIcon sx={{ fontSize: "44px" }} />
              </Box>
            </DialogTitle>
            <DialogContent>
              <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
                Are you sure you want to delete ?
              </Typography>
            </DialogContent>
            <DialogActions
              style={{
                display: "flex",
                justifyContent: "center",
              }}>
              <Button
                variant="contained"
                onClick={handleDeleteCancel}
                color="error"
                sx={{
                  fontWeight: "700",
                  margin: "15px",
                  textTransform: "Capitalize",
                }}>
                No
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  deleteRequest(selectedItem);
                }}
                color="success"
                sx={{
                  fontWeight: "700",
                  margin: "15px",
                  textTransform: "Capitalize",
                }}>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </SideBarComponent>
    );
  }
