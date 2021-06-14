import {useState, useEffect} from "react";
import { order } from './Api';
import {Button, TextField} from "@material-ui/core";
import './App.css';


const OrderForm = (props) => {
    const [price, setPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [side, setSide] = useState(null);
    let marketName = props.marketName;
    let userName = props.userName;

    const onOrder = async (e) => {
        e.preventDefault();
        if (userName) {
            if(side != null) {
                if(marketName === 'snu-won' || marketName === 'uns-won') {
                    if(price>= 1 && price % 10 === 0 && price!= null) {
                        if(quantity>= 1 && quantity != null) {
                            alert("주문이 완료되었습니다!")
                            const response = await order(price, quantity, props.marketName, side);
                        } else {
                            alert("수량은 1개 이상 입력해주세요.")
                        }
                    } else {alert('snu-won과 uns-won은 금액을 10단위로 입력해주세요.')}
                } else if (marketName === 'snu-uns') {
                    if(price >= 1 && price!= null) {
                        if(quantity>= 1 && quantity != null) {
                            alert("주문이 완료되었습니다!")
                            const response = await order(price, quantity, props.marketName, side);
                        } else {
                            alert("수량은 1개 이상 입력해주세요.")
                        }
                    } else {alert('snu-uns의 최소금액은 1 입니다.')}
                }
            } else {
                alert("매수 혹은 매도를 선택해주세요.")
            }
            
        } else {
            alert('로그인을 해주세요.');
        }
    }

    let sideText; 
    if(side ==='buy') {
        sideText = '매수'
    } else if (side ==='sell') {
        sideText = '매도'
    } else {
        sideText = ''
    }

    return (
        <div className="orderDiv">
            <form className="create-order" onSubmit={onOrder}>
                <div className="buySell">
                    <Button className="buySellButton" onClick={e=> setSide('buy')}>Buy</Button>
                    <Button className="buySellButton"onClick={e=> setSide('sell')}>Sell</Button>
                </div>
                <div className="side">{sideText}</div>
                <TextField size="small" id="filled-basic" label="price" variant="filled" type="number" onChange={e=> setPrice(e.target.value)}/>
                <TextField size="small" id="filled-basic" label="quantity" variant="filled" type="number" onChange={e=> setQuantity(e.target.value)}/>
                <Button type="submit" variant="contained" color="primary">Order</Button>
            </form>
        </div>
    )
}


export default OrderForm;