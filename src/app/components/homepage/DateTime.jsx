"use client";

import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      })
    );
  }, []);

  return (
    <div>
      <p>{date}</p>
    </div>
  );
};

export default DateTime;