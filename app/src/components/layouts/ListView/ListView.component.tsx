import { FlashList, FlashListProps } from '@shopify/flash-list';
import React from 'react';

type FlashListWrapperProps<ItemT> = FlashListProps<ItemT>;

function ListView<ItemT>(props: FlashListWrapperProps<ItemT>) {
  return <FlashList {...props} />;
}

export default ListView;
