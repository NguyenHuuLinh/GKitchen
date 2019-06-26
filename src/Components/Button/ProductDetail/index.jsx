import React from 'react';
import './style.css'

class ProductDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.handlePage = this.handlePage.bind(this);
    }

    handlePage() {
        this.props.onClickPage();
    }

    render() {
        return (
            <div>
                <div className="button-detail button-text" onClick={this.handlePage}>
                    <div>
                        Xem chi tiết
                   </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail;