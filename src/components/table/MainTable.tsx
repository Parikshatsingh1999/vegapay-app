import { useContext, useEffect, useMemo, useState } from "react";
import { IContextItems, MainContext } from "../../contexts/ContextMain";

import "./table.css";
import KitTable from "./Kit/KitTable";
import Personalized from "./personalized/Personalized";
import Reissue from "./reissue/Reissue";

const MainTable = () => {
  const tableToUse = [<KitTable />, <Personalized />, <Reissue />] as any[];

  const { currentCard } = useContext(MainContext) as IContextItems;
  const [table, setTable] = useState(null);

  useEffect(() => {
    setTable((prev) => tableToUse[currentCard - 1]);
  }, [currentCard]);

  return <div className="main-element">{table}</div>;
};

export default MainTable;
