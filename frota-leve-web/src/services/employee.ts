import api from "@/lib/axios-config";

export type CreateEmployeeType = {
  email: string;
  document: string;
  name: string;
}

export async function createEmployee(businessId: string, data: CreateEmployeeType): Promise<void> {
  return await api.post(`/api/business/${businessId}/employees`, data);
}