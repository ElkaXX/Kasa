import axios, { AxiosInstance } from "axios";
import { Apartment } from "./types";

class ApiClient {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
    });
  }

  public async getApartmentsAsync(): Promise<Apartment[]> {
    const response = await this.client.get<Apartment[]>("/apartments");
    return response.data;
  }

  public async getApartmentAsync(id: string): Promise<Apartment> {
    const response = await this.client.get<Apartment>(`/apartments/${id}`);
    return response.data;
  }
}

export default new ApiClient();
