import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const location = useLocation();

  return (
    <header className="w-full px-6 py-4 bg-black text-white shadow-lg sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold ">Techeon</h1>

        {/* Navigation Menu */}
        <NavigationMenu  >
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  className={`hover:text-white transition-colors ${
                    location.pathname === "/"
                      ? "font-semibold "
                      : ""
                  }`}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className=" hover:text-white transition-colors">
              <NavigationMenuTrigger className=" transition-colors">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-2 p-4 w-[300px] bg-black text-white shadow-lg rounded-lg">
                  {[
                    {
                      name: "Product Marketing",
                      path: "/service/product-marketing",
                    },
                    {
                      name: "Content Marketing",
                      path: "/service/content-marketing",
                    },
                    {
                      name: "Email Marketing",
                      path: "/service/email-marketing",
                    },
                    {
                      name: "Social Media Marketing",
                      path: "/service/social-media-marketing",
                    },
                    {
                      name: "Search Engine Optimization (SEO)",
                      path: "/service/seo",
                    },
                    {
                      name: "Performance Marketing",
                      path: "/service/performance-marketing",
                    },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className=" hover:text-white hover:bg-zinc-900 px-3 py-2 rounded transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/blogs"
                  className={`hover:text-white transition-colors ${
                    location.pathname === "/blogs"
                      ? "font-semibold text-white"
                      : ""
                  }`}
                >
                  Blogs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/contact"
                  className={`hover:text-white transition-colors ${
                    location.pathname === "/contact"
                      ? "font-semibold text-white"
                      : ""
                  }`}
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navigation;