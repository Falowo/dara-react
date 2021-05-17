import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Header } from "./components";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { ProductDetails } from "./features/gallery/components/";
import ApiFakeStore from "./conf/api.fakeStore";

const LazyGallery = lazy(() =>
  import(/* webpackChunkName: "Gallery" */ "./features/gallery")
);
const LazyCart = lazy(() =>
  import(/* webpackChunkName: "Cart" */ "./features/cart")
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    ApiFakeStore.fetchAllProducts().then((products) =>
      this.setState({
        products,
      })
    );
  }

  render() {
    return (
      <div className="d-flex flex-row">
        <div className="App d-flex flex-column flex-grow">
          <Header />
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Switch>
              <Route path="/gallery" component={LazyGallery} />
              <Route path="/productDetails/:id" component={ProductDetails} />
              <Redirect to="/gallery" />
            </Switch>
          </Suspense>
        </div>
        <aside>
          <Route path="/cart" component={LazyCart} />
        </aside>
      </div>
    );
  }
}

export default withRouter(
  connect(null, {
    //  fetchAllProducts
  })(App)
);
