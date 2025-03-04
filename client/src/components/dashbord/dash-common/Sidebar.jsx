import {
  Home,
  Menu,
  LayoutDashboard,
  GanttChart,
  BarChart2,
  Brain,
  FileText,
  ScrollText,
  Lightbulb,
  Route,
  Search,
  Briefcase,
  FileUser,
  MessageSquare,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./custom-scrollbar.css";

const SIDEBAR_ITEMS = [
  { name: "Home", icon: Home, color: "#FF8643", href: "/" },
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    color: "#FF8643",
    href: "/dashboard",
  },
  {
    name: "Leaderboard",
    icon: Lightbulb,
    color: "#FF8643",
    href: "/dashboard/Leaderboard",
  },
  {
    name: "Mentors",
    icon: Brain,
    color: "#FF8643",
    href: "/dashboard/mentor-mania",
  },
  {
    name: "My Roadmap",
    icon: GanttChart,
    color: "#FF8643",
    href: "/dashboard/my-roadmap",
  },
  {
    name: "Market Insights",
    icon: ScrollText,
    color: "#532D69",
    href: "/dashboard/market-insights",
  },
  
  {
    name: "Interview",
    icon: Briefcase,
    color: "#532D69",
    href: "http://localhost:3001/dashboard",
  },
  {
    name: "Resume Analyzer",
    icon: FileUser,
    color: "#532D69",
    href: "/dashboard/resume-Analyzer",
  },
  {
    name: "AI Career Consultant",
    icon: ScrollText,
    color: "#F59E00",
    href: "/dashboard/consultant",
  },

  {
    name: "Career Pathway",
    icon: Route,
    color: "#F59E00",
    href: "/dashboard/career-pathway",
  },
  {
    name: "Community Page",
    icon: MessageSquare,
    color: "#F59E00",
    href: "/dashboard/community-page",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-screen overflow-y-auto bg-[#F8F7F3] bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-200">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
