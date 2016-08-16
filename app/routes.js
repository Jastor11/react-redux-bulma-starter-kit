import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

// Pages
import Bulma from './pages/Bulma';
import BulmaLanding from './pages/BulmaLanding';
import BulmaHeroPic from './pages/BulmaHeroPic';
import CoverLayout from './pages/CoverLayout';
import GridContainer from './pages/GridContainer';
import AsideLayout from './pages/AsideLayout';
import ProfileLayout from './pages/ProfileLayout';
import StatusPage from './pages/StatusPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Bulma} />
    <Route path="/landing" component={BulmaLanding} />
    <Route path="/bulma-hero" component={BulmaHeroPic} />
    <Route path="/cover-layout" component={CoverLayout} />
    <Route path="/grid-layout" component={GridContainer} />
    <Route path="/profile-layout" component={ProfileLayout} />
    <Route path="/status-page" component={StatusPage} />
    <Route path="*" component={AsideLayout} />
  </Route>
);
