
import Careers from "pages/admin/careers/Careers";
import Events from "pages/admin/events/Events";

var routes = [
  {
    path: "/careers",
    name: "Careers",
    icon: "icon-features",
    component: Careers,
    layout: "/admin",
    exact: true,
  },
  {
    path: "/events",
    name: "Events",
    icon: "nc-icon nc-satisfied",
    component: Events,
    layout: "/admin",
    exact: true,
  },
];
export default routes;
