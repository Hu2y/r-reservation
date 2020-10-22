import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { pathUri } from '@/modules/define/path';

import LoginPage from '@/pages/Login.pages';
import MainPage from '@/pages/Main.pages';
import MemberPage from '@/pages/Member.pages';

const Routes = () => (
	<Switch>
		<Route exact path={pathUri.login} component={LoginPage} />
		<Route exact path={pathUri.main} component={MainPage} />
		<Route exact path={pathUri.member} component={MemberPage} />
	</Switch>
);

export default Routes;

{/* <Route component={() => <Redirect to={pathUri.sign} />} /> */}