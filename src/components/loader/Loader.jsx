import React from "react";

const Loader = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light"
      aria-busy="true"
    >
      <img
        src="/lll.gif"
        alt="Loading..."
        className="img-fluid mb-3"
        style={{ maxWidth: '200px', height: 'auto' }}
      />
      <h4 className="text-secondary mb-2">Loading, please wait...</h4>
      <div className="spinner-border text-primary" role="status" aria-hidden="true" />
    </div>
  );
};

export default Loader;
