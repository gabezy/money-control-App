import { ActionType } from "./actions";

export interface Transaction {
  id: number;
  title: string;
  category: string;
  value: number;
  type: string;
  date: Date;
}

export const transactionReducer = (state: Transaction[], action: any) => {
  switch (action.type) {
    case ActionType.CREATE_NEW_TRANSACTION:
      return [...state, action.payload.newTransaction];
    case ActionType.DELETE_TRANSACTION:
      return state.filter((s) => s.id !== action.payload.id);
    case ActionType.EDIT_TRANSACTION:
      return state.map((s) => {
        if (s.id === action.payload.id) {
          const { editedTransaction } = action.payload;
          s.title = editedTransaction.title;
          s.category = editedTransaction.category;
          s.value = Number(editedTransaction.value);
          s.type = editedTransaction.type;
          return s;
        } else return s;
      });
    default:
      return state;
  }
};
