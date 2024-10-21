import { render, screen } from '@testing-library/svelte';
import { beforeEach, expect, test, vi } from 'vitest';

import { catalogExtensions } from '$lib/extensions.svelte';

import catalogOfExtensions from '../../static/api/extensions.json';
import Page from '././+page.svelte';

const fetchMock = vi.fn();

beforeEach(() => {
  vi.resetAllMocks();
  catalogExtensions.length = 0;
  window.fetch = fetchMock;
  window.matchMedia = vi.fn().mockReturnValue({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  });
});

test('check fetch', async () => {
  fetchMock.mockResolvedValue({
    ok: true,
    json: async () => ({ extensions: catalogOfExtensions.extensions }),
  });
  render(Page);

  expect(vi.mocked(fetch)).toHaveBeenCalledWith('https://registry.podman-desktop.io/api/extensions.json');

  // at least 4 categories should be displayed
  await vi.waitFor(() => expect(screen.getAllByRole('region', { name: 'Category name' }).length).toBeGreaterThan(4));
});
