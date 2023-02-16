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
        <TableRow key={row.title} sx={{ border: 0, "& td": { border: 0 } }}>
          <TableCell sx={{ color: "#6B7280" }}>{row.title}</TableCell>
          {row.type === "income" ? (
            <TableCell sx={{ color: "#22C55E" }}>
              R$ {formatedValue(row.value)}
            </TableCell>
          ) : (
            <TableCell sx={{ color: "#d32f2f" }}>
              R$ {formatedValue(row.value)}
            </TableCell>
          )}
          <TableCell sx={{ color: "#6B7280" }}>{row.category}</TableCell>
          <TableCell sx={{ color: "#6B7280" }}>{"11/11/1245"}</TableCell>
        </TableRow>
      ))}
    </>
  );
};
