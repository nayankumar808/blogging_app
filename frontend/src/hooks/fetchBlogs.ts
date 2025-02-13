import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
export interface Blog {
  "content": string;
  "title": string;
  "id": number
  "author": {
      "name": string
  }
}

export const useBlog = ({id}:{id:string} )=> {
  const [Loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog[]>();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
      headers: { Authorization : localStorage.getItem("token") },
    }).then((response)=>{
        setLoading(false);
        setBlog(response.data.post);
    })
  }, [id]);
  return {
    Loading,
    blog
  };
};

export const usefetchBlogs = () => {
  const [loading, setLoding] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((Response) => {
        setBlogs(Response.data.posts);
        setLoding(false);
      });
  }, []);

  return {
    blogs,
    loading,
  };
};
