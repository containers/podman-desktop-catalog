import { beforeEach, describe, expect, test, vi } from 'vitest';

import catalogOfExtensions from '../../static/api/extensions.json';
import type { CatalogExtensionInfo } from './api/extensions-info';
import { catalogExtensions, getCurrentExtension, initCatalog, setCurrentExtension } from './extensions.svelte';

const fetchMock = vi.fn();

describe('check catalog', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    catalogExtensions.length = 0;
    window.fetch = fetchMock;
  });

  test('check fetch', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ extensions: catalogOfExtensions.extensions }),
    });
    await initCatalog();

    expect(vi.mocked(fetch)).toHaveBeenCalledWith('https://registry.podman-desktop.io/api/extensions.json');

    // check we have extensions in the catalog
    expect(catalogExtensions.length).toBeGreaterThan(0);
  });
});

test('check current extension', () => {
  const currentExtension = getCurrentExtension();
  expect(currentExtension.value).toBeUndefined();
  setCurrentExtension({ id: 'dummy' } as unknown as CatalogExtensionInfo);

  // check again the value
  expect(currentExtension.value).toEqual({ id: 'dummy' });

  // unset
  setCurrentExtension(undefined);
  expect(currentExtension.value).toBeUndefined();
});
