import { useQuery } from "@tanstack/react-query";
import { getFeed } from "@/app/api/feed";
import { SNAPI_CACHE_TIME } from "@/constants/api";

export function useFeedQuery(
  search: string,
  page: number,
  initialData: Awaited<ReturnType<typeof getFeed>>,
) {
  return useQuery({
    queryKey: ["feed", search, page],
    queryFn: async () => getFeed({ search, page }),
    cacheTime: SNAPI_CACHE_TIME,
    retry: 0,
    initialData,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
