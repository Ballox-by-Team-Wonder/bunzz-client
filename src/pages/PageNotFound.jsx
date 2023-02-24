import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row align-items-center justify-content-between vh-100 py-6">
            <div className="col-lg-6 order-lg-last">
              {/* Image */}
              <div className="text-center">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/6d1c69bbef7652122024ba706147890d56548737/4a591/assets/images/illustrations/error-illustration.svg"
                  alt="..."
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 py-6">
              {/* Title */}
              <h1 className="mb-2">404 Error</h1>
              {/* Heading */}
              <p className="text-secondary">
                Sorry, the page you're looking for cannot be found
              </p>
              <div className="row align-items-center justify-content-md-between text-center text-md-start">
                <div className="col-md-auto">
                  {/* Link */}
                  <Link to="/" className="btn btn-primary mt-3 mb-1">
                    Return to your dashboard
                  </Link>
                </div>
                <div className="col-md-auto">
                  {/* Link */}
                  <small className="mb-0 text-muted">
                    The page should be here.{" "}
                    <a href="javascript: void(0);" className="fw-semibold">
                      Contact Support
                    </a>
                  </small>
                </div>
              </div>
              {/* / .row */}
            </div>
          </div>
          {/* / .row */}
        </div>
      </div>
      {/* / .row */}
    </main>
  );
}

export default PageNotFound;
