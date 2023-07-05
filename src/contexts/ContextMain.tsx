import { ReactNode, createContext, useState } from "react";
import { SearchApi } from "../service/ApiService";

export type IContextItems = {
  cardType: ICardType[];
  currentCard: number;
  searchUser: (value: string) => any;
  changeCurrentCard: (id: number) => void;
  tableData: any[];
};

type contextProps = {
  children: ReactNode;
};

export interface ICardType {
  id: number;
  label: string;
  value: string;
}

export const MainContext = createContext<IContextItems | null>(null);

export const ContextMain = ({ children }: contextProps) => {
  const [currentCard, setCurrentCard] = useState(1);
  const [tableData, setTableData] = useState<any[]>([]);
  const cardType: ICardType[] = [
    {
      id: 1,
      label: "Kit",
      value: "kit",
    },
    {
      id: 2,
      label: "Personalized Sale",
      value: "personalized",
    },
    {
      id: 3,
      label: "Reissue",
      value: "reissue",
    },
  ];

  const changeCurrentCard = (id: number) => {
    console.log("id", id);
    if (id && id < 4) {
      setCurrentCard((prev) => id);
    }
  };

  const searchUser = async (value: string) => {
    return await SearchApi({ value })
      .then((res) => {
        if (res.records) {
          setTableData(res.records);
        }
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <MainContext.Provider
      value={{
        cardType,
        currentCard,
        searchUser,
        tableData,
        changeCurrentCard,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
