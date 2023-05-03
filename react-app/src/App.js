import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/navigationBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import MainPage from "./components/mainpage/mainpage";
import AircraftList from "./components/foreflight";
import User from "./components/User";
import Schedule from "./components/schedule";
import SendQuote from "./components/sendquote";
import CreateQuote from "./components/createaquote/createaquote";
import { authenticate } from "./store/session";
import FuelCalc from "./components/fuelcalc";
import TestTrial from "./components/testtrial";
import ViewQuotes from "./components/allquotes/allquotes";
import PasswordResetForm from "./components/passwordreset/passwordreset";
import Email from "./components/email/email";
import Success from "./components/email/success";
import Clients from "./components/clients/clients";
import Client from "./components/clients/client";
import AddForm from "./components/addformtest";
import CreateSpotForm from './components/postSpot/PostSpot'
import ViewSpots from './components/viewSpots/ViewSpots'
import SingleQuote from "./components/singleQuote/singlequote";
import Pricing from "./components/pricing/pricing";
import  Calendar  from "./components/pricingCal";
import EditPricing from "./components/pricing/editPrice";


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();




  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
        <>

      <Switch>
      <Route path="/quotes/new" exact={true}>
          <CreateSpotForm  />
        </Route>
        <div><NavBar loaded={loaded} />
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/calendars" exact={true}>
        <Calendar />
        </Route>
        <Route path="/prices" exact={true}>
          <Pricing />
        </Route>
        <Route path="/prices/edit" exact={true}>
          <EditPricing />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/users" exact={true}>
          <AircraftList />
        </Route>
        <Route path="/quotes/" exact={true}>
          <ViewSpots />
        </Route>
        <ProtectedRoute path="/users/testtrial" exact={true}>
          <TestTrial />
        </ProtectedRoute>
        <ProtectedRoute path="/send-quote" exact={true}>
          <SendQuote />
          <h1>Send Quote</h1>
        </ProtectedRoute>
        <ProtectedRoute path="/fuel-cal" exact={true}>
          <FuelCalc />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/schedule" exact={true}>
          <Schedule />
        </ProtectedRoute>
        <Route path="/quotes/" exact={true}>
          <ViewQuotes />
        </Route>
        <ProtectedRoute path="/clients" exact={true}>
          <Clients />
        </ProtectedRoute>
        <ProtectedRoute path='/clients/:email' exact={true} >
            <Client />
        </ProtectedRoute>
        {/* <Route path="/quotes/new/" exact={true}>
          <CreateQuote />
        </Route> */}

        <Route path="/quotes/:id" exact={true}>
          <SingleQuote  />
        </Route>
        <Route path="/pass-reset" exact={true}>
          <PasswordResetForm />
        </Route>
        <Route path="/email" exact={true}>
          <Email />
        </Route>
        <Route path="/success" exact={true}>
          <Success />
        </Route>
        <Route path="/" exact={true}>
          <MainPage loaded={loaded} />
        </Route>
        </div>
      </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
