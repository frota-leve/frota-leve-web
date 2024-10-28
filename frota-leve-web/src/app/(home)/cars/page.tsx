"use client";

import { DataTable } from "./data-table";
import { carColumns } from "./columns";
import { getAll } from "@/services/car";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { DialogForm } from "./dialog-form";
import { Car } from "@/types/types";

const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);

  const carEmpty: Car = {
    id: "",
    name: "",
    model: "",
    plate: "",
    brand: "",
  };

  async function getAllCars() {
    const data = await getAll();
    setCars(data);
  }

  function handleOnOpenModalChange(isOpen: boolean) {
    setOpenFormModal(isOpen);
    getAllCars();
  }

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <div>
      <div className="w-100 mb-2 flex justify-end">
        <Button onClick={() => setOpenFormModal(true)}>
          <PlusCircleIcon />
          Novo Funcionário
        </Button>
      </div>
      <div>
        <DataTable columns={carColumns} data={cars} />
      </div>
      <DialogForm
        open={openFormModal}
        car={{
            id: "",
            name: "",
            model: "",
            plate: "",
            brand: "",
        }}
        onOpenChange={handleOnOpenModalChange}
      />
    </div>
  );
};

export default Cars;
