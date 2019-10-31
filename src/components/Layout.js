import React from 'react'
import {
    Router,
    Switch,
    Route
} from "react-router-dom";
// import Users from './Home';
import UserList from './users/UserList';
import CreateAuthor from './users/CreateAuthor';
import EditAuthor from './users/EditAuthor';
import ViewAuthor from './users/ViewAuthor';
import Header from './Header';
import NotFound from './NotFound';
import { createBrowserHistory as createHistory } from 'history'


const history = createHistory();

export default function Layout() {
    return (
        <Router history={history}>
            <div>
                <Header />

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact component={UserList} />
                    <Route path="/about" exact component={About}>

                    </Route>
                    <Route path="/users/new" exact component={CreateAuthor} />
                    <Route path="/users/edit/:id" exact component={EditAuthor} />
                    <Route path="/users/:id" exact component={ViewAuthor} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}


function About() {
    return (
        <p>
            About
        </p>
    )
}