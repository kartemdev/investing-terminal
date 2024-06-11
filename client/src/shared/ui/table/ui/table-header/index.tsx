import {
  type Header,
  type HeaderGroup,
  flexRender,
} from '@tanstack/react-table';

import styles from './index.module.scss';

interface Props<TData> {
  headerGroups: HeaderGroup<TData>[];
}

const TableHeader = <TData extends {}>({ headerGroups }: Props<TData>) => {
  const renderCell = (header: Header<TData, unknown>) => {
    const content = flexRender(
      header.column.columnDef.header,
      header.getContext(),
    );

    return header.isPlaceholder ? null : content;
  };

  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} className={styles.cell}>
              <div className={styles.content}>{renderCell(header)}</div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
