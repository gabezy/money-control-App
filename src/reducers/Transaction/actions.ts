import { schemaForm } from "../../components/FormModalEdit";
import { Transaction } from "./reducer";

export enum ActionType {
  CREATE_NEW_TRANSACTION = "CREATE_NEW_TRANSACTION",
  DELETE_TRANSACTION = "DELETE_TRANSACTION",
  EDIT_TRANSACTION = "EDIT_TRANSACTION",
}

export const addNewTransactionAction = (newTransaction: Transaction) => {
  return {
    type: ActionType.CREATE_NEW_TRANSACTION,
    payload: {
      newTransaction,
    },
  };
};

export const deleteTransactionAction = (id: number) => {
  return {
    type: ActionType.DELETE_TRANSACTION,
    payload: {
      id,
    },
  };
};

export const editTransactionAction = (
  editedTransaction: schemaForm,
  id: number
) => {
  return {
    type: ActionType.EDIT_TRANSACTION,
    payload: {
      editedTransaction,
      id,
    },
  };
};
