import React from 'react'
import './style.css'
import Footer from '../../../Layouts/Footer';

class DailyProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoad: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://nguyenhuulinh.github.io/listproducts.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoad: true,
                        items: result
                    });
                }
            )
    }

    render() {
        const { isLoad, items } = this.state;
        if (!isLoad) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <div className="cover">
                        {items && items.map((item) => (
                            <div key={item.id}>
                                <div className="cover-img">
                                    <img src={item.url_img} className="img-img" alt=""/>
                                </div>
                                <div className="cover-icon">
                                    <img src={item.url_icon} className="img-icon" alt=""/>
                                </div>
                                <div className="cover-content">
                                    {item.title}
                                </div>  
                                <div className="cover-content">
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default DailyProducts;