import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import TableComponent from './tableComponent.tsx/tableComponent';
const drawerWidth = 240;
const data=[{
    name:"akshay",
    age: 24,
    address:"xyz",
    country:"xyz"
},{
    name:"akshay",
    age: 24,
    address:"xyz",
    country:"xyz"
},{
    name:"akshay",
    age: 24,
    address:"xyz",
    country:"xyz"
},{
    name:"akshay",
    age: 24,
    address:"xyz",
    country:"xyz"
},{
    name:"akshay",
    age: 24,
    address:"xyz",
    country:"xyz"
},{
    name:"akshay",
    age: 24,
    address:"xyz",
    country:"xyz"
}]
export default function CommonComponent() {
  return (
    <>
        <Box sx={{display:"flex", width:"100%"}}>
  
                  <Drawer
        sx={{
          
           width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ?<Typography>Icon</Typography> : <Typography>Icon</Typography>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                     {index % 2 === 0 ?<Typography>Icon</Typography> : <Typography>Icon</Typography>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
              <Box sx={{ flex: '1', border: '1px solid red' }}>
                  <TableComponent data={data}></TableComponent>
        </Box>
  </Box>
    </>
  )
}
