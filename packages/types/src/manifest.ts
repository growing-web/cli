import type {
  WebBuilderMode,
  WebBuilderFormat,
  //   WebBuilderTarget,
} from './web-builder'

type ManifestServerProxyPathRewrite = {
  regular: RegExp | string
  replacement: string
}[]

interface ManifestExternals {
  /* Patterns: [a-zA-Z]+ */
  [pattern: string]: string
}

export interface LoadManifestOptions {
  /**
   * manifest file storage directory
   * @default process.cwd()
   */
  root?: string

  /**
   * manifest filename
   * @default project-manifest.json
   */
  manifestFileName?: string

  /**
   * mode
   */
  mode?: WebBuilderMode
}

export interface WebBuilderProjectConfig {
  /**
   * application entry file.
   */
  entry: string
  /**
   * Build tools publicPath configuration.
   */
  publicPath?: string
  /**
   * Shared Dependencies & Common Dependencies.
   */
  externals?: ManifestExternals
  /**
   * local server configuration
   */
  server?: ManifestServer

  /**
   * Build product output directory
   */
  outDir?: string

  /**
   * Build product output target, Optional `app`, `lib`
   */
  //   target?: WebBuilderTarget

  /**
   * Whether the build outputs an `importmap.json` file
   */
  importmap?: string | null

  /**
   * Build product output format
   */
  formats?: WebBuilderFormat[]
}

// This file is automatically generated, please do not modify it.
export interface WebBuilderManifest extends WebBuilderProjectConfig {
  /**
   * The version number of the manifest.
   */
  schemaVersion: string
  /**
   * env configuration for different environments.
   */
  env?: {
    [pattern: string]: Partial<WebBuilderProjectConfig> /* Patterns: [a-z]+ */
  }
}

export type ManifestServerProxy = {
  url: string
  target: string
  secure?: boolean
  changeOrigin?: boolean
  pathRewrite?: ManifestServerProxyPathRewrite
}[]

export interface ManifestServer {
  port?: number
  proxy?: ManifestServerProxy
  host?: string | boolean
}
