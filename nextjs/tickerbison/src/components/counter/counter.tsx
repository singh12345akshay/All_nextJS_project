import { Box, Button, TextField } from '@mui/material';
import { useState,React } from 'react'
import Stack from "@mui/material/Stack";

export default function Counter() {
    const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
      <Button
        disablePadding
        onClick={handleDecrement}
          style={{ backgroundColor: "rgb(209, 213, 219)",color:"rgb(31, 41, 55)", borderRadius: "50%" ,minWidth:'20px',lineHeight:'1',fontSize:'15px',fontWeight:500}}
        >
          -
        </Button>
      <TextField
        type="number"
        value={count}
        inputProps={{ style: { color:'white',textAlign: "center" } }}
        InputProps={{ disableUnderline: true }}
        disabled
      />
      <Button
        disablePadding
        onClick={handleIncrement}
          style={{ backgroundColor: "rgb(209, 213, 219)",color:"rgb(31, 41, 55)", borderRadius: "50%" ,minWidth:'20px',lineHeight:'1',fontSize:'15px',fontWeight:500}}
        >
          +
        </Button>
    </Stack>
    </>
  );
}

// <Box style={{ display: "flex", color: "rgb(209, 213, 219)" }}>
//         <Button
//         disablePadding
//           style={{ backgroundColor: "rgb(209, 213, 219)",color:"rgb(31, 41, 55)", borderRadius: "50%" ,minWidth:'20px',lineHeight:'1',fontSize:'15px',fontWeight:500}}
//         >
//           +
//         </Button>
//         <TextField id="standard-basic" value={counter.value} variant="standard"  style={{textAlign:'center',color:'white',width:'30px',margin:'0px 4px'}}/>
//       <Button
//         disablePadding
//           style={{ backgroundColor: "rgb(209, 213, 219)",color:"rgb(31, 41, 55)", borderRadius: "50%" ,minWidth:'20px',lineHeight:'1',fontSize:'15px',fontWeight:500}}
//         >
//           -
//         </Button>
//         </Box>
