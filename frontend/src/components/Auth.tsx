import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
// import { SignupInput, signupInput } from "@nayankumar808/medium-common2";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setpostInputs] = useState({
    email: "",
    password: "",
    name: "",
  });
  return (
    <div className="flex justify-center flex-col h-screen">
      <div className="flex justify-center ">
        <div className="text-center">
          <div className="text-3xl font-extrabold">Create An Account</div>
          <div className="text-slate-500">
            {type === "signup" ? "Alredy Have an account?" : "Dont have and account?"}
            <Link to={type === "signin" ? "/signup": "/signin"}>
              <a className="underline  hover:text-blue-800 visited:text-purple-600">
                {type === "signin"? "Sign in" : "Login"}
              </a>
            </Link>
          </div>
          <div>
            <LabelledInput
              label="Name"
              placeholder="Nayan Kumar..."
              onChange={(e) => {
                setpostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Email"
              placeholder="example@gmail.com"
              onChange={(e) => {
                setpostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="*********"
              onChange={(e) => {
                setpostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <div className="pt-8 ">
            <button type="button" className="w-full text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                {type === "signup"? "Sign up":"Sign in"}
          </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4 text-left">
        {label}
      </label>
      <input
        type={type || "text"}
        onChange={onChange}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
