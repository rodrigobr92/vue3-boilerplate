const routes = {
  path: "/alerts",
  component: () => import("./alerts.vue"),
  children: [
    {
      path: "",
      component: () => import("./alerts-list/alerts-list.vue"),
    },
    {
      path: "detail",
      component: () => import("./alerts-detail/alerts-detail.vue"),
    },
  ],
};

export default routes;
