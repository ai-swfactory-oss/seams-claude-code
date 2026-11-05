export interface ClaudeCodeRoute {
  readonly name: string
  readonly model: string
}

export interface ClaudeCodeRouter {
  readonly listRoutes: () => readonly ClaudeCodeRoute[]
}

export const createClaudeCodeRouter = (): ClaudeCodeRouter => ({
  listRoutes: () => [],
})
