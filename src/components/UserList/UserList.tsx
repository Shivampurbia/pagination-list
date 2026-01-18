import React, { useState } from "react";
import "./UserList.css";
import { useUsers } from "../../hooks/useUsers";
import type { User } from "../../types/types";
import SkeletonList from "../SkeletonList/SkeletonList";
import ErrorState from "../ErrorState";
import EmptyState from "../EmptyState";
import UserItem from "../UserItem/UserItem";

const UserList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching, refetch } = useUsers(page);

  const users: User[] = data != undefined ? data?.users || [] : [];
  const emptyData = !isLoading && users.length === 0;

  if (isLoading) return <SkeletonList />;
  if (isError)
    return <ErrorState onRetry={refetch} message="Error loading users" />;
  if (emptyData) return <EmptyState message="No users found." />;
  console.log(data, " data of page", page);

 return (
  <div className="user-list">
    <div className="list-content">
      {users.map((user: User) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>

    <div className="pagination-footer">
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>

        <div className="page-indicator">Page no. {page}</div>

        <button
          disabled={
            isFetching || (data && data.skip + data.limit >= data.total)
          }
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  </div>
);

};

export default UserList;
