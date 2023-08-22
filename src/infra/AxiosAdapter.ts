import axios from "axios";
import http from "node:http";
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

  async listen(port: number | string): Promise<void> {
    http
      .createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.statusCode;
        res.end("health\n");
      })
      .listen(port);
  }
}
