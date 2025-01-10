import { Avatar } from "./BlogCard";

export function Appbar(){
    return(
        <div className="flex justify-between px-10 border-b py-3" >
            <div  className="font-bold text-xl flex flex-col justify-center" >
                Medium
            </div>
            <div>
                <Avatar size="big" name="Nayan"/>
            </div>
        </div>
    )
}