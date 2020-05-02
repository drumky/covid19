import React from "react";
import PropTypes from "prop-types";
import Time from "../time/Time";

const currentTime = new Date().getHours();
let greeting;

if (currentTime < 12) {
  greeting = "Good morning";
} else if (currentTime < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good Evening";
}

const Header = (props) => {
  return (
    <header
      className="pa1 tc ma1"
      style={{ borderBottom: "rgba(206, 79, 5, 0.541) 5px solid" }}
    >
      <h1 style={{ color: "rgb(160, 160, 160)" }}>
        {greeting}, {props.user}
      </h1>
      <Time />
    </header>
  );
};

Header.defaultProps = {
  title: "Welcome ",
  user: "User",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default Header;
