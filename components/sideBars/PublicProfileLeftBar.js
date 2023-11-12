import { useEffect, useState } from "react";
import Link from "next/link";
import { isAuth, getCookie } from "../../actions/auth";

const publicProfileLeftNavBar = ({  }) => {
  

  return (
    <nav className="navigation">
      <h4>Navigation</h4>
      <Link href="/vocabulary/correct-word">
        <i className="ph-browsers"></i>
        <span>Correct Word</span>
      </Link>

      <Link href="/vocabulary/correct-meaning">
        <i className="ph-check-square"></i>
        <span>What it means</span>
      </Link>

      <Link href="/vocabulary/synonyms">
        <i className="ph-browsers"></i>
        <span>Synonyms</span>
      </Link>
    
    </nav>
  );
};

export default publicProfileLeftNavBar;
