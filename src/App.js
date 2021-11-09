import ButtonGroup from './components/ButtonGroup'
import CoinsTable from './components/CoinsTable';
import { useDispatch } from 'react-redux';
import {coinsActions} from './store/coinsSlice'
import {useEffect,useState} from 'react'
import allCoins from './data.json'
function App() {
  const [isClicked , setIsClicked] =useState(false)
  const [coinsToShow , setCoinsToShow]=useState('')
  const dispatch = useDispatch() 
  const clickHandle=()=>{
    setIsClicked(true)
  }
  const coinNameHandler =(coinName)=>{
    setCoinsToShow(coinName)
  }
 
  useEffect(()=>{
    dispatch(coinsActions.setCoins({coins:allCoins.coins}))
  },[])
  return (
    <>
  
    <ButtonGroup isClicked={clickHandle} coinToShow={coinNameHandler} />
    {!isClicked&&<h1>Press Coin button to display content</h1>}
      {isClicked && <CoinsTable coinToDisplay={coinsToShow}/>}
    </>
  );
}

export default App;
