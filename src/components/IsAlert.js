import React, { useEffect } from "react";

const IsAlert = ({ isalert, createAlert, lists }) => {
  useEffect(() => {
    let time = setTimeout(() => {
      createAlert();
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [isalert.alert, lists]);
  return <p className={`alert alert-${isalert.type}`}>{isalert.msg}</p>;
};

export default IsAlert;
