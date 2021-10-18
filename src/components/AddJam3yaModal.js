import React, { useState } from "react";
import jam3yatStore from "../stores/jam3yatStore";

export default function AddJam3yaModal() {
  const [jam3ya, setJam3ya] = useState({
    title: "",
    image: "",
    amount: "",
    limit: "",
    startDate: "",
    endDate: "",
  });
  return <div></div>;
}
