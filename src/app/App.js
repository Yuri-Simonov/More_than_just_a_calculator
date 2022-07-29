import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import Calculator from "./components/pages/calculator/calculator";
import Finance from "./components/pages/finance/finance";
import Sections from "./components/pages/sections/sections";
import CalculatorProvider from "./hooks/useCalculator";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <Switch>
                    <Route path="/sections" exact component={Sections} />
                    <Route path="/finance" exact component={Finance} />
                    <CalculatorProvider>
                        <Route path="/" exact component={Calculator} />
                    </CalculatorProvider>
                    <Redirect to="/" />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
