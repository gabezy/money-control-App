import React, { ReactNode } from "react";
import { schemaForm } from "../components/FormModalEdit";
import {
  addNewTransactionAction,
  deleteTransactionAction,
  editTransactionAction,
} from "../reducers/Transaction/actions";
import {
  Transaction,
  transactionReducer,
} from "../reducers/Transaction/reducer";

interface ContextProps {
  transactions: Transaction[];
  createNewTransaction: (transaction: schemaForm) => void;
  deleteTransaction: (id: number) => void;
  formatValue: (value: number) => string;
  editTransaction: (editedTransaction: schemaForm, id: number) => void;
}

export const TransactionContext = React.createContext({} as ContextProps);

interface ProviderProps {
  children: ReactNode;
}

export const TransactionProvider = ({ children }: ProviderProps) => {
  const localStorageStateVersion = "@money-control:transactions-state-1.0.0";

  const [transactions, dispatch] = React.useReducer(
    transactionReducer,
    [],
    () => {
      const storageStateAsJSON = localStorage.getItem(localStorageStateVersion);
      if (storageStateAsJSON) return JSON.parse(storageStateAsJSON);
      return [];
    }
  );

  React.useEffect(() => {
    const stateJSON = JSON.stringify(transactions);
    localStorage.setItem(localStorageStateVersion, stateJSON);
  }, [transactions]);

  const createNewTransaction = (transaction: schemaForm) => {
    const date = new Date();
    const newTransaction: Transaction = {
      id: date.getTime(),
      title: transaction.title,
      category: transaction.category,
      value: Number(transaction.value.replace(",", ".")),
      type: transaction.type,
      date: date,
    };

    dispatch(addNewTransactionAction(newTransaction));
  };

  const deleteTransaction = (id: number) => {
    dispatch(deleteTransactionAction(id));
  };

  const editTransaction = (editedTransaction: schemaForm, id: number) => {
    dispatch(editTransactionAction(editedTransaction, id));
  };

  const formatValue = (value: number) => {
    return value.toFixed(2).replace(".", ",");
  };
  return (
    <TransactionContext.Provider
      value={{
        transactions,
        createNewTransaction,
        deleteTransaction,
        editTransaction,
        formatValue,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
