import React, { ReactNode } from "react";
import { schemaForm } from "../components/FormModal";
import {
  Transaction,
  transactionReducer,
} from "../reducers/Transaction/reducer";

interface ContextProps {
  transactions: Transaction[];
  createNewTransaction: (transaction: schemaForm) => void;
  formatValue: (value: number) => string;
}

export const TransactionContext = React.createContext({} as ContextProps);

interface ProviderProps {
  children: ReactNode;
}

export const TransactionProvider = ({ children }: ProviderProps) => {
  const [transactions, dispatch] = React.useReducer(transactionReducer, []);

  const createNewTransaction = (transaction: schemaForm) => {
    const date = new Date();
    const newTransaction: Transaction = {
      id: date.getTime(),
      title: transaction.title,
      category: transaction.category,
      value: Number(transaction.value),
      type: transaction.type,
      date: date,
    };
    dispatch({
      type: "CREATE_NEW_TRANSACTION",
      payload: {
        newTransaction,
      },
    });
  };

  const formatValue = (value: number) => {
    return value.toFixed(2).replace(".", ",");
  };
  return (
    <TransactionContext.Provider
      value={{ transactions, createNewTransaction, formatValue }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
