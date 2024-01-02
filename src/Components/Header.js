import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Badge, Nav } from "react-bootstrap";

export default function Header() {
    const navigate = useNavigate()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar>
                    <div style={{ color:'#000', marginLeft:40, marginRight:20, fontSize:'3vw', fontFamily:'cursive' }}>
                        MyWebLink
                    </div>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', fontSize:18, color:'#000', fontFamily:'serif'}}>
                            {
                                <span style={{ display:'flex', justifyContent:'center', alignItems:'center',}}>
                                    <div onClick={()=>navigate(`/home`)} style={{ cursor:'pointer', margin:'0px 30px 0px 30px' }}>HOME</div>
                                    <div onClick={()=>navigate(`/products`)} style={{ cursor:'pointer', margin:'0px 30px 0px 30px' }}>PRODUCTS</div>
                                    <div onClick={()=>navigate(`/aboutus`)} style={{ cursor:'pointer', margin:'0px 30px 0px 30px' }}>ABOUT US</div>
                                </span>
                            }
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
