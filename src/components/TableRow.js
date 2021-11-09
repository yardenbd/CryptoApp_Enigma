import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
export default function TableInput(props) {
  const [isMarked,setIsMarked]=useState(false)
const exist = props.gate.includes('-')
const whiteText={color:'white'}
const toggleMark = ()=>{
  setIsMarked(prev=>!prev)
}
    return (
        <>
              <TableRow >
              <TableCell style={whiteText} >
                {props.name}
              </TableCell>
              <TableCell  style={whiteText} align="right">{props.value}</TableCell>
              <TableCell style={{color:exist?'red':'green'}} align="right">{props.gate}</TableCell>
              <TableCell style={whiteText} align="right">{props.price}</TableCell>
              <TableCell style={whiteText} align="right">{isMarked ? <StarIcon onClick={toggleMark}/> :<StarBorderIcon onClick={toggleMark}/>}
              </TableCell> 
            </TableRow >
            
        </>
    )
}


