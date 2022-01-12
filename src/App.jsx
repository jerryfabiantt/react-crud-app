
import AdminLayout from "layouts/AdminLayout";
import SiteLayout from "layouts/SiteLayout";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  const localStorageData = JSON.parse(localStorage.getItem("userData"));
  if (localStorageData) {
    return (
      <>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect to="/admin/dashboard" />
        </Switch>
      </>
    );
  } else {
    return (
      <>
        <Switch>
          <Route path="/" render={(props) => <SiteLayout {...props} />} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
