import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private readonly axios: AxiosInstance = axios.create({
    timeout: 10_000,
  });
  private readonly logger = new Logger(AxiosAdapter.name);

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);

      return data;
    } catch (error: unknown) {
      const message = axios.isAxiosError(error)
        ? error.message
        : 'Unknown HTTP client error';

      this.logger.error(`GET ${url} failed: ${message}`);

      throw new ServiceUnavailableException(
        'Unable to retrieve data from the external service',
      );
    }
  }
}
