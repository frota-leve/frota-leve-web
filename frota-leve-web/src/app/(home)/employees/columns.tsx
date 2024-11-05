import { Button } from "@/components/ui/button"
import { Employee } from "@/types/types"
import { ColumnDef } from "@tanstack/react-table"
import { PenIcon, Trash2Icon } from 'lucide-react'

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
        <div className="gap-2 flex">
           <Button variant="outline" size="icon" className="bg-[#FFC314] hover:bg-yellow-300">
            <PenIcon className="h-4 w-4" color="white"/>
          </Button>
          <Button variant="outline" size="icon" className="bg-red-500 hover:bg-red-300">
            <Trash2Icon className="h-4 w-4" color="white"/>
          </Button>
        </div>
      )
    },
  },
]