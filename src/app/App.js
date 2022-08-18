import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import Calculator from "./components/pages/calculator/calculator";
import Finance from "./components/pages/finance/finance";
import Age from "./components/pages/sections/age";
import BodyWeightMeter from "./components/pages/sections/body_weight_meter";
import Date from "./components/pages/sections/date";
import DigitalData from "./components/pages/sections/digital_data";
import Discount from "./components/pages/sections/discount";
import Length from "./components/pages/sections/length";
import ScaleOfnotation from "./components/pages/sections/scale_of_notation";
import Speed from "./components/pages/sections/speed";
import Square from "./components/pages/sections/square";
import Temperature from "./components/pages/sections/temperature";
import Time from "./components/pages/sections/time";
import Volume from "./components/pages/sections/volume";
import Weight from "./components/pages/sections/weight";
import Sections from "./components/pages/sections/sections";
import CalculatorProvider from "./hooks/useCalculator";
import DigitalDataProvider from "./hooks/useDigitalData";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <Switch>
                    <Route path="/sections" exact component={Sections} />
                    <Route path="/sections/age" exact component={Age} />
                    <Route
                        path="/sections/body_weight_meter"
                        exact
                        component={BodyWeightMeter}
                    />
                    <Route path="/sections/date" exact component={Date} />
                    <DigitalDataProvider>
                        <Route
                            path="/sections/digital_data"
                            exact
                            component={DigitalData}
                        />
                    </DigitalDataProvider>
                    <Route
                        path="/sections/discount"
                        exact
                        component={Discount}
                    />
                    <Route path="/sections/length" exact component={Length} />
                    <Route
                        path="/sections/scale_of_notation"
                        exact
                        component={ScaleOfnotation}
                    />
                    <Route path="/sections/speed" exact component={Speed} />
                    <Route path="/sections/square" exact component={Square} />
                    <Route
                        path="/sections/temperature"
                        exact
                        component={Temperature}
                    />
                    <Route path="/sections/time" exact component={Time} />
                    <Route path="/sections/volume" exact component={Volume} />
                    <Route path="/sections/weight" exact component={Weight} />
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
