import '@testing-library/jest-dom/vitest';

import { fireEvent, render, screen } from '@testing-library/svelte';
import { beforeEach, expect, test, vi } from 'vitest';

import type { CatalogExtensionInfo } from '$lib/api/extensions-info';
import { getCurrentExtension } from '$lib/extensions.svelte';

import ExtensionByCategoryCard from './ExtensionByCategoryCard.svelte';

beforeEach(() => {
  vi.resetAllMocks();
});

test('check content', async () => {
  const version = {
    version: '1.0.0',
    files: [
      {
        assetType: 'icon',
        data: 'http://fake-podman-desktop/my.icon.png',
      },
    ],
  };
  const extension: CatalogExtensionInfo = {
    id: 'dummy1',
    displayName: 'My Display Name',
    shortDescription: 'My Description',
    versions: [version],
  } as unknown as CatalogExtensionInfo;

  render(ExtensionByCategoryCard, { extension });

  // check icon is there
  const icon = screen.getByRole('img', { hidden: true });
  expect(icon).toBeInTheDocument();

  // check display name is there
  const displayName = screen.getByText('My Display Name');
  expect(displayName).toBeInTheDocument();

  // check description is there
  const description = screen.getByText('My Description');
  expect(description).toBeInTheDocument();

  // check latest version is there
  const latestVersion = screen.getByText('v1.0.0');
  expect(latestVersion).toBeInTheDocument();

  // check click on the card
  // no current version
  expect(getCurrentExtension().value).toBeUndefined();
  const card = screen.getByRole('button');
  expect(card).toBeInTheDocument();
  await fireEvent.click(card);

  //check the click
  expect(getCurrentExtension().value).toEqual(extension);
});

test('check version with v prefix', async () => {
  const version = {
    version: 'v2.0.0',
    files: [
      {
        assetType: 'icon',
        data: 'http://fake-podman-desktop/my.icon.png',
      },
    ],
  };
  const extension: CatalogExtensionInfo = {
    id: 'dummy1',
    displayName: 'My Display Name',
    shortDescription: 'My Description',
    versions: [version],
  } as unknown as CatalogExtensionInfo;

  render(ExtensionByCategoryCard, { extension });

  // check we don't add another v prefix
  const latestVersion = screen.getByText('v2.0.0');
  expect(latestVersion).toBeInTheDocument();
});
