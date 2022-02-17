const ErrorMessage = ({ children }) => {
    return (
      <div
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 16,
          borderRadius: 16,
          fontSize: "1.6rem",
          backgroundColor: "#EB6084",
          textAlign: "center",
          color: "var(--sure-bg-color)",
          textTransform: "capitalize",
        }}
      >
        {children}
      </div>
    );
  };
  
  export {ErrorMessage};