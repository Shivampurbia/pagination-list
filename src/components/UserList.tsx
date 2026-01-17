import React, { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import SkeletonList from "./SkeletonList/SkeletonList";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";
import UserItem from "./UserItem";
import type { User } from "../types/types";

const UserList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching, refetch } = useUsers(page);

  const users: User[] = data?.users || [];
  const emptyData = !isLoading && users.length === 0;
  if (isLoading) return <SkeletonList />;
  if (isError)
    return <ErrorState onRetry={refetch} message="Error loading users" />;
  if (emptyData) {
    return <EmptyState message="No users found." />;
  }

  console.log(data);
  

  return (
    <div style={{ width: "100%" }}>
      {users.map((user: User) => (
        <UserItem key={user.id} user={user} />
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Previous
        </button>
          {isFetching && (
        <div style={{ marginTop: "8px", textAlign: "center", color: "gray" }}>Fetching...</div>
      )}
        <button
          disabled={data != undefined && data?.skip + data?.limit >= data?.total || isFetching}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>

    
    </div>
  );
};

export default UserList;
