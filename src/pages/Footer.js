import React from "react";
import {
  BsStar,
  BsGoogle,
  BsFacebook,
  BsApple,
  BsStarHalf,
  BsAlarm,
  BsHCircle,
  BsFile,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="container-fluid ">
      <footer className=" row bg-dark text-center text-white pt-5 pb-5 ">
        <div className="container-fluid p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            >
              <BsGoogle />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            >
              <BsFacebook />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            >
              <BsApple />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            >
              <BsAlarm />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            >
              <BsHCircle />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            >
              <BsFile />
            </a>
          </section>
        </div>

        <div className="text-center p-3">
          <p className="">Ideally, you want to present an email sign-up form to a visitor </p>
          <p>© 2020 login and sign up : viltco.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
