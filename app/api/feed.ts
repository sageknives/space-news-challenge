"use server";

import { BASE_SNAPI_URL } from "@/constants/api";
import { useFeedQuery } from "@/hooks/useFeedQuery";

const FEED_ENDPOINTS = ["article", "blog", "report"] as const;

export async function getFeed(params: SearchParams = {}) {
  /** parse params for search */
  const urlSearchParams = new URLSearchParams();
  for (let [key, value] of Object.entries(params)) {
    if (key === "page") {
      urlSearchParams.set(
        "offset",
        (parseInt(value.toString(), 10) * 10).toString(),
      );
    } else {
      urlSearchParams.set(key, value.toString());
    }
  }
  /** fetch all endpoints */
  return Promise.all<EndpointResponseV4>(
    FEED_ENDPOINTS.map((endpoint) =>
      fetch(
        `${BASE_SNAPI_URL}${endpoint}s${
          urlSearchParams.size ? `?${urlSearchParams.toString()}` : ""
        }`,
      ).then((res) => {
        if (!res.ok) {
          throw new Error(
            typeof res.body === "string" ? res.body : "Server Error",
          );
        }
        return res.json();
      }),
    ),
  ).then((res) => {
    /** reduce all responses into one response */
    const response = res.reduce(
      (acc, list, index) => {
        acc.count += list.count;
        acc.next ||= !!list.next;
        acc.previous ||= !!list.previous;
        acc.results.push(
          ...list.results.map(
            (item) =>
              ({
                ...item,
                type: FEED_ENDPOINTS[index],
              }) as FeedType,
          ),
        );
        return acc;
      },
      {
        count: 0,
        next: false,
        previous: false,
        results: [] as FeedType[],
      },
    );
    response.results = response.results.sort((a, b) =>
      a.published_at < b.published_at ? 1 : -1,
    );

    return response;
  });
}

type BaseReturn = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
};

type Article = BaseReturn & {
  type: "article";
  launches: [
    {
      id: string;
      provider: string;
    },
  ];
  events: [
    {
      id: string;
      provider: string;
    },
  ];
};

type Blog = BaseReturn & {
  type: "blog";
  launches: [
    {
      id: string;
      provider: string;
    },
  ];
  events: [
    {
      id: string;
      provider: string;
    },
  ];
};

type Report = BaseReturn & {
  type: "report";
};

type EndpointResponseV4 = {
  count: number;
  next: string;
  previous: string;
  results: (Article | Blog | Report)[];
};

export type SearchParams = {
  search?: string;
  page?: number;
};

export type FeedType = EndpointResponseV4["results"][number];
export type UseFeedQueryReturn = ReturnType<typeof useFeedQuery>["data"];
