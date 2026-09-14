import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function DestinationSearch({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <form
      role="search"
      className="flex min-w-0 gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        navigate(`/destination?q=${encodeURIComponent(query.trim())}`);
        onSearch?.();
      }}
    >
      <input
        type="search"
        aria-label="Search destinations"
        placeholder="Search Nepal"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-full min-w-0 rounded-full bg-slate-100 px-4 py-2.5 text-sm"
      />
      <button type="submit" className="rounded-full bg-slate-100 px-3 text-sm">
        Search
      </button>
    </form>
  );
}
