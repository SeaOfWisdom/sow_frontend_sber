import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

const browserRouter = createBrowserRouter(routes);

export const Router: React.FC<unknown> = () => (
  <RouterProvider
    router={browserRouter}
    // fallbackElement={<PageLoader />}
    key="hostAppRouterProvider"
  />
);
