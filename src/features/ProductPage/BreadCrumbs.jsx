import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function BreadCrumbs({ id }) {
  return (
    <nav className="flex pt-4" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link
              to="/"
              className="ml-2 text-sm  font-medium text-gray-500 hover:text-gray-700 sm:ml-4"
            >
              Home
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-5 w-5 shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <Link
              to="/dashboard"
              className="ml-2 text-sm  font-medium text-gray-500 hover:text-gray-700 sm:ml-4"
            >
              Dashboard
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-5 w-5 shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <Link
              href={"#"}
              className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700 sm:ml-4"
              aria-current={"page"}
            >
              Product #{id}
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}
