import { payments } from '@/data/payments.data';
import { columns } from './columns';
import { DataTable } from './data-table';

async function fetchData() {
  return payments;
}

const DataTablePage = async () => {
  const data = await fetchData();

  return (
    <section>
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default DataTablePage;
