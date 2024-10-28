import { Employee } from "@/types/types";
import api from "@/lib/axios-config";

export type CreateEmployeeType = {
  email: string;
  document: string;
  name: string;
}

export async function createEmployee(businessId: string, data: CreateEmployeeType): Promise<void> {
  return await api.post(`/api/business/${businessId}/employees`, data);
}

export async function getAll(): Promise<Employee[]> {
  const { data } = await api.get('/api/employees');
  return data.content
}