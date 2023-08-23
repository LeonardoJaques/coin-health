import axios from "axios";
import HttpClient from "./http/HttpClient";

export default class AxiosAdapter implements HttpClient {
  async get(url: string): Promise<any> {
    const response = await axios.get(url);
    return response;
  }
  async post(url: string, body: any): Promise<any> {
    const response = await axios.post(url, body);
    return response;
  }
}
