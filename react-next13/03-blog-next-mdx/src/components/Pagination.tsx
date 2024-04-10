import Link from "next/link";

interface Props {
  totalPages: number;
  currentPage?: number;
}

const Pagination = ({ totalPages, currentPage = 1 }: Props) => {
  return (
    <div className="flex gap-6">
      {currentPage === 1 ? (
        <button
          disabled
          className="cursor-not-allowed"
        >
          Prev
        </button>
      ) : (
        <Link
          href={{
            pathname: "/posts",
            query: { page: currentPage - 1 },
          }}
        >
          Prev
        </Link>
      )}

      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          key={i}
          href={{
            pathname: "/posts",
            query: { page: i + 1 },
          }}
          className={`${
            currentPage === i + 1
              ? "bg-blue-500 rounded-full w-8 text-center text-white"
              : "bg-gray-200 rounded-full w-8 text-center text-gray-500"
          }`}
        >
          {i + 1}
        </Link>
      ))}
      {currentPage === totalPages ? (
        <button
          disabled
          className="cursor-not-allowed"
        >
          Next
        </button>
      ) : (
        <Link
          href={{
            pathname: "/posts",
            query: { page: currentPage + 1 },
          }}
        >
          Next
        </Link>
      )}
    </div>
  );
};
export default Pagination;