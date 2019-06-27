import React from 'react';
import './style.css'

class BuyNow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleFormBuy = () => {
        this.props.onClickBuy();
    }

    render() {
        return (
            <div>
                <div className="button-detail button-text" onClick={this.handleFormBuy} onClose={this.closeFormBuyNow}>
                    Mua ngay
                </div>
                <div className="button-detail button-text">
                    Đến cửa hàng
                </div>
            </div>
        )
    }
}

export default BuyNow;