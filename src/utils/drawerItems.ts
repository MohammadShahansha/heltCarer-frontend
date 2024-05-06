import { USER_ROLE } from "@/constants/role";
import { drawerItem, userRole } from "@/types";
//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ReviewsIcon from "@mui/icons-material/Reviews";
import GradingIcon from "@mui/icons-material/Grading";

export const drawerItems = (role: userRole): drawerItem[] => {
  const roleMenus: drawerItem[] = [];
  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: Diversity2Icon,
        },
        {
          title: "Doctor",
          path: `${role}/doctor`,
          icon: MedicalServicesIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appoinments",
          path: `${role}/appoinments`,
          icon: AssignmentTurnedInIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        }
      );
      break;
    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appoinments",
          path: `${role}/appoinments`,
          icon: AssignmentTurnedInIcon,
        }
      );
      break;
    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Appoinments",
          path: `${role}/appoinments`,
          icon: AssignmentTurnedInIcon,
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: GradingIcon,
        }
      );
      break;
    default:
      break;
  }
  return [...roleMenus];
};
