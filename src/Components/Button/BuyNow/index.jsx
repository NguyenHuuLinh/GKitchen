import React from 'react';
import './style.css'

class BuyNow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleFormBuy = this.handleFormBuy.bind(this);
    }

    handleFormBuy() {
        this.props.onClickBuy();
    }

    render() {
        return (
            <div>
                <div className="button-detail button-text" onClick={this.handleFormBuy} onClose={this.closeFormBuyNow}>
                    <div>Mua ngay</div>
                </div>
                <div className="button-detail button-text">
                    <div>
                        Đến cửa hàng
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyNow;