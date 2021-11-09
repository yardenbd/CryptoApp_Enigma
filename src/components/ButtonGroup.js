import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup(props) {
  const provideCoinName=(name)=>{
  props.coinToShow(name)
  props.isClicked()
  }
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={()=>provideCoinName('XRP')}>XRP</Button>
      <Button onClick={()=>provideCoinName('BCH')}>BCH</Button>
      <Button onClick={()=>provideCoinName('LTC')}>LTC</Button>
    </ButtonGroup>
  );
}