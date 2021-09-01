import { Redirect, Route, Switch } from 'react-router-dom';
import Homepage from '../page-modules/home-module/Homepage/Homepage';

const PrimaryRoutes = () => {
  return <Switch>
    <Route path={'/'}>
      <Homepage/>
    </Route>
  </Switch>
}

export default PrimaryRoutes;
