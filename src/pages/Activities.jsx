import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Activities() {
  return (
    <div>
      <Nav />
      <main>
        {/* HEADER */}
        <Header />
        <div className="container-fluid d-flex flex-column flex-grow-1">
          {/* Title */}
          <h1 className="h2">Calendar</h1>
          <div className="row flex-md-grow-1">
            <div className="col d-flex">
              {/* Card */}
              <div className="card border-0 flex-grow-1">
                <div className="card-body">
                  <div className="row flex-grow-1 h-100">
                    <div className="col-12 col-xxl-3 mw-xl-300px mb-5 mb-md-8">
                      {/* Button */}
                      <button
                        className="btn btn-secondary w-100 mb-6"
                        data-bs-toggle="modal"
                        data-bs-target="#eventModal"
                        id="btnAddEvent"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          height={14}
                          width={14}
                          className="me-1"
                        >
                          <path
                            d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
                            style={{ fill: "currentColor" }}
                          />
                        </svg>
                        Add DAO Event
                      </button>
                      <p className="fs-5 mb-4 text-secondary">
                        Drag and drop your event or click in the calendar
                      </p>
                      <div id="draggable">
                        <div
                          className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-bg-success-soft border-0 py-2 px-3 mb-3 cursor-move"
                          data-class="bg-success border-0"
                        >
                          <span className="fc-event-main text-success">
                            Event
                          </span>
                        </div>
                        <div
                          className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-bg-info-soft border-0 py-2 px-3 mb-3 cursor-move"
                          data-class="bg-info border-0"
                        >
                          <span className="fc-event-main text-info">
                            Event - Under Armour DAO MEETING
                          </span>
                        </div>
                        <div
                          className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-bg-warning-soft border-0 py-2 px-3 mb-3 cursor-move"
                          data-class="bg-warning border-0"
                        >
                          <span className="fc-event-main text-warning">
                            Event - Richmond DAO MEETING
                          </span>
                        </div>
                        <div
                          className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-bg-danger-soft border-0 py-2 px-3 mb-3 cursor-move"
                          data-class="bg-danger border-0"
                        >
                          <span className="fc-event-main text-danger">
                            Event - NIKE DAO MEETING
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col d-flex">
                      <div
                        id="fullcalendar"
                        className="flex-grow-1 min-h-500px"
                      />
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
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
      </main>
    </div>
  );
}

export default Activities;
