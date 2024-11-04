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
