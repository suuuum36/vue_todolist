import './App.css';
import {Button, ButtonGroup, TextField} from '@material-ui/core';
import {useEffect, useState} from 'react';
import { loadMarket, loadMarkets, loadOrder, order} from './Api';
import LoginForm from "./LoginForm";
import OrderForm from "./OrderForm";
import LoadOrder from "./LoadOrder";
import Assets from "./Assets";
import { render } from '@testing-library/react';

function App() {
    const [user, setUser] = useState(null);
    const [markets, setMarkets] = useState([]);
    const [market, setMarket] = useState(null);


    const SnuWon = 'snu-won';
    const UnsWon = 'uns-won';
    const SnuUns = 'snu-uns';

    if(market) console.log(market.market.name)

    useEffect(() => {
        loadMarkets()
            .then(marketObjects => {
                setMarkets(Object.keys(marketObjects).map(key => marketObjects[key]));
            })
    }, []);

    useEffect(() => {
        loadMarket(SnuWon)
            .then(_market => {
                setMarket(_market);
            })
    }, []);

    // if(market) {
    //     if(market.market.name === 'snu-won'){
    //         const update = setInterval(() => {
    //             loadMarket(SnuWon)
    //                 .then(_market => {
    //                     setMarket(_market);
    //                 })
    //         }, 5000);
    //     } else if (market.market.name === 'uns-won') {
    //         const update = setInterval(() => {
    //             loadMarket(UnsWon)
    //                 .then(_market => {
    //                     setMarket(_market);
    //                 })
    //         }, 5000);
    //     } else if (market.market.name === 'snu-uns') {
    //         const update = setInterval(() => {
    //             loadMarket(SnuUns)
    //                 .then(_market => {
    //                     setMarket(_market);
    //                 })
    //         }, 5000);
    //     }
    // } 

    

    function ShowOrderBook1 () {
        loadMarket(SnuWon)
            .then(_market => {
                setMarket(_market);
            })
        
    }

    function ShowOrderBook2 () {
        loadMarket(UnsWon)
            .then(_market => {
                setMarket(_market);
            })
    }

    function ShowOrderBook3 () {
        loadMarket(SnuUns)
            .then(_market => {
                setMarket(_market);
            })
    }
    
    const loginComplete = (name) => {
        console.log(name);
        setUser(
            {name: name}
        );
    };

    const logout = () => {
        window.location.href = '/';
        localStorage.clear();
        setTimeout = (() => 
            setUser( {name: null} )
        ,1);
    }


    let Welcome;
    let AccountShow;
    let AssetsShow;
    let MakeOrder;
    let MyOrder;


    if(user != null) {
        Welcome = <div className="profileDiv"> <span className="user"> {user.name} </span> <span>님 환영합니다.</span> <Button onClick={logout}>로그아웃</Button> </div>
        AccountShow = ''
        AssetsShow = <Assets/>
        MakeOrder = <OrderForm marketName={market.market.name} userName={user.name}/>
        MyOrder = <LoadOrder/>

        } else {
            Welcome = ''
            AccountShow = <LoginForm loginComplete ={loginComplete}/>
            AssetsShow = ''
            MakeOrder = <OrderForm />
        }

    return (
    <body>
        <div className="whole">
            <div className="left">
                <div className="title">
                    <div className="innerTitle">
                        <h2>::</h2>
                        <h2>SNUCOIN</h2>
                    </div>
                </div>
                <div id="contents">
                    <div className="orderbookDiv">
                        <ButtonGroup className="orderBookButton" color="primary" aria-label="outlined primary button group">
                            <Button onClick = {ShowOrderBook1}>SNU-WON</Button>
                            <Button onClick = {ShowOrderBook2}>UNS-WON</Button>
                            <Button onClick = {ShowOrderBook3}>SNU-UNS</Button>
                        </ButtonGroup>

                        {market &&
                        <div className="market">
                            <div>
                                <div className="marketName">{market.market.name}</div>
                                <div className="index">
                                    <div>가격</div>
                                    <div>체결량</div>
                                    <div>매수/매도</div>
                                </div>
                                <div id="orderBooks">
                                    {
                                        market.orderBook.sell.map(orderBook => {
                                            return (
                                                <div key={orderBook._id} className="orderList sellList">
                                                    <div>{orderBook._id}</div>
                                                    <div>{orderBook.totalQuantity}</div>
                                                    <div>매도</div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                <div id="orderBooks">
                                    {
                                        market.orderBook.buy.map(orderBook => {
                                            return (
                                                <div key={orderBook._id} className="orderList buyList">
                                                    <div>{orderBook._id}</div>
                                                    <div>{orderBook.totalQuantity}</div>
                                                    <div>매수</div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
            
            <div className="right">
                {Welcome}
                {AccountShow}
                {AssetsShow}
                {MakeOrder}
                {MyOrder}
            </div>
        </div>
    </body>
    );

    }

export default App;
