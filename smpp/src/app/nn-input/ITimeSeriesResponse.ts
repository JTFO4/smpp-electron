interface Series {
  [seriesEntry: string]: {
    ['1. open']: string;
    ['2. high']: string;
    ['3. low']: string;
    ['4. close']: string;
    ['5. volume']: string;
  };
}

interface Metadata {
  ['1. Information']: string;
  ['2. Symbol']: string;
  ['3. Last Refreshed']: string;
  ['4. Output Size']: string;
  ['5. Time Zone']: string;
}

export interface ITimeSeriesResponse {
  [key: string]: Metadata | Series;
}

export class TimeSeries {
  meta: Metadata;
  data: Series[];
}
