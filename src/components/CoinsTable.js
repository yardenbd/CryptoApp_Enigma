import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableInput from'./TableRow'
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

export default function CoinsTable(props) {
  const [coinsToMap,setCoinsToMap]=useState([])
    const coinsArray = useSelector(state=>state.coins)
    const style={display:'flex',alignItems:'center'}
    useEffect(()=>{
      const coins = coinsArray.find(coins=>coins.coinName===props.coinToDisplay)
      setCoinsToMap(coins.data)
    },[props.coinToDisplay])
  return (
    <TableContainer  sx={{ maxWidth: 650 }} >
        <Table aria-label="customized table" >
          <TableHead >
            <TableRow>
              <StyledTableCell><div style={style}><LocalAtmIcon /> {props.coinToDisplay}</div></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>  
         {coinsToMap.map(coin=>(
           <TableInput key={coin.name} name={coin.name} value={coin.value} gate={coin.gate} price={coin.price}/>
         ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
