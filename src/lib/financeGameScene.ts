import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

export function getPlayerAvatar(seed: string, size = 150) {
  return createAvatar(adventurer, {
    seed: [seed || 'Player'],
    size,
  }).toDataUri();
}
