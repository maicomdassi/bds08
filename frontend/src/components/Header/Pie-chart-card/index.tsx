import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import { formatPrice } from '../../../utils/formatters';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <div className="pie-chat-card-container base-card">
      <div className="pie-chart-card-labels-container">
        <h2 className="pie-chat-card-total">{formatPrice(12345.0)}</h2>
        <span className="pie-chat-card-total-label">Total de vendas</span>
      </div>
      <div className="pie-chart-card-chart">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="400"
          height="400"
          series={series}
        />
      </div>
    </div>
  );
}

export default PieChartCard;
