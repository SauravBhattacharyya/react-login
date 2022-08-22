import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { GLOBAL_API } from "./types";

const Home = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      let res = await axios.get(
        `${GLOBAL_API}/getUser?id=${location.state.data}`
      );
      if (res.data.status === 200) {
        setEmail(res.data.email);
        setPhone(res.data.phone);
      } else {
        alert("Error retriving details");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>Welcome to Home Page</p>
      Email : {email}
      Phone : {phone}
    </div>
  );
};

export default Home;
