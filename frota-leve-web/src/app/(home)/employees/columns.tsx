import { User } from "@/components/UserList"
import { ColumnDef } from "@tanstack/react-table"

export const employeeColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Nome'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'document',
    header: 'Documento'
  },
]