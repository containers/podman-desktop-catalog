import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/svelte';
import { beforeEach, expect, test, vi } from 'vitest';

import type { CatalogExtensionInfo, ExtensionByCategoryInfo } from '$lib/api/extensions-info';

import ExtensionsByCategory from './ExtensionsByCategory.svelte';

beforeEach(() => {
  vi.resetAllMocks();
  window.open = vi.fn();
});

test('check content', async () => {
  const extensionByCategoryInfo: ExtensionByCategoryInfo = {
    category: 'category1',
    extensions: [{ id: 'dummy1', displayName: 'My Display Name' } as unknown as CatalogExtensionInfo],
  };
  render(ExtensionsByCategory, { extensionByCategoryInfo });
  // check region
  const region = screen.getByRole('region', { name: 'Category name' });
  expect(region).toBeInTheDocument();

  // check block of extensions
  const regionExtensions = screen.getByRole('region', { name: 'Extensions of category category1' });
  expect(regionExtensions).toBeInTheDocument();

  // check extension dummy1 is there
  const extensionDummy1 = screen.getByText('My Display Name');
  expect(extensionDummy1).toBeInTheDocument();
});
