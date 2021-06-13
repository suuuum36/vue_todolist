import {useState, useEffect} from "react";
import { loadAssets } from './Api';
import './App.css';

const Assets = () => {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        loadAssets()
        .then(_assets => {
            setAssets(_assets)
        })
    }, []);

    return (
        <div>
            <div className="myAsset">내 자산 확인하기</div>
            {
                assets.map(asset => {
                    return (
                    <div className="assetDiv">
                        <div className="assetSymbol">
                            {asset.symbol} 
                        </div>
                        <div className="assetQuantity">
                            {asset.quantity}
                        </div>
                    </div>)
                })
            }
        </div>
    )
}

export default Assets;
