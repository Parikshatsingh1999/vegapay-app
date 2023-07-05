import { useState, useEffect, useContext } from "react";
import { MainContext, IContextItems } from "../../../contexts/ContextMain";
import KitRow from "./KitRow";

const KitTable = () => {
  const { searchUser, tableData } = useContext(MainContext) as IContextItems;

  useEffect(() => {
    try {
      searchUser("");
    } catch (error: any) {
      console.log("err", error?.message);
    }
  }, []);

  return (
    <div className="table-kit">
      <table>
        <thead>
          <tr>
            <th> Customer Name </th>
            <th> Card No.</th>
            <th> Email Id </th>
            <th> Mobile Number </th>
            <th> Card Network </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row: any, index) => {
            return (
              <KitRow key={`${row.customer?.clientId}-${index}`} user={row} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default KitTable;
