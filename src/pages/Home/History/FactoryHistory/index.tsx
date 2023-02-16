import { TableCell, TableRow } from "@mui/material";
import { Transaction } from "../../../../reducers/Transaction/reducer";

interface FactoryProps {
  rows: Transaction[];
  formatedValue: (value: number) => string;
}

export const FactoryHistory = ({ rows, formatedValue }: FactoryProps) => {
  return (
    <>
      {rows.map((row) => (
        <TableRow
          key={row.title}
          sx={{ border: 0, "& td": { border: 0, color: "inherit" } }}
        >
          <TableCell>{row.title}</TableCell>
          {row.type === "income" ? (
            <TableCell sx={{ color: "#388e3c" }}>
              R$ {formatedValue(row.value)}
            </TableCell>
          ) : (
            <TableCell sx={{ color: "#d32f2f" }}>
              R$ {formatedValue(row.value)}
            </TableCell>
          )}
          <TableCell>{row.category}</TableCell>
          <TableCell>{"11/11/1245"}</TableCell>
        </TableRow>
      ))}
    </>
  );
};
