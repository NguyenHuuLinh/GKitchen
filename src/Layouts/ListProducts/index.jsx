import React from 'react'
import './style.css'
import DailyProducts from '../../Components/Modal/DailyProduct';

const ListProducts = () => (
    <div>
        <div className="img-decorate">
            <img src="https://gkitchen.com/images/home/divider-doc.png"></img>
            <h1 className="title">SẢN PHẨM</h1>
            <p className="title-content">Đại gia đình thịt thật thà đợi bạn đón về nhà</p>
        </div>
        <div>
            <DailyProducts />
        </div>
    </div>
)

export default ListProducts;