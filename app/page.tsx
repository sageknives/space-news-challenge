import { FeedList } from "@/components/FeedList";
import { getFeed } from "./api/feed";

export default async function Feed() {
  const data = await getFeed();

  return (
    <main className="m-auto flex max-h-screen min-h-screen flex-col justify-between">
      <FeedList {...data} />
    </main>
  );
}
