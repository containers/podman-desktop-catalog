import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/svelte';
import { beforeEach, expect, test, vi } from 'vitest';

import type { CatalogExtensionInfo, ExtensionByCategoryInfo } from '$lib/api/extensions-info';

import ExtensionsList from './ExtensionsList.svelte';

beforeEach(() => {
  vi.resetAllMocks();
});

test('check categories', async () => {
  const extensionsByCategories: ExtensionByCategoryInfo[] = [
    {
      category: 'category1',
      extensions: [{ id: 'dummy1' } as unknown as CatalogExtensionInfo],
    },
    {
      category: 'category2',
      extensions: [{ id: 'dummy2' } as unknown as CatalogExtensionInfo],
    },
  ];

  render(ExtensionsList, { extensionsByCategories });

  const category1 = screen.getByText('category1');
  expect(category1).toBeInTheDocument();

  const category2 = screen.getByText('category2');
  expect(category2).toBeInTheDocument();
});
