import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export function Appbar() {
  return (
    <div className="flex justify-between px-10 border-b py-3">
      <Link to={"/blogs"}>
        <div className="font-bold text-xl flex flex-col justify-center">
          Medium
        </div>
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className=" mr-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Publish
          </button>
        </Link>

        <Avatar size="big" name="Nayan" />
      </div>
    </div>
  );
}
