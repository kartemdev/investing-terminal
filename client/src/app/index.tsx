import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '~shared/scss/index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(<BrowserRouter></BrowserRouter>);
