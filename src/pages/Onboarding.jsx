import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Spinner from "../components/Spinner";
import { STATUS } from "../constants";
import { onboardUser, selectOnboardUserState } from "../redux/authSlice";

function Onboarding() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector(selectOnboardUserState);

  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherNames: "",
    residentAddress: "",
    residentState: "",
    residentLga: "",
    residentTown: "",
    stateOfOrigin: "",
    lgaOfOrigin: "",
    townOfOrigin: "",
    dateOfBirth: "",
    phoneNumber: "",
    bvn: "",
    nin: "",
    accountNumber: "",
    bankName: ""
  })

  const [resMsg, setResMsg] = useState('')

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log(formData)

    dispatch(onboardUser(formData))
      .unwrap()
      .then(() => {
        setCurrentStep(4)
        setResMsg('Successful')
      })
      .catch((err) => {
        console.log(err)
        setResMsg(err.message || "Something went wrong")
      })
  }

  return (
    <>
      { status === STATUS.PENDING && <Spinner /> }

      <div>
        <Nav />
        <main>
          {/* HEADER */}
          <Header />
          <div className="container-fluid">
            <div className="d-flex align-items-baseline justify-content-between">
              {/* Title */}
              <h1 className="h2">Welcome to Identify</h1>
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Onboarding
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9 col-xxl-7">
                <form className="needs-validation">
                  <ul
                    className="nav nav-pills steps mb-7 mt-n3 w-75 w-xxl-50 mx-auto"
                    id="wizard-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${currentStep === 1 ? "active" : ""}`}
                        // id="wizardTabOne"
                        // data-bs-toggle="pill"
                        // data-bs-target="#wizardStepOne"
                        type="button"
                        // role="tab"
                        // aria-controls="wizardStepOne"
                        // aria-selected="true"
                      >
                        1
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${currentStep === 2 ? "active" : ""}`}
                        // id="wizardTabTwo"
                        // data-bs-toggle="pill"
                        // data-bs-target="#wizardStepTwo"
                        type="button"
                        // role="tab"
                        // aria-controls="wizardStepTwo"
                        // aria-selected="false"
                      >
                        2
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${currentStep === 3 ? "active" : ""}`}
                        // id="wizardTabThree"
                        // data-bs-toggle="pill"
                        // data-bs-target="#wizardStepThree"
                        type="button"
                        // role="tab"
                        // aria-controls="wizardStepThree"
                        // aria-selected="false"
                      >
                        3
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${currentStep === 4 ? "active" : ""}`}
                        // id="wizardTabFour"
                        // data-bs-toggle="pill"
                        // data-bs-target="#wizardStepFour"
                        type="button"
                        // role="tab"
                        // aria-controls="wizardStepFour"
                        // aria-selected="false"
                      >
                        4
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="wizard-tabContent">
                    <div
                      className={`tab-pane fade ${currentStep === 1 ? 'show active' : ''}`}
                      id="wizardStepOne"
                      role="tabpanel"
                      aria-labelledby="wizardTabOne"
                    >
                      {/* Card */}
                      <div className="card border-0 py-6 px-md-6">
                        <div className="card-body">
                          <h2 className="text-center mb-0">
                            Basic User information
                          </h2>
                          <p className="text-secondary text-center">
                            General information about you
                          </p>
                          <div className="mb-3">
                            <div className="row">
                              <div className="col-md">
                                <label
                                  htmlFor="firstName"
                                  className="form-label"
                                >
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstName"
                                  placeholder="your first name"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter your first name
                                </div>
                              </div>
                              <div className="col-md">
                                <label
                                  htmlFor="lastNAme"
                                  className="form-label"
                                >
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastNAme"
                                  placeholder="your last name"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter your last name
                                </div>
                              </div>
                              <div className="col-md">
                                <label
                                  htmlFor="othernames"
                                  className="form-label"
                                >
                                  Other Names
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="othernames"
                                  placeholder="your other names"
                                  name="otherNames"
                                  value={formData.otherNames}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter your other names
                                </div>
                              </div>
                            </div>
                            {/* / .row */}
                          </div>
                          <div className="mb-3">
                            <div className="row">
                              <div className="col-md">
                                <label
                                  htmlFor="residentADDress"
                                  className="form-label"
                                >
                                  Resident's Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="residentADDress"
                                  placeholder="your home address"
                                  name="residentAddress"
                                  value={formData.residentAddress}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter your home address
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="row">
                              <div className="col-md">
                                <label
                                  htmlFor="residentSTATE"
                                  className="form-label"
                                >
                                  Resident's State
                                </label>
                                <select
                                  className="form-select mb-3"
                                  aria-label=".form-select-sm example"
                                  name="residentState"
                                  value={formData.residentState}
                                  onChange={handleChange}
                                >
                                  <option disabled selected>
                                    --Select State--
                                  </option>
                                  <option value="Abia">Abia</option>
                                  <option value="Adamawa">Adamawa</option>
                                  <option value="Akwa Ibom">Akwa Ibom</option>
                                  <option value="Anambra">Anambra</option>
                                  <option value="Bauchi">Bauchi</option>
                                  <option value="Bayelsa">Bayelsa</option>
                                  <option value="Benue">Benue</option>
                                  <option value="Borno">Borno</option>
                                  <option value="Cross River">
                                    Cross River
                                  </option>
                                  <option value="Delta">Delta</option>
                                  <option value="Ebonyi">Ebonyi</option>
                                  <option value="Edo">Edo</option>
                                  <option value="Ekiti">Ekiti</option>
                                  <option value="Enugu">Enugu</option>
                                  <option value="FCT">
                                    Federal Capital Territory
                                  </option>
                                  <option value="Gombe">Gombe</option>
                                  <option value="Imo">Imo</option>
                                  <option value="Jigawa">Jigawa</option>
                                  <option value="Kaduna">Kaduna</option>
                                  <option value="Kano">Kano</option>
                                  <option value="Katsina">Katsina</option>
                                  <option value="Kebbi">Kebbi</option>
                                  <option value="Kogi">Kogi</option>
                                  <option value="Kwara">Kwara</option>
                                  <option value="Lagos">Lagos</option>
                                  <option value="Nasarawa">Nasarawa</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Ogun">Ogun</option>
                                  <option value="Ondo">Ondo</option>
                                  <option value="Osun">Osun</option>
                                  <option value="Oyo">Oyo</option>
                                  <option value="Plateau">Plateau</option>
                                  <option value="Rivers">Rivers</option>
                                  <option value="Sokoto">Sokoto</option>
                                  <option value="Taraba">Taraba</option>
                                  <option value="Yobe">Yobe</option>
                                  <option value="Zamfara">Zamfara</option>
                                </select>
                                <div className="invalid-feedback">
                                  Please select a valid state
                                </div>
                              </div>
                              <div className="col-md">
                                <label
                                  htmlFor="residentLGA"
                                  className="form-label"
                                >
                                  Resident's LGA
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="residentLGA"
                                  placeholder="your local government Area"
                                  name="residentLga"
                                  value={formData.residentLga}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter the LGA for the above state
                                </div>
                              </div>
                              <div className="col-md">
                                <label
                                  htmlFor="residentTown"
                                  className="form-label"
                                >
                                  Resident's Town
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="residentTown"
                                  placeholder="your town"
                                  name="residentTown"
                                  value={formData.residentTown}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter the Town for the above state
                                </div>
                              </div>
                            </div>
                            {/* / .row */}
                          </div>
                          <div className="mb-3">
                            <div className="row">
                              <div className="col-md">
                                <label
                                  htmlFor="residentSTATE"
                                  className="form-label"
                                >
                                  State of Origin
                                </label>
                                <select
                                  className="form-select mb-3"
                                  aria-label=".form-select-sm example"
                                  name="stateOfOrigin"
                                  value={formData.stateOfOrigin}
                                  onChange={handleChange}
                                >
                                  <option disabled selected>
                                    --Select State--
                                  </option>
                                  <option value="Abia">Abia</option>
                                  <option value="Adamawa">Adamawa</option>
                                  <option value="Akwa Ibom">Akwa Ibom</option>
                                  <option value="Anambra">Anambra</option>
                                  <option value="Bauchi">Bauchi</option>
                                  <option value="Bayelsa">Bayelsa</option>
                                  <option value="Benue">Benue</option>
                                  <option value="Borno">Borno</option>
                                  <option value="Cross River">
                                    Cross River
                                  </option>
                                  <option value="Delta">Delta</option>
                                  <option value="Ebonyi">Ebonyi</option>
                                  <option value="Edo">Edo</option>
                                  <option value="Ekiti">Ekiti</option>
                                  <option value="Enugu">Enugu</option>
                                  <option value="FCT">
                                    Federal Capital Territory
                                  </option>
                                  <option value="Gombe">Gombe</option>
                                  <option value="Imo">Imo</option>
                                  <option value="Jigawa">Jigawa</option>
                                  <option value="Kaduna">Kaduna</option>
                                  <option value="Kano">Kano</option>
                                  <option value="Katsina">Katsina</option>
                                  <option value="Kebbi">Kebbi</option>
                                  <option value="Kogi">Kogi</option>
                                  <option value="Kwara">Kwara</option>
                                  <option value="Lagos">Lagos</option>
                                  <option value="Nasarawa">Nasarawa</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Ogun">Ogun</option>
                                  <option value="Ondo">Ondo</option>
                                  <option value="Osun">Osun</option>
                                  <option value="Oyo">Oyo</option>
                                  <option value="Plateau">Plateau</option>
                                  <option value="Rivers">Rivers</option>
                                  <option value="Sokoto">Sokoto</option>
                                  <option value="Taraba">Taraba</option>
                                  <option value="Yobe">Yobe</option>
                                  <option value="Zamfara">Zamfara</option>
                                </select>
                                <div className="invalid-feedback">
                                  Please select a valid state
                                </div>
                              </div>
                              <div className="col-md">
                                <label
                                  htmlFor="residentLGA"
                                  className="form-label"
                                >
                                  LGA of Origin
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="residentLGA"
                                  placeholder="your local government Area"
                                  name="lgaOfOrigin"
                                  value={formData.lgaOfOrigin}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter the LGA for the above state
                                </div>
                              </div>
                              <div className="col-md">
                                <label
                                  htmlFor="residentTown"
                                  className="form-label"
                                >
                                  Town of Origin
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="residentTown"
                                  placeholder="your town"
                                  name="townOfOrigin"
                                  value={formData.townOfOrigin}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter the Town for the above state
                                </div>
                              </div>
                            </div>
                            {/* / .row */}
                          </div>
                          <div className="mb-3">
                            <div className="row">
                              <div className="col-md">
                                <label
                                  htmlFor="residentLGA"
                                  className="form-label"
                                >
                                  {" "}
                                  Date OF Birth
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="residentLGA"
                                  placeholder="your Date OF Birth"
                                  name="dateOfBirth"
                                  value={formData.dateOfBirth}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter your Date of Birth
                                </div>
                              </div>
                              <div className="col-md">
                                <label
                                  htmlFor="residentTown"
                                  className="form-label"
                                >
                                  Phone No.
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="residentTown"
                                  placeholder="your Phone No."
                                  name="phoneNumber"
                                  value={formData.phoneNumber}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter your phone no
                                </div>
                              </div>
                            </div>
                            {/* / .row */}
                          </div>
                          <div className="mb-3">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="private"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="private"
                              >
                                I confirm that I am a resident of Nigeria
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="d-flex justify-content-between">
                            {/* Button */}
                            <button type="button" className="btn btn-light">
                              Cancel
                            </button>
                            {/* Button */}
                            <button
                              className="btn btn-primary"
                              onClick={() => setCurrentStep(2)}
                              type="button"
                              // data-toggle="wizard"
                              // href="#wizardStepTwo"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${currentStep === 2 ? 'show active' : ''}`}
                      id="wizardStepTwo"
                      role="tabpanel"
                      aria-labelledby="wizardTabTwo"
                    >
                      {/* Card */}
                      <div className="card border-0 py-6 px-md-6">
                        <div className="card-body">
                          <h2 className="text-center mb-0">
                            Sync / Connect All your credentials{" "}
                          </h2>
                          <p className="text-secondary text-center">
                            Let's ensure its you (For the Banked)
                          </p>
                          <div className="mb-3">
                            <div className="row">
                              <div className="col-md">
                                <label
                                  htmlFor="teamLeader"
                                  className="form-label"
                                >
                                  Enter your BVN
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="teamLeader"
                                  placeholder="your BVN"
                                  name="bvn"
                                  value={formData.bvn}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter your BVN
                                </div>
                              </div>
                              <div className="col-md">
                                <label
                                  htmlFor="teamLeaderEmail"
                                  className="form-label"
                                >
                                  Enter your NIN
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="teamLeaderEmail"
                                  placeholder="your NIN"
                                  name="nin"
                                  value={formData.nin}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter your NIN
                                </div>
                              </div>
                            </div>
                            {/* / .row */}
                          </div>
                          <div className="mb-3">
                            <div className="row">
                              <div className="col-md">
                                <label
                                  htmlFor="teamLeader"
                                  className="form-label"
                                >
                                  Bind your Local Account NO.
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="teamLeader"
                                  placeholder="your Local Account NO."
                                  name="accountNumber"
                                  value={formData.accountNumber}
                                  onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                  Please enter your Local Account NO.
                                </div>
                              </div>
                              <div className="col-md">
                                <label
                                  htmlFor="teamLeaderEmail"
                                  className="form-label"
                                >
                                  Select Account's Bank
                                </label>
                                <select
                                  className="form-select mb-3"
                                  aria-label=".form-select-sm example"
                                  name="bankName"
                                  value={formData.bankName}
                                  onChange={handleChange}
                                >
                                  <option selected>Choose</option>
                                  <option value="abbey-mortgage">
                                    Abbey Mortgage Bank
                                  </option>
                                  <option value='access-bank'>Access Bank</option>
                                  <option value="access-diamond">
                                    Access Bank (Diamond)
                                  </option>
                                  <option value='alat-by-wema'>ALAT by WEMA</option>
                                  <option value="aso-savings-and-loans">
                                    ASO Savings and Loans
                                  </option>
                                  {/* 
                                  <option value={50931}>
                                    Bowen Microfinance Bank
                                  </option>
                                  <option value={50823}>
                                    CEMCS Microfinance Bank
                                  </option>
                                  <option value={023}>Citibank Nigeria</option>
                                  <option value={559}>
                                    Coronation Merchant Bank
                                  </option>
                                  <option value={050}>Ecobank Nigeria</option>
                                  <option value={562}>
                                    Ekondo Microfinance Bank
                                  </option>
                                  <option value={50126}>Eyowo</option>
                                  <option value={070}>Fidelity Bank</option>
                                  <option value={51314}>Firmus MFB</option>
                                  <option value={011}>
                                    First Bank of Nigeria
                                  </option>
                                  <option value={214}>
                                    First City Monument Bank
                                  </option>
                                  <option value={501}>
                                    FSDH Merchant Bank Limited
                                  </option>
                                  <option value={00103}>Globus Bank</option>
                                  <option value={05}>
                                    Guaranty Trust Bank
                                  </option>
                                  <option value={51251}>
                                    Hackman Microfinance Bank
                                  </option>
                                  <option value={50383}>
                                    Hasal Microfinance Bank
                                  </option>
                                  <option value={030}>Heritage Bank</option>
                                  <option value={51244}>
                                    Ibile Microfinance Bank
                                  </option>
                                  <option value={50457}>Infinity MFB</option>
                                  <option value={301}>Jaiz Bank</option>
                                  <option value={082}>Keystone Bank</option>
                                  <option value={50211}>Kuda Bank</option>
                                  <option value={90052}>
                                    Lagos Building Investment Company Plc.
                                  </option>
                                  <option value={50563}>Mayfair MFB</option>
                                  <option value={50304}>Mint MFB</option>
                                  <option value={565}>One Finance</option>
                                  <option value={999991}>PalmPay</option>
                                  <option value={526}>Parallex Bank</option>
                                  <option value={311}>
                                    Parkway - ReadyCash
                                  </option>
                                  <option value={999992}>Paycom</option>
                                  <option value={50746}>
                                    Petra Mircofinance Bank Plc
                                  </option>
                                  <option value={076}>Polaris Bank</option>
                                  <option value={101}>Providus Bank</option>
                                  <option value={502}>
                                    Rand Merchant Bank
                                  </option>
                                  <option value={125}>Rubies MFB</option>
                                  <option value={51310}>
                                    Sparkle Microfinance Bank
                                  </option>
                                  <option value={221}>Stanbic IBTC Bank</option>
                                  <option value={06}>
                                    Standard Chartered Bank
                                  </option>
                                  <option value={232}>Sterling Bank</option>
                                  <option value={100}>Suntrust Bank</option>
                                  <option value={302}>TAJ Bank</option>
                                  <option value={51211}>TCF MFB</option>
                                  <option value={102}>Titan Bank</option>
                                  <option value={032}>
                                    Union Bank of Nigeria
                                  </option>
                                  <option value={033}>
                                    United Bank For Africa
                                  </option>
                                  <option value={215}>Unity Bank</option>
                                  <option value={566}>
                                    VFD Microfinance Bank Limited
                                  </option>
                                  <option value={035}>Wema Bank</option>
                                  <option value={057}>Zenith Bank</option> */}
                                </select>
                              </div>
                            </div>
                            {/* / .row */}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Upload pictures of your valid IDs
                            </label>
                            <div
                              className="dropzone text-center px-4 py-6"
                              data-dropzone
                            >
                              <div className="dz-message">
                                <img
                                  className="avatar avatar-xxl mb-3"
                                  src="https://d33wubrfki0l68.cloudfront.net/dab0efca2a3dfb58288f0abf1251e668b2f56229/96c61/assets/images/illustrations/upload-illustration.svg"
                                  alt="..."
                                />
                                <h5 className="mb-4">
                                  Drag and drop your file here
                                </h5>
                                <p className="mb-4">or</p>
                                {/* Button */}
                                <span className="btn btn-sm btn-gray-300">
                                  Browse files
                                </span>
                              </div>
                            </div>
                            <span className="form-text">
                              Please use an images at least 800px x 600px
                            </span>
                          </div>
                          <div className="mb-3">
                            <div className="row">
                              <div className="col-md">
                                <label
                                  htmlFor="teamLeaderEmail"
                                  className="form-label"
                                >
                                  Connect your Twitter Account
                                </label>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  // onclick="window.location.href='https://twitter.com/login?lang=en';"
                                >
                                  Connect Now
                                </button>
                              </div>
                              <div className="col-md">
                                <label
                                  htmlFor="teamLeaderEmail"
                                  className="form-label"
                                >
                                  Connect your Linkedin Account
                                </label>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  // onclick="window.location.href='https://www.linkedin.com/login';"
                                >
                                  Connect Now
                                </button>
                              </div>
                            </div>
                            {/* / .row */}
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="d-flex justify-content-between">
                            {/* Button */}
                            <button
                              className="btn btn-light"
                              data-toggle="wizard"
                              onClick={() => setCurrentStep(1)}
                              type="button"
                              // href="#wizardStepOne"
                            >
                              Previous
                            </button>
                            {/* Button */}
                            <button
                              className="btn btn-primary"
                              onClick={() => setCurrentStep(3)}
                              type="button"
                              data-toggle="wizard"
                              // href="#wizardStepThree"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${currentStep === 3 ? 'show active' : ''}`}
                      id="wizardStepThree"
                      role="tabpanel"
                      aria-labelledby="wizardTabThree"
                    >
                      {/* Card */}
                      <div className="card border-0 py-6 px-md-6">
                        <div className="card-body">

                          <h2 className="text-center mb-0">Wallet Setup</h2>
                          <p className="text-primary text-center my-5">{resMsg}</p>
                          <p className="text-secondary text-center">
                            Connect and Link your wallet (if any)
                          </p>
                          <div className="mb-3">
                            <div className="row">
                              <div className="col-md">
                                <div className="card">
                                  <div className="card-body">
                                    <h6 className="card-subtitle mb-1 text-muted text-uppercase">
                                      user wallet
                                    </h6>
                                    <h2 className="card-title">
                                      Connect your crypto Wallet
                                    </h2>
                                    <p className="card-text">
                                      Connect your wallet to cash in your mined
                                      rewards
                                    </p>
                                    <div className="btn-group">
                                      <button
                                        className="btn btn-primary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButtonDefault"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        Click here to connect now
                                      </button>
                                      <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButtonDefault"
                                      >
                                        <a
                                          className="dropdown-item"
                                          href="javascript: void(0);"
                                        >
                                          Kelphr
                                        </a>
                                        <a
                                          className="dropdown-item"
                                          href="javascript: void(0);"
                                        >
                                          Trust Wallet
                                        </a>
                                        <a
                                          className="dropdown-item"
                                          href="javascript: void(0);"
                                        >
                                          MetaMask
                                        </a>
                                        <a
                                          className="dropdown-item"
                                          href="javascript: void(0);"
                                        >
                                          Binance
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* / .row */}
                          </div>
                          <div className="d-flex justify-content-between">
                            {/* Button */}
                            <button
                              className="btn btn-light"
                              // data-toggle="wizard"
                              onClick={() => setCurrentStep(2)}
                              type="button"
                              // href="#wizardStepTwo"
                            >
                              Previous
                            </button>
                            {/* Button */}
                            <button
                              className="btn btn-primary"
                              data-toggle="wizard"
                              onClick={() => handleSubmit()}
                              type="button"
                              // href="#wizardStepFour"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${currentStep === 4 ? 'show active' : ''}`}
                      id="wizardStepFour"
                      role="tabpanel"
                      aria-labelledby="wizardTabFour"
                    >
                      {/* Card */}
                      <div className="card border-0 py-6 px-md-6">
                        <div className="card-body">
                          <h2 className="text-center mb-0">
                            Congratulations you are all set
                          </h2>
                          <p className="text-secondary text-center">
                            Welcome Onboard
                          </p>
                          <div className="mb-7">
                            <div className="row">
                              <div className="col-md">
                                <div className="card">
                                  <img
                                    src="assets/images/Identify/upgrade-illustration.svg"
                                    className="card-img-top w-50 mx-auto"
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h3 className="card-title">
                                      Your Identify_DAO_NFT is ready
                                    </h3>
                                    <p className="card-text">Thank you</p>
                                    <Link
                                      to="/home"
                                      className="btn btn-primary"
                                    >
                                      Proceed to view your Identify_DAO_NFT
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* / .row */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* / .row */}
          </div>
          {/* / .container-fluid */}
          {/* Footer*/}
          {/* Footer */}
          <footer className="mt-auto">
            <div className="container-fluid mt-4 mb-6 text-muted">
              <div className="row justify-content-between">
                <div className="col">© Identify. 2023 Rethink Tech Ltd.</div>
                <div className="col-auto">v0.1.0</div>
              </div>
              {/* / .row */}
            </div>
          </footer>
        </main>
        {/* / main */}
      </div>
    </>
  );
}

export default Onboarding;
