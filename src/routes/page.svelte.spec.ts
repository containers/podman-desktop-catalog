import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/svelte';
import { beforeEach, expect, test, vi } from 'vitest';

import Page from './+page.svelte';

beforeEach(() => {
  vi.resetAllMocks();
});

test('check title', async () => {
  render(Page);

  // get the button element
  const button = screen.getByRole('heading', { name: 'coming soon' });
  expect(button).toBeInTheDocument();
});
