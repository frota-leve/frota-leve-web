import { Button } from "@/components/ui/button"
import { Car } from "@/types/types"
import { ColumnDef } from "@tanstack/react-table"
import { Trash2Icon } from 'lucide-react'

export const carColumns: ColumnDef<Car>[] = [
  {
    accessorKey: 'name',
    header: 'Nome'
  },
  {
    accessorKey: 'model',
    header: 'Model'
  },
  {
    accessorKey: 'plate',
    header: 'Plate'
  },
  {
    accessorKey: 'brand',
    header: 'Brand' 
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const car = row.original
 
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