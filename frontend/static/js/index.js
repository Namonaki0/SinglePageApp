//? CREATES THE DISPLAY FOR THE ROUTES
const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Viewing dashboard") },
    { path: "/posts", view: () => console.log("Viewing posts") },
    { path: "/settings", view: () => console.log("Viewing settings") },
  ];

  //? MAPS THROUGH EACH ROUTE AND LOGS CURRENT LOCATION
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  console.log(match);
};

document.addEventListener("DOMContentLoaded", () => {
  router();
});