import React from 'react'


function Dashboard() {
  return (
    <>
      <div>
        <div className="d-flex flex-column flex-root">
          {/*begin::Page*/}
          <div className="page d-flex flex-row flex-column-fluid">
            {/*begin::Aside*/}
            <div
              id="kt_aside"
              className="aside bg-info"
              data-kt-drawer="true"
              data-kt-drawer-name="aside"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="{default:'200px', '300px': '250px'}"
              data-kt-drawer-direction="start"
              data-kt-drawer-toggle="#kt_aside_toggler"
            >
              {/*begin::Secondary*/}
              <div className="aside-secondary d-flex flex-row-fluid bg-white">
                {/*begin::Workspace*/}
                <div
                  className="aside-workspace my-7 ps-5 pe-4 ps-lg-10 pe-lg-6"
                  id="kt_aside_wordspace"
                >
                  {/*begin::Logo*/}
                  <div className="aside-logo py-2 pb-7" id="kt_aside_logo">
                    <a href="index.html">
                      <img
                        alt="Logo"
                        src="assets/media/logos/logo-compact.svg"
                        className="mh-50px"
                      />
                    </a>
                  </div>
                  {/*end::Logo*/}
                  {/*begin::Aside Menu*/}
                  {/*begin::Menu*/}
                  <div
                    className="menu menu-column menu-rounded menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6"
                    data-kt-menu="true"
                  >
                    <div
                      className="hover-scroll-y pe-4 pe-lg-5"
                      id="kt_aside_menu_scroll"
                      data-kt-scroll="true"
                      data-kt-scroll-height="auto"
                      data-kt-scroll-dependencies="#kt_aside_logo"
                      data-kt-scroll-wrappers="#kt_aside_wordspace"
                      data-kt-scroll-offset="10px"
                    >
                      <div className="menu-wrapper menu-column menu-fit">
                        <div className="menu-item here show">
                          <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
                            Dashboards
                          </h4>
                          <div className="menu-sub menu-fit menu-sub-accordion show pb-10">
                            <div className="menu-item">
                              <a className="menu-link py-2" href="index.html">
                                <span className="menu-title">Start</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Extended
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link active py-2"
                                href="dashboards/light.html"
                              >
                                <span className="menu-title">Light</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Compact
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item">
                          <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
                            Apps
                          </h4>
                          <div className="menu-sub menu-fit menu-sub-accordion show pb-10">
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Private Chat
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Group Chat
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Drawer Chat
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Inbox
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Shop 1
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Shop 2
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Shop Product
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item">
                          <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
                            General
                          </h4>
                          <div className="menu-sub menu-fit menu-sub-accordion show pb-10">
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="general/faq.html"
                              >
                                <span className="menu-title">FAQ</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="general/pricing.html"
                              >
                                <span className="menu-title">Pricing</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="general/invoice.html"
                              >
                                <span className="menu-title">Invoice</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Login
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Wizard
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Error
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item">
                          <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
                            Profile
                          </h4>
                          <div className="menu-sub menu-fit menu-sub-accordion show pb-10">
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="profile/overview.html"
                              >
                                <span className="menu-title">Overview</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Account
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Settings
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item">
                          <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
                            Resources
                          </h4>
                          <div className="menu-sub menu-fit menu-sub-accordion show">
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="documentation/base/utilities.html"
                              >
                                <span className="menu-title">Components</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="documentation/getting-started.html"
                              >
                                <span className="menu-title">
                                  Documentation
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                <span className="menu-title">
                                  Layout Builder
                                  <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                    Pro
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-2"
                                href="documentation/getting-started/changelog.html"
                              >
                                <span className="menu-title">
                                  Changelog
                                  <span className="badge badge-changelog badge-light-danger bg-hover-danger text-hover-white fw-bold fs-9 px-2 ms-2">
                                    v1.0.1
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end::Menu*/}
                </div>
                {/*end::Workspace*/}
              </div>
              {/*end::Secondary*/}
            </div>
            {/*end::Aside*/}
            {/*begin::Wrapper*/}
            <div
              className="wrapper d-flex flex-column flex-row-fluid"
              id="kt_wrapper"
            >
              {/*begin::Header*/}
              <div
                id="kt_header"
                className="header"
                data-kt-sticky="true"
                data-kt-sticky-name="header"
                data-kt-sticky-offset="{default: '200px', lg: '300px'}"
              >
                {/*begin::Container*/}
                <div className="container d-flex align-items-stretch justify-content-between">
                  {/*begin::Left*/}
                  <div className="d-flex align-items-center">
                    {/*begin::Title*/}
                    <h3 className="text-dark fw-bolder my-1 fs-2">Dashboard</h3>
                    {/*end::Title*/}
                  </div>
                  {/*end::Left*/}
                  {/*begin::Right*/}
                  <div className="d-flex align-items-center">
                    {/*begin::Search*/}
                    <button
                      className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_header_search_modal"
                      id="kt_header_search_toggle"
                    >
                      {/*begin::Svg Icon | path: icons/duotone/General/Search.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <path
                              d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                            <path
                              d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*end::Search*/}
                    {/*begin::Message*/}
                    <button
                      className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
                      data-bs-toggle="tooltip"
                      title="Available in <span class='badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1'>Pro</span> version"
                      data-bs-html="true"
                      data-bs-placement="bottom"
                      id="kt_drawer_chat_toggle"
                    >
                      {/*begin::Svg Icon | path: icons/duotone/Communication/Chat6.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <path
                            opacity="0.3"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.4862 18L12.7975 21.0566C12.5304 21.54 11.922 21.7153 11.4386 21.4483C11.2977 21.3704 11.1777 21.2597 11.0887 21.1255L9.01653 18H5C3.34315 18 2 16.6569 2 15V6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H14.4862Z"
                            fill="black"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7ZM6 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*end::Message*/}
                    {/*begin::User*/}
                    <div className="ms-1 ms-lg-6">
                      {/*begin::Toggle*/}
                      <div
                        className="btn btn-icon btn-sm btn-active-bg-accent"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                        id="kt_header_user_menu_toggle"
                      >
                        {/*begin::Svg Icon | path: icons/duotone/General/User.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <path
                                d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                opacity="0.3"
                              />
                              <path
                                d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                fill="#000000"
                                fillRule="nonzero"
                              />
                            </g>
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-300px"
                        data-kt-menu="true"
                      >
                        <div
                          className="menu-content fw-bold d-flex align-items-center bgi-no-repeat bgi-position-y-top rounded-top"
                          style={{
                            backgroundImage:
                              'url("assets/media//misc/dropdown-header-bg.jpg")',
                          }}
                        >
                          <div className="symbol symbol-45px mx-5 py-5">
                            <span className="symbol-label bg-primary align-items-end">
                              <img
                                alt="Logo"
                                src="assets/media/svg/avatars/001-boy.svg"
                                className="mh-35px"
                              />
                            </span>
                          </div>
                          <div className>
                            <span className="text-white fw-bolder fs-4">
                              Hello, James
                            </span>
                            <span className="text-white fw-bold fs-7 d-block">
                              CRM Product Designer
                            </span>
                          </div>
                        </div>
                        {/*begin::Row*/}
                        <div className="row row-cols-2 g-0">
                          <a
                            href="profile/overview.html"
                            className="border-bottom border-end text-center py-10 btn btn-active-color-primary rounded-0"
                          >
                            {/*begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks.svg*/}
                            <span className="svg-icon svg-icon-3x me-n1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect x={0} y={0} width={24} height={24} />
                                  <rect
                                    fill="#000000"
                                    x={4}
                                    y={4}
                                    width={7}
                                    height={7}
                                    rx="1.5"
                                  />
                                  <path
                                    d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            <span className="fw-bolder fs-6 d-block pt-3">
                              My Profile
                            </span>
                          </a>
                          <a
                            href="#"
                            className="col border-bottom text-center py-10 btn btn-active-color-primary rounded-0"
                          >
                            {/*begin::Svg Icon | path: icons/duotone/General/Settings-1.svg*/}
                            <span className="svg-icon svg-icon-3x me-n1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect x={0} y={0} width={24} height={24} />
                                  <path
                                    d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z"
                                    fill="#000000"
                                  />
                                  <path
                                    d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            <span className="fw-bolder fs-6 d-block pt-3">
                              Settings
                            </span>
                          </a>
                          <a
                            href="#"
                            className="col text-center border-end py-10 btn btn-active-color-primary rounded-0"
                          >
                            {/*begin::Svg Icon | path: icons/duotone/Shopping/Euro.svg*/}
                            <span className="svg-icon svg-icon-3x me-n1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect x={0} y={0} width={24} height={24} />
                                  <path
                                    d="M4.3618034,10.2763932 L4.8618034,9.2763932 C4.94649941,9.10700119 5.11963097,9 5.30901699,9 L15.190983,9 C15.4671254,9 15.690983,9.22385763 15.690983,9.5 C15.690983,9.57762255 15.6729105,9.65417908 15.6381966,9.7236068 L15.1381966,10.7236068 C15.0535006,10.8929988 14.880369,11 14.690983,11 L4.80901699,11 C4.53287462,11 4.30901699,10.7761424 4.30901699,10.5 C4.30901699,10.4223775 4.32708954,10.3458209 4.3618034,10.2763932 Z M14.6381966,13.7236068 L14.1381966,14.7236068 C14.0535006,14.8929988 13.880369,15 13.690983,15 L4.80901699,15 C4.53287462,15 4.30901699,14.7761424 4.30901699,14.5 C4.30901699,14.4223775 4.32708954,14.3458209 4.3618034,14.2763932 L4.8618034,13.2763932 C4.94649941,13.1070012 5.11963097,13 5.30901699,13 L14.190983,13 C14.4671254,13 14.690983,13.2238576 14.690983,13.5 C14.690983,13.5776225 14.6729105,13.6541791 14.6381966,13.7236068 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <path
                                    d="M17.369,7.618 C16.976998,7.08599734 16.4660031,6.69750122 15.836,6.4525 C15.2059968,6.20749878 14.590003,6.085 13.988,6.085 C13.2179962,6.085 12.5180032,6.2249986 11.888,6.505 C11.2579969,6.7850014 10.7155023,7.16999755 10.2605,7.66 C9.80549773,8.15000245 9.45550123,8.72399671 9.2105,9.382 C8.96549878,10.0400033 8.843,10.7539961 8.843,11.524 C8.843,12.3360041 8.96199881,13.0779966 9.2,13.75 C9.43800119,14.4220034 9.7774978,14.9994976 10.2185,15.4825 C10.6595022,15.9655024 11.1879969,16.3399987 11.804,16.606 C12.4200031,16.8720013 13.1129962,17.005 13.883,17.005 C14.681004,17.005 15.3879969,16.8475016 16.004,16.5325 C16.6200031,16.2174984 17.1169981,15.8010026 17.495,15.283 L19.616,16.774 C18.9579967,17.6000041 18.1530048,18.2404977 17.201,18.6955 C16.2489952,19.1505023 15.1360064,19.378 13.862,19.378 C12.6999942,19.378 11.6325049,19.1855019 10.6595,18.8005 C9.68649514,18.4154981 8.8500035,17.8765035 8.15,17.1835 C7.4499965,16.4904965 6.90400196,15.6645048 6.512,14.7055 C6.11999804,13.7464952 5.924,12.6860058 5.924,11.524 C5.924,10.333994 6.13049794,9.25950479 6.5435,8.3005 C6.95650207,7.34149521 7.5234964,6.52600336 8.2445,5.854 C8.96550361,5.18199664 9.8159951,4.66400182 10.796,4.3 C11.7760049,3.93599818 12.8399943,3.754 13.988,3.754 C14.4640024,3.754 14.9609974,3.79949954 15.479,3.8905 C15.9970026,3.98150045 16.4939976,4.12149906 16.97,4.3105 C17.4460024,4.49950095 17.8939979,4.7339986 18.314,5.014 C18.7340021,5.2940014 19.0909985,5.62999804 19.385,6.022 L17.369,7.618 Z"
                                    fill="#000000"
                                  />
                                </g>
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            <span className="fw-bolder fs-6 d-block pt-3">
                              Subscriptions
                            </span>
                          </a>
                          <a
                            href="#"
                            className="col text-center py-10 btn btn-active-color-primary rounded-0"
                          >
                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Sign-out.svg*/}
                            <span className="svg-icon svg-icon-3x me-n1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect x={0} y={0} width={24} height={24} />
                                  <path
                                    d="M14.0069431,7.00607258 C13.4546584,7.00607258 13.0069431,6.55855153 13.0069431,6.00650634 C13.0069431,5.45446114 13.4546584,5.00694009 14.0069431,5.00694009 L15.0069431,5.00694009 C17.2160821,5.00694009 19.0069431,6.7970243 19.0069431,9.00520507 L19.0069431,15.001735 C19.0069431,17.2099158 17.2160821,19 15.0069431,19 L3.00694311,19 C0.797804106,19 -0.993056895,17.2099158 -0.993056895,15.001735 L-0.993056895,8.99826498 C-0.993056895,6.7900842 0.797804106,5 3.00694311,5 L4.00694793,5 C4.55923268,5 5.00694793,5.44752105 5.00694793,5.99956624 C5.00694793,6.55161144 4.55923268,6.99913249 4.00694793,6.99913249 L3.00694311,6.99913249 C1.90237361,6.99913249 1.00694311,7.89417459 1.00694311,8.99826498 L1.00694311,15.001735 C1.00694311,16.1058254 1.90237361,17.0008675 3.00694311,17.0008675 L15.0069431,17.0008675 C16.1115126,17.0008675 17.0069431,16.1058254 17.0069431,15.001735 L17.0069431,9.00520507 C17.0069431,7.90111468 16.1115126,7.00607258 15.0069431,7.00607258 L14.0069431,7.00607258 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    opacity="0.5"
                                    transform="translate(9.006943, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-9.006943, -12.000000)"
                                  />
                                  <rect
                                    fill="#000000"
                                    opacity="0.5"
                                    transform="translate(14.000000, 12.000000) rotate(-270.000000) translate(-14.000000, -12.000000)"
                                    x={13}
                                    y={6}
                                    width={2}
                                    height={12}
                                    rx={1}
                                  />
                                  <path
                                    d="M21.7928932,9.79289322 C22.1834175,9.40236893 22.8165825,9.40236893 23.2071068,9.79289322 C23.5976311,10.1834175 23.5976311,10.8165825 23.2071068,11.2071068 L20.2071068,14.2071068 C19.8165825,14.5976311 19.1834175,14.5976311 18.7928932,14.2071068 L15.7928932,11.2071068 C15.4023689,10.8165825 15.4023689,10.1834175 15.7928932,9.79289322 C16.1834175,9.40236893 16.8165825,9.40236893 17.2071068,9.79289322 L19.5,12.0857864 L21.7928932,9.79289322 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(19.500000, 12.000000) rotate(-90.000000) translate(-19.500000, -12.000000)"
                                  />
                                </g>
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            <span className="fw-bolder fs-6 d-block pt-3">
                              Sign Out
                            </span>
                          </a>
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Notifications*/}
                    <div className="ms-1 ms-lg-6">
                      {/*begin::Dropdown*/}
                      <button
                        className="btn btn-icon btn-sm btn-light-danger fw-bolder pulse pulse-danger"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                        id="kt_activities_toggle"
                      >
                        <span className="position-absolute fs-6">3</span>
                        <span className="pulse-ring" />
                      </button>
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded fw-bold menu-title-gray-800 menu-hover-bg menu-state-title-primary w-250px w-md-300px"
                        data-kt-menu="true"
                      >
                        <div className="menu-item mx-3">
                          <div className="menu-content fs-6 text-dark fw-bolder py-6">
                            4 New Notifications
                          </div>
                        </div>
                        <div className="separator mb-3" />
                        <div className="menu-item mx-3">
                          <a href="#" className="menu-link px-4 py-3">
                            <div className="symbol symbol-35px">
                              <span className="symbol-label bg-light-info">
                                {/*begin::Svg Icon | path: icons/duotone/Home/Library.svg*/}
                                <span className="svg-icon svg-icon-3 svg-icon-info">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <path
                                        d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                        fill="#000000"
                                      />
                                      <rect
                                        fill="#000000"
                                        opacity="0.3"
                                        transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)"
                                        x="16.3255682"
                                        y="2.94551858"
                                        width={3}
                                        height={18}
                                        rx={1}
                                      />
                                    </g>
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            <div className="ps-4">
                              <span className="menu-title fw-bold mb-1">
                                New Uer Library Added
                              </span>
                              <span className="text-muted fw-bold d-block fs-7">
                                3 Hours ago
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="menu-item mx-3">
                          <a href="#" className="menu-link px-4 py-3">
                            <div className="symbol symbol-35px">
                              <span className="symbol-label bg-light-warning">
                                {/*begin::Svg Icon | path: icons/duotone/Devices/Mic.svg*/}
                                <span className="svg-icon svg-icon-3 svg-icon-warning">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <path
                                      d="M12.9975507,17.929461 C12.9991745,17.9527631 13,17.9762852 13,18 L13,21 C13,21.5522847 12.5522847,22 12,22 C11.4477153,22 11,21.5522847 11,21 L11,18 C11,17.9762852 11.0008255,17.9527631 11.0024493,17.929461 C7.60896116,17.4452857 5,14.5273206 5,11 L7,11 C7,13.7614237 9.23857625,16 12,16 C14.7614237,16 17,13.7614237 17,11 L19,11 C19,14.5273206 16.3910388,17.4452857 12.9975507,17.929461 Z"
                                      fill="#000000"
                                      fillRule="nonzero"
                                    />
                                    <rect
                                      fill="#000000"
                                      opacity="0.3"
                                      transform="translate(12.000000, 8.000000) rotate(-360.000000) translate(-12.000000, -8.000000)"
                                      x={9}
                                      y={2}
                                      width={6}
                                      height={12}
                                      rx={3}
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            <div className="ps-4">
                              <span className="menu-title fw-bold mb-1">
                                Clean Microphone
                              </span>
                              <span className="text-muted fw-bold d-block fs-7">
                                5 Hours ago
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="menu-item mx-3">
                          <a href="#" className="menu-link px-4 py-3">
                            <div className="symbol symbol-35px">
                              <span className="symbol-label bg-light-primary">
                                {/*begin::Svg Icon | path: icons/duotone/Communication/Group-chat.svg*/}
                                <span className="svg-icon svg-icon-3 svg-icon-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <path
                                      d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                                      fill="#000000"
                                    />
                                    <path
                                      d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                                      fill="#000000"
                                      opacity="0.3"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            <div className="ps-4">
                              <span className="menu-title fw-bold mb-1">
                                Quick Chat Created
                              </span>
                              <span className="text-muted fw-bold d-block fs-7">
                                A Day ago
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="menu-item mx-3">
                          <a href="#" className="menu-link px-4 py-3">
                            <div className="symbol symbol-35px">
                              <span className="symbol-label bg-light-danger">
                                {/*begin::Svg Icon | path: icons/duotone/General/Attachment2.svg*/}
                                <span className="svg-icon svg-icon-3 svg-icon-danger">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <path
                                        d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z"
                                        fill="#000000"
                                        opacity="0.3"
                                        transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641)"
                                      />
                                      <path
                                        d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z"
                                        fill="#000000"
                                        transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359)"
                                      />
                                      <path
                                        d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z"
                                        fill="#000000"
                                        opacity="0.3"
                                        transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146)"
                                      />
                                      <path
                                        d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z"
                                        fill="#000000"
                                        opacity="0.3"
                                        transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961)"
                                      />
                                    </g>
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            <div className="ps-4">
                              <span className="menu-title fw-bold mb-1">
                                32 New Attachements
                              </span>
                              <span className="text-muted fw-bold d-block fs-7">
                                2 Day ago
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="separator mt-3" />
                        <div className="menu-item mx-2">
                          <div className="menu-content py-5">
                            <a
                              href="#"
                              className="btn btn-primary fw-bolder me-2 px-5"
                            >
                              Report
                            </a>
                            <a
                              href="#"
                              className="btn btn-light fw-bolder px-5"
                            >
                              Reset
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*end::Menu*/}
                      {/*end::Dropdown*/}
                    </div>
                    {/*end::Notifications*/}
                    {/*begin::Aside Toggler*/}
                    <button
                      className="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6"
                      id="kt_aside_toggler"
                    >
                      {/*begin::Svg Icon | path: icons/duotone/Text/Menu.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <rect
                              fill="#000000"
                              x={4}
                              y={5}
                              width={16}
                              height={3}
                              rx="1.5"
                            />
                            <path
                              d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*end::Aside Toggler*/}
                    {/*begin::Sidebar Toggler*/}
                    {/*end::Sidebar Toggler*/}
                  </div>
                  {/*end::Right*/}
                </div>
                {/*end::Container*/}
              </div>
              {/*end::Header*/}
              {/*begin::Main*/}
              <div className="d-flex flex-column flex-column-fluid">
                {/*begin::Content*/}
                <div
                  className="content fs-6 d-flex flex-column-fluid"
                  id="kt_content"
                >
                  {/*begin::Container*/}
                  <div className="container">
                    {/*begin::Row*/}
                    <div className="row g-0 g-xl-5 g-xxl-8">
                      <div className="col-xl-4">
                        {/*begin::Stats Widget 3*/}
                        <div className="card bg-danger card-stretch mb-5 mb-xxl-8">
                          {/*begin::Body*/}
                          <div className="card-body">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Symbol*/}
                              <div className="symbol symbol-50px me-5">
                                <span className="symbol-label bg-white bg-opacity-10">
                                  {/*begin::Svg Icon | path: icons/duotone/Communication/Group-chat.svg*/}
                                  <span className="svg-icon svg-icon-2x svg-icon-white">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <path
                                        d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                                        fill="#000000"
                                      />
                                      <path
                                        d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                                        fill="#000000"
                                        opacity="0.3"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </span>
                              </div>
                              {/*end::Symbol*/}
                              {/*begin::Title*/}
                              <div>
                                <a
                                  href="#"
                                  className="fs-4 text-white text-hover-primary fw-bolder"
                                >
                                  Chat Application
                                </a>
                                <div className="fs-7 text-white opacity-75 fw-bold mt-1">
                                  HTML, Django
                                </div>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Info*/}
                            <div className="fw-bolder text-white pt-7">
                              <span className="d-block">26 Authors</span>
                              <span className="d-block pt-2">140 Comments</span>
                            </div>
                            {/*end::Info*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px mt-7 bg-white bg-opacity-10">
                              <div
                                className="progress-bar bg-white"
                                role="progressbar"
                                style={{ width: "70%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Stats Widget 3*/}
                      </div>
                      <div className="col-xl-4">
                        {/*begin::Stats Widget 4*/}
                        <div className="card card-stretch mb-5 mb-xxl-8">
                          {/*begin::Body*/}
                          <div className="card-body">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Symbol*/}
                              <div className="symbol symbol-50px me-5">
                                <span className="symbol-label bg-light-success">
                                  {/*begin::Svg Icon | path: icons/duotone/Home/Library.svg*/}
                                  <span className="svg-icon svg-icon-2x svg-icon-success">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        strokeWidth={1}
                                        fill="none"
                                        fillRule="evenodd"
                                      >
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                          fill="#000000"
                                        />
                                        <rect
                                          fill="#000000"
                                          opacity="0.3"
                                          transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)"
                                          x="16.3255682"
                                          y="2.94551858"
                                          width={3}
                                          height={18}
                                          rx={1}
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </span>
                              </div>
                              {/*end::Symbol*/}
                              {/*begin::Title*/}
                              <div>
                                <a
                                  href="#"
                                  className="fs-4 text-gray-800 text-hover-primary fw-bolder"
                                >
                                  Library Studio
                                </a>
                                <div className="fs-7 text-muted fw-bold mt-1">
                                  VueJS, Laravel
                                </div>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Info*/}
                            <div className="fw-bolder text-muted pt-7">
                              <span className="d-block">26 Authors</span>
                              <span className="d-block pt-2">140 Comments</span>
                            </div>
                            {/*end::Info*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px bg-light-success mt-7">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Stats Widget 4*/}
                      </div>
                      <div className="col-xl-4">
                        {/*begin::Stats Widget 5*/}
                        <div className="card card-stretch mb-5 mb-xxl-8">
                          {/*begin::Body*/}
                          <div className="card-body">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Symbol*/}
                              <div className="symbol symbol-50px me-5">
                                <span className="symbol-label bg-light-warning">
                                  {/*begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks.svg*/}
                                  <span className="svg-icon svg-icon-2x svg-icon-warning">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        strokeWidth={1}
                                        fill="none"
                                        fillRule="evenodd"
                                      >
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <rect
                                          fill="#000000"
                                          x={4}
                                          y={4}
                                          width={7}
                                          height={7}
                                          rx="1.5"
                                        />
                                        <path
                                          d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                          fill="#000000"
                                          opacity="0.3"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </span>
                              </div>
                              {/*end::Symbol*/}
                              {/*begin::Title*/}
                              <div>
                                <a
                                  href="#"
                                  className="fs-4 text-gray-800 text-hover-primary fw-bolder"
                                >
                                  Chat Application
                                </a>
                                <div className="fs-7 text-muted fw-bold mt-1">
                                  RractJS, .NET
                                </div>
                              </div>
                              {/*end::Title*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Info*/}
                            <div className="fw-bolder text-muted pt-7">
                              <span className="d-block">26 Authors</span>
                              <span className="d-block pt-2">140 Comments</span>
                            </div>
                            {/*end::Info*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px bg-light-warning mt-7">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Stats Widget 5*/}
                      </div>
                    </div>
                    {/*end::Row*/}
                    {/*begin::Row*/}
                    <div className="row g-0 g-xl-5 g-xxl-8">
                      <div className="col-xl-4">
                        {/*begin::Stats Widget 1*/}
                        <div className="card card-stretch mb-5 mb-xxl-8">
                          {/*begin::Header*/}
                          <div className="card-header align-items-center border-0 mt-5">
                            <h3 className="card-title align-items-start flex-column">
                              <span className="fw-bolder text-dark fs-3">
                                Sales Share
                              </span>
                              <span className="text-muted mt-2 fw-bold fs-6">
                                890,344 Sales
                              </span>
                            </h3>
                            <div className="card-toolbar">
                              {/*begin::Dropdown*/}
                              <button
                                type="button"
                                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                data-kt-menu-trigger="click"
                                data-kt-menu-placement="bottom-end"
                                data-kt-menu-flip="top-end"
                              >
                                {/*begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks-2.svg*/}
                                <span className="svg-icon svg-icon-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={5}
                                        y={5}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="#000000"
                                      />
                                      <rect
                                        x={14}
                                        y={5}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="#000000"
                                        opacity="0.3"
                                      />
                                      <rect
                                        x={5}
                                        y={14}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="#000000"
                                        opacity="0.3"
                                      />
                                      <rect
                                        x={14}
                                        y={14}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="#000000"
                                        opacity="0.3"
                                      />
                                    </g>
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </button>
                              {/*begin::Menu*/}
                              <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px"
                                data-kt-menu="true"
                              >
                                <div className="menu-item px-3">
                                  <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                                    Manage
                                  </div>
                                </div>
                                <div className="separator mb-3 opacity-75" />
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Add User
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Add Role
                                  </a>
                                </div>
                                <div
                                  className="menu-item px-3"
                                  data-kt-menu-trigger="hover"
                                  data-kt-menu-placement="right-start"
                                  data-kt-menu-flip="left-start, top"
                                >
                                  <a href="#" className="menu-link px-3">
                                    <span className="menu-title">
                                      Add Group
                                    </span>
                                    <span className="menu-arrow" />
                                  </a>
                                  <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Admin Group
                                      </a>
                                    </div>
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Staff Group
                                      </a>
                                    </div>
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Member Group
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Reports
                                  </a>
                                </div>
                                <div className="separator mt-3 opacity-75" />
                                <div className="menu-item px-3">
                                  <div className="menu-content px-3 py-3">
                                    <a
                                      className="btn btn-primary fw-bold btn-sm px-4"
                                      href="#"
                                    >
                                      Create New
                                    </a>
                                  </div>
                                </div>
                              </div>
                              {/*end::Menu*/}
                              {/*end::Dropdown*/}
                            </div>
                          </div>
                          {/*end::Header*/}
                          {/*begin::Body*/}
                          <div className="card-body pt-12">
                            {/*begin::Chart*/}
                            <div
                              className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px"
                              style={{
                                backgroundImage:
                                  'url("assets/media/svg/illustrations/bg-1.svg")',
                              }}
                            >
                              <div className="fw-bolder fs-1 text-gray-800 position-absolute">
                                8,345
                              </div>
                              <canvas id="kt_stats_widget_1_chart" />
                            </div>
                            {/*end::Chart*/}
                            {/*begin::Items*/}
                            <div className="d-flex justify-content-around pt-18">
                              {/*begin::Item*/}
                              <div className>
                                <span className="fw-bolder text-gray-800">
                                  48% SNT
                                </span>
                                <span className="bg-info w-25px h-5px d-block rounded mt-1" />
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className>
                                <span className="fw-bolder text-gray-800">
                                  20% REX
                                </span>
                                <span className="bg-primary w-25px h-5px d-block rounded mt-1" />
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className>
                                <span className="fw-bolder text-gray-800">
                                  32% SAP
                                </span>
                                <span className="bg-warning w-25px h-5px d-block rounded mt-1" />
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Items*/}
                          </div>
                          {/*end: Card Body*/}
                        </div>
                        {/*end::Stats Widget 1*/}
                      </div>
                      <div className="col-xl-8">
                        {/*begin::Stats Widget 2*/}
                        <div className="card card-stretch mb-5 mb-xxl-8">
                          {/*begin::Header*/}
                          <div className="card-header align-items-center border-0 mt-5">
                            <h3 className="card-title align-items-start flex-column">
                              <span className="fw-bolder text-dark fs-3">
                                Milestones
                              </span>
                              <span className="text-muted mt-2 fw-bold fs-6">
                                890,344 Sales
                              </span>
                            </h3>
                            <div className="card-toolbar">
                              {/*begin::Dropdown*/}
                              <button
                                type="button"
                                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                data-kt-menu-trigger="click"
                                data-kt-menu-placement="bottom-end"
                                data-kt-menu-flip="top-end"
                              >
                                {/*begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks-2.svg*/}
                                <span className="svg-icon svg-icon-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={5}
                                        y={5}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="#000000"
                                      />
                                      <rect
                                        x={14}
                                        y={5}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="#000000"
                                        opacity="0.3"
                                      />
                                      <rect
                                        x={5}
                                        y={14}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="#000000"
                                        opacity="0.3"
                                      />
                                      <rect
                                        x={14}
                                        y={14}
                                        width={5}
                                        height={5}
                                        rx={1}
                                        fill="#000000"
                                        opacity="0.3"
                                      />
                                    </g>
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </button>
                              {/*begin::Form*/}
                              <div
                                className="menu menu-sub menu-sub-dropdown menu-column w-300px w-lg-350px p-5"
                                data-kt-menu="true"
                              >
                                {/*begin::Input*/}
                                <div className="input-group input-group-solid mb-5">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text">
                                      {/*begin::Svg Icon | path: icons/duotone/General/Search.svg*/}
                                      <span className="svg-icon svg-icon-4">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          width="24px"
                                          height="24px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                        >
                                          <g
                                            stroke="none"
                                            strokeWidth={1}
                                            fill="none"
                                            fillRule="evenodd"
                                          >
                                            <rect
                                              x={0}
                                              y={0}
                                              width={24}
                                              height={24}
                                            />
                                            <path
                                              d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                              fill="#000000"
                                              fillRule="nonzero"
                                              opacity="0.3"
                                            />
                                            <path
                                              d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                              fill="#000000"
                                              fillRule="nonzero"
                                            />
                                          </g>
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control ps-0"
                                    name="search"
                                    defaultValue
                                    placeholder="Filter reports"
                                  />
                                </div>
                                {/*end::Input*/}
                                {/*begin::Tabs*/}
                                <ul className="nav nav-line-tabs nav-line-tabs-2x border-light fw-bold mb-5">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active"
                                      data-bs-toggle="tab"
                                      href="#kt_dropdown_2_tab_1"
                                    >
                                      Today
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-bs-toggle="tab"
                                      href="#kt_dropdown_2_tab_2"
                                    >
                                      Last Week
                                    </a>
                                  </li>
                                </ul>
                                {/*end::Tabs*/}
                                {/*begin::Tab Content*/}
                                <div className="tab-content">
                                  {/*begin::Tab Pane*/}
                                  <div
                                    className="tab-pane active"
                                    id="kt_dropdown_2_tab_1"
                                  >
                                    <ul className="menu menu-custom menu-column menu-rounded menu-title-gray-600 menu-icon-muted menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold">
                                      <li className="menu-item py-1">
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/Files/Media.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <path
                                                    d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    opacity="0.3"
                                                  />
                                                  <path
                                                    d="M10.782158,15.8052934 L15.1856088,12.7952868 C15.4135806,12.6394552 15.4720618,12.3283211 15.3162302,12.1003494 C15.2814587,12.0494808 15.2375842,12.0054775 15.1868178,11.970557 L10.783367,8.94156929 C10.5558531,8.78507001 10.2445489,8.84263875 10.0880496,9.07015268 C10.0307022,9.15352258 10,9.25233045 10,9.35351969 L10,15.392514 C10,15.6686564 10.2238576,15.892514 10.5,15.892514 C10.6006894,15.892514 10.699033,15.8621141 10.782158,15.8052934 Z"
                                                    fill="#000000"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            Web &amp; App History
                                          </span>
                                        </a>
                                      </li>
                                      <li className="menu-item py-1">
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/Communication/Mail-heart.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <path
                                                  d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M13.8,4 C13.1562,4 12.4033,4.72985286 12,5.2 C11.5967,4.72985286 10.8438,4 10.2,4 C9.0604,4 8.4,4.88887193 8.4,6.02016349 C8.4,7.27338783 9.6,8.6 12,10 C14.4,8.6 15.6,7.3 15.6,6.1 C15.6,4.96870845 14.9396,4 13.8,4 Z"
                                                  fill="#000000"
                                                  opacity="0.3"
                                                />
                                                <path
                                                  d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z"
                                                  fill="#000000"
                                                />
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            Activity and Timeline
                                          </span>
                                          <span className="menu-badge badge badge-light-danger fw-bold">
                                            new
                                          </span>
                                        </a>
                                      </li>
                                      <li className="menu-item py-1">
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/Communication/Incoming-box.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <path
                                                  d="M22,17 L22,21 C22,22.1045695 21.1045695,23 20,23 L4,23 C2.8954305,23 2,22.1045695 2,21 L2,17 L6.27924078,17 L6.82339262,18.6324555 C7.09562072,19.4491398 7.8598984,20 8.72075922,20 L15.381966,20 C16.1395101,20 16.8320364,19.5719952 17.1708204,18.8944272 L18.118034,17 L22,17 Z"
                                                  fill="#000000"
                                                />
                                                <path
                                                  d="M2.5625,15 L5.92654389,9.01947752 C6.2807805,8.38972356 6.94714834,8 7.66969497,8 L16.330305,8 C17.0528517,8 17.7192195,8.38972356 18.0734561,9.01947752 L21.4375,15 L18.118034,15 C17.3604899,15 16.6679636,15.4280048 16.3291796,16.1055728 L15.381966,18 L8.72075922,18 L8.17660738,16.3675445 C7.90437928,15.5508602 7.1401016,15 6.27924078,15 L2.5625,15 Z"
                                                  fill="#000000"
                                                  opacity="0.3"
                                                />
                                                <path
                                                  d="M11.1288761,0.733697713 L11.1288761,2.69017121 L9.12120481,2.69017121 C8.84506244,2.69017121 8.62120481,2.91402884 8.62120481,3.19017121 L8.62120481,4.21346991 C8.62120481,4.48961229 8.84506244,4.71346991 9.12120481,4.71346991 L11.1288761,4.71346991 L11.1288761,6.66994341 C11.1288761,6.94608579 11.3527337,7.16994341 11.6288761,7.16994341 C11.7471877,7.16994341 11.8616664,7.12798964 11.951961,7.05154023 L15.4576222,4.08341738 C15.6683723,3.90498251 15.6945689,3.58948575 15.5161341,3.37873564 C15.4982803,3.35764848 15.4787093,3.33807751 15.4576222,3.32022374 L11.951961,0.352100892 C11.7412109,0.173666017 11.4257142,0.199862688 11.2472793,0.410612793 C11.1708299,0.500907473 11.1288761,0.615386087 11.1288761,0.733697713 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                  transform="translate(11.959697, 3.661508) rotate(-270.000000) translate(-11.959697, -3.661508)"
                                                />
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            Business Features
                                          </span>
                                        </a>
                                      </li>
                                      <li className="menu-item py-1">
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/Design/Flatten.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <circle
                                                  fill="#000000"
                                                  cx={9}
                                                  cy={15}
                                                  r={6}
                                                />
                                                <path
                                                  d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z"
                                                  fill="#000000"
                                                  opacity="0.3"
                                                />
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            Accessibility Settings
                                          </span>
                                        </a>
                                      </li>
                                      <li className="menu-item py-1">
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/Design/Saturation.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <path
                                                  d="M7,14 C7,16.7614237 9.23857625,19 12,19 C14.7614237,19 17,16.7614237 17,14 C17,12.3742163 15.3702913,9.86852817 12,6.69922982 C8.62970872,9.86852817 7,12.3742163 7,14 Z M12,21 C8.13400675,21 5,17.8659932 5,14 C5,11.4226712 7.33333333,8.08933783 12,4 C16.6666667,8.08933783 19,11.4226712 19,14 C19,17.8659932 15.8659932,21 12,21 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                />
                                                <path
                                                  d="M12,4 C16.6666667,8.08933783 19,11.4226712 19,14 C19,17.8659932 15.8659932,21 12,21 L12,4 Z"
                                                  fill="#000000"
                                                />
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            Data &amp; Personalisation
                                          </span>
                                        </a>
                                      </li>
                                      <li className="menu-item py-1">
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/General/Notification2.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <rect
                                                    x={0}
                                                    y={0}
                                                    width={24}
                                                    height={24}
                                                  />
                                                  <path
                                                    d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z"
                                                    fill="#000000"
                                                  />
                                                  <circle
                                                    fill="#000000"
                                                    opacity="0.3"
                                                    cx="18.5"
                                                    cy="5.5"
                                                    r="2.5"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            General Preference
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  {/*end::Tab Pane*/}
                                  {/*begin::Tab Pane*/}
                                  <div
                                    className="tab-pane"
                                    id="kt_dropdown_2_tab_2"
                                  >
                                    <ul className="menu menu-custom menu-column menu-rounded menu-title-gray-600 menu-icon-muted menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold">
                                      <li className="menu-item py-1">
                                        <a
                                          href="#"
                                          className="menu-link active px-3"
                                        >
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/Communication/Mail-heart.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <path
                                                  d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M13.8,4 C13.1562,4 12.4033,4.72985286 12,5.2 C11.5967,4.72985286 10.8438,4 10.2,4 C9.0604,4 8.4,4.88887193 8.4,6.02016349 C8.4,7.27338783 9.6,8.6 12,10 C14.4,8.6 15.6,7.3 15.6,6.1 C15.6,4.96870845 14.9396,4 13.8,4 Z"
                                                  fill="#000000"
                                                  opacity="0.3"
                                                />
                                                <path
                                                  d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z"
                                                  fill="#000000"
                                                />
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            Activity and Timeline
                                          </span>
                                          <span className="menu-badge badge badge-danger fw-bold">
                                            new
                                          </span>
                                        </a>
                                      </li>
                                      <li className="menu-item py-1">
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/Communication/Incoming-box.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <path
                                                  d="M22,17 L22,21 C22,22.1045695 21.1045695,23 20,23 L4,23 C2.8954305,23 2,22.1045695 2,21 L2,17 L6.27924078,17 L6.82339262,18.6324555 C7.09562072,19.4491398 7.8598984,20 8.72075922,20 L15.381966,20 C16.1395101,20 16.8320364,19.5719952 17.1708204,18.8944272 L18.118034,17 L22,17 Z"
                                                  fill="#000000"
                                                />
                                                <path
                                                  d="M2.5625,15 L5.92654389,9.01947752 C6.2807805,8.38972356 6.94714834,8 7.66969497,8 L16.330305,8 C17.0528517,8 17.7192195,8.38972356 18.0734561,9.01947752 L21.4375,15 L18.118034,15 C17.3604899,15 16.6679636,15.4280048 16.3291796,16.1055728 L15.381966,18 L8.72075922,18 L8.17660738,16.3675445 C7.90437928,15.5508602 7.1401016,15 6.27924078,15 L2.5625,15 Z"
                                                  fill="#000000"
                                                  opacity="0.3"
                                                />
                                                <path
                                                  d="M11.1288761,0.733697713 L11.1288761,2.69017121 L9.12120481,2.69017121 C8.84506244,2.69017121 8.62120481,2.91402884 8.62120481,3.19017121 L8.62120481,4.21346991 C8.62120481,4.48961229 8.84506244,4.71346991 9.12120481,4.71346991 L11.1288761,4.71346991 L11.1288761,6.66994341 C11.1288761,6.94608579 11.3527337,7.16994341 11.6288761,7.16994341 C11.7471877,7.16994341 11.8616664,7.12798964 11.951961,7.05154023 L15.4576222,4.08341738 C15.6683723,3.90498251 15.6945689,3.58948575 15.5161341,3.37873564 C15.4982803,3.35764848 15.4787093,3.33807751 15.4576222,3.32022374 L11.951961,0.352100892 C11.7412109,0.173666017 11.4257142,0.199862688 11.2472793,0.410612793 C11.1708299,0.500907473 11.1288761,0.615386087 11.1288761,0.733697713 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                  transform="translate(11.959697, 3.661508) rotate(-270.000000) translate(-11.959697, -3.661508)"
                                                />
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            Business Features
                                          </span>
                                        </a>
                                      </li>
                                      <li className="menu-item py-1">
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/Design/Flatten.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <circle
                                                  fill="#000000"
                                                  cx={9}
                                                  cy={15}
                                                  r={6}
                                                />
                                                <path
                                                  d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z"
                                                  fill="#000000"
                                                  opacity="0.3"
                                                />
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            Accessibility Settings
                                          </span>
                                        </a>
                                      </li>
                                      <li className="menu-item py-1">
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/Design/Saturation.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <path
                                                  d="M7,14 C7,16.7614237 9.23857625,19 12,19 C14.7614237,19 17,16.7614237 17,14 C17,12.3742163 15.3702913,9.86852817 12,6.69922982 C8.62970872,9.86852817 7,12.3742163 7,14 Z M12,21 C8.13400675,21 5,17.8659932 5,14 C5,11.4226712 7.33333333,8.08933783 12,4 C16.6666667,8.08933783 19,11.4226712 19,14 C19,17.8659932 15.8659932,21 12,21 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                />
                                                <path
                                                  d="M12,4 C16.6666667,8.08933783 19,11.4226712 19,14 C19,17.8659932 15.8659932,21 12,21 L12,4 Z"
                                                  fill="#000000"
                                                />
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            Data &amp; Personalisation
                                          </span>
                                        </a>
                                      </li>
                                      <li className="menu-item py-1">
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/General/Notification2.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <rect
                                                    x={0}
                                                    y={0}
                                                    width={24}
                                                    height={24}
                                                  />
                                                  <path
                                                    d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z"
                                                    fill="#000000"
                                                  />
                                                  <circle
                                                    fill="#000000"
                                                    opacity="0.3"
                                                    cx="18.5"
                                                    cy="5.5"
                                                    r="2.5"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            General Preference
                                          </span>
                                        </a>
                                      </li>
                                      <li className="menu-item py-1">
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-icon">
                                            {/*begin::Svg Icon | path: icons/duotone/Files/Media.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <path
                                                    d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    opacity="0.3"
                                                  />
                                                  <path
                                                    d="M10.782158,15.8052934 L15.1856088,12.7952868 C15.4135806,12.6394552 15.4720618,12.3283211 15.3162302,12.1003494 C15.2814587,12.0494808 15.2375842,12.0054775 15.1868178,11.970557 L10.783367,8.94156929 C10.5558531,8.78507001 10.2445489,8.84263875 10.0880496,9.07015268 C10.0307022,9.15352258 10,9.25233045 10,9.35351969 L10,15.392514 C10,15.6686564 10.2238576,15.892514 10.5,15.892514 C10.6006894,15.892514 10.699033,15.8621141 10.782158,15.8052934 Z"
                                                    fill="#000000"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </span>
                                          <span className="menu-title">
                                            Web &amp; App History
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  {/*end::Tab Pane*/}
                                </div>
                                {/*end::Tab Content*/}
                              </div>
                              {/*end::Form*/}
                              {/*end::Dropdown*/}
                            </div>
                          </div>
                          {/*end::Header*/}
                          {/*begin::Body*/}
                          <div className="card-body pt-0">
                            <div className="d-flex flex-wrap flex-xxl-nowrap justify-content-center justify-content-md-start pt-4">
                              {/*begin::Nav*/}
                              <div className="me-sm-10 me-0">
                                <ul className="nav flex-column nav-pills nav-pills-custom">
                                  <li className="nav-item mb-3">
                                    <a
                                      className="nav-link active w-225px h-70px"
                                      data-bs-toggle="pill"
                                      id="kt_stats_widget_2_tab_1"
                                      href="#kt_stats_widget_2_tab_1_content"
                                    >
                                      <div className="nav-icon me-3">
                                        <img
                                          alt
                                          src="assets/media/svg/logo/gray/aven.svg"
                                          className="default"
                                        />
                                        <img
                                          alt
                                          src="assets/media/svg/logo/colored/aven.svg"
                                          className="active"
                                        />
                                      </div>
                                      <div className="ps-1">
                                        <span className="nav-text text-gray-600 fw-bolder fs-6">
                                          Man&amp;Flower SaaS
                                        </span>
                                        <span className="text-muted fw-bold d-block pt-1">
                                          HR Solutions
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="nav-item mb-3">
                                    <a
                                      className="nav-link w-225px h-70px"
                                      data-bs-toggle="pill"
                                      id="kt_stats_widget_2_tab_2"
                                      href="#kt_stats_widget_2_tab_2_content"
                                    >
                                      <div className="nav-icon me-3">
                                        <img
                                          alt
                                          src="assets/media/svg/logo/gray/tower.svg"
                                          className="default"
                                        />
                                        <img
                                          alt
                                          src="assets/media/svg/logo/colored/tower.svg"
                                          className="active"
                                        />
                                      </div>
                                      <div className="ps-1">
                                        <span className="nav-text text-gray-600 fw-bolder fs-6">
                                          Building Studio
                                        </span>
                                        <span className="text-muted fw-bold d-block pt-1">
                                          HR Solutions
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="nav-item mb-3">
                                    <a
                                      className="nav-link w-225px h-70px"
                                      data-bs-toggle="pill"
                                      id="kt_stats_widget_2_tab_3"
                                      href="#kt_stats_widget_2_tab_3_content"
                                    >
                                      <div className="nav-icon me-3">
                                        <img
                                          alt
                                          src="assets/media/svg/logo/gray/fox-hub-2.svg"
                                          className="default"
                                        />
                                        <img
                                          alt
                                          src="assets/media/svg/logo/colored/fox-hub-2.svg"
                                          className="active"
                                        />
                                      </div>
                                      <div className="ps-1">
                                        <span className="nav-text text-gray-600 fw-bolder fs-6">
                                          Foxy Solutions
                                        </span>
                                        <span className="text-muted fw-bold d-block pt-1">
                                          HR Solutions
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="nav-item mb-5">
                                    <a
                                      className="nav-link w-225px h-70px"
                                      data-bs-toggle="pill"
                                      id="kt_stats_widget_2_tab_4"
                                      href="#kt_stats_widget_2_tab_4_content"
                                    >
                                      <div className="nav-icon me-3">
                                        <img
                                          alt
                                          src="assets/media/svg/logo/gray/kanba.svg"
                                          className="default"
                                        />
                                        <img
                                          alt
                                          src="assets/media/svg/logo/colored/kanba.svg"
                                          className="active"
                                        />
                                      </div>
                                      <div className="ps-1">
                                        <span className="nav-text text-gray-600 fw-bolder fs-6">
                                          MyStreams
                                        </span>
                                        <span className="text-muted fw-bold d-block pt-1">
                                          HR Solutions
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/*end::Nav*/}
                              {/*begin::Tab Content*/}
                              <div className="tab-content flex-grow-1">
                                {/*begin::Tab Pane 1*/}
                                <div
                                  className="tab-pane fade show active"
                                  id="kt_stats_widget_2_tab_1_content"
                                >
                                  {/*begin::Content*/}
                                  <div className="d-flex justify-content-center mb-10">
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Sale
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        $650
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Commission
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        $2,040
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Refers
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        8,926
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                  </div>
                                  {/*end::Content*/}
                                  {/*begin::Chart*/}
                                  <div
                                    id="kt_stats_widget_2_chart_1"
                                    style={{ height: 250 }}
                                  />
                                  {/*end::Chart*/}
                                </div>
                                {/*end::Tab Pane 1*/}
                                {/*begin::Tab Pane 2*/}
                                <div
                                  className="tab-pane fade"
                                  id="kt_stats_widget_2_tab_2_content"
                                >
                                  {/*begin::Content*/}
                                  <div className="d-flex justify-content-center mb-10">
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Sale
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        $1250
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Commission
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        $5,000
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Refers
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        4,926
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                  </div>
                                  {/*end::Content*/}
                                  {/*begin::Chart*/}
                                  <div
                                    id="kt_stats_widget_2_chart_2"
                                    style={{ height: 250 }}
                                  />
                                  {/*end::Chart*/}
                                </div>
                                {/*end::Tab Pane 2*/}
                                {/*begin::Tab Pane 3*/}
                                <div
                                  className="tab-pane fade"
                                  id="kt_stats_widget_2_tab_3_content"
                                >
                                  {/*begin::Content*/}
                                  <div className="d-flex justify-content-center mb-10">
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Sale
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        $350
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Comission
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        $1,200
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Refers
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        5,500
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                  </div>
                                  {/*end::Content*/}
                                  {/*begin::Chart*/}
                                  <div
                                    id="kt_stats_widget_2_chart_3"
                                    style={{ height: 250 }}
                                  />
                                  {/*end::Chart*/}
                                </div>
                                {/*end::Tab Pane 3*/}
                                {/*begin::Tab Pane 4*/}
                                <div
                                  className="tab-pane fade"
                                  id="kt_stats_widget_2_tab_4_content"
                                >
                                  {/*begin::Content*/}
                                  <div className="d-flex justify-content-center mb-10">
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Sale
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        $450
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Comission
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        $6,500
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <div className="px-10">
                                      <span className="text-muted fw-bold fs-7">
                                        Refers
                                      </span>
                                      <span className="text-gray-800 fw-bolder fs-3 d-block">
                                        500
                                      </span>
                                    </div>
                                    {/*end::Item*/}
                                  </div>
                                  {/*end::Content*/}
                                  {/*begin::Chart*/}
                                  <div
                                    id="kt_stats_widget_2_chart_4"
                                    style={{ height: 250 }}
                                  />
                                  {/*end::Chart*/}
                                </div>
                                {/*end::Tab Pane 4*/}
                              </div>
                              {/*end::Tab Content*/}
                            </div>
                          </div>
                          {/*end: Card Body*/}
                        </div>
                        {/*end::Stats Widget 2*/}
                      </div>
                    </div>
                    {/*end::Row*/}
                    {/*begin::Row*/}
                    <div className="row g-0 g-xl-5 g-xxl-8">
                      <div className="col-xxl-4">
                        {/*begin::Stats Widget 6*/}
                        <div className="card card-stretch mb-5 mb-xxl-8">
                          {/*begin::Body*/}
                          <div className="card-body">
                            {/*begin::Top*/}
                            <div className="d-flex bg-light-primary card-rounded flex-grow-1">
                              {/*begin::Section*/}
                              <div className="py-10 ps-7">
                                {/*begin::Text*/}
                                <div className>
                                  <span className="text-primary d-block mb-n1">
                                    Your Storage
                                  </span>
                                  <span className="font-weight-light fs-1 text-gray-800">
                                    GB
                                    <span className="fw-bolder fs-1 text-gray-800">
                                      7,562.00
                                    </span>
                                  </span>
                                </div>
                                {/*end::Text*/}
                                <a
                                  href="#"
                                  className="btn btn-primary btn-sm fw-bolder fs-6 ps-4 mt-6"
                                  data-bs-toggle="modal"
                                  data-bs-target="#kt_modal_create_app"
                                >
                                  Boost
                                  {/*begin::Svg Icon | path: icons/duotone/Navigation/Up-right.svg*/}
                                  <span className="svg-icon svg-icon-3 me-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        strokeWidth={1}
                                        fill="none"
                                        fillRule="evenodd"
                                      >
                                        <polygon points="0 0 24 0 24 24 0 24" />
                                        <rect
                                          fill="#000000"
                                          opacity="0.5"
                                          transform="translate(11.646447, 12.853553) rotate(-315.000000) translate(-11.646447, -12.853553)"
                                          x="10.6464466"
                                          y="5.85355339"
                                          width={2}
                                          height={14}
                                          rx={1}
                                        />
                                        <path
                                          d="M8.1109127,8.90380592 C7.55862795,8.90380592 7.1109127,8.45609067 7.1109127,7.90380592 C7.1109127,7.35152117 7.55862795,6.90380592 8.1109127,6.90380592 L16.5961941,6.90380592 C17.1315855,6.90380592 17.5719943,7.32548256 17.5952502,7.8603687 L17.9488036,15.9920967 C17.9727933,16.5438602 17.5449482,17.0106003 16.9931847,17.0345901 C16.4414212,17.0585798 15.974681,16.6307346 15.9506913,16.0789711 L15.6387276,8.90380592 L8.1109127,8.90380592 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                              </div>
                              {/*end::Section*/}
                              {/*begin::Pic*/}
                              <div
                                className="position-relative bgi-no-repeat bgi-size-contain bgi-position-y-bottom bgi-position-x-end mt-6 flex-grow-1"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/misc/illustration-1.png")',
                                }}
                              />
                              {/*end::Pic*/}
                            </div>
                            {/*end::Top*/}
                            {/*begin::Stats*/}
                            <div className="pt-9">
                              {/*begin::Row*/}
                              <div className="row">
                                <div className="col me-n2 mb-5">
                                  <button
                                    type="button"
                                    className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active border-primary px-6 py-7 text-start w-100 min-w-150px"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotone/Files/Media.svg*/}
                                    <span className="svg-icon svg-icon-2x ms-n1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <polygon points="0 0 24 0 24 24 0 24" />
                                          <path
                                            d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            opacity="0.3"
                                          />
                                          <path
                                            d="M10.782158,15.8052934 L15.1856088,12.7952868 C15.4135806,12.6394552 15.4720618,12.3283211 15.3162302,12.1003494 C15.2814587,12.0494808 15.2375842,12.0054775 15.1868178,11.970557 L10.783367,8.94156929 C10.5558531,8.78507001 10.2445489,8.84263875 10.0880496,9.07015268 C10.0307022,9.15352258 10,9.25233045 10,9.35351969 L10,15.392514 C10,15.6686564 10.2238576,15.892514 10.5,15.892514 C10.6006894,15.892514 10.699033,15.8621141 10.782158,15.8052934 Z"
                                            fill="#000000"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                                      Upload File
                                    </span>
                                  </button>
                                </div>
                                <div className="col mb-5">
                                  <button
                                    type="button"
                                    className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotone/General/Clipboard.svg*/}
                                    <span className="svg-icon svg-icon-2x ms-n1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <rect
                                            x={0}
                                            y={0}
                                            width={24}
                                            height={24}
                                          />
                                          <path
                                            d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                                            fill="#000000"
                                            opacity="0.3"
                                          />
                                          <path
                                            d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                                            fill="#000000"
                                          />
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            x={7}
                                            y={10}
                                            width={5}
                                            height={2}
                                            rx={1}
                                          />
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            x={7}
                                            y={14}
                                            width={9}
                                            height={2}
                                            rx={1}
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                                      Read Docs
                                    </span>
                                  </button>
                                </div>
                              </div>
                              {/*end::Row*/}
                              {/*begin::Row*/}
                              <div className="row">
                                <div className="col me-n2 mb-5">
                                  <button
                                    type="button"
                                    className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotone/Files/File-plus.svg*/}
                                    <span className="svg-icon svg-icon-2x ms-n1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <polygon points="0 0 24 0 24 24 0 24" />
                                          <path
                                            d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            opacity="0.3"
                                          />
                                          <path
                                            d="M11,14 L9,14 C8.44771525,14 8,13.5522847 8,13 C8,12.4477153 8.44771525,12 9,12 L11,12 L11,10 C11,9.44771525 11.4477153,9 12,9 C12.5522847,9 13,9.44771525 13,10 L13,12 L15,12 C15.5522847,12 16,12.4477153 16,13 C16,13.5522847 15.5522847,14 15,14 L13,14 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,14 Z"
                                            fill="#000000"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                                      MRC 22 XML
                                    </span>
                                  </button>
                                </div>
                                <div className="col mb-5">
                                  <button
                                    type="button"
                                    className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotone/General/Clipboard.svg*/}
                                    <span className="svg-icon svg-icon-2x ms-n1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <rect
                                            x={0}
                                            y={0}
                                            width={24}
                                            height={24}
                                          />
                                          <path
                                            d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                                            fill="#000000"
                                            opacity="0.3"
                                          />
                                          <path
                                            d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                                            fill="#000000"
                                          />
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            x={7}
                                            y={10}
                                            width={5}
                                            height={2}
                                            rx={1}
                                          />
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            x={7}
                                            y={14}
                                            width={9}
                                            height={2}
                                            rx={1}
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                                      CTI Tech Specs
                                    </span>
                                  </button>
                                </div>
                              </div>
                              {/*end::Row*/}
                              {/*begin::Row*/}
                              <div className="row">
                                <div className="col mb-5 me-n2">
                                  <button
                                    type="button"
                                    className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotone/Files/Compiled-file.svg*/}
                                    <span className="svg-icon svg-icon-2x ms-n1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <polygon points="0 0 24 0 24 24 0 24" />
                                          <path
                                            d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            opacity="0.3"
                                          />
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(8.984240, 12.127098) rotate(-45.000000) translate(-8.984240, -12.127098)"
                                            x="7.41281179"
                                            y="10.5556689"
                                            width="3.14285714"
                                            height="3.14285714"
                                            rx="0.75"
                                          />
                                          <rect
                                            fill="#000000"
                                            opacity="0.3"
                                            transform="translate(15.269955, 12.127098) rotate(-45.000000) translate(-15.269955, -12.127098)"
                                            x="13.6985261"
                                            y="10.5556689"
                                            width="3.14285714"
                                            height="3.14285714"
                                            rx="0.75"
                                          />
                                          <rect
                                            fill="#000000"
                                            transform="translate(12.127098, 15.269955) rotate(-45.000000) translate(-12.127098, -15.269955)"
                                            x="10.5556689"
                                            y="13.6985261"
                                            width="3.14285714"
                                            height="3.14285714"
                                            rx="0.75"
                                          />
                                          <rect
                                            fill="#000000"
                                            transform="translate(12.127098, 8.984240) rotate(-45.000000) translate(-12.127098, -8.984240)"
                                            x="10.5556689"
                                            y="7.41281179"
                                            width="3.14285714"
                                            height="3.14285714"
                                            rx="0.75"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                                      Check List
                                    </span>
                                  </button>
                                </div>
                                <div className="col mb-5">
                                  <button
                                    type="button"
                                    className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotone/Files/File-cloud.svg*/}
                                    <span className="svg-icon svg-icon-2x ms-n1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <polygon points="0 0 24 0 24 24 0 24" />
                                          <path
                                            d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            opacity="0.3"
                                          />
                                          <path
                                            d="M8.63657261,15.4632487 C7.65328954,14.8436137 7,13.7480988 7,12.5 C7,10.5670034 8.56700338,9 10.5,9 C12.263236,9 13.7219407,10.3038529 13.9645556,12 L15,12 C16.1045695,12 17,12.8954305 17,14 C17,15.1045695 16.1045695,16 15,16 L10,16 C9.47310652,16 8.99380073,15.7962529 8.63657261,15.4632487 Z"
                                            fill="#000000"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                                      Reports
                                    </span>
                                  </button>
                                </div>
                              </div>
                              {/*end::Row*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Stats Widget 6*/}
                      </div>
                      <div className="col-xxl-8 gy-0 gy-xxl-8">
                        {/*begin::Stats Widget 7*/}
                        <div className="card card-stretch mb-5 mb-xxl-8">
                          {/*begin::Body*/}
                          <div className="card-body">
                            {/*begin::Title*/}
                            <div className="mb-10">
                              <h3 className="fw-bold text-dark mb-5 fs-1">
                                What A Pretty Form
                              </h3>
                              <span className="fw-bold fs-4 text-muted">
                                This information will help us tailor your
                                experience.
                              </span>
                            </div>
                            {/*end::Title*/}
                            {/*begin::Section*/}
                            <div className="mb-10">
                              <h3 className="fw-bold fs-3 text-dark mb-5">
                                Select A Category
                              </h3>
                              {/*begin::Row*/}
                              <div className="row" data-kt-buttons="true">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="form-options"
                                  defaultChecked="checked"
                                  defaultValue={1}
                                  id="kt_form_options_1"
                                />
                                <label
                                  className="col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active active py-5 px-4 m-2 min-w-125px"
                                  htmlFor="kt_form_options_1"
                                >
                                  {/*begin::Svg Icon | path: icons/duotone/Files/Media.svg*/}
                                  <span className="svg-icon svg-icon-2x me-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        strokeWidth={1}
                                        fill="none"
                                        fillRule="evenodd"
                                      >
                                        <polygon points="0 0 24 0 24 24 0 24" />
                                        <path
                                          d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M10.782158,15.8052934 L15.1856088,12.7952868 C15.4135806,12.6394552 15.4720618,12.3283211 15.3162302,12.1003494 C15.2814587,12.0494808 15.2375842,12.0054775 15.1868178,11.970557 L10.783367,8.94156929 C10.5558531,8.78507001 10.2445489,8.84263875 10.0880496,9.07015268 C10.0307022,9.15352258 10,9.25233045 10,9.35351969 L10,15.392514 C10,15.6686564 10.2238576,15.892514 10.5,15.892514 C10.6006894,15.892514 10.699033,15.8621141 10.782158,15.8052934 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  <span className="text-gray-800 fw-bold">
                                    Movie Creator
                                  </span>
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="form-options"
                                  defaultValue={2}
                                  id="kt_form_options_2"
                                />
                                <label
                                  className="col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px"
                                  htmlFor="kt_form_options_2"
                                >
                                  {/*begin::Svg Icon | path: icons/duotone/Devices/LTE2.svg*/}
                                  <span className="svg-icon svg-icon-2x me-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <path
                                        d="M16.4508979,17.4029496 L15.1784978,15.8599014 C16.324501,14.9149052 17,13.5137472 17,12 C17,10.4912085 16.3289582,9.09418404 15.1893841,8.14910121 L16.466112,6.60963188 C18.0590936,7.93073905 19,9.88958759 19,12 C19,14.1173586 18.0528606,16.0819686 16.4508979,17.4029496 Z M19.0211112,20.4681628 L17.7438102,18.929169 C19.7927036,17.2286725 21,14.7140097 21,12 C21,9.28974232 19.7960666,6.77820732 17.7520315,5.07766256 L19.031149,3.54017812 C21.5271817,5.61676443 23,8.68922234 23,12 C23,15.3153667 21.523074,18.3916375 19.0211112,20.4681628 Z M7.54910207,17.4029496 C5.94713944,16.0819686 5,14.1173586 5,12 C5,9.88958759 5.94090645,7.93073905 7.53388797,6.60963188 L8.81061588,8.14910121 C7.67104182,9.09418404 7,10.4912085 7,12 C7,13.5137472 7.67549895,14.9149052 8.82150222,15.8599014 L7.54910207,17.4029496 Z M4.9788888,20.4681628 C2.47692603,18.3916375 1,15.3153667 1,12 C1,8.68922234 2.47281829,5.61676443 4.96885102,3.54017812 L6.24796852,5.07766256 C4.20393339,6.77820732 3,9.28974232 3,12 C3,14.7140097 4.20729644,17.2286725 6.25618985,18.929169 L4.9788888,20.4681628 Z"
                                        fill="#000000"
                                        fillRule="nonzero"
                                        opacity="0.3"
                                      />
                                      <path
                                        d="M11,14.2919782 C10.1170476,13.9061998 9.5,13.0251595 9.5,12 C9.5,10.6192881 10.6192881,9.5 12,9.5 C13.3807119,9.5 14.5,10.6192881 14.5,12 C14.5,13.0251595 13.8829524,13.9061998 13,14.2919782 L13,20 C13,20.5522847 12.5522847,21 12,21 C11.4477153,21 11,20.5522847 11,20 L11,14.2919782 Z"
                                        fill="#000000"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  <span className="text-gray-800 fw-bold">
                                    Networking
                                  </span>
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="form-options"
                                  defaultValue={3}
                                  id="kt_form_options_3"
                                />
                                <label
                                  className="col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px"
                                  htmlFor="kt_form_options_3"
                                >
                                  {/*begin::Svg Icon | path: icons/duotone/Shopping/Cart3.svg*/}
                                  <span className="svg-icon svg-icon-2x me-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        strokeWidth={1}
                                        fill="none"
                                        fillRule="evenodd"
                                      >
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <path
                                          d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M3.5,9 L20.5,9 C21.0522847,9 21.5,9.44771525 21.5,10 C21.5,10.132026 21.4738562,10.2627452 21.4230769,10.3846154 L17.7692308,19.1538462 C17.3034221,20.271787 16.2111026,21 15,21 L9,21 C7.78889745,21 6.6965779,20.271787 6.23076923,19.1538462 L2.57692308,10.3846154 C2.36450587,9.87481408 2.60558331,9.28934029 3.11538462,9.07692308 C3.23725479,9.02614384 3.36797398,9 3.5,9 Z M12,17 C13.1045695,17 14,16.1045695 14,15 C14,13.8954305 13.1045695,13 12,13 C10.8954305,13 10,13.8954305 10,15 C10,16.1045695 10.8954305,17 12,17 Z"
                                          fill="#000000"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  <span className="text-gray-800 fw-bold">
                                    eCommerce
                                  </span>
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="form-options"
                                  defaultValue={4}
                                  id="kt_form_options_4"
                                />
                                <label
                                  className="col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px"
                                  htmlFor="kt_form_options_4"
                                >
                                  {/*begin::Svg Icon | path: icons/duotone/Media/Equalizer.svg*/}
                                  <span className="svg-icon svg-icon-2x me-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        strokeWidth={1}
                                        fill="none"
                                        fillRule="evenodd"
                                      >
                                        <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                        />
                                        <rect
                                          fill="#000000"
                                          opacity="0.3"
                                          x={13}
                                          y={4}
                                          width={3}
                                          height={16}
                                          rx="1.5"
                                        />
                                        <rect
                                          fill="#000000"
                                          x={8}
                                          y={9}
                                          width={3}
                                          height={11}
                                          rx="1.5"
                                        />
                                        <rect
                                          fill="#000000"
                                          x={18}
                                          y={11}
                                          width={3}
                                          height={9}
                                          rx="1.5"
                                        />
                                        <rect
                                          fill="#000000"
                                          x={3}
                                          y={13}
                                          width={3}
                                          height={7}
                                          rx="1.5"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  <span className="text-gray-800 fw-bold">
                                    Data Analysis
                                  </span>
                                </label>
                              </div>
                              {/*end::Row*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Form Group*/}
                            <div className="mb-10">
                              <div className="d-flex justify-content-between mb-5">
                                <label className="fw-bold fs-3 text-dark">
                                  Select An Option
                                </label>
                                <span className="fw-bold fs-6 text-muted">
                                  Optional
                                </span>
                              </div>
                              <select
                                className="form-select form-select-lg form-select-solid fw-bold fs-6 text-gray-600 h-60px"
                                data-control="select2"
                                data-placeholder="Choose one"
                                data-hide-search="true"
                              >
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            {/*end::Form Group*/}
                            {/*begin::Section*/}
                            <div className="mb-10">
                              <h3 className="fw-bold fs-3 text-dark mb-5">
                                How Big Is Your Fleet?
                              </h3>
                              {/*begin::Row*/}
                              <div className="row" data-kt-buttons="true">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="form-fleet"
                                  defaultValue={1}
                                  id="kt_form_fleet_1"
                                />
                                <label
                                  className="col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px"
                                  htmlFor="kt_form_fleet_1"
                                >
                                  <span className="text-gray-800 fw-bold">
                                    1-10
                                  </span>
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="form-fleet"
                                  defaultChecked="checked"
                                  defaultValue={2}
                                  id="kt_form_fleet_2"
                                />
                                <label
                                  className="col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active active py-5 px-4 m-2 min-w-90px"
                                  htmlFor="kt_form_fleet_2"
                                >
                                  <span className="text-gray-800 fw-bold">
                                    10-50
                                  </span>
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="form-fleet"
                                  defaultValue={3}
                                  id="kt_form_fleet_3"
                                />
                                <label
                                  className="col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px"
                                  htmlFor="kt_form_fleet_3"
                                >
                                  <span className="text-gray-800 fw-bold">
                                    50-100
                                  </span>
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="form-fleet"
                                  defaultValue={4}
                                  id="kt_form_fleet_4"
                                />
                                <label
                                  className="col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px"
                                  htmlFor="kt_form_fleet_4"
                                >
                                  <span className="text-gray-800 fw-bold">
                                    100-500
                                  </span>
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="form-fleet"
                                  defaultValue={5}
                                  id="kt_form_fleet_5"
                                />
                                <label
                                  className="col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-90px"
                                  htmlFor="kt_form_fleet_5"
                                >
                                  <span className="text-gray-800 fw-bold">
                                    500+
                                  </span>
                                </label>
                              </div>
                              {/*end::Row*/}
                            </div>
                            {/*end::Section*/}
                            <div className="mb-10">
                              <a
                                href="#"
                                className="btn btn-primary px-11 py-4 fw-bolder fs-3"
                              >
                                Create Fleet
                              </a>
                            </div>
                          </div>
                          {/*end: Card Body*/}
                        </div>
                        {/*end::Stats Widget 7*/}
                      </div>
                    </div>
                    {/*end::Row*/}
                    {/*begin::Row*/}
                    <div className="row g-0 g-xl-5 g-xxl-8">
                      <div className="col-xl-4">
                        {/*begin::Stats Widget 8*/}
                        <div className="card card-stretch-50 mb-5 mb-xxl-8">
                          {/*begin::Body*/}
                          <div className="card-body">
                            <div
                              id="kt_stats_widget_8_carousel"
                              className="carousel carousel-custom slide"
                              data-bs-ride="carousel"
                              data-bs-interval={8000}
                            >
                              {/*begin::Heading*/}
                              <div className="d-flex flex-stack flex-wrap">
                                {/*begin::Label*/}
                                <span className="fs-6 text-muted fw-bolder pe-2">
                                  Projects
                                </span>
                                {/*end::Label*/}
                                {/*begin::Carousel Indicators*/}
                                <ol className="p-0 m-0 carousel-indicators carousel-indicators-dots">
                                  <li
                                    data-bs-target="#kt_stats_widget_8_carousel"
                                    data-bs-slide-to={0}
                                    className="ms-1 active"
                                  />
                                  <li
                                    data-bs-target="#kt_stats_widget_8_carousel"
                                    data-bs-slide-to={1}
                                    className="ms-1"
                                  />
                                  <li
                                    data-bs-target="#kt_stats_widget_8_carousel"
                                    data-bs-slide-to={2}
                                    className="ms-1"
                                  />
                                </ol>
                                {/*end::Carousel Indicators*/}
                              </div>
                              {/*end::Heading*/}
                              {/*begin::Carousel*/}
                              <div className="carousel-inner pt-8">
                                {/*begin::Item*/}
                                <div className="carousel-item active">
                                  {/*begin::Section*/}
                                  <div className="d-flex flex-column justify-content-between h-100">
                                    {/*begin::Title*/}
                                    <h3 className="fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer">
                                      Admin Launch Day
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Text*/}
                                    <p className="text-gray-600 fw-bold pt-3 mb-0">
                                      To start a blog, think of a topic about
                                      and first brainstorm ways to write details
                                    </p>
                                    {/*end::Text*/}
                                  </div>
                                  {/*end::Section*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="carousel-item">
                                  {/*begin::Section*/}
                                  <div className="d-flex flex-column justify-content-between h-100">
                                    {/*begin::Title*/}
                                    <h3 className="fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer">
                                      Reached 50,000 Sales
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Text*/}
                                    <p className="text-gray-600 fw-bold pt-3 mb-0">
                                      To start a blog, think of a topic about
                                      and first brainstorm ways to write details
                                    </p>
                                    {/*end::Text*/}
                                  </div>
                                  {/*end::Section*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="carousel-item">
                                  {/*begin::Section*/}
                                  <div className="d-flex flex-column justify-content-between h-100">
                                    {/*begin::Title*/}
                                    <h3 className="fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer">
                                      Reached 50,000 Sales
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Text*/}
                                    <p className="text-gray-600 fw-bold pt-3 mb-0">
                                      To start a blog, think of a topic about
                                      and first brainstorm ways to write details
                                    </p>
                                    {/*end::Text*/}
                                  </div>
                                  {/*end::Section*/}
                                </div>
                                {/*end::Item*/}
                              </div>
                              {/*end::Carousel*/}
                            </div>
                          </div>
                          {/*end::Body*/}
                          {/*begin::Footer*/}
                          <div className="card-footer border-0 pt-0 pb-10">
                            {/*begin::Text*/}
                            <div className="d-flex text-muted fw-bold fs-6 pb-4">
                              <span className="flex-grow-1">Progress</span>
                              <span className>78%</span>
                            </div>
                            {/*end::Text*/}
                            {/*begin::Progress*/}
                            <div className="progress h-6px bg-light-danger">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "70%" }}
                                aria-valuenow={24}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            {/*end::Progress*/}
                          </div>
                          {/*end::Footer*/}
                        </div>
                        {/*end::Stats Widget 8*/}
                        {/*begin::Stats Widget 9*/}
                        <div className="card card-stretch-50 mb-5 mb-xxl-8">
                          {/*begin::Body*/}
                          <div className="card-body">
                            <div
                              id="kt_stats_widget_9_carousel"
                              className="carousel carousel-custom slide"
                              data-bs-ride="carousel"
                              data-bs-interval={8000}
                            >
                              {/*begin::Top*/}
                              <div className="d-flex flex-stack flex-wrap">
                                {/*begin::Label*/}
                                <span className="text-muted fw-bolder pe-2">
                                  Today’s Schedule
                                </span>
                                {/*end::Label*/}
                                {/*begin::Carousel Indicators*/}
                                <ol className="p-0 m-0 carousel-indicators carousel-indicators-dots">
                                  <li
                                    data-bs-target="#kt_stats_widget_9_carousel"
                                    data-bs-slide-to={0}
                                    className="ms-1 active"
                                  />
                                  <li
                                    data-bs-target="#kt_stats_widget_9_carousel"
                                    data-bs-slide-to={1}
                                    className="ms-1"
                                  />
                                  <li
                                    data-bs-target="#kt_stats_widget_9_carousel"
                                    data-bs-slide-to={2}
                                    className="ms-1"
                                  />
                                </ol>
                                {/*end::Carousel Indicators*/}
                              </div>
                              {/*end::Top*/}
                              {/*begin::Carousel*/}
                              <div className="carousel-inner pt-9">
                                {/*begin::Item*/}
                                <div className="carousel-item active">
                                  {/*begin::Section*/}
                                  <div className="flex-grow-1">
                                    {/*begin::Title*/}
                                    <h3 className="fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer">
                                      UI/UX Design Updates
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Text*/}
                                    <p className="text-primary fs-1 fw-bolder pt-3 mb-0">
                                      11:15AM - 12:30PM
                                    </p>
                                    {/*end::Text*/}
                                  </div>
                                  {/*end::Section*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="carousel-item">
                                  {/*begin::Section*/}
                                  <div className="flex-grow-1">
                                    {/*begin::Title*/}
                                    <h3 className="fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer">
                                      UI/UX Design Updates
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Text*/}
                                    <p className="text-primary fs-1 fw-bolder pt-3 mb-0">
                                      16:15AM - 11:20PM
                                    </p>
                                    {/*end::Text*/}
                                  </div>
                                  {/*end::Section*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="carousel-item">
                                  {/*begin::Section*/}
                                  <div className="flex-grow-1">
                                    {/*begin::Title*/}
                                    <h3 className="fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer">
                                      UI/UX Design Updates
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Text*/}
                                    <p className="text-primary fs-1 fw-bolder pt-3 mb-0">
                                      13:15AM - 14:30PM
                                    </p>
                                    {/*end::Text*/}
                                  </div>
                                  {/*end::Section*/}
                                </div>
                                {/*end::Item*/}
                              </div>
                              {/*end::Carousel*/}
                            </div>
                          </div>
                          {/*end::Body*/}
                          {/*begin::Footer*/}
                          <div className="card-footer border-0 d-flex flex-stack pt-0 pb-10">
                            {/*begin::Label*/}
                            <span className="text-muted fs-6 fw-bold pe-2">
                              256 R St. Manhattan NY..
                            </span>
                            {/*end::Label*/}
                            <a
                              href="#"
                              className="btn btn-sm btn-primary fw-bolder px-6"
                              data-bs-toggle="modal"
                              data-bs-target="#kt_modal_select_location"
                            >
                              Map
                            </a>
                          </div>
                          {/*end::Footer*/}
                        </div>
                        {/*end::Stats Widget 9*/}
                      </div>
                      <div className="col-xl-8">
                        {/*begin::Table Widget 2*/}
                        <div className="card card-stretch">
                          {/*begin::Header*/}
                          <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                              <span className="card-label fw-bolder text-dark fs-3">
                                Achievement
                              </span>
                              <span className="text-muted mt-2 fw-bold fs-6">
                                890,344 Sales
                              </span>
                            </h3>
                            <div className="card-toolbar">
                              <ul className="nav nav-pills nav-pills-sm nav-light">
                                <li className="nav-item">
                                  <a
                                    className="nav-link btn btn-active-light btn-color-muted py-2 px-4 active fw-bolder me-2"
                                    data-bs-toggle="tab"
                                    href="#kt_tab_pane_2_1"
                                  >
                                    Day
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
                                    data-bs-toggle="tab"
                                    href="#kt_tab_pane_2_2"
                                  >
                                    Week
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder"
                                    data-bs-toggle="tab"
                                    href="#kt_tab_pane_2_3"
                                  >
                                    Month
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/*end::Header*/}
                          {/*begin::Body*/}
                          <div className="card-body pt-3 pb-0 mt-n3">
                            <div className="tab-content mt-4" id="myTabTables2">
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade show active"
                                id="kt_tab_pane_2_1"
                                role="tabpanel"
                                aria-labelledby="kt_tab_pane_2_1"
                              >
                                {/*begin::Table*/}
                                <div className="table-responsive">
                                  <table className="table table-borderless align-middle">
                                    <thead>
                                      <tr>
                                        <th className="p-0 w-50px" />
                                        <th className="p-0 min-w-150px" />
                                        <th className="p-0 min-w-120px" />
                                        <th className="p-0 min-w-70px" />
                                        <th className="p-0 min-w-70px" />
                                        <th className="p-0 min-w-50px" />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="px-0 py-3">
                                          <div className="symbol symbol-55px mt-1 me-5">
                                            <span className="symbol-label bg-light-primary align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/001-boy.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Brad Simmons
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            HTML, CSS Coding
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $1,200,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-primary">
                                            +28%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="px-0 py-3">
                                          <div className="symbol symbol-55px mt-1">
                                            <span className="symbol-label bg-light-danger align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/018-girl-9.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Jessie Clarcson
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Most Successful
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $1,200,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-danger">
                                            +52%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="px-0 py-3">
                                          <div className="symbol symbol-55px mt-1">
                                            <span className="symbol-label bg-light-warning align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/047-girl-25.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Lebron Wayde
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Awesome Users
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $3,400,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-warning">
                                            +34%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="px-0 py-3">
                                          <div className="symbol symbol-55px mt-1">
                                            <span className="symbol-label bg-light-success align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/043-boy-18.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Kevin Leonard
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Awesome Userss
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $35,600,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-success">
                                            +230%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="px-0 py-3">
                                          <div className="symbol symbol-55px mt-1">
                                            <span className="symbol-label bg-light-info align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/024-boy-9.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Randy Trent
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Business Analyst
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $45,200,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-info">
                                            +340%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                {/*end::Table*/}
                              </div>
                              {/*end::Tap pane*/}
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade"
                                id="kt_tab_pane_2_2"
                                role="tabpanel"
                                aria-labelledby="kt_tab_pane_2_2"
                              >
                                {/*begin::Table*/}
                                <div className="table-responsive">
                                  <table className="table table-borderless align-middle">
                                    <thead>
                                      <tr>
                                        <th className="p-0 w-50px" />
                                        <th className="p-0 min-w-150px" />
                                        <th className="p-0 min-w-120px" />
                                        <th className="p-0 min-w-70px" />
                                        <th className="p-0 min-w-70px" />
                                        <th className="p-0 min-w-50px" />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="p-0 py-3">
                                          <div className="symbol symbol-55px mt-1 me-5">
                                            <span className="symbol-label bg-light-warning align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/047-girl-25.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Lebron Wayde
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Awesome Users
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $3,400,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-warning">
                                            +34%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="p-0 py-3">
                                          <div className="symbol symbol-55px mt-1">
                                            <span className="symbol-label bg-light-success align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/043-boy-18.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Kevin Leonard
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Awesome Userss
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $35,600,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-success">
                                            +230%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="p-0 py-3">
                                          <div className="symbol symbol-55px mt-1">
                                            <span className="symbol-label bg-light-info align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/024-boy-9.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Randy Trent
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Business Analyst
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $45,200,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-info">
                                            +340%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="p-0 py-3">
                                          <div className="symbol symbol-55px me-5 mt-1">
                                            <span className="symbol-label bg-light-primary align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/001-boy.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Brad Simmons
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            HTML, CSS Coding
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $1,200,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-primary">
                                            +28%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="p-0 py-3">
                                          <div className="symbol symbol-55px mt-1">
                                            <span className="symbol-label bg-light-danger align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/018-girl-9.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Jessie Clarcson
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Most Successful
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $1,200,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-danger">
                                            +52%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                {/*end::Table*/}
                              </div>
                              {/*end::Tap pane*/}
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade"
                                id="kt_tab_pane_2_3"
                                role="tabpanel"
                                aria-labelledby="kt_tab_pane_2_3"
                              >
                                {/*begin::Table*/}
                                <div className="table-responsive">
                                  <table className="table table-borderless align-middle">
                                    <thead>
                                      <tr>
                                        <th className="p-0 w-50px" />
                                        <th className="p-0 min-w-150px" />
                                        <th className="p-0 min-w-120px" />
                                        <th className="p-0 min-w-70px" />
                                        <th className="p-0 min-w-70px" />
                                        <th className="p-0 min-w-50px" />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="p-0 pb-3 pt-1">
                                          <div className="symbol symbol-55px mt-3 me-5">
                                            <span className="symbol-label bg-light-danger align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/018-girl-9.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Jessie Clarcson
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Most Successful
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $1,200,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-danger">
                                            +52%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="p-0 pb-3 pt-1">
                                          <div className="symbol symbol-55px mt-3">
                                            <span className="symbol-label bg-light-warning align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/047-girl-25.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Lebron Wayde
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Awesome Users
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $3,400,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-warning">
                                            +34%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="p-0 pb-3 pt-1">
                                          <div className="symbol symbol-55px mt-3">
                                            <span className="symbol-label bg-light-success align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/043-boy-18.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Kevin Leonard
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Awesome Userss
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $35,600,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-success">
                                            +230%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="p-0 pb-3 pt-1">
                                          <div className="symbol symbol-55px me-5 mt-3">
                                            <span className="symbol-label bg-light-primary align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/001-boy.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Brad Simmons
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            HTML, CSS Coding
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $1,200,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-primary">
                                            +28%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="p-0 pb-3 pt-1">
                                          <div className="symbol symbol-55px mt-3">
                                            <span className="symbol-label bg-light-info align-items-end">
                                              <img
                                                alt="Logo"
                                                src="assets/media/svg/avatars/024-boy-9.svg"
                                                className="mh-40px"
                                              />
                                            </span>
                                          </div>
                                        </td>
                                        <td className="px-0">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bolder text-hover-primary fs-6"
                                          >
                                            Randy Trent
                                          </a>
                                          <span className="text-muted fw-bold d-block mt-1">
                                            Business Analyst
                                          </span>
                                        </td>
                                        <td />
                                        <td className="text-end">
                                          <span className="text-gray-800 fw-bolder d-block fs-6">
                                            $45,200,000
                                          </span>
                                          <span className="text-muted fw-bold d-block mt-1 fs-7">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <span className="fw-bolder text-info">
                                            +340%
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <a
                                            href="#"
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                          >
                                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                            <span className="svg-icon svg-icon-4">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <rect
                                                    fill="#000000"
                                                    opacity="0.5"
                                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                    x={11}
                                                    y={5}
                                                    width={2}
                                                    height={14}
                                                    rx={1}
                                                  />
                                                  <path
                                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                    fill="#000000"
                                                    fillRule="nonzero"
                                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                  />
                                                </g>
                                              </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                {/*end::Table*/}
                              </div>
                              {/*end::Tap pane*/}
                            </div>
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Table Widget 2*/}
                      </div>
                    </div>
                    {/*end::Row*/}
                    {/*begin::Modals*/}
                    {/*begin::Modal - Create App*/}
                    <div
                      className="modal fade"
                      id="kt_modal_create_app"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered mw-1000px">
                        <div className="modal-content">
                          <div className="container px-10 py-10">
                            <div className="modal-header py-2 d-flex justify-content-end border-0">
                              {/*begin::Close*/}
                              <div
                                className="btn btn-icon btn-sm btn-light-primary"
                                data-bs-dismiss="modal"
                              >
                                {/*begin::Svg Icon | path: icons/duotone/Navigation/Close.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
                                      fill="#000000"
                                    >
                                      <rect
                                        fill="#000000"
                                        x={0}
                                        y={7}
                                        width={16}
                                        height={2}
                                        rx={1}
                                      />
                                      <rect
                                        fill="#000000"
                                        opacity="0.5"
                                        transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)"
                                        x={0}
                                        y={7}
                                        width={16}
                                        height={2}
                                        rx={1}
                                      />
                                    </g>
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              {/*end::Close*/}
                            </div>
                            <div className="modal-body">
                              {/*begin::Stepper*/}
                              <div
                                className="stepper stepper-1 d-flex flex-column flex-xl-row flex-row-fluid"
                                id="kt_modal_create_app_stepper"
                              >
                                {/*begin::Aside*/}
                                <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                                  {/*begin::Nav*/}
                                  <div className="stepper-nav d-flex flex-column pt-5">
                                    {/*begin::Step 1*/}
                                    <div
                                      className="stepper-item current"
                                      data-kt-stepper-element="nav"
                                    >
                                      <div className="stepper-wrapper">
                                        <div className="stepper-icon">
                                          <i className="stepper-check fas fa-check" />
                                          <span className="stepper-number">
                                            1
                                          </span>
                                        </div>
                                        <div className="stepper-label">
                                          <h3 className="stepper-title">
                                            App Basics
                                          </h3>
                                          <div className="stepper-desc">
                                            Name your App
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/*end::Step 1*/}
                                    {/*begin::Step 2*/}
                                    <div
                                      className="stepper-item"
                                      data-kt-stepper-element="nav"
                                    >
                                      <div className="stepper-wrapper">
                                        <div className="stepper-icon">
                                          <i className="stepper-check fas fa-check" />
                                          <span className="stepper-number">
                                            2
                                          </span>
                                        </div>
                                        <div className="stepper-label">
                                          <h3 className="stepper-title">
                                            App Framework
                                          </h3>
                                          <div className="stepper-desc">
                                            Define your app framework
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/*end::Step 2*/}
                                    {/*begin::Step 3*/}
                                    <div
                                      className="stepper-item"
                                      data-kt-stepper-element="nav"
                                    >
                                      <div className="stepper-wrapper">
                                        <div className="stepper-icon">
                                          <i className="stepper-check fas fa-check" />
                                          <span className="stepper-number">
                                            3
                                          </span>
                                        </div>
                                        <div className="stepper-label">
                                          <h3 className="stepper-title">
                                            App Database
                                          </h3>
                                          <div className="stepper-desc">
                                            Select the app database type
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/*end::Step 3*/}
                                    {/*begin::Step 4*/}
                                    <div
                                      className="stepper-item"
                                      data-kt-stepper-element="nav"
                                    >
                                      <div className="stepper-wrapper">
                                        <div className="stepper-icon">
                                          <i className="stepper-check fas fa-check" />
                                          <span className="stepper-number">
                                            4
                                          </span>
                                        </div>
                                        <div className="stepper-label">
                                          <h3 className="stepper-title">
                                            App Storage
                                          </h3>
                                          <div className="stepper-desc">
                                            Select the app storage type
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/*end::Step 4*/}
                                    {/*begin::Step 5*/}
                                    <div
                                      className="stepper-item"
                                      data-kt-stepper-element="nav"
                                    >
                                      <div className="stepper-wrapper">
                                        <div className="stepper-icon">
                                          <i className="stepper-check fas fa-check" />
                                          <span className="stepper-number">
                                            5
                                          </span>
                                        </div>
                                        <div className="stepper-label">
                                          <h3 className="stepper-title">
                                            Completed!
                                          </h3>
                                          <div className="stepper-desc">
                                            Review and Submit
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/*end::Step 5*/}
                                  </div>
                                  {/*end::Nav*/}
                                </div>
                                {/*begin::Aside*/}
                                {/*begin::Content*/}
                                <div className="d-flex flex-row-fluid justify-content-center">
                                  {/*begin::Form*/}
                                  <form
                                    className="pb-5 w-100 w-md-400px w-xl-500px"
                                    noValidate="novalidate"
                                    id="kt_modal_create_app_form"
                                  >
                                    {/*begin::Step 1*/}
                                    <div
                                      className="pb-5 current"
                                      data-kt-stepper-element="content"
                                    >
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-5 pb-lg-10">
                                          <h3 className="fw-bolder text-dark display-6">
                                            App Basics
                                          </h3>
                                        </div>
                                        {/*begin::Heading*/}
                                        {/*begin::Form Group*/}
                                        <div className="fv-row mb-12">
                                          <label className="fs-6 fw-bolder text-dark form-label">
                                            Your App Name
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control form-control-lg form-control-solid"
                                            name="appname"
                                            placeholder
                                            defaultValue
                                          />
                                        </div>
                                        {/*end::Form Group*/}
                                        {/*begin::Form Group*/}
                                        <div className="fv-row">
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack mb-6 cursor-pointer">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-primary">
                                                  {/*begin::Svg Icon | path: icons/duotone/Home/Globe.svg*/}
                                                  <span className="svg-icon svg-icon-1 svg-icon-primary">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      width="24px"
                                                      height="24px"
                                                      viewBox="0 0 24 24"
                                                      version="1.1"
                                                    >
                                                      <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                      >
                                                        <rect
                                                          x={0}
                                                          y={0}
                                                          width={24}
                                                          height={24}
                                                        />
                                                        <path
                                                          d="M13,18.9450712 L13,20 L14,20 C15.1045695,20 16,20.8954305 16,22 L8,22 C8,20.8954305 8.8954305,20 10,20 L11,20 L11,18.9448245 C9.02872877,18.7261967 7.20827378,17.866394 5.79372555,16.5182701 L4.73856106,17.6741866 C4.36621808,18.0820826 3.73370941,18.110904 3.32581341,17.7385611 C2.9179174,17.3662181 2.88909597,16.7337094 3.26143894,16.3258134 L5.04940685,14.367122 C5.46150313,13.9156769 6.17860937,13.9363085 6.56406875,14.4106998 C7.88623094,16.037907 9.86320756,17 12,17 C15.8659932,17 19,13.8659932 19,10 C19,7.73468744 17.9175842,5.65198725 16.1214335,4.34123851 C15.6753081,4.01567657 15.5775721,3.39010038 15.903134,2.94397499 C16.228696,2.49784959 16.8542722,2.4001136 17.3003976,2.72567554 C19.6071362,4.40902808 21,7.08906798 21,10 C21,14.6325537 17.4999505,18.4476269 13,18.9450712 Z"
                                                          fill="#000000"
                                                          fillRule="nonzero"
                                                        />
                                                        <circle
                                                          fill="#000000"
                                                          opacity="0.3"
                                                          cx={12}
                                                          cy={10}
                                                          r={6}
                                                        />
                                                      </g>
                                                    </svg>
                                                  </span>
                                                  {/*end::Svg Icon*/}
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  Quick Online Courses
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Creating a clear text
                                                  structure is just one SEO
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                defaultChecked="checked"
                                                name="app_option_1"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack mb-6 cursor-pointer">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-danger">
                                                  {/*begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks-2.svg*/}
                                                  <span className="svg-icon svg-icon-1 svg-icon-danger">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      width="24px"
                                                      height="24px"
                                                      viewBox="0 0 24 24"
                                                      version="1.1"
                                                    >
                                                      <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                      >
                                                        <rect
                                                          x={5}
                                                          y={5}
                                                          width={5}
                                                          height={5}
                                                          rx={1}
                                                          fill="#000000"
                                                        />
                                                        <rect
                                                          x={14}
                                                          y={5}
                                                          width={5}
                                                          height={5}
                                                          rx={1}
                                                          fill="#000000"
                                                          opacity="0.3"
                                                        />
                                                        <rect
                                                          x={5}
                                                          y={14}
                                                          width={5}
                                                          height={5}
                                                          rx={1}
                                                          fill="#000000"
                                                          opacity="0.3"
                                                        />
                                                        <rect
                                                          x={14}
                                                          y={14}
                                                          width={5}
                                                          height={5}
                                                          rx={1}
                                                          fill="#000000"
                                                          opacity="0.3"
                                                        />
                                                      </g>
                                                    </svg>
                                                  </span>
                                                  {/*end::Svg Icon*/}
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  Face to Face Discussions
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Creating a clear text
                                                  structure is just one aspect
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="app_option_1"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack mb-6 cursor-pointer">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-success">
                                                  {/*begin::Svg Icon | path: icons/duotone/Devices/Watch1.svg*/}
                                                  <span className="svg-icon svg-icon-1 svg-icon-success">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24px"
                                                      height="24px"
                                                      viewBox="0 0 24 24"
                                                      version="1.1"
                                                    >
                                                      <path
                                                        d="M9,8 C8.44771525,8 8,8.44771525 8,9 L8,15 C8,15.5522847 8.44771525,16 9,16 L15,16 C15.5522847,16 16,15.5522847 16,15 L16,9 C16,8.44771525 15.5522847,8 15,8 L9,8 Z M9,6 L15,6 C16.6568542,6 18,7.34314575 18,9 L18,15 C18,16.6568542 16.6568542,18 15,18 L9,18 C7.34314575,18 6,16.6568542 6,15 L6,9 C6,7.34314575 7.34314575,6 9,6 Z"
                                                        fill="#000000"
                                                        fillRule="nonzero"
                                                      />
                                                      <path
                                                        d="M9,8 C8.44771525,8 8,8.44771525 8,9 L8,15 C8,15.5522847 8.44771525,16 9,16 L15,16 C15.5522847,16 16,15.5522847 16,15 L16,9 C16,8.44771525 15.5522847,8 15,8 L9,8 Z"
                                                        fill="#000000"
                                                        opacity="0.3"
                                                      />
                                                      <path
                                                        d="M9,18 L15,18 L15,20.5 C15,21.3284271 14.3284271,22 13.5,22 L10.5,22 C9.67157288,22 9,21.3284271 9,20.5 L9,18 Z"
                                                        fill="#000000"
                                                        opacity="0.3"
                                                      />
                                                      <path
                                                        d="M10.5,2 L13.5,2 C14.3284271,2 15,2.67157288 15,3.5 L15,6 L9,6 L9,3.5 C9,2.67157288 9.67157288,2 10.5,2 Z"
                                                        fill="#000000"
                                                        opacity="0.3"
                                                      />
                                                    </svg>
                                                  </span>
                                                  {/*end::Svg Icon*/}
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  Full Intro Training
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Creating a clear text
                                                  structure copywriting
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="app_option_1"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                        </div>
                                        {/*end::Form Group*/}
                                      </div>
                                    </div>
                                    {/*end::Step 1*/}
                                    {/*begin::Step 2*/}
                                    <div
                                      className="pb-5"
                                      data-kt-stepper-element="content"
                                    >
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-10 pb-lg-15">
                                          <h3 className="fw-bolder text-dark display-6">
                                            App Framework
                                          </h3>
                                        </div>
                                        {/*end::Heading*/}
                                        {/*begin::Form Group*/}
                                        <div className="fv-row">
                                          <label className="fs-6 fw-bolder text-dark mb-7">
                                            Select your app framework
                                          </label>
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack cursor-pointer mb-6">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-warning">
                                                  <i className="fab fa-html5 text-warning fs-2x" />
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  HTML5
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Base Web Projec
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                defaultChecked="checked"
                                                name="app_option_2"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack cursor-pointer mb-6">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-success">
                                                  <i className="fab fa-react text-success fs-2x" />
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  ReactJS
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Robust and flexible app
                                                  framework
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="app_option_2"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack cursor-pointer mb-6">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-danger">
                                                  <i className="fab fa-angular text-danger fs-2x" />
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  Angular
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Powerful data mangement
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="app_option_2"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack cursor-pointer mb-6">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-primary">
                                                  <i className="fab fa-vuejs text-primary fs-2x" />
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  Vue
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Lightweight and responsive
                                                  framework
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="app_option_2"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                        </div>
                                        {/*end::Form Group*/}
                                      </div>
                                    </div>
                                    {/*end::Step 2*/}
                                    {/*begin::Step 3*/}
                                    <div
                                      className="pb-5"
                                      data-kt-stepper-element="content"
                                    >
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-10 pb-lg-15">
                                          <h3 className="fw-bolder text-dark display-6">
                                            App Database
                                          </h3>
                                        </div>
                                        {/*begin::Heading*/}
                                        {/*begin::Form Group*/}
                                        <div className="fv-row mb-12">
                                          <label className="fs-6 fw-bolder text-dark form-label">
                                            App Databse Name Name
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control form-control-lg form-control-solid"
                                            name="dbname"
                                            placeholder
                                            defaultValue="db_name"
                                          />
                                        </div>
                                        {/*end::Form Group*/}
                                        {/*begin::Form Group*/}
                                        <div className="fv-row">
                                          <label className="fs-6 fw-bolder text-dark mb-7">
                                            Select your app database solution
                                          </label>
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack cursor-pointer mb-6">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-success">
                                                  <i className="fas fa-database text-success fs-2x" />
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  MySQL
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Basic MySQL database
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="app_option_3"
                                                defaultChecked="checked"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack cursor-pointer mb-6">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-danger">
                                                  <i className="fab fa-google text-danger fs-2x" />
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  Firebase
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Google based app data
                                                  management
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="app_option_3"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack cursor-pointer mb-6">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-warning">
                                                  <i className="fab fa-amazon text-warning fs-2x" />
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  DynamoDB
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Amazon Fast NoSQL Database
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="app_option_3"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                        </div>
                                        {/*end::Form Group*/}
                                      </div>
                                    </div>
                                    {/*end::Step 3*/}
                                    {/*begin::Step 4*/}
                                    <div
                                      className="pb-5"
                                      data-kt-stepper-element="content"
                                    >
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-10 pb-lg-15">
                                          <h3 className="fw-bolder text-dark display-6">
                                            App Storage
                                          </h3>
                                        </div>
                                        {/*begin::Heading*/}
                                        {/*begin::Form Group*/}
                                        <div className="fv-row">
                                          <label className="fs-6 fw-bolder text-dark mb-7">
                                            Select your app storage solution
                                          </label>
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack cursor-pointer mb-6">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-primary">
                                                  <i className="fab fa-linux text-primary fs-2x" />
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  Basic Server
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Linux based server storage
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                defaultChecked="checked"
                                                name="app_option_4"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack cursor-pointer mb-6">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-warning">
                                                  <i className="fab fa-aws text-warning fs-2x" />
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  AWS
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Amazon Web Services
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="app_option_4"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                          {/*begin:Option*/}
                                          <label className="d-flex flex-stack cursor-pointer mb-6">
                                            <span className="d-flex align-items-center me-2">
                                              <span className="symbol symbol-50px me-6">
                                                <span className="symbol-label bg-light-success">
                                                  <i className="fab fa-google text-success fs-2x" />
                                                </span>
                                              </span>
                                              <span className="d-flex flex-column">
                                                <span className="fw-bolder fs-6">
                                                  Google
                                                </span>
                                                <span className="fs-7 text-muted">
                                                  Google Cloud Storage
                                                </span>
                                              </span>
                                            </span>
                                            <span className="form-check form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="app_option_4"
                                                defaultValue={1}
                                              />
                                            </span>
                                          </label>
                                          {/*end::Option*/}
                                        </div>
                                        {/*end::Form Group*/}
                                      </div>
                                    </div>
                                    {/*end::Step 4*/}
                                    {/*begin::Step 5*/}
                                    <div
                                      className="pb-5"
                                      data-kt-stepper-element="content"
                                    >
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-10 pb-lg-15">
                                          <h3 className="fw-bolder text-dark display-6">
                                            Complete
                                          </h3>
                                          <div className="text-muted fw-bold fs-3">
                                            Review your setup to kickstart your
                                            app!
                                          </div>
                                        </div>
                                        {/*end::Heading*/}
                                        {/*begin::Section*/}
                                        <h4 className="fw-bolder mb-3">
                                          App Basics
                                        </h4>
                                        <div className="text-gray-600 fw-bold lh-lg mb-8">
                                          <div>App Name</div>
                                          <div>Face to Face Discussions</div>
                                        </div>
                                        {/*end::Section*/}
                                        {/*begin::Section*/}
                                        <h4 className="fw-bolder mb-3">
                                          App Framework
                                        </h4>
                                        <div className="text-gray-600 fw-bold lh-lg mb-8">
                                          <div>HTML5</div>
                                        </div>
                                        {/*end::Section*/}
                                        {/*begin::Section*/}
                                        <h4 className="fw-bolder mb-3">
                                          App Database
                                        </h4>
                                        <div className="text-gray-600 fw-bold lh-lg mb-8">
                                          <div>dn_name</div>
                                          <div>Firebase</div>
                                        </div>
                                        {/*end::Section*/}
                                        {/*begin::Section*/}
                                        <h4 className="fw-bolder mb-3">
                                          App Storage
                                        </h4>
                                        <div className="text-gray-600 fw-bold lh-lg mb-8">
                                          <div>Basic Server</div>
                                        </div>
                                        {/*end::Section*/}
                                      </div>
                                    </div>
                                    {/*end::Step 5*/}
                                    {/*begin::Actions*/}
                                    <div className="d-flex justify-content-between pt-10">
                                      <div className="mr-2">
                                        <button
                                          type="button"
                                          className="btn btn-lg btn-light-primary fw-bolder py-4 pe-8 me-3"
                                          data-kt-stepper-action="previous"
                                        >
                                          {/*begin::Svg Icon | path: icons/duotone/Navigation/Left-2.svg*/}
                                          <span className="svg-icon svg-icon-3 me-1">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              width="24px"
                                              height="24px"
                                              viewBox="0 0 24 24"
                                              version="1.1"
                                            >
                                              <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                              >
                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                <rect
                                                  fill="#000000"
                                                  opacity="0.3"
                                                  transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000)"
                                                  x={14}
                                                  y={7}
                                                  width={2}
                                                  height={10}
                                                  rx={1}
                                                />
                                                <path
                                                  d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                  transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997)"
                                                />
                                              </g>
                                            </svg>
                                          </span>
                                          {/*end::Svg Icon*/}Previous
                                        </button>
                                      </div>
                                      <div>
                                        <button
                                          type="button"
                                          className="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
                                          data-kt-stepper-action="submit"
                                        >
                                          Submit
                                          {/*begin::Svg Icon | path: icons/duotone/Navigation/Right-2.svg*/}
                                          <span className="svg-icon svg-icon-3 ms-2">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              width="24px"
                                              height="24px"
                                              viewBox="0 0 24 24"
                                              version="1.1"
                                            >
                                              <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                              >
                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                <rect
                                                  fill="#000000"
                                                  opacity="0.5"
                                                  transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                                  x="7.5"
                                                  y="7.5"
                                                  width={2}
                                                  height={9}
                                                  rx={1}
                                                />
                                                <path
                                                  d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                  transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                />
                                              </g>
                                            </svg>
                                          </span>
                                          {/*end::Svg Icon*/}
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
                                          data-kt-stepper-action="next"
                                        >
                                          Next Step
                                          {/*begin::Svg Icon | path: icons/duotone/Navigation/Right-2.svg*/}
                                          <span className="svg-icon svg-icon-3 ms-1">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              width="24px"
                                              height="24px"
                                              viewBox="0 0 24 24"
                                              version="1.1"
                                            >
                                              <g
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                              >
                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                <rect
                                                  fill="#000000"
                                                  opacity="0.5"
                                                  transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                                  x="7.5"
                                                  y="7.5"
                                                  width={2}
                                                  height={9}
                                                  rx={1}
                                                />
                                                <path
                                                  d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                  fill="#000000"
                                                  fillRule="nonzero"
                                                  transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                />
                                              </g>
                                            </svg>
                                          </span>
                                          {/*end::Svg Icon*/}
                                        </button>
                                      </div>
                                    </div>
                                    {/*end::Actions*/}
                                  </form>
                                  {/*end::Form*/}
                                </div>
                                {/*end::Content*/}
                              </div>
                              {/*end::Stepper*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end::Modal - Create App*/}
                    {/*begin::Modal - Select Location*/}
                    <div
                      className="modal fade"
                      id="kt_modal_select_location"
                      data-backdrop="static"
                      tabIndex={-1}
                      role="dialog"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Select Location</h5>
                            {/*begin::Close*/}
                            <div
                              className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                              data-bs-dismiss="modal"
                            >
                              {/*begin::Svg Icon | path: icons/duotone/Navigation/Close.svg*/}
                              <span className="svg-icon svg-icon-2x">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
                                    fill="#000000"
                                  >
                                    <rect
                                      fill="#000000"
                                      x={0}
                                      y={7}
                                      width={16}
                                      height={2}
                                      rx={1}
                                    />
                                    <rect
                                      fill="#000000"
                                      opacity="0.5"
                                      transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)"
                                      x={0}
                                      y={7}
                                      width={16}
                                      height={2}
                                      rx={1}
                                    />
                                  </g>
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Close*/}
                          </div>
                          <div className="modal-body">
                            <div
                              id="kt_modal_select_location_map"
                              className="map h-450px"
                            />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-light-primary"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              id="submit"
                              type="button"
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end::Modal - Select Location*/}
                    {/*end::Modals*/}
                  </div>
                  {/*end::Container*/}
                </div>
                {/*end::Content*/}
              </div>
              {/*end::Main*/}
              {/*begin::Footer*/}
              <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
                {/*begin::Container*/}
                <div className="container d-flex flex-column flex-md-row flex-stack">
                  {/*begin::Copyright*/}
                  <div className="text-dark order-2 order-md-1">
                    <span className="text-muted fw-bold me-2">2021©</span>
                    <a
                      href
                      target="_blank"
                      className="text-gray-800 text-hover-primary"
                    >
                      Keenthemes
                    </a>
                  </div>
                  {/*end::Copyright*/}
                  {/*begin::Menu*/}
                  <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                    <li className="menu-item">
                      <a
                        href="https://keenthemes.com"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        About
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://keenthemes.com/support"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        Support
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://keenthemes.com/products/start-html-pro"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        Purchase
                      </a>
                    </li>
                  </ul>
                  {/*end::Menu*/}
                </div>
                {/*end::Container*/}
              </div>
              {/*end::Footer*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Page*/}
        </div>
        {/*end::Root*/}
        {/*begin::Header Search*/}
        <div
          className="modal bg-white fade"
          id="kt_header_search_modal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content shadow-none">
              <div className="container w-lg-800px">
                <div className="modal-header d-flex justify-content-end border-0">
                  {/*begin::Close*/}
                  <div
                    className="btn btn-icon btn-sm btn-light-primary ms-2"
                    data-bs-dismiss="modal"
                  >
                    {/*begin::Svg Icon | path: icons/duotone/Navigation/Close.svg*/}
                    <span className="svg-icon svg-icon-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
                          fill="#000000"
                        >
                          <rect
                            fill="#000000"
                            x={0}
                            y={7}
                            width={16}
                            height={2}
                            rx={1}
                          />
                          <rect
                            fill="#000000"
                            opacity="0.5"
                            transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)"
                            x={0}
                            y={7}
                            width={16}
                            height={2}
                            rx={1}
                          />
                        </g>
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </div>
                  {/*end::Close*/}
                </div>
                <div className="modal-body">
                  {/*begin::Search*/}
                  <form className="pb-10">
                    <input
                      autofocus
                      type="text"
                      className="form-control bg-transparent border-0 fs-4x text-center fw-normal"
                      name="query"
                      placeholder="Search..."
                    />
                  </form>
                  {/*end::Search*/}
                  {/*begin::Shop Goods*/}
                  <div className="py-10">
                    <h3 className="fw-bolder mb-8">Shop Goods</h3>
                    {/*begin::Row*/}
                    <div className="row g-5">
                      <div className="col-sm-6">
                        <div className="row g-5">
                          <div className="col-sm-6">
                            <div className="card overlay min-h-125px mb-5 shadow-none">
                              <div className="card-body d-flex flex-column p-0">
                                <div
                                  className="overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded"
                                  style={{
                                    backgroundImage:
                                      'url("assets/media/stock/600x400/img-17.jpg")',
                                  }}
                                />
                                <div className="overlay-layer bg-white bg-opacity-50">
                                  <a
                                    href="#"
                                    className="btn btn-sm fw-bold btn-primary"
                                  >
                                    Explore
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card overlay min-h-125px mb-5 shadow-none">
                              <div className="card-body d-flex flex-column p-0">
                                <div
                                  className="overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded"
                                  style={{
                                    backgroundImage:
                                      'url("assets/media/stock/600x400/img-1.jpg")',
                                  }}
                                />
                                <div className="overlay-layer bg-white bg-opacity-50">
                                  <a
                                    href="#"
                                    className="btn btn-sm fw-bold btn-primary"
                                  >
                                    Explore
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="card card-stretch overlay mb-5 shadow-none min-h-250px">
                              <div className="card-body d-flex flex-column p-0">
                                <div
                                  className="overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded"
                                  style={{
                                    backgroundImage:
                                      'url("assets/media/stock/600x400/img-23.jpg")',
                                  }}
                                />
                                <div className="overlay-layer bg-white bg-opacity-50">
                                  <a
                                    href="#"
                                    className="btn btn-sm fw-bold btn-primary"
                                  >
                                    Explore
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card card-stretch overlay mb-5 shadow-none min-h-250px">
                          <div className="card-body d-flex flex-column p-0">
                            <div
                              className="overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded"
                              style={{
                                backgroundImage:
                                  'url("assets/media/stock/600x400/img-11.jpg")',
                              }}
                            />
                            <div className="overlay-layer bg-white bg-opacity-50">
                              <a
                                href="#"
                                className="btn btn-sm fw-bold btn-primary"
                              >
                                Explore
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end::Row*/}
                  </div>
                  {/*end::Shop Goods*/}
                  {/*begin::Framework Users*/}
                  <div>
                    <h3 className="text-dark fw-bolder fs-1 mb-6">
                      Framework Users
                    </h3>
                    {/*begin::List Widget 4*/}
                    <div className="card bg-transparent mb-5 shadow-none">
                      {/*begin::Body*/}
                      <div className="card-body pt-2 px-0">
                        <div className="table-responsive">
                          <table className="table table-borderless align-middle">
                            {/*begin::Item*/}
                            <tbody>
                              <tr>
                                <th className="ps-0 w-55px">
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-55px flex-shrink-0 me-4">
                                    <span className="symbol-label bg-light-primary">
                                      <img
                                        src="assets/media/svg/avatars/009-boy-4.svg"
                                        className="h-75 align-self-end"
                                        alt
                                      />
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                </th>
                                <td className="ps-0 flex-column min-w-300px">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1"
                                  >
                                    Brad Simmons
                                  </a>
                                  <div className="text-muted fw-bold">
                                    Uses: HTML/CSS/JS, Python
                                  </div>
                                  {/*end::Title*/}
                                </td>
                                <td>
                                  {/*begin::Label*/}
                                  <div className="me-4 me-md-19 text-md-right">
                                    <div className="text-gray-800 fw-bolder fs-6 mb-1">
                                      $2,000,000
                                    </div>
                                    <span className="text-muted fw-bold">
                                      Paid
                                    </span>
                                  </div>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Btn*/}
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                    <span className="svg-icon svg-icon-4">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <polygon points="0 0 24 0 24 24 0 24" />
                                          <rect
                                            fill="#000000"
                                            opacity="0.5"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                  {/*end::Btn*/}
                                </td>
                              </tr>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <tr>
                                <th className="ps-0">
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-55px flex-shrink-0 me-4">
                                    <span className="symbol-label bg-light-danger">
                                      <img
                                        src="assets/media/svg/avatars/006-girl-3.svg"
                                        className="h-75 align-self-end"
                                        alt
                                      />
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                </th>
                                <td className="ps-0 flex-column min-w-300px">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1"
                                  >
                                    Jessie Clarcson
                                  </a>
                                  <div className="text-muted fw-bold">
                                    Uses: HTML, ReactJS, ASP.NET
                                  </div>
                                  {/*end::Title*/}
                                </td>
                                <td>
                                  {/*end::Label*/}
                                  <div className="me-4 me-md-19 text-md-right">
                                    <div className="text-gray-800 fw-bolder fs-6 mb-1">
                                      $1,200,000
                                    </div>
                                    <span className="text-muted fw-bold">
                                      Paid
                                    </span>
                                  </div>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Btn*/}
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                    <span className="svg-icon svg-icon-4">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <polygon points="0 0 24 0 24 24 0 24" />
                                          <rect
                                            fill="#000000"
                                            opacity="0.5"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                  {/*end::Btn*/}
                                </td>
                              </tr>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <tr>
                                <th className="ps-0">
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-55px flex-shrink-0 me-4">
                                    <span className="symbol-label bg-light-success">
                                      <img
                                        src="assets/media/svg/avatars/011-boy-5.svg"
                                        className="h-75 align-self-end"
                                        alt
                                      />
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                </th>
                                <td className="ps-0 flex-column min-w-300px">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1"
                                  >
                                    Lebron Wayde
                                  </a>
                                  <div className="text-muted fw-bold">
                                    Uses: HTML. Laravel Framework
                                  </div>
                                  {/*end::Title*/}
                                </td>
                                <td>
                                  {/*end::Label*/}
                                  <div className="me-4 me-md-19 text-md-right">
                                    <div className="text-gray-800 fw-bolder fs-6 mb-1">
                                      $3,400,000
                                    </div>
                                    <span className="text-muted fw-bold">
                                      Paid
                                    </span>
                                  </div>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Btn*/}
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                    <span className="svg-icon svg-icon-4">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <polygon points="0 0 24 0 24 24 0 24" />
                                          <rect
                                            fill="#000000"
                                            opacity="0.5"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                  {/*end::Btn*/}
                                </td>
                              </tr>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <tr>
                                <th className="ps-0">
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-55px flex-shrink-0 me-4">
                                    <span className="symbol-label bg-light-warning">
                                      <img
                                        src="assets/media/svg/avatars/015-boy-6.svg"
                                        className="h-75 align-self-end"
                                        alt
                                      />
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                </th>
                                <td className="ps-0 flex-column min-w-300px">
                                  {/*begin::Title*/}
                                  <a
                                    href="#"
                                    className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1"
                                  >
                                    Kevin Leonard
                                  </a>
                                  <div className="text-muted fw-bold">
                                    Uses: VueJS, Laravel Framework
                                  </div>
                                  {/*end::Title*/}
                                </td>
                                <td>
                                  {/*end::Label*/}
                                  <div className="me-4 me-md-19 text-md-right">
                                    <div className="text-gray-800 fw-bolder fs-6 mb-1">
                                      $35,600,000
                                    </div>
                                    <span className="text-muted fw-bold">
                                      Paid
                                    </span>
                                  </div>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Btn*/}
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotone/Navigation/Arrow-right.svg*/}
                                    <span className="svg-icon svg-icon-4">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <polygon points="0 0 24 0 24 24 0 24" />
                                          <rect
                                            fill="#000000"
                                            opacity="0.5"
                                            transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                            x={11}
                                            y={5}
                                            width={2}
                                            height={14}
                                            rx={1}
                                          />
                                          <path
                                            d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                  {/*end::Btn*/}
                                </td>
                              </tr>
                              {/*end::Item*/}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::List Widget 4*/}
                  </div>
                  {/*end::Framework Users*/}
                  {/*begin::Tutorials*/}
                  <div className="pb-10">
                    <h3 className="text-dark fw-bolder fs-1 mb-6">Tutorials</h3>
                    {/*begin::List Widget 5*/}
                    <div className="card mb-5 shadow-none">
                      {/*begin::Body*/}
                      <div className="card-body pt-2 px-0">
                        {/*begin::Item*/}
                        <div className="d-flex mb-6">
                          {/*begin::Icon*/}
                          <div className="me-1">
                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Angle-right.svg*/}
                            <span className="svg-icon svg-icon-sm svg-icon-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <path
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Content*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
                            >
                              How to Create Your First Project with Start Admin
                              Theme
                            </a>
                            <div className="fw-bold text-muted">
                              But nothing can prepare you for the real thing
                            </div>
                          </div>
                          {/*end::Content*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex mb-6">
                          {/*begin::Icon*/}
                          <div className="me-1">
                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Angle-right.svg*/}
                            <span className="svg-icon svg-icon-sm svg-icon-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <path
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Content*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
                            >
                              Start Admin Theme Getting Started &amp;
                              Installation
                            </a>
                            <div className="fw-bold text-muted">
                              Long before you sit down to put digital pen
                            </div>
                          </div>
                          {/*end::Content*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex mb-6">
                          {/*begin::Icon*/}
                          <div className="me-1">
                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Angle-right.svg*/}
                            <span className="svg-icon svg-icon-sm svg-icon-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <path
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Content*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
                            >
                              Craft a headline that is both informative and will
                              capture
                            </a>
                            <div className="fw-bold text-muted">
                              But nothing can prepare you for the real thing
                            </div>
                          </div>
                          {/*end::Content*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex mb-6">
                          {/*begin::Icon*/}
                          <div className="me-1">
                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Angle-right.svg*/}
                            <span className="svg-icon svg-icon-sm svg-icon-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <path
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Content*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
                            >
                              Write your post, either writing a draft in a
                              single
                            </a>
                            <div className="fw-bold text-muted">
                              Long before you sit down to put pen
                            </div>
                          </div>
                          {/*end::Content*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex mb-6">
                          {/*begin::Icon*/}
                          <div className="me-1">
                            {/*begin::Svg Icon | path: icons/duotone/Navigation/Angle-right.svg*/}
                            <span className="svg-icon svg-icon-sm svg-icon-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <path
                                    d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                                  />
                                </g>
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Content*/}
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2"
                            >
                              Use images to enhance your post, improve its flow
                            </a>
                            <div className="fw-bold text-muted">
                              Long before you sit down to put digital pen
                            </div>
                          </div>
                          {/*end::Content*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::List Widget 5*/}
                  </div>
                  {/*end::Tutorials*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end::Header Search*/}
        {/*begin::Mega Menu*/}
        <div
          className="modal bg-white fade"
          id="kt_mega_menu_modal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content shadow-none">
              <div className="container">
                <div className="modal-header d-flex flex-stack border-0">
                  <div className="d-flex align-items-center">
                    {/*begin::Logo*/}
                    <a href="index.html">
                      <img
                        alt="Logo"
                        src="assets/media/logos/logo-default.svg"
                        className="h-30px"
                      />
                    </a>
                    {/*end::Logo*/}
                  </div>
                  {/*begin::Close*/}
                  <div
                    className="btn btn-icon btn-sm btn-light-primary ms-2"
                    data-bs-dismiss="modal"
                  >
                    {/*begin::Svg Icon | path: icons/duotone/Navigation/Close.svg*/}
                    <span className="svg-icon svg-icon-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
                          fill="#000000"
                        >
                          <rect
                            fill="#000000"
                            x={0}
                            y={7}
                            width={16}
                            height={2}
                            rx={1}
                          />
                          <rect
                            fill="#000000"
                            opacity="0.5"
                            transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)"
                            x={0}
                            y={7}
                            width={16}
                            height={2}
                            rx={1}
                          />
                        </g>
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </div>
                  {/*end::Close*/}
                </div>
                <div className="modal-body">
                  {/*begin::Row*/}
                  <div className="row py-10 g-5">
                    {/*begin::Column*/}
                    <div className="col-lg-6 pe-lg-25">
                      {/*begin::Row*/}
                      <div className="row">
                        <div className="col-sm-4">
                          <h3 className="fw-bolder mb-5">Dashboards</h3>
                          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="index.html"
                              >
                                Start
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Extended
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2 active"
                                href="dashboards/light.html"
                              >
                                Light
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Compact
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <h3 className="fw-bolder mb-5">Apps</h3>
                          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Private Chat
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Group Chat
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Drawer Chat
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Inbox
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Shop 1
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Shop 2
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Shop Product
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <h3 className="fw-bolder mb-5">General</h3>
                          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="general/faq.html"
                              >
                                FAQ
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="general/pricing.html"
                              >
                                Pricing
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="general/invoice.html"
                              >
                                Invoice
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Login
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Wizard
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Error
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*end::Row*/}
                      {/*begin::Row*/}
                      <div className="row">
                        <div className="col-sm-4">
                          <h3 className="fw-bolder mb-5">Profile</h3>
                          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="profile/overview.html"
                              >
                                Overview
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Account
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Settings
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <h3 className="fw-bolder mb-5">Resources</h3>
                          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="documentation/base/utilities.html"
                              >
                                Components
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="documentation/getting-started.html"
                              >
                                Documentation
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="#"
                                data-kt-page="pro"
                              >
                                Layout Builder
                                <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="menu-link ps-0 py-2"
                                href="documentation/getting-started/changelog.html"
                              >
                                Changelog
                                <span className="badge badge-changelog badge-light-danger bg-hover-danger text-hover-white fw-bold fs-9 px-2 ms-2">
                                  v1.0.1
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*end::Row*/}
                    </div>
                    {/*end::Column*/}
                    {/*begin::Column*/}
                    <div className="col-lg-6">
                      <h3 className="fw-bolder mb-8">Quick Links</h3>
                      {/*begin::Row*/}
                      <div className="row g-5">
                        <div className="col-sm-4">
                          <a
                            href="#"
                            className="card bg-light-success hoverable min-h-125px shadow-none mb-5"
                          >
                            <div className="card-body d-flex flex-column flex-center">
                              <h3 className="fs-3 mb-2 text-dark fw-bolder">
                                Security
                              </h3>
                              <p className="mb-0 text-gray-600">$2.99/month</p>
                            </div>
                          </a>
                        </div>
                        <div className="col-sm-4">
                          <a
                            href="#"
                            className="card bg-light-danger hoverable min-h-125px shadow-none mb-5"
                          >
                            <div className="card-body d-flex flex-column flex-center text-center">
                              <h3 className="fs-3 mb-2 text-dark fw-bolder">
                                Demo
                              </h3>
                              <p className="mb-0 text-gray-600">Free Version</p>
                            </div>
                          </a>
                        </div>
                        <div className="col-sm-4">
                          <a
                            href="#"
                            className="card bg-light-warning hoverable min-h-125px shadow-none mb-5"
                          >
                            <div className="card-body d-flex flex-column flex-center text-center">
                              <h3 className="fs-3 mb-2 text-dark text-hover-primary fw-bolder">
                                Try Now
                              </h3>
                              <p className="mb-0 text-gray-600">Pro Version</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      {/*end::Row*/}
                      {/*begin::Row*/}
                      <div className="row g-5">
                        <div className="col-sm-8">
                          <a
                            href="#"
                            className="card bg-light-primary hoverable min-h-125px shadow-none mb-5"
                          >
                            <div className="card-body d-flex flex-column flex-center text-center">
                              <h3 className="fs-3 mb-2 text-dark fw-bolder">
                                Payment Methods
                              </h3>
                              <p className="mb-0 text-gray-600">
                                Credit Cards/Debit Cards, Paypal,
                                <br />
                                Transferwise &amp; Others
                              </p>
                            </div>
                          </a>
                          {/*begin::Row*/}
                          <div className="row g-5">
                            <div className="col-sm-6">
                              <a className="card bg-light-warning hoverable shadow-none min-h-125px mb-5">
                                <div className="card-body d-flex flex-column flex-center text-center">
                                  <h3 className="fs-3 mb-2 text-dark fw-bolder">
                                    Support
                                  </h3>
                                  <p className="mb-0 text-gray-600">
                                    6 Month Free
                                  </p>
                                </div>
                              </a>
                            </div>
                            <div className="col-sm-6">
                              <a
                                href="#"
                                className="card bg-light-success hoverable shadow-none min-h-125px mb-5"
                              >
                                <div className="card-body d-flex flex-column flex-center text-center">
                                  <h3 className="fs-3 mb-2 text-dark fw-bolder">
                                    Installation
                                  </h3>
                                  <p className="mb-0 text-gray-600">
                                    $0.99 Per Machine
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                          {/*end::Row*/}
                        </div>
                        <div className="col-sm-4">
                          <a
                            href="#"
                            className="card card-stretch mb-5 bg-light-info hoverable shadow-none min-h-250px"
                          >
                            <div className="card-body d-flex flex-column p-0">
                              <div className="d-flex flex-column flex-center text-center px-5 pt-10">
                                <h3 className="fs-3 mb-2 text-dark fw-bolder">
                                  Quick Start
                                </h3>
                                <p className="mb-0 text-gray-600">
                                  Single Click Import
                                </p>
                              </div>
                              <div
                                className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/illustrations/terms-1.png")',
                                }}
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                      {/*end::Row*/}
                    </div>
                    {/*end::Column*/}
                  </div>
                  {/*end::Row*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end::Mega Menu*/}
        {/*begin::Drawers*/}
        {/*begin::Exolore drawer toggle*/}
        <button
          id="kt_explore_toggle"
          className="explore-toggle btn btn-sm explore-btn-toggle shadow-sm position-fixed fw-bolder zindex-2 top-50 px-8 mt-10 end-0 transform-90 fs-5 rounded-top-0"
          title="Upgrade to Start HTML Pro"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          data-bs-dismiss="click"
          data-bs-trigger="hover"
        >
          <span id="kt_explore_toggle_label">Upgrade to Pro</span>
        </button>
        {/*end::Exolore drawer toggle*/}
        {/*begin::Exolore drawer*/}
        <div
          id="kt_explore"
          className="explore bg-white"
          data-kt-drawer="true"
          data-kt-drawer-name="explore"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'lg': '440px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_explore_toggle"
          data-kt-drawer-close="#kt_explore_close"
        >
          {/*begin::Card*/}
          <div className="card shadow-none w-100">
            {/*begin::Header*/}
            <div className="card-header" id="kt_explore_header">
              <h5 className="card-title fw-bold text-gray-600">
                Upgrade To Pro
              </h5>
              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-sm btn-icon explore-btn-dismiss me-n5"
                  id="kt_explore_close"
                >
                  {/*begin::Svg Icon | path: icons/duotone/Navigation/Close.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
                        fill="#000000"
                      >
                        <rect
                          fill="#000000"
                          x={0}
                          y={7}
                          width={16}
                          height={2}
                          rx={1}
                        />
                        <rect
                          fill="#000000"
                          opacity="0.5"
                          transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)"
                          x={0}
                          y={7}
                          width={16}
                          height={2}
                          rx={1}
                        />
                      </g>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body" id="kt_explore_body">
              {/*begin::Content*/}
              <div
                id="kt_explore_scroll"
                className="scroll-y me-n5 pe-5"
                data-kt-scroll="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-wrappers="#kt_explore_body"
                data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer"
                data-kt-scroll-offset="5px"
              >
                {/*begin::Licenses*/}
                <div className="mb-5">
                  {/*begin::Comparision*/}
                  <table className="table table-row-dashed table-row-gray-300 align-middle fs-6 fw-bold text-gray-800 gs-0 gy-3">
                    <tbody>
                      <tr className="border-bottom-0">
                        <th className="fw-bolder text-dark fs-3">
                          Pro Version Benefits
                        </th>
                        <th className="text-center">
                          <span className="bg-light py-2 px-4 fw-bold fs-6 rounded">
                            Free
                          </span>
                        </th>
                        <th className="text-center">
                          <span className="bg-light py-2 px-4 fw-bold fs-6 rounded">
                            Pro
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <td>UI Elements</td>
                        <td className="text-center">20</td>
                        <td className="text-center">100</td>
                      </tr>
                      <tr>
                        <td>In-house Components</td>
                        <td className="text-center">20</td>
                        <td className="text-center">40</td>
                      </tr>
                      <tr>
                        <td>Crafted Pages</td>
                        <td className="text-center">5</td>
                        <td className="text-center">20</td>
                      </tr>
                      <tr>
                        <td>Complete Documentation</td>
                        <td className="text-center">
                          {/*begin::Svg Icon | path: icons/duotone/Code/Done-circle.svg*/}
                          <span className="svg-icon svg-icon-2 explore-icon-success">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <circle
                                fill="#000000"
                                opacity="0.3"
                                cx={12}
                                cy={12}
                                r={10}
                              />
                              <path
                                d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                fill="#000000"
                                fillRule="nonzero"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </td>
                        <td className="text-center">
                          {/*begin::Svg Icon | path: icons/duotone/Code/Done-circle.svg*/}
                          <span className="svg-icon svg-icon-2 explore-icon-success">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <circle
                                fill="#000000"
                                opacity="0.3"
                                cx={12}
                                cy={12}
                                r={10}
                              />
                              <path
                                d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                fill="#000000"
                                fillRule="nonzero"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </td>
                      </tr>
                      <tr>
                        <td>Product Support</td>
                        <td className="text-center">
                          {/*begin::Svg Icon | path: icons/duotone/Code/Error-circle.svg*/}
                          <span className="svg-icon svg-icon-2 explore-icon-danger">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <circle
                                fill="#000000"
                                opacity="0.3"
                                cx={12}
                                cy={12}
                                r={10}
                              />
                              <path
                                d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z"
                                fill="#000000"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </td>
                        <td className="text-center">
                          {/*begin::Svg Icon | path: icons/duotone/Code/Done-circle.svg*/}
                          <span className="svg-icon svg-icon-2 explore-icon-success">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <circle
                                fill="#000000"
                                opacity="0.3"
                                cx={12}
                                cy={12}
                                r={10}
                              />
                              <path
                                d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                fill="#000000"
                                fillRule="nonzero"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </td>
                      </tr>
                      <tr>
                        <td>Chat App</td>
                        <td className="text-center">
                          {/*begin::Svg Icon | path: icons/duotone/Code/Error-circle.svg*/}
                          <span className="svg-icon svg-icon-2 explore-icon-danger">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <circle
                                fill="#000000"
                                opacity="0.3"
                                cx={12}
                                cy={12}
                                r={10}
                              />
                              <path
                                d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z"
                                fill="#000000"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </td>
                        <td className="text-center">
                          {/*begin::Svg Icon | path: icons/duotone/Code/Done-circle.svg*/}
                          <span className="svg-icon svg-icon-2 explore-icon-success">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <circle
                                fill="#000000"
                                opacity="0.3"
                                cx={12}
                                cy={12}
                                r={10}
                              />
                              <path
                                d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                                fill="#000000"
                                fillRule="nonzero"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/*end::Comparision*/}
                </div>
                {/*end::Licenses*/}
                {/*begin::Link*/}
                <a
                  href="https://keenthemes.com/products/start-html-pro"
                  className="btn btn-lg explore-btn-primary w-100"
                >
                  Upgrade to
                  <span className="fw-bolder ms-1">Start HTML Pro</span>
                </a>
                {/*end::Link*/}
                {/*begin::Related Products*/}
                <div className="pt-15 mb-0">
                  {/*begin::Heading*/}
                  <div className="d-flex flex-stack mb-5">
                    {/*begin::Title*/}
                    <h3 className="fw-bolder text-dark me-2 mb-0">
                      Related Products
                    </h3>
                    {/*end::Title*/}
                    {/*begin::Link*/}
                    <a
                      href="https://keenthemes.com"
                      target="_black"
                      className="fs-6 fw-bold explore-link"
                    >
                      All Products
                    </a>
                    {/*end::Link*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Products*/}
                  <div className="mb-0">
                    {/*begin::Product*/}
                    <a
                      href="https://keenthemes.com/products/start-html-free"
                      className="btn btn-flex explore-btn-outline w-100 flex-stack active px-4 mb-4"
                    >
                      {/*begin::Info*/}
                      <div className="d-flex align-items-center me-1">
                        <img
                          src="assets/media/technology-logos/Html5.png"
                          alt
                          className="h-30px me-3"
                        />
                        <div className="d-flex flex-column align-items-start">
                          <h3 className="text-gray-800 fs-6 fw-bold mb-0">
                            Start HTML Free
                          </h3>
                          <div className="text-gray-400 fs-7 fw-bold">
                            HTML, CSS, JS, Bootstrap 5
                          </div>
                        </div>
                      </div>
                      {/*end::Info*/}
                      {/*begin::Label*/}
                      <span className="badge badge-inline explore-label-free py-2">
                        Free
                      </span>
                      {/*end::Label*/}
                    </a>
                    {/*end::Product*/}
                    {/*begin::Product*/}
                    <a
                      href="https://keenthemes.com/products/start-vue-free"
                      className="btn btn-flex explore-btn-outline w-100 flex-stack px-4 mb-4"
                    >
                      {/*begin::Info*/}
                      <div className="d-flex align-items-center me-1">
                        <img
                          src="assets/media/technology-logos/VueJS.png"
                          alt
                          className="h-30px me-3"
                        />
                        <div className="d-flex flex-column align-items-start">
                          <h3 className="text-gray-800 fs-6 fw-bold mb-0">
                            Start Vue Free
                          </h3>
                          <div className="text-gray-400 fs-7 fw-bold">
                            VueJS 3, Typescript, Bootstrap 5
                          </div>
                        </div>
                      </div>
                      {/*end::Info*/}
                      {/*begin::Label*/}
                      <span className="badge badge-inline explore-label-free py-2">
                        Free
                      </span>
                      {/*end::Label*/}
                    </a>
                    {/*end::Product*/}
                    {/*begin::Product*/}
                    <a
                      href="https://keenthemes.com/products/start-react-free"
                      className="btn btn-flex explore-btn-outline w-100 flex-stack px-4 mb-4"
                    >
                      {/*begin::Info*/}
                      <div className="d-flex align-items-center me-1">
                        <img
                          src="assets/media/technology-logos/React.png"
                          alt
                          className="h-30px me-3"
                        />
                        <div className="d-flex flex-column align-items-start">
                          <h3 className="text-gray-800 fs-6 fw-bold mb-0">
                            Start React Free
                          </h3>
                          <div className="text-gray-400 fs-7 fw-bold">
                            React, Typescript, Bootstrap 5
                          </div>
                        </div>
                      </div>
                      {/*end::Info*/}
                      {/*begin::Label*/}
                      <span className="badge badge-inline explore-label-free py-2">
                        Free
                      </span>
                      {/*end::Label*/}
                    </a>
                    {/*end::Product*/}
                    {/*begin::Product*/}
                    <a
                      href="https://keenthemes.com/products/start-html-pro"
                      className="btn btn-flex explore-btn-outline w-100 flex-stack px-4 mb-4"
                    >
                      {/*begin::Info*/}
                      <div className="d-flex align-items-center me-1">
                        <img
                          src="assets/media/technology-logos/Html5.png"
                          alt
                          className="h-30px me-3"
                        />
                        <div className="d-flex flex-column align-items-start">
                          <h3 className="text-gray-800 fs-6 fw-bold mb-0">
                            Start HTML Pro
                          </h3>
                          <div className="text-gray-400 fs-7 fw-bold">
                            HTML5, CSS3, JS, Bootstrap 5
                          </div>
                        </div>
                      </div>
                      {/*end::Info*/}
                      {/*begin::Label*/}
                      <span className="badge badge-inline explore-label-pro py-2">
                        Pro
                      </span>
                      {/*end::Label*/}
                    </a>
                    {/*end::Product*/}
                    {/*begin::Product*/}
                    <a
                      href="https://keenthemes.com/products/start-vue-pro"
                      className="btn btn-flex explore-btn-outline w-100 flex-stack px-4 mb-4"
                    >
                      {/*begin::Info*/}
                      <div className="d-flex align-items-center me-1">
                        <img
                          src="assets/media/technology-logos/VueJS.png"
                          alt
                          className="h-30px me-3"
                        />
                        <div className="d-flex flex-column align-items-start">
                          <h3 className="text-gray-800 fs-6 fw-bold mb-0">
                            Start Vue Pro
                          </h3>
                          <div className="text-gray-400 fs-7 fw-bold">
                            VueJS 3, Typescript, Bootstrap 5
                          </div>
                        </div>
                      </div>
                      {/*end::Info*/}
                      {/*begin::Label*/}
                      <span className="badge badge-inline explore-label-pro py-2">
                        Pro
                      </span>
                      {/*end::Label*/}
                    </a>
                    {/*end::Product*/}
                    {/*begin::Product*/}
                    <a
                      href="https://keenthemes.com/products/start-react-pro"
                      className="btn btn-flex explore-btn-outline w-100 flex-stack px-4 mb-4"
                    >
                      {/*begin::Info*/}
                      <div className="d-flex align-items-center me-1">
                        <img
                          src="assets/media/technology-logos/React.png"
                          alt
                          className="h-30px me-3"
                        />
                        <div className="d-flex flex-column align-items-start">
                          <h3 className="text-gray-800 fs-6 fw-bold mb-0">
                            Start React Pro
                          </h3>
                          <div className="text-gray-400 fs-7 fw-bold">
                            React, Typescript, Bootstrap 5
                          </div>
                        </div>
                      </div>
                      {/*end::Info*/}
                      {/*begin::Label*/}
                      <span className="badge badge-inline explore-label-pro py-2">
                        Pro
                      </span>
                      {/*end::Label*/}
                    </a>
                    {/*end::Product*/}
                  </div>
                  {/*end::Products*/}
                </div>
                {/*end::Related Products*/}
              </div>
              {/*end::Content*/}
            </div>
            {/*end::Body*/}
            {/*begin::Footer*/}
            <div
              className="card-footer py-5 text-center"
              id="kt_explore_footer"
            >
              <a
                href="https://keenthemes.com/products/start-html-free"
                className="btn btn-lg explore-btn-secondary w-100"
              >
                Download
                <span className="fw-bolder ms-1">Start HTML Free</span>
              </a>
            </div>
            {/*end::Footer*/}
          </div>
          {/*end::Card*/}
        </div>
        {/*end::Exolore drawer*/}
        {/*end::Drawers*/}
        {/*begin::Scrolltop*/}
        <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
          {/*begin::Svg Icon | path: icons/duotone/Navigation/Up-2.svg*/}
          <span className="svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <polygon points="0 0 24 0 24 24 0 24" />
                <rect
                  fill="#000000"
                  opacity="0.5"
                  x={11}
                  y={10}
                  width={2}
                  height={10}
                  rx={1}
                />
                <path
                  d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
                  fill="#000000"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </span>
          {/*end::Svg Icon*/}
        </div>
      </div>
    </>
  );
}

export default Dashboard