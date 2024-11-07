"use client";

import { DataTable } from "./data-table";
import { getAll } from "@/services/employee";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { DialogForm } from "./dialog-form";
import { Employee } from "@/types/types";

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);

  const employeeEmpty: Employee = {
    id: "",
    name: "",
    email: "",
    document: "",
    role: "",
  };

  async function getAllEmployees() {
    const data = await getAll();
    setEmployees(data);
  }

  function handleOnOpenModalChange(isOpen: boolean) {
    setOpenFormModal(isOpen);
    getAllEmployees();
  }

  useEffect(() => {
    getAllEmployees();
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
        <DataTable onUpdateTable={getAllEmployees} employees={employees} />
      </div>
      <DialogForm
        open={openFormModal}
        employee={{
          id: "",
          name: "",
          email: "",
          document: "",
          role: "",
        }}
        onOpenChange={handleOnOpenModalChange}
      />
    </div>
  );
};

export default Employees;
