import React from 'react'
import './style.css'
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="content" className="container">
                    <div className="element1">
                        <div id="title">
                            <Link to="/">Sản phẩm</Link>
                        </div>
                        <div id="title">
                            <Link to="/cookg">Nấu ngon cùng G</Link>
                        </div>
                        <div id="title">
                            <Link to="/sales">Khuyến mãi</Link>
                        </div>
                    </div>
                    <div>
                        <Link to="/home">
                            <img src="https://tinyurl.com/y57g96eg" className="img-logo" alt="logo"></img>
                        </Link>
                        <Link to="/home/productsdetail">
                        </Link>
                    </div>
                    <div>
                        <div id="title">
                            <Link to="/process3f">Quy trình 3F Plus</Link>
                        </div>
                        <div id="title">
                            <Link to="/topics">Câu chuyện của G</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;
