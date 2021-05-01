import LoginPage from './Pages/LoginPage';
import {Switch, Route, withRouter} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import OrderPage from './Pages/OrderPage';
import OrderSummary from './Pages/OrderSummary';
import MyOrdersPage from './Pages/MyOrdersPage';
import NewMoviePage from './Pages/NewMoviePage';
import NewMovieSummary from './Pages/NewMovieSummary';
import MoreOnOrderPage from './Pages/MoreOnOrderPage';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginPage/>
        </Route>
        <Route path="/home">
          <HomePage/>
        </Route>
        <Route path="/singleOrder/:demo">
          <OrderPage/>
        </Route>
        <Route path="/orderSummary">
          <OrderSummary/>
        </Route>
        <Route path="/myOrders">
          <MyOrdersPage />
        </Route>
        <Route path="/newMovie">
          <NewMoviePage />
        </Route>
        <Route path="/newMovieSummary">
          <NewMovieSummary />
        </Route>
        <Route path="/moreOnOrder">
          <MoreOnOrderPage />
        </Route>
      </Switch>      
    </div>
  );
}

export default withRouter(App);
