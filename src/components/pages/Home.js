import React from "react";

const Home = () => {

  const handleClearLocalStorage = () => {
    if (window.confirm("Are you sure you want to clear?")) {
      localStorage.clear();
      alert('Local storage cleared!');
      window.location.reload();
    }
  };


  return (
    <div className="container mt-5">
        <h1 className="mb-5 text-center">Welcome to the Home Page</h1>
      <div className="text-center">
        <button
          onClick={handleClearLocalStorage}
          type="submit"
          className="btn btn-danger  fw-bold"
        >
          Clear Local Storage
        </button>
      </div>
    </div>
  );
};

export default Home;

