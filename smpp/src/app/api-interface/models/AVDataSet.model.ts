import { AVMetaData } from './AVMetaData.model';
import { AVTimeSeries } from './AVTimeSeries.model';

export interface AVDataSet {
  meta_data: AVMetaData;
  time_series: AVTimeSeries;
}
