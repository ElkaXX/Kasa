import { Apartment } from "./types";

class ApiClient {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_BASE_URL;
  }

  public async getApartmentsAsync(): Promise<Apartment[]> {
    return await this.sendGetAsync<Apartment[]>("apartments");
  }

  public async getApartmentAsync(id: string): Promise<Apartment> {
    return await this.sendGetAsync<Apartment>(`apartments/${id}`);
  }

  private async sendGetAsync<T>(route: string) {
    const response = await fetch(`${this.baseUrl}/${route}`, { method: "GET" });

    if (!response.ok) {
      throw new Error(`Failed request with status: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}

export default new ApiClient();
