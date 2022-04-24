export type ChartSeriesData = {
  x: string;
  y: number;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  gender?: Gender;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type SalesByStore = {
  storeName: string;
  sum: number;
};
