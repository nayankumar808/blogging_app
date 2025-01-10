import { Link } from "react-router-dom";

interface blogcardProps {
  title: string;
  content: string;
  author: string;
  publishedDate: string;
  id:string | number
}

export const Blogcard = ({
  id,
  author,
  title,
  content,
  publishedDate,
}: blogcardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b  border-slate-200 pb-2 p-4 max-w-screen-md cursor-pointer ">
      <div className="flex">
        <div className="flex justify-center flex-col pl-2">
          <Avatar size="small" name={author} />
        </div>
       
        <div className="font-extralight pl-2">{author}</div>
        <div className=" flex justify-center flex-col pl-1">
          <Circle/>
        </div>
        <div className="pl-2 font-thin text-slate-600">{publishedDate}</div>
      </div>
      <div className=" text-xl font-bold pt-3 pl-2">{title}</div>
     
        <div className="text-md font-normal pl-2">{content.slice(0, 200) + "...."}</div>
        <div className="text-sm text-slate-400 pt-1 pl-2">{Math.ceil(content.length / 100) + " minutes read"}</div>
    </div>
    </Link>
  );
};
function Circle(){
  return <div className="rounded-full h-1 w-1 bg-slate-500 mt-1">

  </div>
}
 export function Avatar({ name, size="small" }: { name: string, size:"small" | "big" }) {
  return (
    <div className={` ${ size === "small" ? "w-6 h-6" : "w-10 h-10"} relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className="font-extralight text-white text-md dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
