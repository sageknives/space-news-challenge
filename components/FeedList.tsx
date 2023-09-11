"use client";

import useDebounce from "@/hooks/useDebounce";
import { useFeedQuery } from "@/hooks/useFeedQuery";
import { useState } from "react";
import { FeedCard } from "./FeedCard";
import { Input } from "./Input";
import { Button } from "./Button";

type FeedListProps = ReturnType<typeof useFeedQuery>["data"];

export function FeedList(props: FeedListProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const debouncedSearch = useDebounce(search);

  const { isFetching, data, status, refetch } = useFeedQuery(
    debouncedSearch,
    page,
    props,
  );

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPage(0);
    setSearch(e.target.value);
  }

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="margin-auto sticky top-0 flex flex-none justify-center bg-white p-4 shadow-md">
        <Input onChange={onSearchChange} value={search} type="search" />
      </div>
      <div className="mx-auto mb-4 max-w-6xl">
        {isFetching && <p>Loading...</p>}
        {!isFetching && status === "error" && (
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">There was an error getting your feed!</h2>
            <Button onClick={() => refetch()}>Click to Retry</Button>
          </div>
        )}
        {!isFetching && status === "success" && !!data.results.length && (
          <>
            <ul className="mx-2 flex flex-col gap-4">
              {data.results.map((item) => (
                <li key={`${item.type}-${item.id}`}>
                  <FeedCard data={item} />
                </li>
              ))}
            </ul>
            <div className="flex justify-between gap-4 p-4">
              <Button
                disabled={!data.previous}
                onClick={() => setPage((cur) => cur - 1)}
              >
                {`< Previous`}
              </Button>
              <p>{page + 1}</p>
              <Button
                disabled={!data.next}
                onClick={() => setPage((cur) => cur + 1)}
              >
                {`Next >`}
              </Button>
            </div>
          </>
        )}
        {!isFetching && status === "success" && !data.results.length && (
          <p>No Results</p>
        )}
      </div>
    </div>
  );
}
