import React from "react";

interface ErrorStateProps {
  message?: string;
  onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
  return (
    <div style={styles.container}>
      <p style={styles.message}>{message || "Something went wrong."}</p>
      <button style={styles.button} onClick={onRetry}>
        Retry
      </button>
    </div>
  );
};

export default ErrorState;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  message: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
};
