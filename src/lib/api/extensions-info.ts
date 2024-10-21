export interface CatalogExtensionVersionFileInfo {
  assetType: 'icon' | 'LICENSE' | 'README';
  data: string;
}

export interface CatalogExtensionVersionInfo {
  version: string;
  podmanDesktopVersion?: string;
  ociUri: string;
  preview: boolean;
  lastUpdated: Date;
  files: CatalogExtensionVersionFileInfo[];
}

export interface CatalogExtensionInfo {
  id: string;
  publisherName: string;
  publisherDisplayName: string;
  extensionName: string;
  categories: string[];
  shortDescription: string;
  displayName: string;
  keywords: string[];
  unlisted: boolean;
  versions: CatalogExtensionVersionInfo[];
}

export interface ExtensionByCategoryInfo {
  category: string;
  extensions: CatalogExtensionInfo[];
}
