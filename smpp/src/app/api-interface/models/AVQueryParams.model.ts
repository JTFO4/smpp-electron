import {
  TimeInterval,
  OutputSize,
  DataType
} from 'alphavantage-ts/dist/stocks';

export interface AVQueryParams {
  api_function: string;
  stock_symbol: string[];
  interval: TimeInterval;
  dataset_size?: OutputSize;
  dataset_type?: DataType;
}
