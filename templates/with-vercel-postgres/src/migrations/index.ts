import * as migration_20250326_181520_initial from './20250326_181520_initial'

export const migrations = [
  {
    up: migration_20250326_181520_initial.up,
    down: migration_20250326_181520_initial.down,
    name: '20250326_181520_initial',
  },
]
