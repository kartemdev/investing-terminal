import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createColumnHelper } from '@tanstack/react-table';

import { Button, Input, Layout, Navbar, NavbarLink, Table } from '~shared/ui';

import '~shared/scss/index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const Div = ({ children, id }: any) => {
  return (
    <div
      id={id}
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

const Header = () => (
  <Navbar>
    <NavbarLink to='#input-text'>Input.Text</NavbarLink>
    <NavbarLink to='#input-number'>Input.Number</NavbarLink>
    <NavbarLink to='#button'>Button</NavbarLink>
    <NavbarLink to='#table'>Table</NavbarLink>
  </Navbar>
);

const tableData = [
  {
    email: 'arisha@milaya.ru',
    address: 'raduga street',
    age: 0.7,
  },
  {
    email: 'julia@love.ru',
    address: 'love street',
    age: 21,
  },
  {
    email: 'artyom@strong.ru',
    address: 'fast street',
    age: 22,
  },
];

interface TableData {
  age: number;
  email: string;
  address: string;
}

const getColumns = () => {
  const columnHelper = createColumnHelper<TableData>();
  return [
    columnHelper.accessor('address', {
      header: 'Адрес',
    }),
    columnHelper.accessor('email', {
      header: 'Почта',
    }),
    columnHelper.accessor('age', {
      header: 'Возраст',
    }),
  ];
};

root.render(
  <BrowserRouter>
    <Layout headerSlot={<Header />}>
      <Div id='input-text'>
        <Input.Text label='Just text' name='dad' />
      </Div>
      <Div id='input-number'>
        <Input.Number
          label='Amount'
          name='amount'
          leftAddon='$'
          isFixedDecimalScale
          decimalScale={2}
        />
      </Div>
      <Div id='button'>
        <Button>Click me!</Button>
      </Div>
      <Div id='table'>
        <Table data={tableData} columns={getColumns()} />
      </Div>
    </Layout>
  </BrowserRouter>,
);
