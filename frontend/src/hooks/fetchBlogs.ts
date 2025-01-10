import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
interface blogs{
        "content": string;
        "id": string,
        "title":string;
        "author": {
            "name":string
        }
    }



export const usefetchBlogs = () => {
  const [loading, setLoding] = useState(true);
  const [blogs, setBlogs] = useState<blogs[]>([]);
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    }).then((Response) => {
      setBlogs(Response.data.posts);
      setLoding(false);
    });
  }, []);

  return {
    blogs,
    loading,
  };
};
