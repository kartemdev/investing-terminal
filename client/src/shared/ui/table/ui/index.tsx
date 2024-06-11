import {
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table';

import TableHeader from './table-header';
import TableBody from './table-body';

import styles from './index.module.scss';

interface Props<TData> {
  data: TData[];
  columns: ColumnDef<TData, any>[];
}

const Table = <TData extends {}>({ data, columns }: Props<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.block}>
      <table className={styles.table}>
        <TableHeader headerGroups={table.getHeaderGroups()} />
        <TableBody rows={table.getRowModel().rows} />
      </table>
    </div>
  );
};

export default Table;
