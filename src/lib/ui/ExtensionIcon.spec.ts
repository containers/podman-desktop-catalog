import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/svelte';
import { beforeEach, expect, test, vi } from 'vitest';

import type { CatalogExtensionInfo } from '$lib/api/extensions-info';

import ExtensionIcon from './ExtensionIcon.svelte';

beforeEach(() => {
  vi.resetAllMocks();
});

test('check icon', async () => {
  const version = {
    files: [
      {
        assetType: 'icon',
        data: 'http://fake-podman-desktop/my.icon.png',
      },
    ],
  };
  const extension: CatalogExtensionInfo = { id: 'dummy1', versions: [version] } as unknown as CatalogExtensionInfo;

  render(ExtensionIcon, { extension });

  const icon = screen.getByRole('img', { hidden: true });
  expect(icon).toBeInTheDocument();
  expect(icon).toHaveAttribute('src', 'http://fake-podman-desktop/my.icon.png');
  expect(icon).toHaveClass('w-8');
  expect(icon).toHaveClass('h-8');
});

test('check large size', async () => {
  const version = {
    files: [
      {
        assetType: 'icon',
        data: 'http://fake-podman-desktop/my.icon.png',
      },
    ],
  };
  const extension: CatalogExtensionInfo = { id: 'dummy1', versions: [version] } as unknown as CatalogExtensionInfo;

  render(ExtensionIcon, { extension, size: 'xl' });

  const icon = screen.getByRole('img', { hidden: true });
  expect(icon).toBeInTheDocument();
  expect(icon).toHaveAttribute('src', 'http://fake-podman-desktop/my.icon.png');
  expect(icon).toHaveClass('w-20');
  expect(icon).toHaveClass('h-20');
});
