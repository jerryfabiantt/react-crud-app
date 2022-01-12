
import React from "react";
// javascript plugin used to create scrollbars on windows
import { Route, Switch } from "react-router-dom";
import siteRoutes from "routes/SiteRoutes";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SiteLayout(props) {
  console.log("site layout");
  return (
      <div>   
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Switch>
          {siteRoutes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
    </div>
  );
}

export default SiteLayout;
