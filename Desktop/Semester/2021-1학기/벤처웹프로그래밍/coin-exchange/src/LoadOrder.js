import {Button, TextField} from "@material-ui/core";
import {useEffect, useState} from 'react';
import { loadOrder, deleteOrder} from './Api';
import './App.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


//delete 수정중

const LoadOrder = () => {
    const [orders, setOrder] = useState([]);
    const [marketName, setMarketName] = useState('snu-won uns-won snu-uns');

    let orderStatus;
    let orderDelete;

    useEffect(()=> {
        loadOrder()
            .then(orderObjects => {
                    setOrder(Object.keys(orderObjects).map(key => orderObjects[key]));
                })
    }, [])

    const DeleteOrder = async (e) => {
        console.log(e);
        if(window.confirm("주문을 취소하시겠습니까?")) {
            const res = await deleteOrder(e);
            alert("주문이 취소되었습니다!")
        }
    }

    let statusText;
    const showStatus = (status) => {
        if(status === 1) {
            statusText = '체결완료'
        } else if(status ===0) {
            statusText = '체결보류'
        } else if (status ===-1) {
            statusText = '주문취소'
        }
    }

    
let ordersDiv;

const MarketChange = (e) => {
    setMarketName(e);
};

const filterObject = orders.filter((order)=> 
    marketName.includes(order.market.name)
)

let orderList = [];
const showObject = filterObject.map((order) => {
    orderList.push(
    <div className="orderList"> 
        <div showStatus = {showStatus(order.status)} >{statusText} </div>
        <div>{order.market.name}</div>
        <div>{order.price}</div>
        <div>{order.quantity}</div>
        {order.status === 0 ? <button className={order._id} id="cancel" onClick={e=> DeleteOrder(e.target.className)}>취소</button> : <div className="forSpace"></div>}
    </div>
    )
    
    })

    return (
        <div>
            <div className="myOrder"> 내 주문 확인하기 </div>
            <div className="selectMarket">
                <input type = "radio" value="snu-won uns-won snu-uns" onClick={e=> MarketChange(e.target.value)} name = "market" defaultChecked/> 모두보기
                <input type="radio" value="snu-won" onClick={e=> MarketChange(e.target.value)} name = "market"/> SNU-WON
                <input type="radio" value="uns-won" onClick={e=> MarketChange(e.target.value)} name = "market"/> UNS-WON
                <input type="radio" value="snu-uns" onClick={e=> MarketChange(e.target.value)} name = "market"/> SNU-UNS
            </div>
            <div className='index'>
                <div>체결상태</div>
                <div>시장</div>
                <div>체결액</div>
                <div>체결량</div>
                <div>취소</div>
            </div>
            {orderList}
        </div>
    )
    
}

export default LoadOrder;