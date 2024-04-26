import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Button, Input, Layout, Navbar, NavbarLink } from '~shared/ui';

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
  </Navbar>
);

root.render(
  <BrowserRouter>
    <Layout headerSlot={<Header />}>
      <Div id='input-text'>
        <Input.Text name='dad' />
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
    </Layout>
  </BrowserRouter>,
);
