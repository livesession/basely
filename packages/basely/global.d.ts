interface ImportMetaEnv {
  readonly IMPORT_URL?: string
  readonly SERVER_URL?: string
  readonly [key: string]: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}


