import React from 'react';

const AppLayout = ({ header, footer, children }) => (
  <div className="min-h-screen min-w-screen text-white">
    <div className="mx-auto flex min-h-screen flex-col">
      <div className="bg-black h-19 flex items-center flex-shrink-0">{header}</div>
      <main className="bg-black flex flex-1 overflow-auto text-center">{children}</main>
      <div className="bg-black p-5 flex-shrink-0 text-center">{footer}</div>
    </div>
  </div>
);

export default AppLayout;
