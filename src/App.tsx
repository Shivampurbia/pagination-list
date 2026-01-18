import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserList from "./components/UserList/UserList";
import "./App.css";
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <div className="subcontainer">
          <UserList />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
