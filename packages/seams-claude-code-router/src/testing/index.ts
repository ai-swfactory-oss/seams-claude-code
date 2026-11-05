import type { ClaudeCodeRoute, ClaudeCodeRouter } from '../index'

export const createFakeClaudeCodeRouter = (routes: readonly ClaudeCodeRoute[] = []): ClaudeCodeRouter => ({
  listRoutes: () => routes,
})
