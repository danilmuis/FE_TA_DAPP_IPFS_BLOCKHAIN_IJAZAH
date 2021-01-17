import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import DashboardLayout_SA from "@/pages/Layout/DashboardLayout_SA.vue";
import DashboardLayout_Staff from "@/pages/Layout/DashboardLayout_Staff.vue";
import Login from "@/pages/Login.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import TableList_TTD from "@/pages/TableList_TTD.vue";
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Notifications.vue";
import Transkrip from "@/pages/InputTranskripForm.vue";
import RegisStaff from "@/pages/RegisStaff.vue";
import RegisSuperAdmin from "@/pages/RegisSuperAdmin.vue";

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
  {
    path: "/superAdmin",
    component: DashboardLayout_SA,
    redirect: "/superAdmin/regisStaff",
    children: [
      
      {
        path: "dashboard_sa",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "regisStaff",
        name: "Registrasi Staff",
        component: RegisStaff
      },
      {
        path: "regisSuperAdmin",
        name: "Registrasi Super Admin",
        component: RegisSuperAdmin
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
      }
    ]
  },
  {
    path: "/staff",
    component: DashboardLayout_Staff,
    redirect: "/staff/table",
    children: [
      
      {
        path: "dashboard_staff",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "table",
        name: "Daftar Berkas",
        component: TableList_TTD
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
      }
    ]
  },
  // kaprodi
  {
    path: "/kaprodi",
    component: DashboardLayout_Staff,
    redirect: "/kaprodi/table",
    children: [
      
      {
        path: "dashboard_kaprodi",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "table",
        name: "Daftar Berkas",
        component: TableList_TTD
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
      }
    ]
  },
  // dekan
  {
    path: "/dekan",
    component: DashboardLayout_Staff,
    redirect: "/dekan/table",
    children: [
      
      {
        path: "dashboard_dekan",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "table",
        name: "Daftar Berkas",
        component: TableList_TTD
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
      }
    ]
  },
  // warek
  {
    path: "/warek",
    component: DashboardLayout_Staff,
    redirect: "/warek/table",
    children: [
      {
        path: "dashboard_warek",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "table",
        name: "Daftar Berkas",
        component: TableList_TTD
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
      }
    ]
  },
  // rektor
  {
    path: "/rektor",
    component: DashboardLayout_Staff,
    redirect: "/rektor/table",
    children: [
      
      {
        path: "dashboard_rektor",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "table",
        name: "Daftar Berkas",
        component: TableList_TTD
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
      }
    ]
  },

  {
    
    path: "/",
    name: "login",
    component: Login
    
  },
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