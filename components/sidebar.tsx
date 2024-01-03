'use client';

import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import {usePathname} from 'next/navigation';
import clsx from 'clsx';



function Sidebar() {
  const pathname = usePathname();
  const activeMenu = (path: string) => {
    return `flex items-center p-2 text-base font-normal text-gray-50 rounded-lg dark:text-white ${
      pathname.includes(path) ? "bg-neutral-400" : ""
    } hover:bg-neutral-400 dark:hover:bg-gray-700 hover:text-[#1d3044]`;
  };

  return (
    <aside
      id="separator-sidebar"
      className="  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-black">
        <ul className="space-y-2">
          <li className="mt-3">
            <Link
              href="/dashboard"
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === "",
                },
              )}
  >
              <span className="ml-3 font-bold hover:font-bold">
                Application Test
              </span>
            </Link>
          </li>
        </ul>
        <div className="mb-auto my-24 space-y-10">
          <ul className="space-y-2">
            <span className="px-3 text-green-300 font-light">Navigation</span>
            <li>
              <Link
                href="/users"
                className={activeMenu("/users")}
              >
                <Icons.monney />
                <span className="flex-1 ml-3 whitespace-nowrap">User</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/clients"
                className={activeMenu("/dashboard/clients")}
              >
                <Icons.customer />
                <span className="flex-1 ml-3 whitespace-nowrap">Clients</span>
              </Link>
            </li>
          </ul>

          <ul className="space-y-2">
            <span className="px-3 text-green-300 font-light">
              Configuration
            </span>
            <li>
              <Link
                href="/dashboard/chambres"
                className={activeMenu("/dashboard/chambres")}
              >
                <Icons.door />
                <span className="flex-1 ml-3 whitespace-nowrap">Chambres</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/users"
                className={activeMenu("/dashboard/users")}
              >
                <Icons.users />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Utilisateurs
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <Link
              href="/immondice/v1/dashbord/parametres"
              className="flex items-center p-2 text-base font-normal text-gray-50 transition duration-75 rounded-lg hover:bg-red-500 dark:hover:bg-gray-700 dark:text-white group"
              
            >
              <Icons.logout />
              <span className="ml-4">Se déconnecter</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;