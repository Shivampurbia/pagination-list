import React, { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import SkeletonList from "./SkeletonList/SkeletonList";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";
import UserItem from "./UserItem";

const UserList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching, refetch } = useUsers(page);

  if (isLoading) return <SkeletonList />;
  if (isError)
    return <ErrorState onRetry={refetch} message="Error loading users" />;
  if (!isLoading && data.users.length === 0) {
    return <EmptyState message="No users found." />;
  }

  return (
    <div style={{ width: "100%" }}>
      {data.users.map((user) => (
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
        <button
          disabled={data.skip + data.limit >= data.total || isFetching}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>

      {isFetching && (
        <div style={{ marginTop: "8px", textAlign: "center" }}>Fetching...</div>
      )}
    </div>
  );
};

export default UserList;
