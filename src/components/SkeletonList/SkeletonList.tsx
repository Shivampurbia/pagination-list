import "./SkeletonList.css";

const SkeletonList = () => {
  return (
    <div className="skeleton-list">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-avatar" />
          <div className="skeleton-content">
            <div className="skeleton-line short" />
            <div className="skeleton-line long" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonList;
