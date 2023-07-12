import { FC } from "react";
import ExhibitCardDetails from "./pages/ExhibitDetails";
import FirstLogin from "./pages/Login";
import QuestionSet from "./pages/QuestionSet";
import ViewCertificate from "./pages/ViewCertificate";
import Register from "./pages/Register";
import UserHome from "./pages/UserHome";
import HomePage from "./pages/Home";

export const apiRoutes = {
  REGISTER: "/Register",
  LOGIN: "/FirstLogin",
  USER_HOME: "/UserHome",
  QUESTION_SET: "/QuestionSet",
  EXHIBIT_DETAILS: "/ExhibitCardDetails",
  VIEW_CERTIFICATE: "/ViewCertificate",
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
      key: 'ViewCertificate-route',
      title: 'ViewCertificate',
      path: '/ViewCertificate',
      enabled: true,
      component: ViewCertificate
  }
]