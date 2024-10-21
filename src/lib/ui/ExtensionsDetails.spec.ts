import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/svelte';
import { beforeEach, expect, test, vi } from 'vitest';

import type { CatalogExtensionInfo } from '$lib/api/extensions-info';

import ExtensionsDetails from './ExtensionsDetails.svelte';

const fetchMock = vi.fn();

beforeEach(() => {
  vi.resetAllMocks();
  window.fetch = fetchMock;
});

test('check content', async () => {
  const version = {
    version: '1.0.0',
    files: [
      {
        assetType: 'README',
        data: 'http://fake-podman-desktop/my.readme',
      },
    ],
  };
  const extension: CatalogExtensionInfo = {
    id: 'dummy1',
    displayName: 'My Display Name',
    shortDescription: 'My Description',
    versions: [version],
  } as unknown as CatalogExtensionInfo;

  // mock readme
  fetchMock.mockResolvedValue({
    ok: true,
    text: async () => '## hello world',
  });

  render(ExtensionsDetails, { extension });

  // check display name is there
  const displayName = screen.getByText('My Display Name');
  expect(displayName).toBeInTheDocument();

  // check readme is there
  await vi.waitFor(() => expect(screen.getByText('hello world')).toBeInTheDocument());
});
