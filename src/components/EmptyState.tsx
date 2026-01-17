import React from "react";

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div style={styles.container}>
      <p style={styles.message}>{message || "No data available."}</p>
    </div>
  );
};

export default EmptyState;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  message: {
    fontSize: 16,
    color: "#999",
  },
};
