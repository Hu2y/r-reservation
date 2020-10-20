import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { pathUri } from '@/modules/define/path';

import MainPage from '@/pages/Main.pages';

const Routes = () => (
	<Switch>
		<Route exact path={pathUri.main} component={MainPage} />
	</Switch>
);

export default Routes;


{/* <Route component={() => <Redirect to={pathUri.sign} />} /> */}