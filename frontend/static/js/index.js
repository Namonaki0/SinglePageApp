import Dashboard from "./views/Dashboard.js";
import Movies from "./views/Movies.js";
import Upcoming from "./views/Upcoming.js";

//? HISTORY API
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

//? CREATES THE DISPLAY FOR THE ROUTES
const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/movies", view: Movies },
    { path: "/upcoming", view: Upcoming },
  ];

  //? MAPS THROUGH EACH ROUTE AND LOGS CURRENT LOCATION
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  //? LOGS WHAT ROUTE IS MATCHING
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  //? IF THERE IS NOT MATCH REVERT TO FIRST ROUTE
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector("#root").innerHTML = await view.getHtml();
};

//? REVERT TO PREVIOUS PAGE
window.addEventListener("popstate", router);

//? FIRES THE ROUTING ON DOCUMENT LOAD
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    //? IF ELEMENT HAS [DATA-LINK] ATTRIBUTE THEN PREVENT REFRESH AND FOLLOW URL
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
