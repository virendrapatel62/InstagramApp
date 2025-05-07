import React from 'react';
import { FlashList, FlashListProps } from '@shopify/flash-list';

type FlashListWrapperProps<ItemT> = FlashListProps<ItemT>;

function ListView<ItemT>(props: FlashListWrapperProps<ItemT>) {
  return <FlashList {...props} />;
}

export default ListView;
