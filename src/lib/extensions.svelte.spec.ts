/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

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
