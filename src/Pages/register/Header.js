import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="text-3xl text-center sj my-3 text-red-600">
          ডিজিটাল নিকাহ্‌নামা
        </h1>
      </Link>

      <p className="my-3 text-xs text-right">
        [বিধি ২৭ (১) (ক) দ্রষ্টব্য]
        <br />
        মুসলিম বিবাহ ও তালাক (নিবন্ধন) বিধিমালা, ২০০৯ এর বিধি ২৮ (১) (ক) অনুযায়ী
        বিবাহ ফরম
      </p>
      <hr className="my-5" />
    </div>
  );
};

export default Header;
