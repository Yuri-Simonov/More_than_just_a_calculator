import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import Calculator from "./layouts/calculator";
import Finance from "./layouts/finance";
import Sections from "./layouts/sections";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Switch>
                    <Route path="/sections" exact component={Sections} />
                    <Route path="/finance" exact component={Finance} />
                    <Route path="/" exact component={Calculator} />
                    <Redirect to="/" />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
