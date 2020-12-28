import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Notifications.vue";
import Transkrip from "@/pages/InputTranskripForm.vue";

import MainNavbar from "@/pages/MainNavbar.vue";
import Main2 from "@/pages/Main2.vue";
import CheckDocument from "@/pages/CheckDocument.vue";
import Page404 from "@/pages/Page404.vue";



const routes = [
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/ijazah",
    children: [
      
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "ijazah",
        name: "Membuat Ijazah Baru",
        component: UserProfile
      },
      {
        path: "table",
        name: "Daftar Berkas",
        component: TableList
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "transkrip",
        name: "Membuat Transkrip Baru",
        component: Transkrip
      }
    ]
  },
  // {
    
  //   path: "/",
  //   name: "main",
  //   component: Main2
    
  // },
  {
    path: "/checker",
    name: "Check Document",
    component: CheckDocument
  },
  {
    path: "*",
    name: "NOT FOUND",
    component: Page404
  }
];

export default routes;



process.env.VUE_APP_ENDPOINT_API