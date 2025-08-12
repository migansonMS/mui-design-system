import React from 'react';
import AppThemeProvider from '../src/AppThemeProvider.jsx';

export const decorators = [
  (Story) => (
    <AppThemeProvider>
      <Story />
    </AppThemeProvider>
  ),
];

export const parameters = {
  controls: { expanded: true },
};
