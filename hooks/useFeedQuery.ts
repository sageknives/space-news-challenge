import { useQuery } from "@tanstack/react-query";
import { getFeed } from "@/app/api/feed";

export function useFeedQuery(
  search: string,
  page: number,
  initialData: Awaited<ReturnType<typeof getFeed>>,
) {
  return useQuery({
    queryKey: ["feed", search, page],
    queryFn: async () => getFeed({ search, page }),
    cacheTime: 100000,
    retry: 0,
    initialData,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
