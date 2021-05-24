import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../components/Contact.vue";
import AboutMe from "../components/AboutMe.vue";
import Projects from "../views/Projects.vue";
import ProjectSummary from "../views/ProjectSummary.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mywork",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/mywork/:id",
    name: "ProjectSummary",
    component: ProjectSummary,
    props: true,
  },
  {
    path: "/about",
    name: "AboutMe",
    component: AboutMe,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
