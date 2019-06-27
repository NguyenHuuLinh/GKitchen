import React from 'react'
import './style.css'
import BuyNow from '../Button/BuyNow';
import PopUpBuyNow from '../Modal/PopupBuyNow';
import SlideProducts from '../../Layouts/SlideProducts';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowFormBuyNow: false
        }
    }

    showFormBuyNow = () => {
        this.setState({
            isShowFormBuyNow: !this.state.isShowFormBuyNow
        })
    }

    closeFormBuyNow = () => {
        this.setState({
            isShowFormBuyNow: false
        })
    }

    render() {
        let showPopup = this.state.isShowFormBuyNow;
        let elmPopup = null;

        if (showPopup) {
            elmPopup = <PopUpBuyNow onClose={this.closeFormBuyNow} />
        }

        return (
            <div className="img-avt">
                <img src="https://gkitchen.com/upload/post/banner/pc/290419024543.jpg" style={{ width: "100%" }} alt="avt"></img>
                <div className="title-box">
                    <p className="title-text">
                        THỊT THẬT THÀ
                    </p>
                    <p className="content-text">
                        Mới là thịt ngon
                    </p>
                    <BuyNow onClickBuy={this.showFormBuyNow} />
                    {elmPopup}
                </div>
                <SlideProducts />
            </div>
        )
    }
}

export default Home;