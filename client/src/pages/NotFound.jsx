/**
 * Displays a friendly 404 error page when the user navigates to a non-existent route.
 * Provides a link to redirect users back to the homepage.
 */

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      {/* Redirect user back to home page */}
      <Link
        to="/"
        className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
