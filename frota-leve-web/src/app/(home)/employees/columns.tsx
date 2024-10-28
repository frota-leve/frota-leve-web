import { Button } from "@/components/ui/button"
import { Employee } from "@/types/types"
import { ColumnDef } from "@tanstack/react-table"
import { Trash2Icon } from 'lucide-react'

export const employeeColumns: ColumnDef<Employee>[] = [
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
  {
    id: "actions",
    cell: ({ row }) => {
      const employee = row.original
 
      return (
        <div>
          <Button variant="outline" size="icon" className="bg-red-400 hover:bg-red-300">
            <Trash2Icon className="h-4 w-4" color="white"/>
          </Button>
        </div>
      )
    },
  },
]