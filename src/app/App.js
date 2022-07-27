import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import Calculator from "./components/pages/calculator/calculator";
import Finance from "./components/pages/finance/finance";
import Sections from "./components/pages/sections/sections";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="container-outer">
                    <Switch>
                        <Route path="/sections" exact component={Sections} />
                        <Route path="/finance" exact component={Finance} />
                        <Route path="/" exact component={Calculator} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
