import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBox = () => {
  const [data, setData] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    if (data.trim()) {
      navigate(`/blog/blogs/${data}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          value={data}
          onChange={(e) => setData(e.target.value)}
          type="text"
          placeholder="Search..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none text-black focus:border-primary"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-legal-gray transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
