import { useState } from "react";
import TestCategory from "../../components/testCategory";
import DefaultHeader from "../../components/aaComponents/header/DefaultHeader";
import Link from "next/link";
import { getTestTypes } from "../../actions/test";
import { useRouter } from "next/router";

const Test = () => {
  return (<></>)
};

// Test.getInitialProps = async function () {
//   let skip = 0;
//   let limit = 4;
//   return getTestTypes().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       return {
//         testName: data.name,
//       };
//     }
//   });
// };

export default Test;
