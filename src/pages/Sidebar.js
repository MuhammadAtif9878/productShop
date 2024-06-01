import React from "react";

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>

            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start  "
              id="menu"
            >
              <div className="row bg-dark">
                <div className="col-md-2"></div>
                <div className="col-md-11  text-white ">
                  <ul className="mt-5">
                    <li className=" pt-2">
                      <button
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        select option
                      </button>
                      <div className="collapse" id="collapseExample">
                        <ul className="">
                          <li >link1</li>
                          <li>link2</li>
                          <li>link3</li>
                        </ul>
                      </div>
                    </li>
                    <li className=" pt-4 px-3">link1</li>
                    <li className=" pt-4 px-3">link2</li>
                    <li className=" pt-4 px-3">link3</li>
                    <li className=" pt-4 px-3">link3</li>
                    <li className=" pt-4 px-3">link3</li>
                  </ul>
                </div>
              </div>
            </ul>
            <hr />
          </div>
        </div>
      </div>    
    </div>
  );
};

export default Sidebar;
