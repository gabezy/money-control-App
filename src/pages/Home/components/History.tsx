import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const createData = (
  title: string,
  price: number,
  type: "income" | "outcome",
  category: string
) => {
  return {
    title,
    price,
    type,
    category,
    date: new Date(),
  };
};

const rows = [
  createData("Salary", 5000, "income", "work"),
  createData("Grocery", 1000, "outcome", "market"),
];

export const History = () => {
  return (
    <TableContainer sx={{ marginBlock: 3 }}>
      <Table aria-label="last transactions" sx={{ color: "#6B7280" }}>
        <TableHead>
          <TableRow
            sx={{
              border: 0,
              "& th": { border: 0, fontWeight: "bold", color: "inherit" },
            }}
          >
            <TableCell>Título</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ border: 0, "& td": { border: 0, color: "inherit" } }}
            >
              <TableCell>{row.title}</TableCell>
              {row.type === "income" ? (
                <TableCell sx={{ color: "#388e3c" }}>R$ {row.price}</TableCell>
              ) : (
                <TableCell sx={{ color: "#d32f2f" }}>R$ {row.price}</TableCell>
              )}
              <TableCell>{row.category}</TableCell>
              <TableCell>{"11/11/1245"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
