import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from "./Orders";
import Home from "./Home";
import Navbar from "./Navbar";
import WebmailRedirect from "./Webmail";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/webmail" element={<WebmailRedirect />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
