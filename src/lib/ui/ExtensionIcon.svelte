<script lang="ts">
import type { CatalogExtensionInfo } from '../api/extensions-info';

const { extension, size = 'normal' }: { extension: CatalogExtensionInfo; size?: 'normal' | 'xl' } = $props();

const iconUrl: string | undefined = $derived.by(() => {
  // take the icon of the latest version
  return extension.versions?.[0]?.files.find(file => file.assetType === 'icon')?.data ?? '';
});
</script>

{#if iconUrl}
	<img
		src={iconUrl}
		alt={extension.extensionName}
		class:w-20={size === 'xl'}
		class:h-20={size === 'xl'}
		class:w-8={size === 'normal'}
		class:h-8={size === 'normal'}
	/>
{/if}
