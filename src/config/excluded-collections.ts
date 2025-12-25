// Collections excluded from TPM Icônes due to license restrictions
// These collections either require attribution for commercial use or are non-commercial


export const EXCLUDED_COLLECTION_IDS = [
  'arcticons',
  'basil',
  'brandico',
  'bx',
  'bxl',
  'bxs',
  'cbi',
  'ci',
  'cil',
  'codicon',
  'covid',
  'dashicons',
  'emojione',
  'emojione-monotone',
  'emojione-v1',
  'entypo',
  'entypo-social',
  'et',
  'fa-brands',
  'fa-regular',
  'fa-solid',
  'fa6-brands',
  'fa6-regular',
  'fa6-solid',
  'fad',
  'gala',
  'game-icons',
  'gis',
  'gridicons',
  'guidance',
  'icomoon-free',
  'iconamoon',
  'lets-icons',
  'nrk',
  'openmoji',
  'pepicons-pencil',
  'pepicons-pop',
  'pepicons-print',
  'solar',
  'streamline',
  'streamline-emojis',
  'subway',
  'twemoji',
  'typcn',
]

// Export a helper function to check if a collection is excluded
export function isExcludedById(id: string): boolean {
  return EXCLUDED_COLLECTION_IDS.includes(id)
}
