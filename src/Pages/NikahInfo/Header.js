import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <header className="text-center text-3xl py-5 border shadow">
          <h1 className="">নিকাহ্‌নামা</h1>
        </header>
      </Link>
    </div>
  );
};

export default Header;
