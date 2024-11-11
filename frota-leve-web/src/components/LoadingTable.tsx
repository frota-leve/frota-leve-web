import { Skeleton } from "./ui/skeleton";
import { TableRow, TableCell } from "./ui/table";

type LoadingTableProps = {
  length: number
}

export function LoadingTable({ length }: LoadingTableProps) {
  return Array.from({ length }).map((_, index) => (
    <TableRow key={index}>
      <TableCell>
        <Skeleton className="h-6 w-[250px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-6 w-[250px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-6 w-[100px]" />
      </TableCell>
    </TableRow>
  ))
}