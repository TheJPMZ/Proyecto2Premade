import React from "react";
import { Badge, Button, AppBar, Toolbar, IconButton } from "@material-ui/core";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from "@mui/material/Typography";
import '../App.css'

  
export default function Header() {
    const [count, setCount] = React.useState(0);
    
//

  return (
      <div>
          <AppBar position="static" className="header"> 
          <Toolbar className="header">
          <Typography variant="h2" 
            component="div" sx={{ flexGrow: 1 }}>
            Titulo
          </Typography>
          
          <IconButton>
          <Badge badgeContent = {count} showZero color="secondary" >
                <ShoppingCartIcon onClick={() => {
                    console.log("open");}}  
                />
            </Badge>

          </IconButton>
          </Toolbar>
          </AppBar>
          
        <div>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
        </div>
      </div>
      
      
  );
}