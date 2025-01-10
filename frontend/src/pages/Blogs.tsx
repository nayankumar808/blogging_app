import { Appbar } from "../components/Appbar";
import { Blogcard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { usefetchBlogs } from "../hooks/fetchBlogs";

export const Blogs = () => {
  const { blogs, loading } = usefetchBlogs();
  loading:true
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="  flex justify-center flex-col ">
          <div className="">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />

      <div className="flex justify-center ">
        <div className="">
          {blogs.map((blog) => (
            <Blogcard
              id={blog.id}
              author={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate="11/01/2025"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
