/*
 * Copyright (c) 2025 Carlos Fernández Cabeza
 * Licensed under the MIT License. See LICENSE file in the project root for details.
 */

import React, { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AppLayout from './layouts/AppLayout.jsx';
import Home from './pages/Home.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';
import Page4 from './pages/Page4.jsx';
import { DEFAULT_NAV_KEY } from './config/navigation.js';

function App() {
  const [selected, setSelected] = useState(DEFAULT_NAV_KEY);

  const Main = useMemo(() => {
    switch (selected) {
      case 'home':
        return Home;
      case 'page2':
        return Page2;
      case 'page3':
        return Page3;
      case 'page4':
        return Page4;
      default:
        return Home;
    }
  }, [selected]);

  return (
    <AppLayout
      header={<Header selected={selected} onSelect={setSelected} />}
      footer={<Footer />}
    >
      <Main />
    </AppLayout>
  );
}

export default App;

// This is the main application component for Fintrix, a financial management tool.
// It serves as the entry point for the React application, rendering a simple welcome message.
// The component is styled using Tailwind CSS for a clean and modern look.
// The component is exported as the default export, allowing it to be imported and used in other files.