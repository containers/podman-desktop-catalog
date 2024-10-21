import '@testing-library/jest-dom/vitest';

import { render } from '@testing-library/svelte';
import { beforeEach, expect, test, vi } from 'vitest';

import Appearance from './Appearance.svelte';

const addEventListenerMock = vi.fn();

beforeEach(() => {
  vi.resetAllMocks();
  window.matchMedia = vi.fn().mockReturnValue({
    matches: false,
    addEventListener: addEventListenerMock,
    removeEventListener: vi.fn(),
  });
});

function getRootElement(container: HTMLElement): HTMLElement {
  // get root html element
  let rootElement: HTMLElement | null = container;
  let loop = 0;
  while (rootElement?.parentElement && loop < 10) {
    rootElement = container.parentElement;
    loop++;
  }
  return rootElement as HTMLElement;
}

function getRootElementClassesValue(container: HTMLElement): string | undefined {
  return getRootElement(container).classList.value;
}

test('check initial light theme', async () => {
  const { baseElement } = render(Appearance, {});
  // expect to have no (dark) class as OS is using light
  await vi.waitFor(() => expect(getRootElementClassesValue(baseElement)).toBe(''));
});

test('check initial dark theme', async () => {
  window.matchMedia = vi.fn().mockReturnValue({
    matches: true,
    addEventListener: addEventListenerMock,
    removeEventListener: vi.fn(),
  });
  const { baseElement } = render(Appearance, {});
  // expect to have no (dark) class as OS is using light
  await vi.waitFor(() => expect(getRootElementClassesValue(baseElement)).toBe('dark'));
});

test('Expect event being changed when changing the default appearance on the operating system', async () => {
  // initial is dark
  window.matchMedia = vi.fn().mockReturnValue({
    matches: true,
    addEventListener: addEventListenerMock,
    removeEventListener: vi.fn(),
  });

  let userCallback: () => void = () => {};
  addEventListenerMock.mockImplementation((event: string, callback: () => void) => {
    if (event === 'change') {
      userCallback = callback;
    }
  });

  const { baseElement } = render(Appearance, {});

  // check it's dark
  expect(getRootElementClassesValue(baseElement)).toBe('dark');

  // now change to light
  window.matchMedia = vi.fn().mockReturnValue({
    matches: false,
    addEventListener: addEventListenerMock,
    removeEventListener: vi.fn(),
  });

  // call the callback on matchMedia
  userCallback();

  // check if it's now light
  await vi.waitFor(() => expect(getRootElementClassesValue(baseElement)).toBe(''));

  // now change to dark
  window.matchMedia = vi.fn().mockReturnValue({
    matches: true,
    addEventListener: addEventListenerMock,
    removeEventListener: vi.fn(),
  });

  // call again the callback on matchMedia
  userCallback();

  // check if it's now dark
  await vi.waitFor(() => expect(getRootElementClassesValue(baseElement)).toBe('dark'));
});
