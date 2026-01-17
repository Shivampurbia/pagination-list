import {
  useQuery,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchUsers } from "../api/users.api";

export const useUsers = (page: number) => {
  const queryClient = useQueryClient();

  const hasCachedData = !!queryClient.getQueryData(["users", page]);

  const query = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page),

    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000,

    refetchOnWindowFocus: false,

    // 🔥 THIS is the key line
    enabled: !hasCachedData,
  });

  const data = query.data;

 useEffect(() => {
  if (!data) return;

  const nextPage = page + 1;
  const hasNextPage = data.skip + data.limit < data.total;

  if (!hasNextPage) return;

  // 🚫 DO NOT prefetch if already cached
  const alreadyCached = queryClient.getQueryData(["users", nextPage]);

  if (!alreadyCached) {
    queryClient.prefetchQuery({
      queryKey: ["users", nextPage],
      queryFn: () => fetchUsers(nextPage),
    });
  }
}, [data, page, queryClient]);


  return query;
};
