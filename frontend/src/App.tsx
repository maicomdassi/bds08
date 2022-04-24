import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Header/Filter/Index';
import PieChartCard from './components/Header/Pie-chart-card';
import { buildSalesByStoreChart } from './helpers';
import { FilterData, PieChartConfig, SalesByStore } from './types';
import { buildFilterParams, makeRequest } from './utils/request';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByStore[]>('/sales/by-store', { params })
      .then((response) => {
        const newSalesByStore = buildSalesByStoreChart(response.data);
        setSalesByStore(newSalesByStore);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <PieChartCard
          name="Lojas"
          labels={['nome1', 'nome2', 'nome3', 'nome4']}
          series={[1, 2, 4, 3]}
        />
        {/* <PieChartCard name="Lojas" labels={salesByStore?.labels} series={salesByStore?.series} /> */}
      </div>
    </>
  );
}

export default App;
