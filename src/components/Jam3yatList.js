import React from "react";
import Jam3yatItem from "./Jam3yatItem";
import jam3yatStore from "./stores/jam3yatStore";
import { observer } from "mobx-react";
function Jam3yatList() {
  const jam3yat = jam3yatStore.jam3yat.map((jam3ya) => (
    <Jam3yatItem jam3ya={jam3ya} />
  ));
  return <div>{jam3yat}</div>;
}

export default observer(Jam3yatList);
