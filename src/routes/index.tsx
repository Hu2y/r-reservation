import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { pathUri } from '@/modules/define/path';

import MainPage from '@/pages/Main.pages';
import LoginPage from '@/pages/Login.pages';

const Routes = () => (
	<Switch>
		<Route exact path={pathUri.main} component={MainPage} />
		<Route exact path={pathUri.login} component={LoginPage} />
	</Switch>
);

export default Routes;


{/* <Route component={() => <Redirect to={pathUri.sign} />} /> */}