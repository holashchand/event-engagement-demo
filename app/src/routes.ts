import ExhibitCardDetails from "./pages/ExhibitDetails";
import HomePage from "./pages/Home";
import FirstLogin from "./pages/Login";
import QuestionSet from "./pages/QuestionSet";
import Register from "./pages/Register";
import ScanQR from "./pages/ScanQR";
import UserHome from "./pages/UserHome";
import ViewCertificate from "./pages/ViewCertificate";

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
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: React.FC<{}>;
}

export const routes: Route[] = [
  {
    key: "home-route",
    title: "HomePage",
    path: "/",
    enabled: true,
    component: HomePage,
  },
  {
    key: "register-route",
    title: "Register",
    path: "/Register",
    enabled: true,
    component: Register,
  },
  {
    key: "firstLogin-route",
    title: "FirstLogin",
    path: "/FirstLogin",
    enabled: true,
    component: FirstLogin,
  },
  {
    key: "userhome-route",
    title: "UserHome",
    path: "/UserHome",
    enabled: true,
    component: UserHome,
  },
  {
    key: "questionSet-route",
    title: "QuestionSet",
    path: "/QuestionSet",
    enabled: true,
    component: QuestionSet,
  },
  {
    key: "exhibitCardDetails-route",
    title: "ExhibitCardDetails",
    path: "/ExhibitCardDetails",
    enabled: true,
    component: ExhibitCardDetails,
  },
  {
    key: "ViewCertificate-route",
    title: "ViewCertificate",
    path: "/ViewCertificate",
    enabled: true,
    component: ViewCertificate,
  },
  {
    key: "ScanQR-route",
    title: "ScanQR",
    path: "/scan-qr",
    enabled: true,
    component: ScanQR,
  },
];
