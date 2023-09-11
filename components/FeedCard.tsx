/* eslint-disable @next/next/no-img-element */
import { FeedType } from "@/app/api/feed";
import Link from "next/link";

export function FeedCard({ data }: { data: FeedType }) {
  return (
    <Link
      href={data.url}
      target="_blank"
      className="flex flex-col gap-4 border-2 border-gray-200 p-4 shadow-md hover:shadow-xl"
    >
      <div className="flex justify-between">
        <h2 className="text-xl">{data.title}</h2>
        <div className="flex flex-none flex-col gap-1 text-right text-xs">
          <p className="font-bold">{data.news_site}</p>
          <p>{new Date(data.published_at).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <img
          className="aspect-square h-24 w-24"
          src={data.image_url}
          alt={data.title}
          width="96"
          height="96"
        />
        <p>{data.summary}</p>
      </div>
    </Link>
  );
}
