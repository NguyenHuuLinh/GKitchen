import React from 'react'
import './style.css'
import ProductDetail from '../../Components/Button/ProductDetail';
import ProductsDetail from '../ProductDetail';
import ListProducts from '../ListProducts';

class SlideProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowPage: false
        }
    }

    showPage = () =>{
        this.setState({
            isShowPage: !this.state.isShowPage
        })
    }

    render() {
        let showPageDetail = this.state.isShowPage;
        let elmPage = null;

        if (showPageDetail) {
            elmPage = <ProductsDetail />
        }

        return (
                <div className="over">
                    <img src="https://stagingimg.gkitchen.com.vn/products/productImages-1558409288736.png" className="img-products" alt=""></img>
                    <div className="content">
                        <div className="content-title">SẢN PHẨM NGON TUẦN NÀY</div>
                        <div className="content-sub">Sườn già 300g</div>
                        <img src="https://gkitchen.com/images/home/line.png" alt=""/>
                        <div className="content-detail">Xúc xích xông khói G là sản phẩm hảo hạng được mọi đối tượng yêu thích bởi sự kết hợp độc đáo giữa thịt heo sạch hòa quyện cùng mỡ, tiêu, tỏi và các loại gia vị ...</div>
                        <div className="btn-detail">
                            <ProductDetail onClickPage={this.showPage} />
                            {elmPage}
                        </div>
                    </div>
                    <ListProducts/>
                </div>
        )
    }
}

export default SlideProducts;