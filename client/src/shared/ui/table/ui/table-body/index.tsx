import { type Row, flexRender } from '@tanstack/react-table';

import styles from './index.module.scss';

interface Props<TData> {
  rows: Row<TData>[];
}

const TableBody = <TData extends {}>({ rows }: Props<TData>) => {
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td className={styles.cell}>
              <div className={styles.content}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
