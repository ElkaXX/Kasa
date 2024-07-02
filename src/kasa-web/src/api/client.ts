import axios, { AxiosInstance, HttpStatusCode } from "axios";
import { Apartment } from "./types";

class ApiClient {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
    });
  }

  public async getApartmentsAsync(): Promise<Apartment[]> {
    return await this.sendGetAsync<Apartment[]>("/apartments");
  }

  public async getApartmentAsync(id: string): Promise<Apartment> {
    return await this.sendGetAsync<Apartment>(`/apartments/${id}`);
  }

  private async sendGetAsync<T>(route: string) {
    const response = await this.client.get<T>(route);

    if (response.status != HttpStatusCode.Ok) {
      throw new Error(`Failed request with status: ${response.statusText}`);
    }

    return response.data;
  }
}

export default new ApiClient();
