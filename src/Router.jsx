import React from 'react';
import { Route, Switch} from "react-router-dom"

//Components
import Products from '../src/Components/Products'
import CookG from '../src/Components/CookG'
import Sales from '../src/Components/Sales'
import Home from '../src/Components/Home'
import Process from '../src/Components/Process3F'
import GStory from '../src/Components/Gstory'
import ProductsDetail from './Layouts/ProductDetail';

const GRoute = () => (
    <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/cookg" component={CookG} />
        <Route path="/sales" component={Sales} />
        <Route path="/home" component={Home} />
        <Route path="/process3f" component={Process} />
        <Route path="/gstory" component={GStory} />
        <Route path="/home/productsdetail" component={ProductsDetail} />
    </Switch>
)

export default GRoute;