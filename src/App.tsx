import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserList from "./components/UserList";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#f5f5f5",
          padding: "16px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "90vw", // 👈 responsive to window size
          }}
        >
          <UserList />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
