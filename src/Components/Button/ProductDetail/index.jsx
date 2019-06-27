import React from 'react';
import './style.css'

class ProductDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handlePage = () =>{
        this.props.onClickPage();
    }

    render() {
        return (
            <div>
                <div className="button-detail button-text" onClick={this.handlePage}>
                        Xem chi tiết
                </div>
            </div>
        )
    }
}

export default ProductDetail;