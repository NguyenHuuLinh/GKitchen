import React from 'react'
import './style.css'

class PopUpBuyNow extends React.Component {
    closeFopUpForm = () =>{
        this.props.onClose();
    }

    render() {
        return (
            <React.Fragment>
                <div className="popup-form">
                    <p className="text">
                        Bạn muốn nhận hàng ở khu vực nào?
                    </p>
                    <i className="ion-android-close ionic-close" onClick={this.closeFopUpForm} />
                    <select className="dropdown">
                        <option>--Chọn khu vực--</option>
                        <option href="#">Quận 1</option>
                        <option href="#">Quận 2</option>
                        <option href="#">Quận 3</option>
                    </select>
                    <div className="button-watch button-text" onClick={this.closeFopUpForm}>
                        <div>Xem ngay</div>
                    </div>
                </div>
                <div className="backdrop" />
            </React.Fragment>
        )
    }
}

export default PopUpBuyNow;