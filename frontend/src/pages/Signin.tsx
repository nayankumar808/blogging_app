import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signin = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-2">
        <div>
          <Auth type="signin"/>
        </div>
        <div className="invisible md:visible ">
          <Quote />
        </div>
      </div>
    </>
  );
};
