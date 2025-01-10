import { Appbar } from "../components/Appbar";
import { Blogcard } from "../components/BlogCard";
import { usefetchBlogs } from "../hooks/fetchBlogs";

export const Blogs = () => {
    const {blogs,loading} =usefetchBlogs( )
    if(loading){
        return(
            <div>Loading...</div>
        )
    }

  return (
    <div>
      <Appbar />

      <div className="flex justify-center ">
        <div className="max-w-xl ">
            {blogs.map(blog=><Blogcard
            id={blog.id}
            author={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate="11/01/2025"
          />)}
        </div>
      </div>
    </div>
  );
};
