"use client";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    fetch(
      "https://adn.nestortech.io/api/vc/6760306e5bb856bae7716ca8/newcollectionfor3dmodels/DEV",
      { mode: "no-cors" }
    ).then((response) => {
      if (response.status == 200) {
        response.json().then((data) => {
          console.log(data);
        });
      }
    });
  }, []);
  return <div>page</div>;
};

export default Page;
