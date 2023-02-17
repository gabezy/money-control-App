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
    case "CREATE_NEW_TRANSACTION":
      return [...state, action.payload.newTransaction];
    case "DELETE_TRANSACTION":
      return state.filter((t) => t.id !== action.payload.id);
    default:
      return state;
  }
};
