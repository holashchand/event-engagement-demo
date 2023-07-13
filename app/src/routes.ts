import { FC } from "react";
import ExhibitCardDetails from "./pages/ExhibitDetails";
import FirstLogin from "./pages/Login";
import QuestionSet from "./pages/QuestionSet";
import ExhibitResult from "./pages/ExhibitResult";
import Register from "./pages/Register";
import UserHome from "./pages/UserHome";
import HomePage from "./pages/Home";
import ExhibitsHome from "./pages/ExhibitsHome";

export const apiRoutes = {
  REGISTER: "/Register",
  LOGIN: "/FirstLogin",
  USER_HOME: "/UserHome",
  QUESTION_SET: "/QuestionSet",
  EXHIBIT_DETAILS: "/ExhibitCardDetails",
  EXHIBITS_HOME: "/ExhibitsHome",
  EXHIBIT_RESULT: "/ExhibitResult",
};

export const pageRoutes = {
  HOME: "/",
};

interface Route {
  key: string,
  title: string,
  path: string,
  enabled: boolean,
  component: FC<{}>
}

export const routes: Array<Route> = [
  {
      key: 'home-route',
      title: 'HomePage',
      path: '/',
      enabled: true,
      component: HomePage
  },
  {
      key: 'register-route',
      title: 'Register',
      path: '/Register',
      enabled: true,
      component: Register
  },
  {
      key: 'firstLogin-route',
      title: 'FirstLogin',
      path: '/FirstLogin',
      enabled: true,
      component: FirstLogin
  },
  {
      key: 'userhome-route',
      title: 'UserHome',
      path: '/UserHome',
      enabled: true,
      component: UserHome
  },
  {
      key: 'questionSet-route',
      title: 'QuestionSet',
      path: '/QuestionSet',
      enabled: true,
      component: QuestionSet
  },
  {
      key: 'exhibitCardDetails-route',
      title: 'ExhibitCardDetails',
      path: '/ExhibitCardDetails',
      enabled: true,
      component: ExhibitCardDetails
  },
  {
    key: 'exhibitsHome-route',
    title: 'ExhibitsHome',
    path: '/ExhibitsHome',
    enabled: true,
    component: ExhibitsHome
  },
  {
      key: 'ExhibitResult-route',
      title: 'ExhibitResult',
      path: '/ExhibitResult',
      enabled: true,
      component: ExhibitResult
  }
]