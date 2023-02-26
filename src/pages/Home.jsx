import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Home() {
  const user = useSelector(state => state.auth.user)

  return (
    <div>
      <Nav />
      <main>
        <div>
          {/* HEADER */}
          <Header />
          <div className="container-fluid">
            <div className="d-flex align-items-baseline justify-content-between">
              {/* Title */}
              <h1 className="h2">User</h1>
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Pages</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row">
              <div className="col-xl-9 d-flex">
                {/* Card */}
                <div className="card border-0 flex-fill w-100">
                  <div className="card-body p-7">
                    <div className="row align-items-center h-100">
                      <div className="col-auto d-flex ms-auto ms-md-0">
                        <div className="avatar avatar-circle avatar-xxl">
                          <img
                            src="assets/images/identify/nft.jpg"
                            alt="..."
                            className="avatar-img"
                            width={112}
                            height={112}
                          />
                        </div>
                      </div>
                      <div className="col-auto me-auto d-flex flex-column">
                        <h3 className="mb-0" style={{ textTransform: 'uppercase' }}>
                          {user.fullName}
                        </h3>
                        <span className="small text-secondary fw-bold d-block mb-4">
                          DAO MODERATOR
                        </span>
                        <div className="d-flex">
                          {/* Button */}
                          {/* <button type="button" class="btn btn-primary ">View your ID</button> */}
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#nftViewer"
                          >
                            View your ID
                          </button>
                          <div
                            className="modal fade"
                            id="nftViewer"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalScrollableTitle"
                            aria-hidden="true"
                          >
                            <div
                              className="modal-dialog modal-dialog-scrollable"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h3
                                    className="modal-title"
                                    id="exampleModalScrollableTitle"
                                  >
                                    Your ID: The Identify_DAO_NFT
                                  </h3>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <div className="card">
                                    <img
                                      src="assets/images/identify/uni2.png"
                                      className="card-img-top"
                                      alt="..."
                                    />
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        Your ID Is ready
                                      </h5>
                                      <p className="card-text">
                                        We are super excited to present you,
                                        your Unified identification which will
                                        enable you paas Kyc levels up to level
                                        3. This technology is backed by
                                        blockchain technology, where all your
                                        information will be stored privately on
                                        the Secret Network
                                      </p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                      <li className="list-group-item">
                                        ID No: 1234567899400
                                      </li>
                                      <li className="list-group-item">
                                        All Data: Synced
                                      </li>
                                      <li className="list-group-item">
                                        DAOs: Identify DAO
                                      </li>
                                    </ul>
                                    <div className="card-body">
                                      <a href="#" className="btn btn-primary">
                                        Generate Private key
                                      </a>
                                      <a href="#" className="btn btn-primary">
                                        Copy Private key
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-light"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  {/* <button type="button" class="btn btn-primary">Done</button> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Dropdown */}
                          <div className="dropdown">
                            <a
                              href="javascript: void(0);"
                              className="dropdown-toggle no-arrow d-flex align-items-center justify-content-center btn-light rounded-circle ms-2 text-body w-30px h-30px"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                height={16}
                                width={16}
                              >
                                <g>
                                  <circle
                                    cx="3.25"
                                    cy={12}
                                    r="3.25"
                                    style={{ fill: "currentColor" }}
                                  />
                                  <circle
                                    cx={12}
                                    cy={12}
                                    r="3.25"
                                    style={{ fill: "currentColor" }}
                                  />
                                  <circle
                                    cx="20.75"
                                    cy={12}
                                    r="3.25"
                                    style={{ fill: "currentColor" }}
                                  />
                                </g>
                              </svg>
                            </a>
                            <div
                              className="dropdown-menu"
                              data-popper-placement="bottom-end"
                              style={{
                                position: "absolute",
                                inset: "0px 0px auto auto",
                                margin: 0,
                                transform: "translate3d(-7.5px, 18px, 0px)",
                              }}
                            >
                              <a
                                href="help-center.html"
                                className="dropdown-item"
                              >
                                Learn more about the Identify_DAO_NFT
                              </a>
                              <a href="index.html" className="dropdown-item">
                                Connect my credentials
                              </a>
                              <a
                                href="javascript: void(0);"
                                className="dropdown-item"
                              >
                                Connect my wallet
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto ms-auto text-center mt-8 mt-md-0">
                        <div className="hstack d-inline-flex gap-6">
                          <div>
                            <h4 className="h2 mb-0">4.2/6</h4>
                            <p className="text-secondary mb-0">
                              User Activeness
                            </p>
                          </div>
                          <div className="vr" />
                          <div>
                            <h4 className="h2 mb-0">92%</h4>
                            <p className="text-secondary mb-0">
                              Community Tasks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 d-flex">
                {/* Card */}
                <div className="card border-0 flex-fill w-100">
                  <div className="card-body text-center">
                    <div className="row align-items-center h-100">
                      <div className="col">
                        <small className="text-secondary">
                          Profile completion
                        </small>
                        {/* Chart */}
                        <div className="chart-container w-100px h-100px mx-auto mt-3">
                          <canvas id="profileCompletionChart" />
                          {/* Labels */}
                          <div className="position-absolute top-50 start-50 translate-middle text-center">
                            <h3 className="mb-0">75%</h3>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* / .row */}
            <ul className="nav nav-tabs" id="userTab">
              <li className="nav-item" role="presentation">
                <a
                  href="javascript: void(0);"
                  className="nav-link active"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="javascript: void(0);"
                  className="nav-link"
                  id="projects-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#projects"
                  role="tab"
                  aria-controls="projects"
                  aria-selected="false"
                >
                  DAOs
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="javascript: void(0);"
                  className="nav-link d-flex align-items-center"
                  id="connections-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#connections"
                  role="tab"
                  aria-controls="connections"
                  aria-selected="false"
                >
                  Connections
                  <span className="badge text-bg-dark-soft rounded-circle d-inline-flex align-items-center justify-content-center w-20px h-20px ms-1">
                    4
                  </span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="javascript: void(0);"
                  className="nav-link"
                  id="files-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#files"
                  role="tab"
                  aria-controls="files"
                  aria-selected="false"
                >
                  Files
                </a>
              </li>
            </ul>
            <div className="tab-content pt-6" id="userTabContent">
              <div
                className="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-xl-4 col-xxl-3">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0">
                        {/* Title */}
                        <h2 className="card-header-title h4 text-uppercase mb-3">
                          Profile
                        </h2>
                      </div>
                      <div className="card-body pt-0">
                        <h3 className="h6 small text-secondary text-uppercase mb-3">
                          About
                        </h3>
                        <ul className="list-unstyled mb-7">
                          <li className="py-2" style={{ textTransform: 'uppercase' }}>
                            <svg
                              viewBox="0 0 24 24"
                              height={18}
                              width={18}
                              className="me-2"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.476,23.25a10.483,10.483,0,0,0-18.952,0"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M12,5.25A5.251,5.251,0,0,1,6.75,10.5a5.25,5.25,0,0,0,10.5,0A5.25,5.25,0,0,1,12,5.25Z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M17.836,19.027a14.576,14.576,0,0,0,3.391-1.007,1.5,1.5,0,0,0,.763-1.961l-1.376-3.21a4.5,4.5,0,0,1-.364-1.773V9A8.25,8.25,0,0,0,3.75,9v2.076a4.5,4.5,0,0,1-.364,1.773L2.01,16.059a1.5,1.5,0,0,0,.763,1.961,14.576,14.576,0,0,0,3.391,1.007"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                            { user.fullName }
                          </li>
                          <li className="py-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              height={18}
                              width={18}
                              className="me-2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M23.25 9.00001V4.65001C23.2501 4.35016 23.1602 4.05718 22.9922 3.80888C22.8241 3.56058 22.5854 3.36835 22.307 3.25701L16.307 0.857006C15.9494 0.714006 15.5506 0.714006 15.193 0.857006L8.80701 3.41201C8.44944 3.55501 8.05058 3.55501 7.69301 3.41201L1.77901 1.04601C1.6649 1.00027 1.5413 0.983292 1.41909 0.996554C1.29687 1.00982 1.17979 1.05292 1.07815 1.12206C0.97651 1.1912 0.893422 1.28427 0.836202 1.39308C0.778981 1.50188 0.749382 1.62308 0.75001 1.74601V16.119C0.74996 16.4189 0.839775 16.7118 1.00786 16.9601C1.17595 17.2084 1.4146 17.4007 1.69301 17.512L7.69301 19.912C8.05058 20.055 8.44944 20.055 8.80701 19.912L11.688 18.759"
                              />
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M8.25 3.519V20.019"
                              />
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M15.75 0.75V8.25"
                              />
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M18.75 11.324C19.9435 11.324 21.0881 11.7981 21.932 12.642C22.7759 13.4859 23.25 14.6305 23.25 15.824C23.25 17.745 20.562 21.4 19.341 22.962C19.2709 23.0518 19.1812 23.1244 19.0788 23.1743C18.9764 23.2243 18.8639 23.2502 18.75 23.2502C18.6361 23.2502 18.5236 23.2243 18.4212 23.1743C18.3188 23.1244 18.2291 23.0518 18.159 22.962C16.938 21.401 14.25 17.745 14.25 15.824C14.25 14.6305 14.7241 13.4859 15.568 12.642C16.4119 11.7981 17.5565 11.324 18.75 11.324Z"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M18.75 16.2C18.5429 16.2 18.375 16.0321 18.375 15.825C18.375 15.6179 18.5429 15.45 18.75 15.45"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M18.75 16.2C18.9571 16.2 19.125 16.0321 19.125 15.825C19.125 15.6179 18.9571 15.45 18.75 15.45"
                              />
                            </svg>
                            University Of Nigeria, Nsukka
                          </li>
                          <li className="py-2">
                            <svg
                              viewBox="0 0 24 24"
                              height={18}
                              width={18}
                              className="me-2"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.5 23.25L1.5 8.25 10.5 8.25 10.5 23.25"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M4.5 23.25L4.5 11.25"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M7.5 23.25L7.5 11.25"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M1.5 8.25L6 3 10.5 8.25"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M6 0.75L6 3"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M22.5,23.25V11.041a.751.751,0,0,0-.513-.712l-7.5-2.5a.749.749,0,0,0-.987.712V23.25"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M19.5 21L19.5 21.75"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M19.5 17.25L19.5 18"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M19.5 13.5L19.5 14.25"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M16.5 21L16.5 21.75"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M16.5 17.25L16.5 18"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M16.5 13.5L16.5 14.25"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                            Identify DAO
                          </li>
                        </ul>
                        <h3 className="h6 small text-secondary text-uppercase mb-3">
                          Contacts
                        </h3>
                        <ul className="list-unstyled mb-7">
                          <li className="py-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              height={18}
                              width={18}
                              className="me-2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M4.285 2.24H4.274C3.27412 2.46215 2.37995 3.01876 1.73921 3.81786C1.09847 4.61696 0.749519 5.61074 0.75 6.635V7.525C0.75 7.92282 0.908036 8.30436 1.18934 8.58566C1.47064 8.86696 1.85218 9.025 2.25 9.025H6C6.39783 9.025 6.77936 8.86696 7.06066 8.58566C7.34197 8.30436 7.5 7.92282 7.5 7.525V7.525C7.5 7.12718 7.65804 6.74564 7.93934 6.46434C8.22064 6.18304 8.60218 6.025 9 6.025H15C15.3978 6.025 15.7794 6.18304 16.0607 6.46434C16.342 6.74564 16.5 7.12718 16.5 7.525C16.5 7.92282 16.658 8.30436 16.9393 8.58566C17.2206 8.86696 17.6022 9.025 18 9.025H21.75C22.1478 9.025 22.5294 8.86696 22.8107 8.58566C23.092 8.30436 23.25 7.92282 23.25 7.525V6.635C23.25 5.61108 22.9009 4.61777 22.2602 3.81908C21.6195 3.02039 20.7255 2.46408 19.726 2.242H19.715C14.6191 1.25482 9.38116 1.25414 4.285 2.24V2.24Z"
                              />
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3.75 12.025V18.025C3.75 19.2185 4.22411 20.3631 5.06802 21.207C5.91193 22.0509 7.05653 22.525 8.25 22.525H15.75C16.9435 22.525 18.0881 22.0509 18.932 21.207C19.7759 20.3631 20.25 19.2185 20.25 18.025V12.025"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M7.875 14.275C7.66789 14.275 7.5 14.1071 7.5 13.9C7.5 13.6929 7.66789 13.525 7.875 13.525"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M7.875 14.275C8.08211 14.275 8.25 14.1071 8.25 13.9C8.25 13.6929 8.08211 13.525 7.875 13.525"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M7.875 18.025C7.66789 18.025 7.5 17.8571 7.5 17.65C7.5 17.4429 7.66789 17.275 7.875 17.275"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M7.875 18.025C8.08211 18.025 8.25 17.8571 8.25 17.65C8.25 17.4429 8.08211 17.275 7.875 17.275"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M12 14.275C11.7929 14.275 11.625 14.1071 11.625 13.9C11.625 13.6929 11.7929 13.525 12 13.525"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="1.5"
                                d="M12 14.275C12.2071 14.275 12.375 14.1071 12.375 13.9C12.375 13.6929 12.2071 13.525 12 13.525"
                              />
                              <g>
                                <path
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  d="M12 18.025C11.7929 18.025 11.625 17.8571 11.625 17.65C11.625 17.4429 11.7929 17.275 12 17.275"
                                />
                                <path
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  d="M12 18.025C12.2071 18.025 12.375 17.8571 12.375 17.65C12.375 17.4429 12.2071 17.275 12 17.275"
                                />
                              </g>
                              <g>
                                <path
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  d="M16.125 14.275C15.9179 14.275 15.75 14.1071 15.75 13.9C15.75 13.6929 15.9179 13.525 16.125 13.525"
                                />
                                <path
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  d="M16.125 14.275C16.3321 14.275 16.5 14.1071 16.5 13.9C16.5 13.6929 16.3321 13.525 16.125 13.525"
                                />
                              </g>
                              <g>
                                <path
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  d="M16.125 18.025C15.9179 18.025 15.75 17.8571 15.75 17.65C15.75 17.4429 15.9179 17.275 16.125 17.275"
                                />
                                <path
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  d="M16.125 18.025C16.3321 18.025 16.5 17.8571 16.5 17.65C16.5 17.4429 16.3321 17.275 16.125 17.275"
                                />
                              </g>
                            </svg>
                            {user.phoneNumber || '+234 900 0000'}
                          </li>
                          <li className="py-2">
                            <svg
                              viewBox="0 0 24 24"
                              height={18}
                              width={18}
                              className="me-2"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.25,12A5.25,5.25,0,1,1,12,6.75,5.25,5.25,0,0,1,17.25,12Z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M17.25,12v2.25a3,3,0,0,0,6,0V12a11.249,11.249,0,1,0-4.5,9"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                            {user.email}
                          </li>
                        </ul>
                        <h3 className="h6 small text-secondary text-uppercase mb-3">
                          DAOs
                        </h3>
                        <ul className="list-unstyled mb-0">
                          <li className="py-2">
                            <svg
                              viewBox="0 0 24 24"
                              height={18}
                              width={18}
                              className="me-2"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.874 17.625 A2.625 2.625 0 1 0 7.124 17.625 A2.625 2.625 0 1 0 1.874 17.625 Z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M8.249,23.25a4.25,4.25,0,0,0-7.5,0"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M16.874 17.625 A2.625 2.625 0 1 0 22.124 17.625 A2.625 2.625 0 1 0 16.874 17.625 Z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M23.249,23.25a4.25,4.25,0,0,0-7.5,0"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M9.374 3.375 A2.625 2.625 0 1 0 14.624 3.375 A2.625 2.625 0 1 0 9.374 3.375 Z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M15.248,8.25a4.269,4.269,0,0,0-6.5,0"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M9.05,19.707a8.277,8.277,0,0,0,5.944-.018"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M6.348,6a8.217,8.217,0,0,0-2.6,6c0,.253.015.5.038.75"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M20.211,12.75c.022-.248.038-.5.038-.75a8.214,8.214,0,0,0-2.6-6"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                            Member in 6 DAOs
                          </li>
                          <li className="py-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={18}
                              width={18}
                              className="me-2"
                            >
                              <defs>
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n                                                        .a,\n                                                        .b,\n                                                        .c {\n                                                            fill: none;\n                                                            stroke: currentColor;\n                                                            stroke-width: 1.5px;\n                                                        }\n\n                                                        .a,\n                                                        .b {\n                                                            stroke-miterlimit: 10;\n                                                        }\n\n                                                        .b,\n                                                        .c {\n                                                            stroke-linecap: round;\n                                                        }\n\n                                                        .c {\n                                                            stroke-linejoin: round;\n                                                        }\n                                                    ",
                                  }}
                                />
                              </defs>
                              <rect
                                className="a"
                                x="0.75"
                                y="1.25"
                                width="22.5"
                                height="21.5"
                                rx={1}
                              />
                              <line
                                className="a"
                                x1="8.75"
                                y1="1.25"
                                x2="8.75"
                                y2="22.75"
                              />
                              <line
                                className="b"
                                x1="3.25"
                                y1="5.75"
                                x2="6.25"
                                y2="5.75"
                              />
                              <line
                                className="b"
                                x1="12.81"
                                y1="10.577"
                                x2="18.53"
                                y2="10.577"
                              />
                              <line
                                className="b"
                                x1="3.25"
                                y1="10.25"
                                x2="6.25"
                                y2="10.25"
                              />
                              <line
                                className="b"
                                x1="3.25"
                                y1="14.75"
                                x2="6.25"
                                y2="14.75"
                              />
                              <rect
                                className="c"
                                x="12.81"
                                y="4.275"
                                width="5.72"
                                height="3.5"
                              />
                              <line
                                className="b"
                                x1="12.81"
                                y1="19.986"
                                x2="18.53"
                                y2="19.986"
                              />
                              <rect
                                className="c"
                                x="12.81"
                                y="13.75"
                                width="5.72"
                                height="3.5"
                              />
                            </svg>
                            Working for 6 DAOs
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 card-header-space-between">
                        {/* Title */}
                        <h2 className="card-header-title h4 text-uppercase">
                          DAOs Tasks
                        </h2>
                        <a
                          href="#projects"
                          data-toggle="tabLink"
                          className="small fw-bold"
                        >
                          View all
                        </a>
                      </div>
                      {/* Table */}
                      <div className="table-responsive">
                        <table
                          id="projectsTable"
                          className="table align-middle table-edge table-nowrap mb-0"
                        >
                          <thead className="thead-light">
                            <tr>
                              <th>Name</th>
                              <th className="w-50">Progress</th>
                              <th className="w-150px text-end">Hours spent</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="fw-bold">
                                <div className="d-flex align-items-center">
                                  <span className="avatar avatar-xs me-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="avatar-img"
                                      viewBox="0 0 240 180.037"
                                    >
                                      <path d="M238.553 22.362s-6.882-5.327-29.168-13.512C189.83 1.653 174.893 0 174.893 0l.074 42.679c0 18.039-20.385 37.194-55.199 37.194h-.996c-34.81 0-55.188-19.155-55.188-37.194L63.652 0S48.729 1.652 29.166 8.85C6.881 17.035 0 22.362 0 22.362c1.652 34.229 54.826 62.43 119.263 62.445h.015c64.441-.015 117.628-28.216 119.275-62.445" />
                                      <path d="M238.582 118.203s-6.881 5.312-29.167 13.504c-19.569 7.198-34.493 8.843-34.493 8.843l.075-42.672c0-18.035-20.386-37.183-55.199-37.183l-.49-.015h-.015l-.483.015c-34.817 0-55.195 19.148-55.195 37.183l.076 42.672s-14.931-1.645-34.493-8.843C6.919 123.515.024 118.203.024 118.203c1.652-34.226 54.84-62.427 119.285-62.449 64.44.022 117.629 28.223 119.273 62.449M11.611 179.946c-5.432 0-5.53-4.135-5.53-5.733v-7.528c0-.469-.03-1.072.936-1.072h2.799c.92 0 .868.635.868 1.072v7.528c0 .543.091 1.978 2.067 1.978h4.708c1.939 0 2.052-1.435 2.052-1.978v-7.528c0-.438-.062-1.072.853-1.072H23.2c1.02 0 .928.635.928 1.072v7.528c0 1.601-.106 5.733-5.545 5.733M37.632 179.026c-1.916-2.58-4.655-5.824-7.446-9.266v9.174c0 .407.098 1.012-.86 1.012h-2.618c-.943 0-.837-.604-.837-1.012v-12.268c0-.422-.038-1.057.837-1.057h5.107c1.441 0 3.501 2.897 4.844 4.828 1.049 1.449 2.965 3.651 4.255 5.312v-9.084c0-.422-.053-1.057.898-1.057h2.844c.905 0 .854.635.854 1.057v13.277h-5.243c-1.126.004-1.609.08-2.635-.916M47.244 179.946v-14.319h12.652c.77 0 5.968-.104 5.968 5.356 0 5.568.596 8.963-5.862 8.963h-6.82l-1.471-2.987v2.987m7.513-3.772c2.301 0 2.127-2.202 2.127-3.214 0-3.38-.951-3.518-2.467-3.518h-7.22v6.73l7.56.002zM70.813 165.718h11.664c.981 0 .853.646.853 1.84 0 1.116.151 1.75-.853 1.75h-9.219c-.242 0-1.086-.119-1.086.74 0 .875-.159 1.223.762 1.223h8.148l1.313 2.609c.188.362.166.68-.551.68h-8.436l-1.305-2.551v3.758c0 .875.777.709 1.003.709h9.574c.951 0 .868.664.868 1.75 0 1.162.083 1.812-.868 1.812H70.563c-1.011 0-2.98-.315-2.98-3.472v-7.891c0-.83.43-2.957 3.23-2.957M86.475 165.626h12.758c1.712 0 4.202-.016 4.202 4.604 0 3.018-.641 3.168-2.015 4.104 2.301.393 1.992 3.334 1.992 4.857 0 .771-.279.754-.506.754h-3.742c-.785 0-.596-1.236-.596-1.885 0-1.75-.981-1.676-1.366-1.676h-5.507c-.528-.921-1.554-2.973-1.554-2.973v5.945l-.702.588h-3.765l-.377-.469v-12.613c.001-.888.627-1.236 1.178-1.236m10.162 3.788h-5.681c-.951 0-.905.315-.905.604v2.563h5.847c2.837 0 2.837-.709 2.837-1.448-.001-1.478-.121-1.719-2.098-1.719M125.404 165.718c.936 0 1.848.422 2.832 2.338.664 1.373 5.297 9.748 6.277 11.498v.482h-4.828l-1.39-2.52h-5.872l-1.27-2.883c-.361.588-2.3 4.27-2.964 5.401h-4.843v-.315c.988-1.857 7.733-14.004 7.733-14.004m2.817 3.972l-2.369 4.299.219.213h4.391l.219-.213-2.24-4.314-.22.015M137.576 165.626h12.766c1.705 0 4.195-.016 4.195 4.604 0 3.018-.635 3.168-2.008 4.104 2.311.393 1.992 3.334 1.992 4.857 0 .771-.287.754-.514.754h-3.742c-.783 0-.588-1.236-.588-1.885 0-1.75-.98-1.676-1.357-1.676h-5.521c-.529-.921-1.557-2.973-1.557-2.973v5.945l-.691.588h-3.773l-.377-.469v-12.613c-.001-.888.632-1.236 1.175-1.236m10.171 3.788h-5.688c-.951 0-.904.315-.904.604v2.563h5.854c2.821 0 2.821-.709 2.821-1.448-.001-1.478-.105-1.719-2.083-1.719M165.688 179.946c-.949-1.78-3.59-6.699-5.371-9.928v8.933c0 .377.061.995-.859.995h-2.58c-.966 0-.891-.618-.891-.995v-12.269c0-.438-.061-1.057.891-1.057h4.467c.664 0 1.613-.15 2.67 1.977.801 1.705 2.489 5.252 3.668 7.123 1.176-1.871 2.912-5.418 3.711-7.123 1.041-2.127 1.961-1.977 2.717-1.977h4.451c.904 0 .799.619.799 1.057v12.269c0 .377.137.995-.799.995h-2.611c-.95 0-.875-.618-.875-.995v-8.933c-1.811 3.229-4.422 8.146-5.416 9.928M185.092 179.976c-4.225 0-4.043-4.525-4.043-7.482 0-2.688-.303-6.896 4.993-6.941h9.416c5.312 0 4.964 4.271 4.964 6.941 0 2.957.213 7.482-4.089 7.482m-2.731-3.682c2.144 0 2.067-2.218 2.067-3.695 0-1.344.317-3.427-2.476-3.427h-4.736c-2.775 0-2.445 2.083-2.445 3.427 0 1.479-.136 3.695 2.008 3.695h5.582zM207.499 179.946c-5.417 0-5.522-4.135-5.522-5.733v-7.528c0-.469-.029-1.072.937-1.072h2.808c.92 0 .858.635.858 1.072v7.528c0 .543.091 1.978 2.067 1.978h4.707c1.947 0 2.053-1.435 2.053-1.978v-7.528c0-.438-.045-1.072.859-1.072h2.821c1.026 0 .937.635.937 1.072v7.528c0 1.601-.092 5.733-5.553 5.733M223.04 165.626h12.767c1.705 0 4.193-.016 4.193 4.604 0 3.018-.648 3.168-2.021 4.104 2.31.393 2.008 3.334 2.008 4.857 0 .771-.287.754-.514.754h-3.742c-.77 0-.588-1.236-.588-1.885 0-1.75-.996-1.676-1.373-1.676h-5.508c-.527-.921-1.555-2.973-1.555-2.973v5.945l-.709.588h-3.758l-.377-.469v-12.613c0-.888.634-1.236 1.177-1.236m10.155 3.788h-5.674c-.951 0-.906.315-.906.604v2.563h5.855c2.821 0 2.821-.709 2.821-1.448.002-1.478-.119-1.719-2.096-1.719" />
                                    </svg>
                                  </span>
                                  Under Armour DAO
                                </div>
                              </td>
                              <td className="text-muted">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="progress w-100 h-5px">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "81%" }}
                                      aria-valuenow={81}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <span className="ms-3 text-muted">81%</span>
                                </div>
                              </td>
                              <td className="text-end">23 hrs</td>
                            </tr>
                            <tr>
                              <td className="fw-bold">
                                <div className="d-flex align-items-center">
                                  <span className="avatar avatar-xs me-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="avatar-img"
                                      viewBox="0 0 192.756 192.756"
                                    >
                                      <g fillRule="evenodd" clipRule="evenodd">
                                        <path
                                          fill="#fff"
                                          d="M0 0h192.756v192.756H0V0z"
                                        />
                                        <path
                                          d="M178.691 171.004c-22.973-15.594-52.488-47.338-52.488-64.881 0-16.428 20.328-28.262 20.328-44.969 0-14.758-11.277-31.464-19.492-39.401H45.452c7.657 8.354 19.074 24.644 19.074 39.401 0 16.707-19.91 28.542-19.91 44.969.14 20.328 29.377 48.73 47.477 64.881h86.598z"
                                          fill="#c9222f"
                                        />
                                        <path d="M29.858 164.461v-2.646c0-.834-.139-1.531-.417-1.809-.139-.279-.557-.559-1.252-.559-.557 0-.975.279-1.253.559-.278.277-.417.975-.417 1.947v2.508h3.339zm10.164 5.707H22.201v-8.631c0-2.646.417-4.455 1.253-5.568.835-1.254 2.088-1.811 3.897-1.811 1.114 0 1.95.277 2.646.695.696.557 1.392 1.254 1.811 2.229a3.779 3.779 0 0 1 1.113-2.229c.696-.418 1.531-.695 2.784-.695l2.367-.141h.139c.696 0 1.114-.139 1.114-.418h.695v5.711c-.417.137-.834.137-1.113.277h-2.505c-.975 0-1.671.277-1.95.557-.417.416-.557.975-.557 1.949v2.367h6.125v5.708h.002zm-17.821-24.781h17.821v5.848H22.201v-5.848zm10.86-15.037v-5.291c2.367.141 4.177.975 5.43 2.367 1.392 1.531 1.949 3.48 1.949 6.127 0 2.785-.835 5.012-2.506 6.682-1.67 1.67-3.898 2.367-6.822 2.367-2.923 0-5.151-.697-6.822-2.367s-2.505-3.76-2.505-6.543c0-2.646.556-4.596 1.81-6.127 1.252-1.531 3.063-2.227 5.29-2.506v5.43c-.835.141-1.532.418-1.949.975-.557.418-.696 1.254-.696 2.09 0 1.113.418 1.949 1.113 2.506.836.557 2.089.834 3.76.834s2.785-.277 3.62-.834 1.253-1.533 1.253-2.645c0-.836-.279-1.533-.696-2.09-.558-.557-1.254-.837-2.229-.975zm6.961-7.797H22.201v-5.709h5.987v-5.15h-5.987v-5.709h17.821v5.709h-6.961v5.15h6.961v5.709zm0-25.061v5.15H22.201v-6.96l8.911-2.506c.14 0 .418-.14.835-.14.418-.139.975-.278 1.671-.417-.557-.139-.975-.278-1.531-.417-.417 0-.696-.14-.975-.14l-8.911-2.506v-6.961h17.821v5.151H29.719c-.557-.139-1.113-.139-1.531-.139.835.278 1.81.417 2.923.696l.14.139 8.771 2.089v4.038l-8.492 2.229c-.418.139-.835.139-1.393.277-.418.139-1.113.279-1.949.418h11.834v-.001zm-8.91-23.251c1.671 0 2.924-.278 3.759-.835.696-.557 1.114-1.393 1.114-2.646s-.417-2.088-1.114-2.646c-.835-.556-2.088-.835-3.759-.835s-2.923.279-3.76.835c-.695.557-1.113 1.393-1.113 2.646s.418 2.089 1.113 2.646c.836.557 2.089.835 3.76.835zm0 5.708c-2.923 0-5.151-.835-6.822-2.506-1.671-1.531-2.505-3.759-2.505-6.683 0-2.784.834-5.012 2.505-6.683s3.899-2.506 6.822-2.506c2.924 0 5.152.835 6.822 2.506 1.671 1.671 2.506 3.898 2.506 6.683 0 2.924-.835 5.152-2.506 6.683-1.67 1.671-3.898 2.506-6.822 2.506zm8.91-21.023H22.201v-5.43l8.354-4.873c.139-.14.557-.418.975-.557.417-.139.835-.279 1.531-.557-.418.139-.696.139-1.114.139H22.201v-5.429h17.821v5.429l-8.213 5.012-1.114.557c-.417.139-.836.278-1.392.557.277-.139.556-.139.975-.139.278 0 .834-.14 1.392-.14h8.353v5.431h-.001zm-4.594-25.758v-1.53c0-1.393-.279-2.367-.975-2.924-.557-.557-1.67-.835-3.341-.835-1.532 0-2.646.278-3.341.835-.696.557-.975 1.532-.975 2.924v1.53h8.632zm4.594 5.709H22.201v-6.822c0-1.81.139-3.062.279-3.898.139-.975.417-1.67.695-2.366.836-1.114 1.811-2.089 3.063-2.646 1.393-.696 2.924-.975 4.873-.975s3.759.417 5.013 1.113c1.392.835 2.506 1.95 3.063 3.342.278.697.556 1.392.556 2.227.139.836.278 2.228.278 4.177v5.848h.001z" />
                                      </g>
                                    </svg>
                                  </span>
                                  Richmond DAO
                                </div>
                              </td>
                              <td className="text-muted">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="progress w-100 h-5px">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "39%" }}
                                      aria-valuenow={39}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <span className="ms-3 text-muted">39%</span>
                                </div>
                              </td>
                              <td className="text-end">19 hrs</td>
                            </tr>
                            <tr>
                              <td className="fw-bold">
                                <div className="d-flex align-items-center">
                                  <span className="avatar avatar-xs me-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="avatar-img"
                                      viewBox="0 0 192.756 192.756"
                                    >
                                      <g fillRule="evenodd" clipRule="evenodd">
                                        <path
                                          fill="#fff"
                                          d="M0 0h192.756v192.756H0V0z"
                                        />
                                        <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z" />
                                      </g>
                                    </svg>
                                  </span>
                                  Nike DAO
                                </div>
                              </td>
                              <td className="text-muted">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="progress w-100 h-5px">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "0%" }}
                                      aria-valuenow={0}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <span className="ms-3 text-muted">0%</span>
                                </div>
                              </td>
                              <td className="text-end">1 hr</td>
                            </tr>
                            <tr>
                              <td className="fw-bold">
                                <div className="d-flex align-items-center">
                                  <span className="avatar avatar-xs me-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="avatar-img"
                                      viewBox="0 0 45.285 25.488"
                                    >
                                      <path
                                        fill="#fff22d"
                                        d="M0 0h45.285v25.488H0V0z"
                                      />
                                      <path
                                        d="M5.733 2.388h33.792a3.697 3.697 0 0 1 3.686 3.686v13.435a3.697 3.697 0 0 1-3.686 3.686H5.733a3.697 3.697 0 0 1-3.686-3.686V6.073a3.696 3.696 0 0 1 3.686-3.685z"
                                        fill="#cf4037"
                                      />
                                      <path
                                        d="M5.733 4.027h33.792c1.126 0 2.047.921 2.047 2.046v13.435a2.053 2.053 0 0 1-2.047 2.046H5.733a2.052 2.052 0 0 1-2.046-2.046V6.073c0-1.125.92-2.046 2.046-2.046z"
                                        fill="#fff"
                                      />
                                      <path d="M5.733 4.949h33.792c.618 0 1.125.506 1.125 1.124v13.435c0 .618-.506 1.124-1.125 1.124H5.733a1.128 1.128 0 0 1-1.125-1.124V6.073c0-.618.506-1.124 1.125-1.124z" />
                                      <path
                                        d="M37.069 12.748c0 .188.056.332.167.435a.556.556 0 0 0 .391.153.569.569 0 0 0 .57-.588.46.46 0 0 0-.173-.382.622.622 0 0 0-.397-.137.585.585 0 0 0-.389.142.463.463 0 0 0-.169.377zm-1.756.001c0-.304.057-.597.172-.877a2.33 2.33 0 0 1 .48-.746 2.203 2.203 0 0 1 1.594-.682c.36 0 .688.062.984.186.298.123.551.292.762.508s.373.456.482.724c.11.266.166.54.166.817 0 .494-.113.927-.339 1.301a2.324 2.324 0 0 1-.891.862 2.419 2.419 0 0 1-1.164.299c-.237 0-.485-.051-.746-.15a2.527 2.527 0 0 1-.737-.456c-.23-.205-.417-.456-.556-.757s-.207-.645-.207-1.029zM28.226 13.384v1.737c-1.373.019-2.58-.612-2.58-2.356 0-1.467.986-2.239 2.361-2.239 1.375 0 2.329.925 2.329 2.356v2.239H28.51v-2.255c0-.406-.22-.613-.483-.615s-.569.125-.577.492.12.696.776.641zM12.189 12.183v-1.688c1.422-.019 2.592.787 2.592 2.281 0 1.342-1.136 2.364-2.474 2.364s-2.203-1.236-2.203-2.356V8.733h1.701v3.98c0 .405.232.713.608.715.375.002.657-.176.651-.642s-.406-.658-.875-.603zM33.097 13.297v1.679c-1.322.02-2.469-.854-2.484-2.211-.015-1.321.95-2.239 2.274-2.239s2.242.925 2.242 2.356v1.704c0 1.279-1.133 2.341-2.64 2.341h-1.685l.001-1.557h1.689c.588 0 .956-.069.956-.7v-1.892c0-.406-.292-.613-.546-.615s-.548.125-.556.492c-.005.368.118.697.749.642zM18.826 10.521h1.768v2.563c0 .155.141.306.328.306.178 0 .352-.135.352-.306v-2.563h1.769v2.668c0 .401-.103.749-.307 1.042a1.941 1.941 0 0 1-.806.666 2.494 2.494 0 0 1-1.806.102 2.039 2.039 0 0 1-.664-.369 1.737 1.737 0 0 1-.464-.609 1.95 1.95 0 0 1-.17-.831v-2.669zM23.243 15.121h1.769v-2.563c0-.155.141-.329.327-.328h.222v-1.696a2.449 2.449 0 0 0-1.02.11 2.024 2.024 0 0 0-.663.369 1.734 1.734 0 0 0-.465.61 1.96 1.96 0 0 0-.17.83v2.668z"
                                        fill="#fff"
                                      />
                                      <path
                                        d="M12.384 6.669l-.198.003v3.483a2.687 2.687 0 0 1 2.946 2.668 2.687 2.687 0 0 1-2.683 2.681c-1.346 0-2.684-1.364-2.684-2.709V6.713H6.223l.002 6.115c.001 3.392 2.767 6.159 6.159 6.159s6.159-2.767 6.159-6.159-2.767-6.159-6.159-6.159z"
                                        fill="#cf4037"
                                      />
                                      <path
                                        d="M38.906 10.127c0-.218.071-.394.214-.526a.747.747 0 0 1 .493-.216h.027a.733.733 0 0 1 .495.204.685.685 0 0 1 .226.539.686.686 0 0 1-.226.539.742.742 0 0 1-.495.204h-.003-.024a.752.752 0 0 1-.493-.216.695.695 0 0 1-.214-.528zm.138 0v.03c.007.15.064.288.171.413a.523.523 0 0 0 .419.188.524.524 0 0 0 .422-.188.676.676 0 0 0 .17-.413v-.014-.016-.003-.004a.672.672 0 0 0-.162-.428.528.528 0 0 0-.43-.195.525.525 0 0 0-.423.191.674.674 0 0 0-.167.42v.019zm.325-.378h.322l.036.002a.49.49 0 0 0 .038.004c.041.01.079.03.114.06.034.03.052.079.052.148l-.001.022-.003.022c-.006.024-.018.047-.035.069s-.046.041-.084.056v.004c.034.007.058.022.071.044a.215.215 0 0 1 .026.072l.004.032c.002.01.002.02.002.03l.002.038c0 .012 0 .022.002.032 0 .021.001.038.003.052a.115.115 0 0 0 .017.045l.005.008h-.14a.365.365 0 0 1-.032-.054.251.251 0 0 1-.01-.06l.001-.055.001-.021.001-.02a.1.1 0 0 0-.025-.07c-.017-.018-.058-.027-.123-.027h-.11v.307h-.136v-.74h.002zm.135.333h.155c.052 0 .088-.012.106-.036a.128.128 0 0 0 .028-.083c0-.047-.015-.077-.044-.091a.235.235 0 0 0-.104-.021h-.14v.231h-.001z"
                                        fill="#fff"
                                      />
                                    </svg>
                                  </span>
                                  Burago brand DAO
                                </div>
                              </td>
                              <td className="text-muted">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="progress w-100 h-5px">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "11%" }}
                                      aria-valuenow={11}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <span className="ms-3 text-muted">11%</span>
                                </div>
                              </td>
                              <td className="text-end">8 hrs</td>
                            </tr>
                            <tr>
                              <td className="fw-bold">
                                <div className="d-flex align-items-center">
                                  <span className="avatar avatar-xs me-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="avatar-img"
                                      viewBox="0.1 0.1 299.8 120.125"
                                    >
                                      <path
                                        d="M38.867 26.309C17.721 26.309.1 35.279.1 62.345c0 21.442 11.849 34.944 39.312 34.944 32.326 0 34.398-21.294 34.398-21.294H58.147s-3.358 11.466-19.69 11.466c-13.302 0-22.869-8.986-22.869-21.58h59.861v-7.904c0-12.46-7.91-31.668-36.582-31.668zM38.32 36.41c12.662 0 21.294 7.757 21.294 19.383h-43.68c0-12.343 11.268-19.383 22.386-19.383z"
                                        fill="#e53238"
                                      />
                                      <path
                                        d="M75.438.1v83.597c0 4.745-.339 11.408-.339 11.408h14.939s.537-4.785.537-9.159c0 0 7.381 11.548 27.451 11.548 21.134 0 35.49-14.674 35.49-35.695 0-19.557-13.186-35.286-35.456-35.286-20.854 0-27.334 11.261-27.334 11.261V.1H75.438zm38.766 36.753c14.352 0 23.479 10.652 23.479 24.946 0 15.328-10.541 25.355-23.376 25.355-15.318 0-23.581-11.961-23.581-25.219 0-12.354 7.414-25.082 23.478-25.082z"
                                        fill="#0064d2"
                                      />
                                      <path
                                        d="M190.645 26.309c-31.812 0-33.852 17.418-33.852 20.202h15.834s.83-10.169 16.926-10.169c10.459 0 18.564 4.788 18.564 13.991v3.276h-18.564c-24.645 0-37.674 7.21-37.674 21.841 0 14.398 12.038 22.232 28.307 22.232 22.172 0 29.314-12.251 29.314-12.251 0 4.873.375 9.675.375 9.675h14.076s-.545-5.952-.545-9.76V52.432c0-21.582-17.408-26.123-32.761-26.123zm17.472 37.128v4.368c0 5.697-3.516 19.861-24.212 19.861-11.333 0-16.192-5.656-16.192-12.217 0-11.935 16.363-12.012 40.404-12.012z"
                                        fill="#f5af02"
                                      />
                                      <path
                                        d="M214.879 29.041h17.813l25.565 51.218 25.506-51.218H299.9l-46.459 91.184h-16.927l13.406-25.419-35.041-65.765z"
                                        fill="#86b817"
                                      />
                                    </svg>
                                  </span>
                                  eBay DAO
                                </div>
                              </td>
                              <td className="text-muted">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="progress w-100 h-5px">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "95%" }}
                                      aria-valuenow={95}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <span className="ms-3 text-muted">95%</span>
                                </div>
                              </td>
                              <td className="text-end">12 hrs</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>{" "}
                      {/* / .table-responsive */}
                    </div>
                    <div className="row">
                      <div className="col-12 col-xl">
                        {/* Card */}
                        <div className="card border-0 flex-fill w-100">
                          <div className="card-header card-header-space-between">
                            {/* Title */}
                            <h2 className="card-header-title h4 text-uppercase">
                              Files
                            </h2>
                            {/* Link */}
                            <a
                              href="#files"
                              data-toggle="tabLink"
                              className="small fw-bold"
                            >
                              View all
                            </a>
                          </div>
                          {/* Table */}
                          <div className="table-responsive">
                            <table className="table table-sm table-borderless align-middle mb-3">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <svg
                                        width={23}
                                        height={30}
                                        className="me-3"
                                        viewBox="0 0 32 42"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <title>google-docs</title>
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <g
                                            transform="translate(-143.000000, -703.000000)"
                                            fillRule="nonzero"
                                          >
                                            <g transform="translate(29.000000, 595.000000)">
                                              <g transform="translate(0.922481, 42.000000)">
                                                <g transform="translate(113.077519, 66.000000)">
                                                  <path
                                                    d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                    fill="#2196F3"
                                                  />
                                                  <polygon
                                                    fill="#BBDEFB"
                                                    points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                                  ></polygon>
                                                  <polygon
                                                    fill="#1565C0"
                                                    points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                                  ></polygon>
                                                  <path
                                                    d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                    fill="#E3F2FD"
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <div className="d-flex flex-column">
                                        <span className="fw-bold d-block">
                                          Employee handbook
                                        </span>
                                        <span className="fs-6 text-muted">
                                          Updated 17 mins ago, 18 kb
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    {/* Dropdown */}
                                    <div className="dropdown float-end">
                                      <a
                                        href="javascript: void(0);"
                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                        >
                                          <g>
                                            <circle
                                              cx={12}
                                              cy="3.25"
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                            <circle
                                              cx={12}
                                              cy={12}
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                            <circle
                                              cx={12}
                                              cy="20.75"
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                          </g>
                                        </svg>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <span className="dropdown-header">
                                            SETTINGS
                                          </span>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Preview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.001 3.75L12.001 15.75"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Download
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.425 16.845L19.075 14.655"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.588 18.835L18.912 20.165"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Share
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Rename
                                          </a>
                                        </li>
                                        <li>
                                          <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              height={12}
                                              width={14}
                                              className="me-2"
                                            >
                                              <g>
                                                <line
                                                  x1={1}
                                                  y1={5}
                                                  x2={23}
                                                  y2={5}
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <path
                                                  d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <line
                                                  x1="9.75"
                                                  y1="17.75"
                                                  x2="9.75"
                                                  y2="10.25"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <line
                                                  x1="14.25"
                                                  y1="17.75"
                                                  x2="14.25"
                                                  y2="10.25"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <path
                                                  d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5px",
                                                  }}
                                                />
                                              </g>
                                            </svg>
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <svg
                                        width={23}
                                        height={30}
                                        className="me-3"
                                        viewBox="0 0 32 42"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <title>google-docs</title>
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <g
                                            transform="translate(-143.000000, -703.000000)"
                                            fillRule="nonzero"
                                          >
                                            <g transform="translate(29.000000, 595.000000)">
                                              <g transform="translate(0.922481, 42.000000)">
                                                <g transform="translate(113.077519, 66.000000)">
                                                  <path
                                                    d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                    fill="#2196F3"
                                                  />
                                                  <polygon
                                                    fill="#BBDEFB"
                                                    points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                                  ></polygon>
                                                  <polygon
                                                    fill="#1565C0"
                                                    points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                                  ></polygon>
                                                  <path
                                                    d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                    fill="#E3F2FD"
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <div className="d-flex flex-column">
                                        <span className="fw-bold d-block">
                                          Digital Media 2022
                                        </span>
                                        <span className="fs-6 text-muted">
                                          Updated 32 mins ago, 32 kb
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    {/* Dropdown */}
                                    <div className="dropdown float-end">
                                      <a
                                        href="javascript: void(0);"
                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                        >
                                          <g>
                                            <circle
                                              cx={12}
                                              cy="3.25"
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                            <circle
                                              cx={12}
                                              cy={12}
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                            <circle
                                              cx={12}
                                              cy="20.75"
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                          </g>
                                        </svg>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <span className="dropdown-header">
                                            SETTINGS
                                          </span>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Preview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.001 3.75L12.001 15.75"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Download
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.425 16.845L19.075 14.655"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.588 18.835L18.912 20.165"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Share
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Rename
                                          </a>
                                        </li>
                                        <li>
                                          <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              height={12}
                                              width={14}
                                              className="me-2"
                                            >
                                              <g>
                                                <line
                                                  x1={1}
                                                  y1={5}
                                                  x2={23}
                                                  y2={5}
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <path
                                                  d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <line
                                                  x1="9.75"
                                                  y1="17.75"
                                                  x2="9.75"
                                                  y2="10.25"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <line
                                                  x1="14.25"
                                                  y1="17.75"
                                                  x2="14.25"
                                                  y2="10.25"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <path
                                                  d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5px",
                                                  }}
                                                />
                                              </g>
                                            </svg>
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <svg
                                        width={23}
                                        height={30}
                                        className="me-3"
                                        viewBox="0 0 32 42"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <title>google-sheets</title>
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <g
                                            transform="translate(-719.000000, -703.000000)"
                                            fillRule="nonzero"
                                          >
                                            <g transform="translate(29.000000, 595.000000)">
                                              <g transform="translate(576.922481, 42.000000)">
                                                <g transform="translate(113.077519, 66.000000)">
                                                  <path
                                                    d="M28.915942,41.8782609 L2.99130435,41.8782609 C1.33910725,41.8782609 0,40.5391536 0,38.8869565 L0,2.99130435 C0,1.33910725 1.33910725,0 2.99130435,0 L21.9362319,0 L31.9072464,9.97101449 L31.9072464,38.8869565 C31.9072464,40.5391536 30.5681391,41.8782609 28.915942,41.8782609 Z"
                                                    fill="#43A047"
                                                  />
                                                  <polygon
                                                    fill="#C8E6C9"
                                                    points="31.9072464 9.97101449 21.9362319 9.97101449 21.9362319 0"
                                                  ></polygon>
                                                  <polygon
                                                    fill="#2E7D32"
                                                    points="21.9362319 9.97101449 31.9072464 19.942029 31.9072464 9.97101449"
                                                  ></polygon>
                                                  <path
                                                    d="M22.9333333,19.942029 L8.97391304,19.942029 L6.97971014,19.942029 L6.97971014,21.9362319 L6.97971014,23.9304348 L6.97971014,25.9246377 L6.97971014,27.9188406 L6.97971014,29.9130435 L6.97971014,31.9072464 L6.97971014,33.9014493 L24.9275362,33.9014493 L24.9275362,31.9072464 L24.9275362,29.9130435 L24.9275362,27.9188406 L24.9275362,25.9246377 L24.9275362,23.9304348 L24.9275362,21.9362319 L24.9275362,19.942029 L22.9333333,19.942029 Z M8.97391304,21.9362319 L12.9623188,21.9362319 L12.9623188,23.9304348 L8.97391304,23.9304348 L8.97391304,21.9362319 Z M8.97391304,25.9246377 L12.9623188,25.9246377 L12.9623188,27.9188406 L8.97391304,27.9188406 L8.97391304,25.9246377 Z M8.97391304,29.9130435 L12.9623188,29.9130435 L12.9623188,31.9072464 L8.97391304,31.9072464 L8.97391304,29.9130435 Z M22.9333333,31.9072464 L14.9565217,31.9072464 L14.9565217,29.9130435 L22.9333333,29.9130435 L22.9333333,31.9072464 Z M22.9333333,27.9188406 L14.9565217,27.9188406 L14.9565217,25.9246377 L22.9333333,25.9246377 L22.9333333,27.9188406 Z M22.9333333,23.9304348 L14.9565217,23.9304348 L14.9565217,21.9362319 L22.9333333,21.9362319 L22.9333333,23.9304348 Z"
                                                    fill="#E8F5E9"
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <div className="d-flex flex-column">
                                        <span className="fw-bold d-block">
                                          Brand advertising
                                        </span>
                                        <span className="fs-6 text-muted">
                                          Updated 2 days ago, 1.2 MB
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    {/* Dropdown */}
                                    <div className="dropdown float-end">
                                      <a
                                        href="javascript: void(0);"
                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                        >
                                          <g>
                                            <circle
                                              cx={12}
                                              cy="3.25"
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                            <circle
                                              cx={12}
                                              cy={12}
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                            <circle
                                              cx={12}
                                              cy="20.75"
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                          </g>
                                        </svg>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <span className="dropdown-header">
                                            SETTINGS
                                          </span>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Preview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.001 3.75L12.001 15.75"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Download
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.425 16.845L19.075 14.655"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.588 18.835L18.912 20.165"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Share
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Rename
                                          </a>
                                        </li>
                                        <li>
                                          <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              height={12}
                                              width={14}
                                              className="me-2"
                                            >
                                              <g>
                                                <line
                                                  x1={1}
                                                  y1={5}
                                                  x2={23}
                                                  y2={5}
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <path
                                                  d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <line
                                                  x1="9.75"
                                                  y1="17.75"
                                                  x2="9.75"
                                                  y2="10.25"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <line
                                                  x1="14.25"
                                                  y1="17.75"
                                                  x2="14.25"
                                                  y2="10.25"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <path
                                                  d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5px",
                                                  }}
                                                />
                                              </g>
                                            </svg>
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <svg
                                        width={23}
                                        height={30}
                                        className="me-3"
                                        viewBox="0 0 32 42"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <title>google-slides</title>
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <g
                                            transform="translate(-1007.000000, -703.000000)"
                                            fillRule="nonzero"
                                          >
                                            <g transform="translate(29.000000, 595.000000)">
                                              <g transform="translate(864.922481, 42.000000)">
                                                <g transform="translate(113.077519, 66.000000)">
                                                  <path
                                                    d="M28.915942,41.8782609 L2.99130435,41.8782609 C1.33910725,41.8782609 0,40.5391536 0,38.8869565 L0,2.99130435 C0,1.33910725 1.33910725,0 2.99130435,0 L21.9362319,0 L31.9072464,9.97101449 L31.9072464,38.8869565 C31.9072464,40.5391536 30.5681391,41.8782609 28.915942,41.8782609 Z"
                                                    fill="#FFC107"
                                                  />
                                                  <polygon
                                                    fill="#FFECB3"
                                                    points="31.9072464 9.97101449 21.9362319 9.97101449 21.9362319 0"
                                                  ></polygon>
                                                  <polygon
                                                    fill="#FFA000"
                                                    points="21.9362319 9.97101449 31.9072464 19.942029 31.9072464 9.97101449"
                                                  ></polygon>
                                                  <path
                                                    d="M21.9362319,18.9449275 L9.97101449,18.9449275 C8.8742029,18.9449275 7.97681159,19.8423188 7.97681159,20.9391304 L7.97681159,32.9043478 C7.97681159,34.0011594 8.8742029,34.8985507 9.97101449,34.8985507 L21.9362319,34.8985507 C23.0330435,34.8985507 23.9304348,34.0011594 23.9304348,32.9043478 L23.9304348,20.9391304 C23.9304348,19.8423188 23.0330435,18.9449275 21.9362319,18.9449275 Z M21.9362319,22.9333333 L21.9362319,30.9101449 L9.97101449,30.9101449 L9.97101449,22.9333333 L21.9362319,22.9333333 Z"
                                                    fill="#FFFFFF"
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <div className="d-flex flex-column">
                                        <span className="fw-bold d-block">
                                          Meeting minutes
                                        </span>
                                        <span className="fs-6 text-muted">
                                          Updated 3 days ago, 3 kb
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    {/* Dropdown */}
                                    <div className="dropdown float-end">
                                      <a
                                        href="javascript: void(0);"
                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                        >
                                          <g>
                                            <circle
                                              cx={12}
                                              cy="3.25"
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                            <circle
                                              cx={12}
                                              cy={12}
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                            <circle
                                              cx={12}
                                              cy="20.75"
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                          </g>
                                        </svg>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <span className="dropdown-header">
                                            SETTINGS
                                          </span>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Preview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.001 3.75L12.001 15.75"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Download
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.425 16.845L19.075 14.655"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.588 18.835L18.912 20.165"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Share
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Rename
                                          </a>
                                        </li>
                                        <li>
                                          <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              height={12}
                                              width={14}
                                              className="me-2"
                                            >
                                              <g>
                                                <line
                                                  x1={1}
                                                  y1={5}
                                                  x2={23}
                                                  y2={5}
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <path
                                                  d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <line
                                                  x1="9.75"
                                                  y1="17.75"
                                                  x2="9.75"
                                                  y2="10.25"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <line
                                                  x1="14.25"
                                                  y1="17.75"
                                                  x2="14.25"
                                                  y2="10.25"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <path
                                                  d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5px",
                                                  }}
                                                />
                                              </g>
                                            </svg>
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <svg
                                        width={23}
                                        height={30}
                                        className="me-3"
                                        viewBox="0 0 33 43"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <title>google-forms</title>
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <g
                                            transform="translate(-431.000000, -915.000000)"
                                            fillRule="nonzero"
                                          >
                                            <g transform="translate(29.000000, 595.000000)">
                                              <g transform="translate(289.422481, 256.000000)">
                                                <g transform="translate(113.077519, 64.000000)">
                                                  <path
                                                    d="M28.9669565,41.9478261 L3.03304348,41.9478261 C1.3773913,41.9478261 0.0417391304,40.6121739 0.0417391304,38.9565217 L0.0417391304,3.06086957 C0.0417391304,1.40521739 1.3773913,0.0695652174 3.03304348,0.0695652174 L21.9826087,0.0695652174 L31.9582609,10.0452174 L31.9582609,38.9565217 C31.9582609,40.6121739 30.6086957,41.9478261 28.9669565,41.9478261 Z"
                                                    fill="#673AB7"
                                                  />
                                                  <polygon
                                                    fill="#B6A2DA"
                                                    points="31.9582609 10.0452174 21.9826087 10.0452174 21.9826087 0.0695652174"
                                                  ></polygon>
                                                  <polygon
                                                    fill="#5C34A4"
                                                    points="21.9826087 10.0452174 31.9582609 20.0208696 31.9582609 10.0452174"
                                                  ></polygon>
                                                  <path
                                                    d="M11.0191304,20.0069565 L24.973913,20.0069565 L24.973913,21.9965217 L11.0191304,21.9965217 L11.0191304,20.0069565 Z M11.0191304,25.0017391 L24.973913,25.0017391 L24.973913,26.9913043 L11.0191304,26.9913043 L11.0191304,25.0017391 Z M11.0191304,29.9826087 L24.973913,29.9826087 L24.973913,31.9721739 L11.0191304,31.9721739 L11.0191304,29.9826087 Z M7.02608696,20.0069565 L9.01565217,20.0069565 L9.01565217,21.9965217 L7.02608696,21.9965217 L7.02608696,20.0069565 Z M7.02608696,25.0017391 L9.01565217,25.0017391 L9.01565217,26.9913043 L7.02608696,26.9913043 L7.02608696,25.0017391 Z M7.02608696,29.9826087 L9.01565217,29.9826087 L9.01565217,31.9721739 L7.02608696,31.9721739 L7.02608696,29.9826087 Z"
                                                    fill="#E8F5E9"
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <div className="d-flex flex-column">
                                        <span className="fw-bold d-block">
                                          Annual report
                                        </span>
                                        <span className="fs-6 text-muted">
                                          Updated 18 days ago, 21 kb
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    {/* Dropdown */}
                                    <div className="dropdown float-end">
                                      <a
                                        href="javascript: void(0);"
                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                        >
                                          <g>
                                            <circle
                                              cx={12}
                                              cy="3.25"
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                            <circle
                                              cx={12}
                                              cy={12}
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                            <circle
                                              cx={12}
                                              cy="20.75"
                                              r="3.25"
                                              style={{ fill: "currentColor" }}
                                            />
                                          </g>
                                        </svg>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <span className="dropdown-header">
                                            SETTINGS
                                          </span>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Preview
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.001 3.75L12.001 15.75"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Download
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.425 16.845L19.075 14.655"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M15.588 18.835L18.912 20.165"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Share
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              viewBox="0 0 24 24"
                                              height={14}
                                              width={14}
                                              className="me-2"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                              <path
                                                d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                              />
                                            </svg>
                                            Rename
                                          </a>
                                        </li>
                                        <li>
                                          <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="javascript: void(0);"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              height={12}
                                              width={14}
                                              className="me-2"
                                            >
                                              <g>
                                                <line
                                                  x1={1}
                                                  y1={5}
                                                  x2={23}
                                                  y2={5}
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <path
                                                  d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <line
                                                  x1="9.75"
                                                  y1="17.75"
                                                  x2="9.75"
                                                  y2="10.25"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <line
                                                  x1="14.25"
                                                  y1="17.75"
                                                  x2="14.25"
                                                  y2="10.25"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5",
                                                  }}
                                                />
                                                <path
                                                  d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                                  style={{
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "1.5px",
                                                  }}
                                                />
                                              </g>
                                            </svg>
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>{" "}
                          {/* / .table-responsive */}
                        </div>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
              <div
                className="tab-pane fade"
                id="projects"
                role="tabpanel"
                aria-labelledby="projects-tab"
              >
                <div className="row mb-6">
                  <div className="col-lg-6 col-xl-4">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 card-header-space-between">
                        <span className="badge text-bg-info-soft flex-grow-0 flex-shrink-0 text-info p-2">
                          In progress - 87%
                        </span>
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <span className="avatar avatar-lg d-flex align-items-center mx-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="avatar-img"
                            viewBox="0 0 240 180.037"
                          >
                            <path d="M238.553 22.362s-6.882-5.327-29.168-13.512C189.83 1.653 174.893 0 174.893 0l.074 42.679c0 18.039-20.385 37.194-55.199 37.194h-.996c-34.81 0-55.188-19.155-55.188-37.194L63.652 0S48.729 1.652 29.166 8.85C6.881 17.035 0 22.362 0 22.362c1.652 34.229 54.826 62.43 119.263 62.445h.015c64.441-.015 117.628-28.216 119.275-62.445" />
                            <path d="M238.582 118.203s-6.881 5.312-29.167 13.504c-19.569 7.198-34.493 8.843-34.493 8.843l.075-42.672c0-18.035-20.386-37.183-55.199-37.183l-.49-.015h-.015l-.483.015c-34.817 0-55.195 19.148-55.195 37.183l.076 42.672s-14.931-1.645-34.493-8.843C6.919 123.515.024 118.203.024 118.203c1.652-34.226 54.84-62.427 119.285-62.449 64.44.022 117.629 28.223 119.273 62.449M11.611 179.946c-5.432 0-5.53-4.135-5.53-5.733v-7.528c0-.469-.03-1.072.936-1.072h2.799c.92 0 .868.635.868 1.072v7.528c0 .543.091 1.978 2.067 1.978h4.708c1.939 0 2.052-1.435 2.052-1.978v-7.528c0-.438-.062-1.072.853-1.072H23.2c1.02 0 .928.635.928 1.072v7.528c0 1.601-.106 5.733-5.545 5.733M37.632 179.026c-1.916-2.58-4.655-5.824-7.446-9.266v9.174c0 .407.098 1.012-.86 1.012h-2.618c-.943 0-.837-.604-.837-1.012v-12.268c0-.422-.038-1.057.837-1.057h5.107c1.441 0 3.501 2.897 4.844 4.828 1.049 1.449 2.965 3.651 4.255 5.312v-9.084c0-.422-.053-1.057.898-1.057h2.844c.905 0 .854.635.854 1.057v13.277h-5.243c-1.126.004-1.609.08-2.635-.916M47.244 179.946v-14.319h12.652c.77 0 5.968-.104 5.968 5.356 0 5.568.596 8.963-5.862 8.963h-6.82l-1.471-2.987v2.987m7.513-3.772c2.301 0 2.127-2.202 2.127-3.214 0-3.38-.951-3.518-2.467-3.518h-7.22v6.73l7.56.002zM70.813 165.718h11.664c.981 0 .853.646.853 1.84 0 1.116.151 1.75-.853 1.75h-9.219c-.242 0-1.086-.119-1.086.74 0 .875-.159 1.223.762 1.223h8.148l1.313 2.609c.188.362.166.68-.551.68h-8.436l-1.305-2.551v3.758c0 .875.777.709 1.003.709h9.574c.951 0 .868.664.868 1.75 0 1.162.083 1.812-.868 1.812H70.563c-1.011 0-2.98-.315-2.98-3.472v-7.891c0-.83.43-2.957 3.23-2.957M86.475 165.626h12.758c1.712 0 4.202-.016 4.202 4.604 0 3.018-.641 3.168-2.015 4.104 2.301.393 1.992 3.334 1.992 4.857 0 .771-.279.754-.506.754h-3.742c-.785 0-.596-1.236-.596-1.885 0-1.75-.981-1.676-1.366-1.676h-5.507c-.528-.921-1.554-2.973-1.554-2.973v5.945l-.702.588h-3.765l-.377-.469v-12.613c.001-.888.627-1.236 1.178-1.236m10.162 3.788h-5.681c-.951 0-.905.315-.905.604v2.563h5.847c2.837 0 2.837-.709 2.837-1.448-.001-1.478-.121-1.719-2.098-1.719M125.404 165.718c.936 0 1.848.422 2.832 2.338.664 1.373 5.297 9.748 6.277 11.498v.482h-4.828l-1.39-2.52h-5.872l-1.27-2.883c-.361.588-2.3 4.27-2.964 5.401h-4.843v-.315c.988-1.857 7.733-14.004 7.733-14.004m2.817 3.972l-2.369 4.299.219.213h4.391l.219-.213-2.24-4.314-.22.015M137.576 165.626h12.766c1.705 0 4.195-.016 4.195 4.604 0 3.018-.635 3.168-2.008 4.104 2.311.393 1.992 3.334 1.992 4.857 0 .771-.287.754-.514.754h-3.742c-.783 0-.588-1.236-.588-1.885 0-1.75-.98-1.676-1.357-1.676h-5.521c-.529-.921-1.557-2.973-1.557-2.973v5.945l-.691.588h-3.773l-.377-.469v-12.613c-.001-.888.632-1.236 1.175-1.236m10.171 3.788h-5.688c-.951 0-.904.315-.904.604v2.563h5.854c2.821 0 2.821-.709 2.821-1.448-.001-1.478-.105-1.719-2.083-1.719M165.688 179.946c-.949-1.78-3.59-6.699-5.371-9.928v8.933c0 .377.061.995-.859.995h-2.58c-.966 0-.891-.618-.891-.995v-12.269c0-.438-.061-1.057.891-1.057h4.467c.664 0 1.613-.15 2.67 1.977.801 1.705 2.489 5.252 3.668 7.123 1.176-1.871 2.912-5.418 3.711-7.123 1.041-2.127 1.961-1.977 2.717-1.977h4.451c.904 0 .799.619.799 1.057v12.269c0 .377.137.995-.799.995h-2.611c-.95 0-.875-.618-.875-.995v-8.933c-1.811 3.229-4.422 8.146-5.416 9.928M185.092 179.976c-4.225 0-4.043-4.525-4.043-7.482 0-2.688-.303-6.896 4.993-6.941h9.416c5.312 0 4.964 4.271 4.964 6.941 0 2.957.213 7.482-4.089 7.482m-2.731-3.682c2.144 0 2.067-2.218 2.067-3.695 0-1.344.317-3.427-2.476-3.427h-4.736c-2.775 0-2.445 2.083-2.445 3.427 0 1.479-.136 3.695 2.008 3.695h5.582zM207.499 179.946c-5.417 0-5.522-4.135-5.522-5.733v-7.528c0-.469-.029-1.072.937-1.072h2.808c.92 0 .858.635.858 1.072v7.528c0 .543.091 1.978 2.067 1.978h4.707c1.947 0 2.053-1.435 2.053-1.978v-7.528c0-.438-.045-1.072.859-1.072h2.821c1.026 0 .937.635.937 1.072v7.528c0 1.601-.092 5.733-5.553 5.733M223.04 165.626h12.767c1.705 0 4.193-.016 4.193 4.604 0 3.018-.648 3.168-2.021 4.104 2.31.393 2.008 3.334 2.008 4.857 0 .771-.287.754-.514.754h-3.742c-.77 0-.588-1.236-.588-1.885 0-1.75-.996-1.676-1.373-1.676h-5.508c-.527-.921-1.555-2.973-1.555-2.973v5.945l-.709.588h-3.758l-.377-.469v-12.613c0-.888.634-1.236 1.177-1.236m10.155 3.788h-5.674c-.951 0-.906.315-.906.604v2.563h5.855c2.821 0 2.821-.709 2.821-1.448.002-1.478-.119-1.719-2.096-1.719" />
                          </svg>
                        </span>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-7">
                          Under Armour DAO
                        </h3>
                        <p className="fs-5 mb-1 text-muted text-uppercase">
                          Members
                        </p>
                        {/* Avatar group */}
                        <div className="avatar-group">
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              MC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-success">
                              EV
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              KC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              JK
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer border-0">
                        <div className="progress w-100 h-5px">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "87%" }}
                            aria-valuenow={87}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 card-header-space-between">
                        <span className="badge text-bg-info-soft flex-grow-0 flex-shrink-0 text-info p-2">
                          In progress - 39%
                        </span>
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <span className="avatar avatar-lg d-flex align-items-center mx-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="avatar-img"
                            viewBox="0 0 192.756 192.756"
                          >
                            <g fillRule="evenodd" clipRule="evenodd">
                              <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                              <path
                                d="M178.691 171.004c-22.973-15.594-52.488-47.338-52.488-64.881 0-16.428 20.328-28.262 20.328-44.969 0-14.758-11.277-31.464-19.492-39.401H45.452c7.657 8.354 19.074 24.644 19.074 39.401 0 16.707-19.91 28.542-19.91 44.969.14 20.328 29.377 48.73 47.477 64.881h86.598z"
                                fill="#c9222f"
                              />
                              <path d="M29.858 164.461v-2.646c0-.834-.139-1.531-.417-1.809-.139-.279-.557-.559-1.252-.559-.557 0-.975.279-1.253.559-.278.277-.417.975-.417 1.947v2.508h3.339zm10.164 5.707H22.201v-8.631c0-2.646.417-4.455 1.253-5.568.835-1.254 2.088-1.811 3.897-1.811 1.114 0 1.95.277 2.646.695.696.557 1.392 1.254 1.811 2.229a3.779 3.779 0 0 1 1.113-2.229c.696-.418 1.531-.695 2.784-.695l2.367-.141h.139c.696 0 1.114-.139 1.114-.418h.695v5.711c-.417.137-.834.137-1.113.277h-2.505c-.975 0-1.671.277-1.95.557-.417.416-.557.975-.557 1.949v2.367h6.125v5.708h.002zm-17.821-24.781h17.821v5.848H22.201v-5.848zm10.86-15.037v-5.291c2.367.141 4.177.975 5.43 2.367 1.392 1.531 1.949 3.48 1.949 6.127 0 2.785-.835 5.012-2.506 6.682-1.67 1.67-3.898 2.367-6.822 2.367-2.923 0-5.151-.697-6.822-2.367s-2.505-3.76-2.505-6.543c0-2.646.556-4.596 1.81-6.127 1.252-1.531 3.063-2.227 5.29-2.506v5.43c-.835.141-1.532.418-1.949.975-.557.418-.696 1.254-.696 2.09 0 1.113.418 1.949 1.113 2.506.836.557 2.089.834 3.76.834s2.785-.277 3.62-.834 1.253-1.533 1.253-2.645c0-.836-.279-1.533-.696-2.09-.558-.557-1.254-.837-2.229-.975zm6.961-7.797H22.201v-5.709h5.987v-5.15h-5.987v-5.709h17.821v5.709h-6.961v5.15h6.961v5.709zm0-25.061v5.15H22.201v-6.96l8.911-2.506c.14 0 .418-.14.835-.14.418-.139.975-.278 1.671-.417-.557-.139-.975-.278-1.531-.417-.417 0-.696-.14-.975-.14l-8.911-2.506v-6.961h17.821v5.151H29.719c-.557-.139-1.113-.139-1.531-.139.835.278 1.81.417 2.923.696l.14.139 8.771 2.089v4.038l-8.492 2.229c-.418.139-.835.139-1.393.277-.418.139-1.113.279-1.949.418h11.834v-.001zm-8.91-23.251c1.671 0 2.924-.278 3.759-.835.696-.557 1.114-1.393 1.114-2.646s-.417-2.088-1.114-2.646c-.835-.556-2.088-.835-3.759-.835s-2.923.279-3.76.835c-.695.557-1.113 1.393-1.113 2.646s.418 2.089 1.113 2.646c.836.557 2.089.835 3.76.835zm0 5.708c-2.923 0-5.151-.835-6.822-2.506-1.671-1.531-2.505-3.759-2.505-6.683 0-2.784.834-5.012 2.505-6.683s3.899-2.506 6.822-2.506c2.924 0 5.152.835 6.822 2.506 1.671 1.671 2.506 3.898 2.506 6.683 0 2.924-.835 5.152-2.506 6.683-1.67 1.671-3.898 2.506-6.822 2.506zm8.91-21.023H22.201v-5.43l8.354-4.873c.139-.14.557-.418.975-.557.417-.139.835-.279 1.531-.557-.418.139-.696.139-1.114.139H22.201v-5.429h17.821v5.429l-8.213 5.012-1.114.557c-.417.139-.836.278-1.392.557.277-.139.556-.139.975-.139.278 0 .834-.14 1.392-.14h8.353v5.431h-.001zm-4.594-25.758v-1.53c0-1.393-.279-2.367-.975-2.924-.557-.557-1.67-.835-3.341-.835-1.532 0-2.646.278-3.341.835-.696.557-.975 1.532-.975 2.924v1.53h8.632zm4.594 5.709H22.201v-6.822c0-1.81.139-3.062.279-3.898.139-.975.417-1.67.695-2.366.836-1.114 1.811-2.089 3.063-2.646 1.393-.696 2.924-.975 4.873-.975s3.759.417 5.013 1.113c1.392.835 2.506 1.95 3.063 3.342.278.697.556 1.392.556 2.227.139.836.278 2.228.278 4.177v5.848h.001z" />
                            </g>
                          </svg>
                        </span>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-7">Richmond DAO</h3>
                        <p className="fs-5 mb-1 text-muted text-uppercase">
                          Members
                        </p>
                        {/* Avatar group */}
                        <div className="avatar-group">
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              MC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-success">
                              EV
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              KC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              JK
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer border-0">
                        <div className="progress w-100 h-5px">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "39%" }}
                            aria-valuenow={39}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 card-header-space-between">
                        <span className="badge text-bg-secondary-soft flex-grow-0 flex-shrink-0 text-secondary p-2">
                          To do
                        </span>
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <span className="avatar avatar-lg d-flex align-items-center mx-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="avatar-img"
                            viewBox="0 0 192.756 192.756"
                          >
                            <g fillRule="evenodd" clipRule="evenodd">
                              <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                              <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z" />
                            </g>
                          </svg>
                        </span>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-7">Nike DAO</h3>
                        <p className="fs-5 mb-1 text-muted text-uppercase">
                          Members
                        </p>
                        {/* Avatar group */}
                        <div className="avatar-group">
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              MC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-success">
                              EV
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              KC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              JK
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer border-0">
                        <div className="progress w-100 h-5px">
                          <div
                            className="progress-bar bg-secondary"
                            role="progressbar"
                            style={{ width: "0%" }}
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 card-header-space-between">
                        <span className="badge text-bg-info-soft flex-grow-0 flex-shrink-0 text-info p-2">
                          In progress - 11%
                        </span>
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <span className="avatar avatar-lg d-flex align-items-center mx-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="avatar-img"
                            viewBox="0 0 45.285 25.488"
                          >
                            <path fill="#fff22d" d="M0 0h45.285v25.488H0V0z" />
                            <path
                              d="M5.733 2.388h33.792a3.697 3.697 0 0 1 3.686 3.686v13.435a3.697 3.697 0 0 1-3.686 3.686H5.733a3.697 3.697 0 0 1-3.686-3.686V6.073a3.696 3.696 0 0 1 3.686-3.685z"
                              fill="#cf4037"
                            />
                            <path
                              d="M5.733 4.027h33.792c1.126 0 2.047.921 2.047 2.046v13.435a2.053 2.053 0 0 1-2.047 2.046H5.733a2.052 2.052 0 0 1-2.046-2.046V6.073c0-1.125.92-2.046 2.046-2.046z"
                              fill="#fff"
                            />
                            <path d="M5.733 4.949h33.792c.618 0 1.125.506 1.125 1.124v13.435c0 .618-.506 1.124-1.125 1.124H5.733a1.128 1.128 0 0 1-1.125-1.124V6.073c0-.618.506-1.124 1.125-1.124z" />
                            <path
                              d="M37.069 12.748c0 .188.056.332.167.435a.556.556 0 0 0 .391.153.569.569 0 0 0 .57-.588.46.46 0 0 0-.173-.382.622.622 0 0 0-.397-.137.585.585 0 0 0-.389.142.463.463 0 0 0-.169.377zm-1.756.001c0-.304.057-.597.172-.877a2.33 2.33 0 0 1 .48-.746 2.203 2.203 0 0 1 1.594-.682c.36 0 .688.062.984.186.298.123.551.292.762.508s.373.456.482.724c.11.266.166.54.166.817 0 .494-.113.927-.339 1.301a2.324 2.324 0 0 1-.891.862 2.419 2.419 0 0 1-1.164.299c-.237 0-.485-.051-.746-.15a2.527 2.527 0 0 1-.737-.456c-.23-.205-.417-.456-.556-.757s-.207-.645-.207-1.029zM28.226 13.384v1.737c-1.373.019-2.58-.612-2.58-2.356 0-1.467.986-2.239 2.361-2.239 1.375 0 2.329.925 2.329 2.356v2.239H28.51v-2.255c0-.406-.22-.613-.483-.615s-.569.125-.577.492.12.696.776.641zM12.189 12.183v-1.688c1.422-.019 2.592.787 2.592 2.281 0 1.342-1.136 2.364-2.474 2.364s-2.203-1.236-2.203-2.356V8.733h1.701v3.98c0 .405.232.713.608.715.375.002.657-.176.651-.642s-.406-.658-.875-.603zM33.097 13.297v1.679c-1.322.02-2.469-.854-2.484-2.211-.015-1.321.95-2.239 2.274-2.239s2.242.925 2.242 2.356v1.704c0 1.279-1.133 2.341-2.64 2.341h-1.685l.001-1.557h1.689c.588 0 .956-.069.956-.7v-1.892c0-.406-.292-.613-.546-.615s-.548.125-.556.492c-.005.368.118.697.749.642zM18.826 10.521h1.768v2.563c0 .155.141.306.328.306.178 0 .352-.135.352-.306v-2.563h1.769v2.668c0 .401-.103.749-.307 1.042a1.941 1.941 0 0 1-.806.666 2.494 2.494 0 0 1-1.806.102 2.039 2.039 0 0 1-.664-.369 1.737 1.737 0 0 1-.464-.609 1.95 1.95 0 0 1-.17-.831v-2.669zM23.243 15.121h1.769v-2.563c0-.155.141-.329.327-.328h.222v-1.696a2.449 2.449 0 0 0-1.02.11 2.024 2.024 0 0 0-.663.369 1.734 1.734 0 0 0-.465.61 1.96 1.96 0 0 0-.17.83v2.668z"
                              fill="#fff"
                            />
                            <path
                              d="M12.384 6.669l-.198.003v3.483a2.687 2.687 0 0 1 2.946 2.668 2.687 2.687 0 0 1-2.683 2.681c-1.346 0-2.684-1.364-2.684-2.709V6.713H6.223l.002 6.115c.001 3.392 2.767 6.159 6.159 6.159s6.159-2.767 6.159-6.159-2.767-6.159-6.159-6.159z"
                              fill="#cf4037"
                            />
                            <path
                              d="M38.906 10.127c0-.218.071-.394.214-.526a.747.747 0 0 1 .493-.216h.027a.733.733 0 0 1 .495.204.685.685 0 0 1 .226.539.686.686 0 0 1-.226.539.742.742 0 0 1-.495.204h-.003-.024a.752.752 0 0 1-.493-.216.695.695 0 0 1-.214-.528zm.138 0v.03c.007.15.064.288.171.413a.523.523 0 0 0 .419.188.524.524 0 0 0 .422-.188.676.676 0 0 0 .17-.413v-.014-.016-.003-.004a.672.672 0 0 0-.162-.428.528.528 0 0 0-.43-.195.525.525 0 0 0-.423.191.674.674 0 0 0-.167.42v.019zm.325-.378h.322l.036.002a.49.49 0 0 0 .038.004c.041.01.079.03.114.06.034.03.052.079.052.148l-.001.022-.003.022c-.006.024-.018.047-.035.069s-.046.041-.084.056v.004c.034.007.058.022.071.044a.215.215 0 0 1 .026.072l.004.032c.002.01.002.02.002.03l.002.038c0 .012 0 .022.002.032 0 .021.001.038.003.052a.115.115 0 0 0 .017.045l.005.008h-.14a.365.365 0 0 1-.032-.054.251.251 0 0 1-.01-.06l.001-.055.001-.021.001-.02a.1.1 0 0 0-.025-.07c-.017-.018-.058-.027-.123-.027h-.11v.307h-.136v-.74h.002zm.135.333h.155c.052 0 .088-.012.106-.036a.128.128 0 0 0 .028-.083c0-.047-.015-.077-.044-.091a.235.235 0 0 0-.104-.021h-.14v.231h-.001z"
                              fill="#fff"
                            />
                          </svg>
                        </span>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-7">
                          Burago brand DAO
                        </h3>
                        <p className="fs-5 mb-1 text-muted text-uppercase">
                          Members
                        </p>
                        {/* Avatar group */}
                        <div className="avatar-group">
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              MC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-success">
                              EV
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              KC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              JK
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer border-0">
                        <div className="progress w-100 h-5px">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "11%" }}
                            aria-valuenow={11}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 card-header-space-between">
                        <span className="badge text-bg-info-soft flex-grow-0 flex-shrink-0 text-info p-2">
                          In progress - 95%
                        </span>
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <span className="avatar avatar-lg d-flex align-items-center mx-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="avatar-img"
                            viewBox="0.1 0.1 299.8 120.125"
                          >
                            <path
                              d="M38.867 26.309C17.721 26.309.1 35.279.1 62.345c0 21.442 11.849 34.944 39.312 34.944 32.326 0 34.398-21.294 34.398-21.294H58.147s-3.358 11.466-19.69 11.466c-13.302 0-22.869-8.986-22.869-21.58h59.861v-7.904c0-12.46-7.91-31.668-36.582-31.668zM38.32 36.41c12.662 0 21.294 7.757 21.294 19.383h-43.68c0-12.343 11.268-19.383 22.386-19.383z"
                              fill="#e53238"
                            />
                            <path
                              d="M75.438.1v83.597c0 4.745-.339 11.408-.339 11.408h14.939s.537-4.785.537-9.159c0 0 7.381 11.548 27.451 11.548 21.134 0 35.49-14.674 35.49-35.695 0-19.557-13.186-35.286-35.456-35.286-20.854 0-27.334 11.261-27.334 11.261V.1H75.438zm38.766 36.753c14.352 0 23.479 10.652 23.479 24.946 0 15.328-10.541 25.355-23.376 25.355-15.318 0-23.581-11.961-23.581-25.219 0-12.354 7.414-25.082 23.478-25.082z"
                              fill="#0064d2"
                            />
                            <path
                              d="M190.645 26.309c-31.812 0-33.852 17.418-33.852 20.202h15.834s.83-10.169 16.926-10.169c10.459 0 18.564 4.788 18.564 13.991v3.276h-18.564c-24.645 0-37.674 7.21-37.674 21.841 0 14.398 12.038 22.232 28.307 22.232 22.172 0 29.314-12.251 29.314-12.251 0 4.873.375 9.675.375 9.675h14.076s-.545-5.952-.545-9.76V52.432c0-21.582-17.408-26.123-32.761-26.123zm17.472 37.128v4.368c0 5.697-3.516 19.861-24.212 19.861-11.333 0-16.192-5.656-16.192-12.217 0-11.935 16.363-12.012 40.404-12.012z"
                              fill="#f5af02"
                            />
                            <path
                              d="M214.879 29.041h17.813l25.565 51.218 25.506-51.218H299.9l-46.459 91.184h-16.927l13.406-25.419-35.041-65.765z"
                              fill="#86b817"
                            />
                          </svg>
                        </span>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-7">eBay DAO</h3>
                        <p className="fs-5 mb-1 text-muted text-uppercase">
                          Members
                        </p>
                        {/* Avatar group */}
                        <div className="avatar-group">
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              MC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-success">
                              EV
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              KC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              JK
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer border-0">
                        <div className="progress w-100 h-5px">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow={95}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 card-header-space-between">
                        <span className="badge text-bg-success-soft flex-grow-0 flex-shrink-0 text-success p-2">
                          Completed
                        </span>
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <span className="avatar avatar-lg d-flex align-items-center mx-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="avatar-img"
                            viewBox="72.424 42.569 339.041 160.792"
                          >
                            <path
                              d="M108.783 100.639V55.192c0-1.684.168-2.694 3.031-2.694h38.545c6.734 0 10.437 5.724 13.131 16.496l2.188 8.586h6.564c1.177-24.406 2.186-35.011 2.186-35.011s-16.495 1.851-26.258 1.851H98.854l-26.431-.842v7.07l8.923 1.683c6.228 1.179 7.74 2.524 8.249 8.249 0 0 .506 16.832.506 44.607 0 27.771-.506 44.437-.506 44.437 0 5.049-2.021 6.9-8.249 8.082l-8.923 1.684v7.066l26.431-.84h44.101c9.931 0 32.991.84 32.991.84.503-6.061 3.872-33.498 4.377-36.524h-6.228l-6.565 14.981c-5.219 11.78-12.792 12.623-21.21 12.623h-25.082c-8.417 0-12.457-3.367-12.457-10.604v-38.379s18.347 0 24.742.506c4.714.338 7.574 1.684 9.091 8.248l2.021 8.753h7.234l-.503-22.053 1.009-22.217h-7.236l-2.355 9.762c-1.517 6.396-2.525 7.577-9.091 8.248-7.405.844-24.913.675-24.913.675v.167h.003v-.003zM208.599 59.906c-2.357 10.436-4.714 18.515-12.962 23.902-5.049 3.365-10.1 4.542-12.117 4.711v6.396h14.98v51.675c0 14.478 9.596 21.549 22.387 21.549 9.932 0 20.198-4.208 23.734-12.963l-3.536-4.545c-1.684 2.863-7.067 7.07-13.801 7.07-7.405 0-11.445-5.051-11.445-17.841V94.245l24.914 1.853 1.345-11.449-26.258 1.011V60.073l-7.241-.167zM261.791 139.39l-6.396.168c.336 3.702.506 8.417.506 12.793 0 4.545-.168 8.753-.506 10.772 0 0 12.793 4.709 25.754 4.709 17.506 0 31.478-8.416 31.478-24.912 0-28.275-42.418-24.066-42.418-43.09 0-7.91 7.069-10.941 14.812-10.941 6.06 0 11.109 2.188 12.119 5.389l4.209 12.624 6.229-.336c.506-6.734.841-14.477 1.852-20.704-5.388-2.357-16.667-3.706-23.731-3.706-16.5 0-29.795 7.239-29.795 23.399 0 28.109 41.406 22.386 41.406 43.093 0 7.403-4.547 12.622-14.812 12.622-9.424 0-14.139-4.88-15.987-9.764l-4.72-12.116zM363.244 158.836c-9.745 27.221-21.674 34.273-32.426 34.273-4.539 0-6.721-2.018-7.396-5.205l-2.52-13.109-7.058.336c-1.344 7.73-2.688 16.302-4.534 23.357 4.201 3.188 11.254 4.872 16.801 4.872 11.596 0 29.236-1.515 45.363-39.821l27.053-63.845c2.186-5.21 3.023-5.714 9.408-8.236l3.529-1.341v-5.881l-15.963.84-17.137-.84v5.881l4.366 1.341c4.367 1.347 6.387 3.026 6.387 6.051 0 1.511-.506 3.024-1.348 5.374-2.52 6.389-18.146 44.359-22.342 52.426l4.195-1.515c-7.394-18.313-18.646-48.895-20.328-54.099-.336-1.009-.504-1.849-.504-2.693 0-2.687 1.848-4.872 5.881-5.711l5.545-1.173v-5.881l-23.021.84-18.313-.84v5.881l3.025 1.007c4.2 1.344 5.209 2.521 7.729 8.401 13.941 31.925 20.498 49.396 29.399 72.249l4.209-12.939z"
                              fill="#f27224"
                            />
                          </svg>
                        </span>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-7">Etsy DAO</h3>
                        <p className="fs-5 mb-1 text-muted text-uppercase">
                          Members
                        </p>
                        {/* Avatar group */}
                        <div className="avatar-group">
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              MC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-success">
                              EV
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              KC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              JK
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer border-0">
                        <div className="progress w-100 h-5px">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 card-header-space-between">
                        <span className="badge text-bg-info-soft flex-grow-0 flex-shrink-0 text-info p-2">
                          In progress - 72%
                        </span>
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <span className="avatar avatar-lg d-flex align-items-center mx-auto">
                          <svg
                            className="avatar-img w-75 mx-auto"
                            enableBackground="new 0 0 2447.6 2452.5"
                            viewBox="0 0 2447.6 2452.5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipRule="evenodd" fillRule="evenodd">
                              <path
                                d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                                fill="#36c5f0"
                              />
                              <path
                                d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                                fill="#2eb67d"
                              />
                              <path
                                d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                                fill="#ecb22e"
                              />
                              <path
                                d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                                fill="#e01e5a"
                              />
                            </g>
                          </svg>
                        </span>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-7">Slack DAO</h3>
                        <p className="fs-5 mb-1 text-muted text-uppercase">
                          Members
                        </p>
                        {/* Avatar group */}
                        <div className="avatar-group">
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              MC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-success">
                              EV
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              KC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              JK
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer border-0">
                        <div className="progress w-100 h-5px">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "72%" }}
                            aria-valuenow={72}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 card-header-space-between">
                        <span className="badge text-bg-danger-soft flex-grow-0 flex-shrink-0 text-danger p-2">
                          Cancelled
                        </span>
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <span className="avatar avatar-lg d-flex align-items-center mx-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="avatar-img"
                            viewBox="10 45.67 160.003 44.33"
                          >
                            <path
                              d="M169.018 84.244c0-2.465-1.748-4.27-4.156-4.27-2.404 0-4.154 1.805-4.154 4.27 0 2.461 1.75 4.263 4.154 4.263 2.408 0 4.156-1.805 4.156-4.263zm-5.248.219v2.789h-.901v-6.15h2.239c1.312 0 1.914.573 1.914 1.69 0 .688-.465 1.233-1.064 1.312v.026c.52.083.711.547.818 1.396.082.55.191 1.504.387 1.728h-1.066c-.248-.578-.223-1.396-.414-2.081-.158-.521-.436-.711-1.033-.711h-.875v.003l-.005-.002zm1.117-.795c.875 0 1.125-.466 1.125-.877 0-.486-.25-.87-1.125-.87h-1.117v1.749h1.117v-.002zm-5.17.576c0-3.037 2.411-5.09 5.141-5.09 2.738 0 5.146 2.053 5.146 5.09 0 3.031-2.407 5.086-5.146 5.086-2.73 0-5.141-2.055-5.141-5.086z"
                              fill="#ff5a00"
                            />
                            <g fill="#ff5a00">
                              <path d="M141.9 88.443l-5.927-6.647-5.875 6.647h-12.362l12.082-13.574-12.082-13.578h12.748l5.987 6.596 5.761-6.596h12.302l-12.022 13.521 12.189 13.631zM93.998 88.443V45.67h23.738v9.534h-13.683v6.087h13.683v9.174h-13.683v8.42h13.683v9.558z" />
                            </g>
                            <path
                              d="M83.98 45.67v17.505h-.111c-2.217-2.548-4.988-3.436-8.201-3.436-6.584 0-11.544 4.479-13.285 10.396-1.986-6.521-7.107-10.518-14.699-10.518-6.167 0-11.035 2.767-13.578 7.277V61.29H21.361v-6.085h13.91v-9.533H10v42.771h11.361V70.465h11.324a17.082 17.082 0 0 0-.519 4.229c0 8.918 6.815 15.185 15.516 15.185 7.314 0 12.138-3.437 14.687-9.694h-9.737c-1.316 1.883-2.316 2.439-4.949 2.439-3.052 0-5.686-2.664-5.686-5.818h19.826C62.683 83.891 68.203 90 75.779 90c3.268 0 6.26-1.607 8.089-4.322h.11v2.771h10.017V45.672H83.98v-.002zM42.313 70.593c.633-2.718 2.74-4.494 5.37-4.494 2.896 0 4.896 1.721 5.421 4.494H42.313zm35.588 11.341c-3.691 0-5.985-3.439-5.985-7.031 0-3.84 1.996-7.529 5.985-7.529 4.139 0 5.788 3.691 5.788 7.529 0 3.638-1.746 7.031-5.788 7.031z"
                              fill="#29007c"
                            />
                          </svg>
                        </span>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-7">FedEx DAO</h3>
                        <p className="fs-5 mb-1 text-muted text-uppercase">
                          Members
                        </p>
                        {/* Avatar group */}
                        <div className="avatar-group">
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              MC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-success">
                              EV
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              KC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              JK
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer border-0">
                        <div className="progress w-100 h-5px">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "11%" }}
                            aria-valuenow={11}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 card-header-space-between">
                        <span className="badge text-bg-info-soft flex-grow-0 flex-shrink-0 text-info p-2">
                          In progress - 36%
                        </span>
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <span className="avatar avatar-lg d-flex align-items-center mx-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="avatar-img"
                            viewBox="0 0 352 352"
                          >
                            <path d="M0 0h352v352H0V0z" fill="#fff" />
                            <path
                              d="M175.5 1.15c5.21-.03 10.4-1.21 15.57-.11 22.89 2.03 45.459 8.32 65.82 19.04 26.34 13.49 49 34 65.439 58.58 16.77 25 26.699 54.44 28.939 84.44-.369 7.94-.6 15.93.17 23.85-1.639 22.81-7.35 45.43-17.529 65.97-11.609 23.87-28.801 44.99-49.73 61.31-26.08 20.45-58.08 33.24-91.1 36.271-5.029.36-10.051 1.29-15.109.9-3.351-.221-6.781.85-10-.521 12.331-34.689 24.65-69.39 37.09-104.05 13.539-.25 27.09.09 40.629-.16 8.641-.3 17.181-5.561 20.021-13.96 11.45-32.24 23.19-64.39 34.28-96.77 1.82-4.89 2.83-10.34 1.38-15.46-1.96-6.49-7.899-11.08-14.28-12.8-5.539-1.72-11.391-1.09-17.09-1.19-17.38-.05-34.76.09-52.13-.08-.28.58-.851 1.73-1.13 2.3-28.141 79.04-56.23 158.101-84.48 237.1-29.02-7.53-56.06-22.61-77.62-43.45-25.97-24.851-44-57.9-50.67-93.23-2.09-10.61-2.85-21.41-3.43-32.18.47-22.43 4.15-44.96 12.6-65.82C33.75 58.44 81.44 16.95 136.88 5.09c-28.38 78.69-56.1 157.62-84.47 236.32 1.81.55 3.71.34 5.57.359 10.34-.05 20.69.021 31.03-.02 1.41-.01 1.26-1.97 1.85-2.87 12.46-35.18 25.07-70.31 37.57-105.47.75-2.18 1.45-4.38 2.45-6.45 6.48.11 12.96-.03 19.44.07-13.59 38.11-27.06 76.28-40.85 114.319 1.44.58 3.01.4 4.52.431 10.86-.101 21.72.069 32.58-.08 12.27-34.63 24.69-69.2 36.991-103.81 2.629-7.08 2.859-15.45-1.32-21.98-3.65-5.78-10.58-8.54-17.19-8.81-9.04-.27-18.09.02-27.14-.14C150.35 71.66 163.16 36.49 175.5 1.15z"
                              fill="#015294"
                            />
                            <path
                              d="M247.551 127.41c1.079-1.22 3-.48 4.439-.69 5.02.09 10.039-.04 15.061.07-11.691 33.37-23.931 66.55-35.431 99.99-6.5.46-13.05.18-19.56.14 11.87-33.15 23.62-66.35 35.491-99.51z"
                              fill="#015294"
                            />
                          </svg>
                        </span>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-7">HP DAO</h3>
                        <p className="fs-5 mb-1 text-muted text-uppercase">
                          Members
                        </p>
                        {/* Avatar group */}
                        <div className="avatar-group">
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              MC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-success">
                              EV
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              KC
                            </span>
                          </div>
                          <div className="avatar avatar-circle avatar-sm">
                            <span className="avatar-title text-bg-dark-soft border border-2 border-white">
                              JK
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer border-0">
                        <div className="progress w-100 h-5px">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "36%" }}
                            aria-valuenow={36}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
              <div
                className="tab-pane fade"
                id="connections"
                role="tabpanel"
                aria-labelledby="connections-tab"
              >
                <div className="row">
                  <div className="col-lg-6 col-xl-4 col-xxl-3">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 d-flex justify-content-end">
                        {/* Dropdown */}
                        <div className="dropdown flex-grow-0">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <div className="avatar avatar-xl avatar-circle avatar-busy">
                          <img
                            src="assets/images/identify/nft.jpg"
                            alt="..."
                            className="avatar-img"
                          />
                        </div>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-1">Perry Hart</h3>
                        <p className="fs-5 mb-6 text-muted text-uppercase">
                          Project Manager
                        </p>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Excel
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              JIRA
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Trello
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <span className="fs-5 text-secondary text-truncate">
                          3 connections
                        </span>
                        <div className="form-check form-state-switch">
                          <input
                            className="form-state-input"
                            type="checkbox"
                            id="connection6"
                          />
                          <label
                            className="form-state-label"
                            htmlFor="connection6"
                          >
                            <span className="form-state-default">
                              {/* Button */}
                              <span className="btn btn-outline-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <g>
                                    <path
                                      d="M11.23,12.24a.49.49,0,0,0-.13-.76,7.37,7.37,0,0,0-3.64-1A7.55,7.55,0,0,0,.27,15.86a.5.5,0,0,0,.08.44.48.48,0,0,0,.4.2H8.89a.49.49,0,0,0,.49-.41A7.92,7.92,0,0,1,11.23,12.24Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <circle
                                      cx="7.25"
                                      cy="4.75"
                                      r="4.75"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <path
                                      d="M17.25,11a6.5,6.5,0,1,0,6.5,6.5A6.51,6.51,0,0,0,17.25,11Zm3.5,7.5h-2a.5.5,0,0,0-.5.5v2a1,1,0,0,1-2,0V19a.5.5,0,0,0-.5-.5h-2a1,1,0,0,1,0-2h2a.5.5,0,0,0,.5-.5V14a1,1,0,0,1,2,0v2a.5.5,0,0,0,.5.5h2a1,1,0,0,1,0,2Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                  </g>
                                </svg>
                                Connect
                              </span>
                            </span>
                            <span className="form-state-active">
                              {/* Button */}
                              <span className="btn btn-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <path
                                    d="M23.37.29a1.49,1.49,0,0,0-2.09.34L7.25,20.2,2.56,15.51A1.5,1.5,0,0,0,.44,17.63l5.93,5.94a1.53,1.53,0,0,0,2.28-.19l15.07-21A1.49,1.49,0,0,0,23.37.29Z"
                                    style={{ fill: "currentColor" }}
                                  />
                                </svg>
                                Connected
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4 col-xxl-3">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 d-flex justify-content-end">
                        {/* Dropdown */}
                        <div className="dropdown flex-grow-0">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <div className="avatar avatar-xl avatar-circle avatar-online">
                          <img
                            src="assets/images/identify/nft.jpg"
                            alt="..."
                            className="avatar-img"
                          />
                        </div>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-1">Norma Peck</h3>
                        <p className="fs-5 mb-6 text-muted text-uppercase">
                          Digital Producer
                        </p>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Illustrator
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Sketch
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Figma
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <span className="fs-5 text-secondary text-truncate">
                          17 connections
                        </span>
                        <div className="form-check form-state-switch">
                          <input
                            className="form-state-input"
                            type="checkbox"
                            id="connection7"
                            defaultChecked
                          />
                          <label
                            className="form-state-label"
                            htmlFor="connection7"
                          >
                            <span className="form-state-default">
                              {/* Button */}
                              <span className="btn btn-outline-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <g>
                                    <path
                                      d="M11.23,12.24a.49.49,0,0,0-.13-.76,7.37,7.37,0,0,0-3.64-1A7.55,7.55,0,0,0,.27,15.86a.5.5,0,0,0,.08.44.48.48,0,0,0,.4.2H8.89a.49.49,0,0,0,.49-.41A7.92,7.92,0,0,1,11.23,12.24Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <circle
                                      cx="7.25"
                                      cy="4.75"
                                      r="4.75"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <path
                                      d="M17.25,11a6.5,6.5,0,1,0,6.5,6.5A6.51,6.51,0,0,0,17.25,11Zm3.5,7.5h-2a.5.5,0,0,0-.5.5v2a1,1,0,0,1-2,0V19a.5.5,0,0,0-.5-.5h-2a1,1,0,0,1,0-2h2a.5.5,0,0,0,.5-.5V14a1,1,0,0,1,2,0v2a.5.5,0,0,0,.5.5h2a1,1,0,0,1,0,2Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                  </g>
                                </svg>
                                Connect
                              </span>
                            </span>
                            <span className="form-state-active">
                              {/* Button */}
                              <span className="btn btn-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <path
                                    d="M23.37.29a1.49,1.49,0,0,0-2.09.34L7.25,20.2,2.56,15.51A1.5,1.5,0,0,0,.44,17.63l5.93,5.94a1.53,1.53,0,0,0,2.28-.19l15.07-21A1.49,1.49,0,0,0,23.37.29Z"
                                    style={{ fill: "currentColor" }}
                                  />
                                </svg>
                                Connected
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4 col-xxl-3">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 d-flex justify-content-end">
                        {/* Dropdown */}
                        <div className="dropdown flex-grow-0">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <div className="avatar avatar-xl avatar-circle avatar-online">
                          <img
                            src="assets/images/identify/nft.jpg"
                            alt="..."
                            className="avatar-img"
                          />
                        </div>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-1">Jimmy Riley</h3>
                        <p className="fs-5 mb-6 text-muted text-uppercase">
                          Accountant
                        </p>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Quickbooks
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Xero
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <span className="fs-5 text-secondary text-truncate">
                          41 connections
                        </span>
                        <div className="form-check form-state-switch">
                          <input
                            className="form-state-input"
                            type="checkbox"
                            id="connection8"
                            defaultChecked
                          />
                          <label
                            className="form-state-label"
                            htmlFor="connection8"
                          >
                            <span className="form-state-default">
                              {/* Button */}
                              <span className="btn btn-outline-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <g>
                                    <path
                                      d="M11.23,12.24a.49.49,0,0,0-.13-.76,7.37,7.37,0,0,0-3.64-1A7.55,7.55,0,0,0,.27,15.86a.5.5,0,0,0,.08.44.48.48,0,0,0,.4.2H8.89a.49.49,0,0,0,.49-.41A7.92,7.92,0,0,1,11.23,12.24Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <circle
                                      cx="7.25"
                                      cy="4.75"
                                      r="4.75"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <path
                                      d="M17.25,11a6.5,6.5,0,1,0,6.5,6.5A6.51,6.51,0,0,0,17.25,11Zm3.5,7.5h-2a.5.5,0,0,0-.5.5v2a1,1,0,0,1-2,0V19a.5.5,0,0,0-.5-.5h-2a1,1,0,0,1,0-2h2a.5.5,0,0,0,.5-.5V14a1,1,0,0,1,2,0v2a.5.5,0,0,0,.5.5h2a1,1,0,0,1,0,2Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                  </g>
                                </svg>
                                Connect
                              </span>
                            </span>
                            <span className="form-state-active">
                              {/* Button */}
                              <span className="btn btn-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <path
                                    d="M23.37.29a1.49,1.49,0,0,0-2.09.34L7.25,20.2,2.56,15.51A1.5,1.5,0,0,0,.44,17.63l5.93,5.94a1.53,1.53,0,0,0,2.28-.19l15.07-21A1.49,1.49,0,0,0,23.37.29Z"
                                    style={{ fill: "currentColor" }}
                                  />
                                </svg>
                                Connected
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4 col-xxl-3">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 d-flex justify-content-end">
                        {/* Dropdown */}
                        <div className="dropdown flex-grow-0">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <div className="avatar avatar-xl avatar-circle avatar-away">
                          <img
                            src="assets/images/identify/nft.jpg"
                            alt="..."
                            className="avatar-img"
                          />
                        </div>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-1">Martin Edwards</h3>
                        <p className="fs-5 mb-6 text-muted text-uppercase">
                          Designer
                        </p>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Photoshop
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Figma
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Illustrator
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <span className="fs-5 text-secondary text-truncate">
                          9 connections
                        </span>
                        <div className="form-check form-state-switch">
                          <input
                            className="form-state-input"
                            type="checkbox"
                            id="connection9"
                          />
                          <label
                            className="form-state-label"
                            htmlFor="connection9"
                          >
                            <span className="form-state-default">
                              {/* Button */}
                              <span className="btn btn-outline-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <g>
                                    <path
                                      d="M11.23,12.24a.49.49,0,0,0-.13-.76,7.37,7.37,0,0,0-3.64-1A7.55,7.55,0,0,0,.27,15.86a.5.5,0,0,0,.08.44.48.48,0,0,0,.4.2H8.89a.49.49,0,0,0,.49-.41A7.92,7.92,0,0,1,11.23,12.24Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <circle
                                      cx="7.25"
                                      cy="4.75"
                                      r="4.75"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <path
                                      d="M17.25,11a6.5,6.5,0,1,0,6.5,6.5A6.51,6.51,0,0,0,17.25,11Zm3.5,7.5h-2a.5.5,0,0,0-.5.5v2a1,1,0,0,1-2,0V19a.5.5,0,0,0-.5-.5h-2a1,1,0,0,1,0-2h2a.5.5,0,0,0,.5-.5V14a1,1,0,0,1,2,0v2a.5.5,0,0,0,.5.5h2a1,1,0,0,1,0,2Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                  </g>
                                </svg>
                                Connect
                              </span>
                            </span>
                            <span className="form-state-active">
                              {/* Button */}
                              <span className="btn btn-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <path
                                    d="M23.37.29a1.49,1.49,0,0,0-2.09.34L7.25,20.2,2.56,15.51A1.5,1.5,0,0,0,.44,17.63l5.93,5.94a1.53,1.53,0,0,0,2.28-.19l15.07-21A1.49,1.49,0,0,0,23.37.29Z"
                                    style={{ fill: "currentColor" }}
                                  />
                                </svg>
                                Connected
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4 col-xxl-3">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 d-flex justify-content-end">
                        {/* Dropdown */}
                        <div className="dropdown flex-grow-0">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <div className="avatar avatar-xl avatar-circle avatar-offline">
                          <img
                            src="assets/images/identify/nft.jpg"
                            alt="..."
                            className="avatar-img"
                          />
                        </div>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-1">Katie Fowler</h3>
                        <p className="fs-5 mb-6 text-muted text-uppercase">
                          Secretary
                        </p>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Word
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Excel
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <span className="fs-5 text-secondary text-truncate">
                          22 connections
                        </span>
                        <div className="form-check form-state-switch">
                          <input
                            className="form-state-input"
                            type="checkbox"
                            id="connection10"
                            defaultChecked
                          />
                          <label
                            className="form-state-label"
                            htmlFor="connection10"
                          >
                            <span className="form-state-default">
                              {/* Button */}
                              <span className="btn btn-outline-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <g>
                                    <path
                                      d="M11.23,12.24a.49.49,0,0,0-.13-.76,7.37,7.37,0,0,0-3.64-1A7.55,7.55,0,0,0,.27,15.86a.5.5,0,0,0,.08.44.48.48,0,0,0,.4.2H8.89a.49.49,0,0,0,.49-.41A7.92,7.92,0,0,1,11.23,12.24Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <circle
                                      cx="7.25"
                                      cy="4.75"
                                      r="4.75"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <path
                                      d="M17.25,11a6.5,6.5,0,1,0,6.5,6.5A6.51,6.51,0,0,0,17.25,11Zm3.5,7.5h-2a.5.5,0,0,0-.5.5v2a1,1,0,0,1-2,0V19a.5.5,0,0,0-.5-.5h-2a1,1,0,0,1,0-2h2a.5.5,0,0,0,.5-.5V14a1,1,0,0,1,2,0v2a.5.5,0,0,0,.5.5h2a1,1,0,0,1,0,2Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                  </g>
                                </svg>
                                Connect
                              </span>
                            </span>
                            <span className="form-state-active">
                              {/* Button */}
                              <span className="btn btn-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <path
                                    d="M23.37.29a1.49,1.49,0,0,0-2.09.34L7.25,20.2,2.56,15.51A1.5,1.5,0,0,0,.44,17.63l5.93,5.94a1.53,1.53,0,0,0,2.28-.19l15.07-21A1.49,1.49,0,0,0,23.37.29Z"
                                    style={{ fill: "currentColor" }}
                                  />
                                </svg>
                                Connected
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4 col-xxl-3">
                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-header border-0 d-flex justify-content-end">
                        {/* Dropdown */}
                        <div className="dropdown flex-grow-0">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow text-muted"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height={14}
                              width={14}
                            >
                              <g>
                                <circle
                                  cx={12}
                                  cy="3.25"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy={12}
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                                <circle
                                  cx={12}
                                  cy="20.75"
                                  r="3.25"
                                  style={{ fill: "currentColor" }}
                                />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Join DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Leave DAO
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                              >
                                Archive DAO
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <div className="avatar avatar-xl avatar-circle">
                          <img
                            src="assets/images/identify/nft.jpg"
                            alt="..."
                            className="avatar-img"
                          />
                        </div>
                        {/* Title */}
                        <h3 className="card-title mt-3 mb-1">Zachary Ortiz</h3>
                        <p className="fs-5 mb-6 text-muted text-uppercase">
                          Developer
                        </p>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              React
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Sass
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="badge text-bg-light p-2"
                              href="javascript: void(0);"
                            >
                              Vue.js
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <span className="fs-5 text-secondary text-truncate">
                          7 connections
                        </span>
                        <div className="form-check form-state-switch">
                          <input
                            className="form-state-input"
                            type="checkbox"
                            id="connection11"
                          />
                          <label
                            className="form-state-label"
                            htmlFor="connection11"
                          >
                            <span className="form-state-default">
                              {/* Button */}
                              <span className="btn btn-outline-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <g>
                                    <path
                                      d="M11.23,12.24a.49.49,0,0,0-.13-.76,7.37,7.37,0,0,0-3.64-1A7.55,7.55,0,0,0,.27,15.86a.5.5,0,0,0,.08.44.48.48,0,0,0,.4.2H8.89a.49.49,0,0,0,.49-.41A7.92,7.92,0,0,1,11.23,12.24Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <circle
                                      cx="7.25"
                                      cy="4.75"
                                      r="4.75"
                                      style={{ fill: "currentColor" }}
                                    />
                                    <path
                                      d="M17.25,11a6.5,6.5,0,1,0,6.5,6.5A6.51,6.51,0,0,0,17.25,11Zm3.5,7.5h-2a.5.5,0,0,0-.5.5v2a1,1,0,0,1-2,0V19a.5.5,0,0,0-.5-.5h-2a1,1,0,0,1,0-2h2a.5.5,0,0,0,.5-.5V14a1,1,0,0,1,2,0v2a.5.5,0,0,0,.5.5h2a1,1,0,0,1,0,2Z"
                                      style={{ fill: "currentColor" }}
                                    />
                                  </g>
                                </svg>
                                Connect
                              </span>
                            </span>
                            <span className="form-state-active">
                              {/* Button */}
                              <span className="btn btn-primary d-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  height={14}
                                  width={14}
                                  className="me-2"
                                >
                                  <path
                                    d="M23.37.29a1.49,1.49,0,0,0-2.09.34L7.25,20.2,2.56,15.51A1.5,1.5,0,0,0,.44,17.63l5.93,5.94a1.53,1.53,0,0,0,2.28-.19l15.07-21A1.49,1.49,0,0,0,23.37.29Z"
                                    style={{ fill: "currentColor" }}
                                  />
                                </svg>
                                Connected
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
              <div
                className="tab-pane fade"
                id="files"
                role="tabpanel"
                aria-labelledby="files-tab"
              >
                <div className="row">
                  <div className="col">
                    {/* Card */}
                    <div
                      className="card border-0 flex-fill w-100"
                      data-list='{"valueNames": ["title", {"name": "updated", "attr": "data-updated"}, {"name": "size", "attr": "data-size"}], "page": 10}'
                      id="filesTable"
                    >
                      <div className="card-header border-0">
                        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end">
                          {/* Title */}
                          <h2 className="card-header-title h4 text-uppercase">
                            Files
                          </h2>
                          <input
                            className="form-control list-search mw-md-300px ms-md-auto mt-5 mt-md-0 mb-3 mb-md-0"
                            type="search"
                            placeholder="Search in files"
                          />
                          {/* Button */}
                          <button
                            type="button"
                            className="btn btn-primary ms-md-4"
                            data-bs-toggle="modal"
                            data-bs-target="#uploadFilesModal"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              height={16}
                              width={16}
                              className="me-1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 23.25L12 14.25"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M8.25 18L12 14.25 15.75 18"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M17.25,15.75h1.125a4.875,4.875,0,1,0-2.764-8.885A7.5,7.5,0,1,0,6.75,15.6"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                            Upload
                          </button>
                        </div>
                      </div>
                      {/* Table */}
                      <div className="table-responsive">
                        <table className="table align-middle table-hover table-nowrap mb-0">
                          <thead className="thead-light">
                            <tr>
                              <th>
                                <a
                                  href="javascript: void(0);"
                                  className="text-muted list-sort"
                                  data-sort="title"
                                >
                                  Title
                                </a>
                              </th>
                              <th>
                                <a
                                  href="javascript: void(0);"
                                  className="text-muted list-sort"
                                  data-sort="updated"
                                >
                                  Last updated
                                </a>
                              </th>
                              <th>
                                <a
                                  href="javascript: void(0);"
                                  className="text-muted list-sort"
                                  data-sort="size"
                                >
                                  Size
                                </a>
                              </th>
                              <th className="text-end">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-docs</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-143.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(0.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                fill="#2196F3"
                                              />
                                              <polygon
                                                fill="#BBDEFB"
                                                points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                              ></polygon>
                                              <polygon
                                                fill="#1565C0"
                                                points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                              ></polygon>
                                              <path
                                                d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                fill="#E3F2FD"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Employee handbook
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1652267547}>
                                Updated 17 mins ago
                              </td>
                              <td className="size" data-size={18432}>
                                18 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-docs</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-143.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(0.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                fill="#2196F3"
                                              />
                                              <polygon
                                                fill="#BBDEFB"
                                                points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                              ></polygon>
                                              <polygon
                                                fill="#1565C0"
                                                points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                              ></polygon>
                                              <path
                                                d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                fill="#E3F2FD"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Digital Media 2022
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1652263947}>
                                Updated 32 mins ago
                              </td>
                              <td className="size" data-size={24576}>
                                24 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-sheets</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-719.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(576.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M28.915942,41.8782609 L2.99130435,41.8782609 C1.33910725,41.8782609 0,40.5391536 0,38.8869565 L0,2.99130435 C0,1.33910725 1.33910725,0 2.99130435,0 L21.9362319,0 L31.9072464,9.97101449 L31.9072464,38.8869565 C31.9072464,40.5391536 30.5681391,41.8782609 28.915942,41.8782609 Z"
                                                fill="#43A047"
                                              />
                                              <polygon
                                                fill="#C8E6C9"
                                                points="31.9072464 9.97101449 21.9362319 9.97101449 21.9362319 0"
                                              ></polygon>
                                              <polygon
                                                fill="#2E7D32"
                                                points="21.9362319 9.97101449 31.9072464 19.942029 31.9072464 9.97101449"
                                              ></polygon>
                                              <path
                                                d="M22.9333333,19.942029 L8.97391304,19.942029 L6.97971014,19.942029 L6.97971014,21.9362319 L6.97971014,23.9304348 L6.97971014,25.9246377 L6.97971014,27.9188406 L6.97971014,29.9130435 L6.97971014,31.9072464 L6.97971014,33.9014493 L24.9275362,33.9014493 L24.9275362,31.9072464 L24.9275362,29.9130435 L24.9275362,27.9188406 L24.9275362,25.9246377 L24.9275362,23.9304348 L24.9275362,21.9362319 L24.9275362,19.942029 L22.9333333,19.942029 Z M8.97391304,21.9362319 L12.9623188,21.9362319 L12.9623188,23.9304348 L8.97391304,23.9304348 L8.97391304,21.9362319 Z M8.97391304,25.9246377 L12.9623188,25.9246377 L12.9623188,27.9188406 L8.97391304,27.9188406 L8.97391304,25.9246377 Z M8.97391304,29.9130435 L12.9623188,29.9130435 L12.9623188,31.9072464 L8.97391304,31.9072464 L8.97391304,29.9130435 Z M22.9333333,31.9072464 L14.9565217,31.9072464 L14.9565217,29.9130435 L22.9333333,29.9130435 L22.9333333,31.9072464 Z M22.9333333,27.9188406 L14.9565217,27.9188406 L14.9565217,25.9246377 L22.9333333,25.9246377 L22.9333333,27.9188406 Z M22.9333333,23.9304348 L14.9565217,23.9304348 L14.9565217,21.9362319 L22.9333333,21.9362319 L22.9333333,23.9304348 Z"
                                                fill="#E8F5E9"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Brand advertising
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1652260347}>
                                Updated 2 days ago
                              </td>
                              <td className="size" data-size={1258291}>
                                1.2 MB
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-slides</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-1007.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(864.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M28.915942,41.8782609 L2.99130435,41.8782609 C1.33910725,41.8782609 0,40.5391536 0,38.8869565 L0,2.99130435 C0,1.33910725 1.33910725,0 2.99130435,0 L21.9362319,0 L31.9072464,9.97101449 L31.9072464,38.8869565 C31.9072464,40.5391536 30.5681391,41.8782609 28.915942,41.8782609 Z"
                                                fill="#FFC107"
                                              />
                                              <polygon
                                                fill="#FFECB3"
                                                points="31.9072464 9.97101449 21.9362319 9.97101449 21.9362319 0"
                                              ></polygon>
                                              <polygon
                                                fill="#FFA000"
                                                points="21.9362319 9.97101449 31.9072464 19.942029 31.9072464 9.97101449"
                                              ></polygon>
                                              <path
                                                d="M21.9362319,18.9449275 L9.97101449,18.9449275 C8.8742029,18.9449275 7.97681159,19.8423188 7.97681159,20.9391304 L7.97681159,32.9043478 C7.97681159,34.0011594 8.8742029,34.8985507 9.97101449,34.8985507 L21.9362319,34.8985507 C23.0330435,34.8985507 23.9304348,34.0011594 23.9304348,32.9043478 L23.9304348,20.9391304 C23.9304348,19.8423188 23.0330435,18.9449275 21.9362319,18.9449275 Z M21.9362319,22.9333333 L21.9362319,30.9101449 L9.97101449,30.9101449 L9.97101449,22.9333333 L21.9362319,22.9333333 Z"
                                                fill="#FFFFFF"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Meeting minutes
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1652256747}>
                                Updated 3 days ago
                              </td>
                              <td className="size" data-size={3072}>
                                3 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 33 43"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-forms</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-431.000000, -915.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(289.422481, 256.000000)">
                                            <g transform="translate(113.077519, 64.000000)">
                                              <path
                                                d="M28.9669565,41.9478261 L3.03304348,41.9478261 C1.3773913,41.9478261 0.0417391304,40.6121739 0.0417391304,38.9565217 L0.0417391304,3.06086957 C0.0417391304,1.40521739 1.3773913,0.0695652174 3.03304348,0.0695652174 L21.9826087,0.0695652174 L31.9582609,10.0452174 L31.9582609,38.9565217 C31.9582609,40.6121739 30.6086957,41.9478261 28.9669565,41.9478261 Z"
                                                fill="#673AB7"
                                              />
                                              <polygon
                                                fill="#B6A2DA"
                                                points="31.9582609 10.0452174 21.9826087 10.0452174 21.9826087 0.0695652174"
                                              ></polygon>
                                              <polygon
                                                fill="#5C34A4"
                                                points="21.9826087 10.0452174 31.9582609 20.0208696 31.9582609 10.0452174"
                                              ></polygon>
                                              <path
                                                d="M11.0191304,20.0069565 L24.973913,20.0069565 L24.973913,21.9965217 L11.0191304,21.9965217 L11.0191304,20.0069565 Z M11.0191304,25.0017391 L24.973913,25.0017391 L24.973913,26.9913043 L11.0191304,26.9913043 L11.0191304,25.0017391 Z M11.0191304,29.9826087 L24.973913,29.9826087 L24.973913,31.9721739 L11.0191304,31.9721739 L11.0191304,29.9826087 Z M7.02608696,20.0069565 L9.01565217,20.0069565 L9.01565217,21.9965217 L7.02608696,21.9965217 L7.02608696,20.0069565 Z M7.02608696,25.0017391 L9.01565217,25.0017391 L9.01565217,26.9913043 L7.02608696,26.9913043 L7.02608696,25.0017391 Z M7.02608696,29.9826087 L9.01565217,29.9826087 L9.01565217,31.9721739 L7.02608696,31.9721739 L7.02608696,29.9826087 Z"
                                                fill="#E8F5E9"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Annual report
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1652245947}>
                                Updated 18 days ago
                              </td>
                              <td className="size" data-size={21504}>
                                21 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-docs</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-143.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(0.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                fill="#2196F3"
                                              />
                                              <polygon
                                                fill="#BBDEFB"
                                                points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                              ></polygon>
                                              <polygon
                                                fill="#1565C0"
                                                points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                              ></polygon>
                                              <path
                                                d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                fill="#E3F2FD"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Wireframes
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1652181147}>
                                Updated 21 days ago
                              </td>
                              <td className="size" data-size={46080}>
                                45 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-sheets</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-719.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(576.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M28.915942,41.8782609 L2.99130435,41.8782609 C1.33910725,41.8782609 0,40.5391536 0,38.8869565 L0,2.99130435 C0,1.33910725 1.33910725,0 2.99130435,0 L21.9362319,0 L31.9072464,9.97101449 L31.9072464,38.8869565 C31.9072464,40.5391536 30.5681391,41.8782609 28.915942,41.8782609 Z"
                                                fill="#43A047"
                                              />
                                              <polygon
                                                fill="#C8E6C9"
                                                points="31.9072464 9.97101449 21.9362319 9.97101449 21.9362319 0"
                                              ></polygon>
                                              <polygon
                                                fill="#2E7D32"
                                                points="21.9362319 9.97101449 31.9072464 19.942029 31.9072464 9.97101449"
                                              ></polygon>
                                              <path
                                                d="M22.9333333,19.942029 L8.97391304,19.942029 L6.97971014,19.942029 L6.97971014,21.9362319 L6.97971014,23.9304348 L6.97971014,25.9246377 L6.97971014,27.9188406 L6.97971014,29.9130435 L6.97971014,31.9072464 L6.97971014,33.9014493 L24.9275362,33.9014493 L24.9275362,31.9072464 L24.9275362,29.9130435 L24.9275362,27.9188406 L24.9275362,25.9246377 L24.9275362,23.9304348 L24.9275362,21.9362319 L24.9275362,19.942029 L22.9333333,19.942029 Z M8.97391304,21.9362319 L12.9623188,21.9362319 L12.9623188,23.9304348 L8.97391304,23.9304348 L8.97391304,21.9362319 Z M8.97391304,25.9246377 L12.9623188,25.9246377 L12.9623188,27.9188406 L8.97391304,27.9188406 L8.97391304,25.9246377 Z M8.97391304,29.9130435 L12.9623188,29.9130435 L12.9623188,31.9072464 L8.97391304,31.9072464 L8.97391304,29.9130435 Z M22.9333333,31.9072464 L14.9565217,31.9072464 L14.9565217,29.9130435 L22.9333333,29.9130435 L22.9333333,31.9072464 Z M22.9333333,27.9188406 L14.9565217,27.9188406 L14.9565217,25.9246377 L22.9333333,25.9246377 L22.9333333,27.9188406 Z M22.9333333,23.9304348 L14.9565217,23.9304348 L14.9565217,21.9362319 L22.9333333,21.9362319 L22.9333333,23.9304348 Z"
                                                fill="#E8F5E9"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Sketch files
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1652094747}>
                                Updated 25 days ago
                              </td>
                              <td className="size" data-size={3460300}>
                                3.3 MB
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-docs</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-143.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(0.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                fill="#2196F3"
                                              />
                                              <polygon
                                                fill="#BBDEFB"
                                                points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                              ></polygon>
                                              <polygon
                                                fill="#1565C0"
                                                points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                              ></polygon>
                                              <path
                                                d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                fill="#E3F2FD"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      AD report
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1652008347}>
                                Updated 27 days ago
                              </td>
                              <td className="size" data-size={29696}>
                                29 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-sheets</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-719.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(576.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M28.915942,41.8782609 L2.99130435,41.8782609 C1.33910725,41.8782609 0,40.5391536 0,38.8869565 L0,2.99130435 C0,1.33910725 1.33910725,0 2.99130435,0 L21.9362319,0 L31.9072464,9.97101449 L31.9072464,38.8869565 C31.9072464,40.5391536 30.5681391,41.8782609 28.915942,41.8782609 Z"
                                                fill="#43A047"
                                              />
                                              <polygon
                                                fill="#C8E6C9"
                                                points="31.9072464 9.97101449 21.9362319 9.97101449 21.9362319 0"
                                              ></polygon>
                                              <polygon
                                                fill="#2E7D32"
                                                points="21.9362319 9.97101449 31.9072464 19.942029 31.9072464 9.97101449"
                                              ></polygon>
                                              <path
                                                d="M22.9333333,19.942029 L8.97391304,19.942029 L6.97971014,19.942029 L6.97971014,21.9362319 L6.97971014,23.9304348 L6.97971014,25.9246377 L6.97971014,27.9188406 L6.97971014,29.9130435 L6.97971014,31.9072464 L6.97971014,33.9014493 L24.9275362,33.9014493 L24.9275362,31.9072464 L24.9275362,29.9130435 L24.9275362,27.9188406 L24.9275362,25.9246377 L24.9275362,23.9304348 L24.9275362,21.9362319 L24.9275362,19.942029 L22.9333333,19.942029 Z M8.97391304,21.9362319 L12.9623188,21.9362319 L12.9623188,23.9304348 L8.97391304,23.9304348 L8.97391304,21.9362319 Z M8.97391304,25.9246377 L12.9623188,25.9246377 L12.9623188,27.9188406 L8.97391304,27.9188406 L8.97391304,25.9246377 Z M8.97391304,29.9130435 L12.9623188,29.9130435 L12.9623188,31.9072464 L8.97391304,31.9072464 L8.97391304,29.9130435 Z M22.9333333,31.9072464 L14.9565217,31.9072464 L14.9565217,29.9130435 L22.9333333,29.9130435 L22.9333333,31.9072464 Z M22.9333333,27.9188406 L14.9565217,27.9188406 L14.9565217,25.9246377 L22.9333333,25.9246377 L22.9333333,27.9188406 Z M22.9333333,23.9304348 L14.9565217,23.9304348 L14.9565217,21.9362319 L22.9333333,21.9362319 L22.9333333,23.9304348 Z"
                                                fill="#E8F5E9"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Figma for beginners
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1651662747}>
                                Updated 1 month ago
                              </td>
                              <td className="size" data-size={103424}>
                                101 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-slides</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-1007.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(864.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M28.915942,41.8782609 L2.99130435,41.8782609 C1.33910725,41.8782609 0,40.5391536 0,38.8869565 L0,2.99130435 C0,1.33910725 1.33910725,0 2.99130435,0 L21.9362319,0 L31.9072464,9.97101449 L31.9072464,38.8869565 C31.9072464,40.5391536 30.5681391,41.8782609 28.915942,41.8782609 Z"
                                                fill="#FFC107"
                                              />
                                              <polygon
                                                fill="#FFECB3"
                                                points="31.9072464 9.97101449 21.9362319 9.97101449 21.9362319 0"
                                              ></polygon>
                                              <polygon
                                                fill="#FFA000"
                                                points="21.9362319 9.97101449 31.9072464 19.942029 31.9072464 9.97101449"
                                              ></polygon>
                                              <path
                                                d="M21.9362319,18.9449275 L9.97101449,18.9449275 C8.8742029,18.9449275 7.97681159,19.8423188 7.97681159,20.9391304 L7.97681159,32.9043478 C7.97681159,34.0011594 8.8742029,34.8985507 9.97101449,34.8985507 L21.9362319,34.8985507 C23.0330435,34.8985507 23.9304348,34.0011594 23.9304348,32.9043478 L23.9304348,20.9391304 C23.9304348,19.8423188 23.0330435,18.9449275 21.9362319,18.9449275 Z M21.9362319,22.9333333 L21.9362319,30.9101449 L9.97101449,30.9101449 L9.97101449,22.9333333 L21.9362319,22.9333333 Z"
                                                fill="#FFFFFF"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Important
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1651057947}>
                                Updated 2 months ago
                              </td>
                              <td className="size" data-size={58368}>
                                57 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-docs</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-143.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(0.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                fill="#2196F3"
                                              />
                                              <polygon
                                                fill="#BBDEFB"
                                                points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                              ></polygon>
                                              <polygon
                                                fill="#1565C0"
                                                points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                              ></polygon>
                                              <path
                                                d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                fill="#E3F2FD"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">HR</span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1650453147}>
                                Updated 3 months ago
                              </td>
                              <td className="size" data-size={2516582}>
                                2.5 MB
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-docs</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-143.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(0.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                fill="#2196F3"
                                              />
                                              <polygon
                                                fill="#BBDEFB"
                                                points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                              ></polygon>
                                              <polygon
                                                fill="#1565C0"
                                                points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                              ></polygon>
                                              <path
                                                d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                fill="#E3F2FD"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      How to make your business successful?
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1649848347}>
                                Updated 4 months ago
                              </td>
                              <td className="size" data-size={7340032}>
                                7 MB
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-docs</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-143.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(0.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                fill="#2196F3"
                                              />
                                              <polygon
                                                fill="#BBDEFB"
                                                points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                              ></polygon>
                                              <polygon
                                                fill="#1565C0"
                                                points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                              ></polygon>
                                              <path
                                                d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                fill="#E3F2FD"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Advanced HTML
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1649675547}>
                                Updated 6 months ago
                              </td>
                              <td className="size" data-size={77824}>
                                76 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 33 43"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-forms</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-431.000000, -915.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(289.422481, 256.000000)">
                                            <g transform="translate(113.077519, 64.000000)">
                                              <path
                                                d="M28.9669565,41.9478261 L3.03304348,41.9478261 C1.3773913,41.9478261 0.0417391304,40.6121739 0.0417391304,38.9565217 L0.0417391304,3.06086957 C0.0417391304,1.40521739 1.3773913,0.0695652174 3.03304348,0.0695652174 L21.9826087,0.0695652174 L31.9582609,10.0452174 L31.9582609,38.9565217 C31.9582609,40.6121739 30.6086957,41.9478261 28.9669565,41.9478261 Z"
                                                fill="#673AB7"
                                              />
                                              <polygon
                                                fill="#B6A2DA"
                                                points="31.9582609 10.0452174 21.9826087 10.0452174 21.9826087 0.0695652174"
                                              ></polygon>
                                              <polygon
                                                fill="#5C34A4"
                                                points="21.9826087 10.0452174 31.9582609 20.0208696 31.9582609 10.0452174"
                                              ></polygon>
                                              <path
                                                d="M11.0191304,20.0069565 L24.973913,20.0069565 L24.973913,21.9965217 L11.0191304,21.9965217 L11.0191304,20.0069565 Z M11.0191304,25.0017391 L24.973913,25.0017391 L24.973913,26.9913043 L11.0191304,26.9913043 L11.0191304,25.0017391 Z M11.0191304,29.9826087 L24.973913,29.9826087 L24.973913,31.9721739 L11.0191304,31.9721739 L11.0191304,29.9826087 Z M7.02608696,20.0069565 L9.01565217,20.0069565 L9.01565217,21.9965217 L7.02608696,21.9965217 L7.02608696,20.0069565 Z M7.02608696,25.0017391 L9.01565217,25.0017391 L9.01565217,26.9913043 L7.02608696,26.9913043 L7.02608696,25.0017391 Z M7.02608696,29.9826087 L9.01565217,29.9826087 L9.01565217,31.9721739 L7.02608696,31.9721739 L7.02608696,29.9826087 Z"
                                                fill="#E8F5E9"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Annual report 2019
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1647000747}>
                                Updated 9 months ago
                              </td>
                              <td className="size" data-size={307}>
                                0.3 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-sheets</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-719.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(576.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M28.915942,41.8782609 L2.99130435,41.8782609 C1.33910725,41.8782609 0,40.5391536 0,38.8869565 L0,2.99130435 C0,1.33910725 1.33910725,0 2.99130435,0 L21.9362319,0 L31.9072464,9.97101449 L31.9072464,38.8869565 C31.9072464,40.5391536 30.5681391,41.8782609 28.915942,41.8782609 Z"
                                                fill="#43A047"
                                              />
                                              <polygon
                                                fill="#C8E6C9"
                                                points="31.9072464 9.97101449 21.9362319 9.97101449 21.9362319 0"
                                              ></polygon>
                                              <polygon
                                                fill="#2E7D32"
                                                points="21.9362319 9.97101449 31.9072464 19.942029 31.9072464 9.97101449"
                                              ></polygon>
                                              <path
                                                d="M22.9333333,19.942029 L8.97391304,19.942029 L6.97971014,19.942029 L6.97971014,21.9362319 L6.97971014,23.9304348 L6.97971014,25.9246377 L6.97971014,27.9188406 L6.97971014,29.9130435 L6.97971014,31.9072464 L6.97971014,33.9014493 L24.9275362,33.9014493 L24.9275362,31.9072464 L24.9275362,29.9130435 L24.9275362,27.9188406 L24.9275362,25.9246377 L24.9275362,23.9304348 L24.9275362,21.9362319 L24.9275362,19.942029 L22.9333333,19.942029 Z M8.97391304,21.9362319 L12.9623188,21.9362319 L12.9623188,23.9304348 L8.97391304,23.9304348 L8.97391304,21.9362319 Z M8.97391304,25.9246377 L12.9623188,25.9246377 L12.9623188,27.9188406 L8.97391304,27.9188406 L8.97391304,25.9246377 Z M8.97391304,29.9130435 L12.9623188,29.9130435 L12.9623188,31.9072464 L8.97391304,31.9072464 L8.97391304,29.9130435 Z M22.9333333,31.9072464 L14.9565217,31.9072464 L14.9565217,29.9130435 L22.9333333,29.9130435 L22.9333333,31.9072464 Z M22.9333333,27.9188406 L14.9565217,27.9188406 L14.9565217,25.9246377 L22.9333333,25.9246377 L22.9333333,27.9188406 Z M22.9333333,23.9304348 L14.9565217,23.9304348 L14.9565217,21.9362319 L22.9333333,21.9362319 L22.9333333,23.9304348 Z"
                                                fill="#E8F5E9"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      NDA sample
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1644581547}>
                                Updated 1 year ago
                              </td>
                              <td className="size" data-size={11264}>
                                11 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-docs</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-143.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(0.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                fill="#2196F3"
                                              />
                                              <polygon
                                                fill="#BBDEFB"
                                                points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                              ></polygon>
                                              <polygon
                                                fill="#1565C0"
                                                points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                              ></polygon>
                                              <path
                                                d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                fill="#E3F2FD"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Brand resources
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1636632747}>
                                Updated 2 years ago
                              </td>
                              <td className="size" data-size={2097152}>
                                2 MB
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-slides</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-1007.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(864.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M28.915942,41.8782609 L2.99130435,41.8782609 C1.33910725,41.8782609 0,40.5391536 0,38.8869565 L0,2.99130435 C0,1.33910725 1.33910725,0 2.99130435,0 L21.9362319,0 L31.9072464,9.97101449 L31.9072464,38.8869565 C31.9072464,40.5391536 30.5681391,41.8782609 28.915942,41.8782609 Z"
                                                fill="#FFC107"
                                              />
                                              <polygon
                                                fill="#FFECB3"
                                                points="31.9072464 9.97101449 21.9362319 9.97101449 21.9362319 0"
                                              ></polygon>
                                              <polygon
                                                fill="#FFA000"
                                                points="21.9362319 9.97101449 31.9072464 19.942029 31.9072464 9.97101449"
                                              ></polygon>
                                              <path
                                                d="M21.9362319,18.9449275 L9.97101449,18.9449275 C8.8742029,18.9449275 7.97681159,19.8423188 7.97681159,20.9391304 L7.97681159,32.9043478 C7.97681159,34.0011594 8.8742029,34.8985507 9.97101449,34.8985507 L21.9362319,34.8985507 C23.0330435,34.8985507 23.9304348,34.0011594 23.9304348,32.9043478 L23.9304348,20.9391304 C23.9304348,19.8423188 23.0330435,18.9449275 21.9362319,18.9449275 Z M21.9362319,22.9333333 L21.9362319,30.9101449 L9.97101449,30.9101449 L9.97101449,22.9333333 L21.9362319,22.9333333 Z"
                                                fill="#FFFFFF"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Updated CVs
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1628680347}>
                                Updated 5 years ago
                              </td>
                              <td className="size" data-size={2726297}>
                                2.6 MB
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-slides</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-1007.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(864.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M28.915942,41.8782609 L2.99130435,41.8782609 C1.33910725,41.8782609 0,40.5391536 0,38.8869565 L0,2.99130435 C0,1.33910725 1.33910725,0 2.99130435,0 L21.9362319,0 L31.9072464,9.97101449 L31.9072464,38.8869565 C31.9072464,40.5391536 30.5681391,41.8782609 28.915942,41.8782609 Z"
                                                fill="#FFC107"
                                              />
                                              <polygon
                                                fill="#FFECB3"
                                                points="31.9072464 9.97101449 21.9362319 9.97101449 21.9362319 0"
                                              ></polygon>
                                              <polygon
                                                fill="#FFA000"
                                                points="21.9362319 9.97101449 31.9072464 19.942029 31.9072464 9.97101449"
                                              ></polygon>
                                              <path
                                                d="M21.9362319,18.9449275 L9.97101449,18.9449275 C8.8742029,18.9449275 7.97681159,19.8423188 7.97681159,20.9391304 L7.97681159,32.9043478 C7.97681159,34.0011594 8.8742029,34.8985507 9.97101449,34.8985507 L21.9362319,34.8985507 C23.0330435,34.8985507 23.9304348,34.0011594 23.9304348,32.9043478 L23.9304348,20.9391304 C23.9304348,19.8423188 23.0330435,18.9449275 21.9362319,18.9449275 Z M21.9362319,22.9333333 L21.9362319,30.9101449 L9.97101449,30.9101449 L9.97101449,22.9333333 L21.9362319,22.9333333 Z"
                                                fill="#FFFFFF"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Reference letter
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1620731547}>
                                Updated 6 years ago
                              </td>
                              <td className="size" data-size={4299161}>
                                4.1 MB
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-docs</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-143.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(0.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                fill="#2196F3"
                                              />
                                              <polygon
                                                fill="#BBDEFB"
                                                points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                              ></polygon>
                                              <polygon
                                                fill="#1565C0"
                                                points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                              ></polygon>
                                              <path
                                                d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                fill="#E3F2FD"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Bootstrap Themes doc
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1589195547}>
                                Updated 7 years ago
                              </td>
                              <td className="size" data-size={19456}>
                                19 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-sheets</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-719.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(576.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M28.915942,41.8782609 L2.99130435,41.8782609 C1.33910725,41.8782609 0,40.5391536 0,38.8869565 L0,2.99130435 C0,1.33910725 1.33910725,0 2.99130435,0 L21.9362319,0 L31.9072464,9.97101449 L31.9072464,38.8869565 C31.9072464,40.5391536 30.5681391,41.8782609 28.915942,41.8782609 Z"
                                                fill="#43A047"
                                              />
                                              <polygon
                                                fill="#C8E6C9"
                                                points="31.9072464 9.97101449 21.9362319 9.97101449 21.9362319 0"
                                              ></polygon>
                                              <polygon
                                                fill="#2E7D32"
                                                points="21.9362319 9.97101449 31.9072464 19.942029 31.9072464 9.97101449"
                                              ></polygon>
                                              <path
                                                d="M22.9333333,19.942029 L8.97391304,19.942029 L6.97971014,19.942029 L6.97971014,21.9362319 L6.97971014,23.9304348 L6.97971014,25.9246377 L6.97971014,27.9188406 L6.97971014,29.9130435 L6.97971014,31.9072464 L6.97971014,33.9014493 L24.9275362,33.9014493 L24.9275362,31.9072464 L24.9275362,29.9130435 L24.9275362,27.9188406 L24.9275362,25.9246377 L24.9275362,23.9304348 L24.9275362,21.9362319 L24.9275362,19.942029 L22.9333333,19.942029 Z M8.97391304,21.9362319 L12.9623188,21.9362319 L12.9623188,23.9304348 L8.97391304,23.9304348 L8.97391304,21.9362319 Z M8.97391304,25.9246377 L12.9623188,25.9246377 L12.9623188,27.9188406 L8.97391304,27.9188406 L8.97391304,25.9246377 Z M8.97391304,29.9130435 L12.9623188,29.9130435 L12.9623188,31.9072464 L8.97391304,31.9072464 L8.97391304,29.9130435 Z M22.9333333,31.9072464 L14.9565217,31.9072464 L14.9565217,29.9130435 L22.9333333,29.9130435 L22.9333333,31.9072464 Z M22.9333333,27.9188406 L14.9565217,27.9188406 L14.9565217,25.9246377 L22.9333333,25.9246377 L22.9333333,27.9188406 Z M22.9333333,23.9304348 L14.9565217,23.9304348 L14.9565217,21.9362319 L22.9333333,21.9362319 L22.9333333,23.9304348 Z"
                                                fill="#E8F5E9"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Artwork
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1557573147}>
                                Updated 9 years ago
                              </td>
                              <td className="size" data-size={90112}>
                                88 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 33 43"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-forms</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-431.000000, -915.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(289.422481, 256.000000)">
                                            <g transform="translate(113.077519, 64.000000)">
                                              <path
                                                d="M28.9669565,41.9478261 L3.03304348,41.9478261 C1.3773913,41.9478261 0.0417391304,40.6121739 0.0417391304,38.9565217 L0.0417391304,3.06086957 C0.0417391304,1.40521739 1.3773913,0.0695652174 3.03304348,0.0695652174 L21.9826087,0.0695652174 L31.9582609,10.0452174 L31.9582609,38.9565217 C31.9582609,40.6121739 30.6086957,41.9478261 28.9669565,41.9478261 Z"
                                                fill="#673AB7"
                                              />
                                              <polygon
                                                fill="#B6A2DA"
                                                points="31.9582609 10.0452174 21.9826087 10.0452174 21.9826087 0.0695652174"
                                              ></polygon>
                                              <polygon
                                                fill="#5C34A4"
                                                points="21.9826087 10.0452174 31.9582609 20.0208696 31.9582609 10.0452174"
                                              ></polygon>
                                              <path
                                                d="M11.0191304,20.0069565 L24.973913,20.0069565 L24.973913,21.9965217 L11.0191304,21.9965217 L11.0191304,20.0069565 Z M11.0191304,25.0017391 L24.973913,25.0017391 L24.973913,26.9913043 L11.0191304,26.9913043 L11.0191304,25.0017391 Z M11.0191304,29.9826087 L24.973913,29.9826087 L24.973913,31.9721739 L11.0191304,31.9721739 L11.0191304,29.9826087 Z M7.02608696,20.0069565 L9.01565217,20.0069565 L9.01565217,21.9965217 L7.02608696,21.9965217 L7.02608696,20.0069565 Z M7.02608696,25.0017391 L9.01565217,25.0017391 L9.01565217,26.9913043 L7.02608696,26.9913043 L7.02608696,25.0017391 Z M7.02608696,29.9826087 L9.01565217,29.9826087 L9.01565217,31.9721739 L7.02608696,31.9721739 L7.02608696,29.9826087 Z"
                                                fill="#E8F5E9"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Main website amends
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1494501147}>
                                Updated 10 years ago
                              </td>
                              <td className="size" data-size={63488}>
                                62 kb
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="title">
                                <div className="d-flex align-items-center">
                                  <svg
                                    width={23}
                                    height={30}
                                    className="me-3"
                                    viewBox="0 0 32 42"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <title>google-docs</title>
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-143.000000, -703.000000)"
                                        fillRule="nonzero"
                                      >
                                        <g transform="translate(29.000000, 595.000000)">
                                          <g transform="translate(0.922481, 42.000000)">
                                            <g transform="translate(113.077519, 66.000000)">
                                              <path
                                                d="M29,41.7882353 L3,41.7882353 C1.343,41.7882353 0,40.4520067 0,38.8033613 L0,2.98487395 C0,1.33622857 1.343,0 3,0 L22,0 L32,9.94957983 L32,38.8033613 C32,40.4520067 30.657,41.7882353 29,41.7882353 Z"
                                                fill="#2196F3"
                                              />
                                              <polygon
                                                fill="#BBDEFB"
                                                points="32 9.78823529 22.2117647 9.78823529 22.2117647 0"
                                              ></polygon>
                                              <polygon
                                                fill="#1565C0"
                                                points="22.2117647 10.1647059 32 19.9529412 32 10.1647059"
                                              ></polygon>
                                              <path
                                                d="M6.77647059,19.9529412 L24.8470588,19.9529412 L24.8470588,21.9428571 L6.77647059,21.9428571 L6.77647059,19.9529412 Z M6.77647059,23.9327731 L24.8470588,23.9327731 L24.8470588,25.9226891 L6.77647059,25.9226891 L6.77647059,23.9327731 Z M6.77647059,27.912605 L24.8470588,27.912605 L24.8470588,29.902521 L6.77647059,29.902521 L6.77647059,27.912605 Z M6.77647059,31.892437 L16.8156863,31.892437 L16.8156863,33.8823529 L6.77647059,33.8823529 L6.77647059,31.892437 Z"
                                                fill="#E3F2FD"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  <div className="d-flex flex-column">
                                    <span className="fw-bold d-block">
                                      Automated speedtest results
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="updated" data-updated={1336734747}>
                                Updated 11 years ago
                              </td>
                              <td className="size" data-size={3984588}>
                                3.8 MB
                              </td>
                              <td>
                                {/* Dropdown */}
                                <div className="dropdown float-end">
                                  <a
                                    href="javascript: void(0);"
                                    className="dropdown-toggle no-arrow d-flex text-secondary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      height={14}
                                      width={14}
                                    >
                                      <g>
                                        <circle
                                          cx={12}
                                          cy="3.25"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy={12}
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                        <circle
                                          cx={12}
                                          cy="20.75"
                                          r="3.25"
                                          style={{ fill: "currentColor" }}
                                        />
                                      </g>
                                    </svg>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <span className="dropdown-header">
                                        SETTINGS
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12,5.251C7.969,5.183,3.8,8,1.179,10.885a1.663,1.663,0,0,0,0,2.226C3.743,15.935,7.9,18.817,12,18.748c4.1.069,8.258-2.813,10.824-5.637a1.663,1.663,0,0,0,0-2.226C20.2,8,16.031,5.183,12,5.251Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.75,12A3.75,3.75,0,1,1,12,8.249,3.749,3.749,0,0,1,15.75,12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Preview
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.001 3.75L12.001 15.75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M7.501 11.25L12.001 15.75 16.501 11.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M23.251,15.75v1.5a3,3,0,0,1-3,3H3.751a3,3,0,0,1-3-3v-1.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Download
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11.250 18.000 A2.250 2.250 0 1 0 15.750 18.000 A2.250 2.250 0 1 0 11.250 18.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 21.000 A2.250 2.250 0 1 0 23.250 21.000 A2.250 2.250 0 1 0 18.750 21.000 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M18.750 13.500 A2.250 2.250 0 1 0 23.250 13.500 A2.250 2.250 0 1 0 18.750 13.500 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.425 16.845L19.075 14.655"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M15.588 18.835L18.912 20.165"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Share
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          viewBox="0 0 24 24"
                                          height={14}
                                          width={14}
                                          className="me-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12.712,16.386,9,16.916,9.53,13.2l9.546-9.546A2.25,2.25,0,1,1,22.258,6.84Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                          <path
                                            d="M5.25,15h-3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,2.25,21h19.5a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript: void(0);"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          height={12}
                                          width={14}
                                          className="me-2"
                                        >
                                          <g>
                                            <line
                                              x1={1}
                                              y1={5}
                                              x2={23}
                                              y2={5}
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M14.25,1H9.75a1.5,1.5,0,0,0-1.5,1.5V5h7.5V2.5A1.5,1.5,0,0,0,14.25,1Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="9.75"
                                              y1="17.75"
                                              x2="9.75"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <line
                                              x1="14.25"
                                              y1="17.75"
                                              x2="14.25"
                                              y2="10.25"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                              }}
                                            />
                                            <path
                                              d="M18.86,21.62A1.49,1.49,0,0,1,17.37,23H6.63a1.49,1.49,0,0,1-1.49-1.38L3.75,5h16.5Z"
                                              style={{
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5px",
                                              }}
                                            />
                                          </g>
                                        </svg>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>{" "}
                      {/* / .table-responsive */}
                      <div className="card-footer">
                        {/* Pagination */}
                        <ul className="pagination justify-content-end list-pagination mb-0" />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
            </div>
          </div>{" "}
          {/* / .container-fluid */}
          {/* Footer*/}
          {/* Footer */}
          <footer className="mt-auto">
            <div className="container-fluid mt-4 mb-6 text-muted">
              <div className="row justify-content-between">
                <div className="col">© Identify. 2023 Rethink Tech Ltd.</div>
                <div className="col-auto">v1.0.0</div>
              </div>{" "}
              {/* / .row */}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Home;
