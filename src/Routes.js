import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppliedRoute from './AppliedRoute';
import Home from './screens/Home';

const NotFound = ()=>(
    <div style={{paddingTop:100, textAlign:'center'}}>
        <h3>Sorry, page not found</h3>
    </div>
)



const Routes = ({childProps})=>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />

        <Route component={NotFound} />
    </Switch>

export default Routes;
