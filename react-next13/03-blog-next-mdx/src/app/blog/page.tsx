import { allPosts } from "contentlayer/generated";
import PostsLists from "@/components/PostsList";
import PostsPagination from "@/components/Pagination";
import { getPagination } from "@/utils/pagination";

export const metadata = {
  title: "Lista de todos los post",
  description: "Description posts - Generated by create next app",
};

const Posts = () => {
  const { currentItems, totalPages } = getPagination(allPosts);

  return (
    <div className="grid gap-4">
      <PostsLists posts={currentItems} />
      {totalPages > 1 && <PostsPagination totalPages={totalPages} />}
    </div>
  );
};
export default Posts;