import React from "react";

interface ErrorStateProps {
  message?: string;
  onRetry: () => void;
  refetching?: boolean; // show loader inside button
}

const ErrorState: React.FC<ErrorStateProps> = ({
  message,
  onRetry,
  refetching = false,
}) => {
  return (
    <div style={styles.container}>
      <p style={styles.message}>{message || "Something went wrong."}</p>
      <button
        style={styles.button}
        onClick={onRetry}
        disabled={refetching}
      >
        {refetching ? <div className="spinner" /> : "Retry"}
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
    marginTop: 40,
  },
  message: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  button: {
    position: "relative",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    minWidth: 100, // keeps button size consistent
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  
};
