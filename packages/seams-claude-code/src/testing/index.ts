import type { ClaudeCode, ClaudeCodeSessionSummary } from '../index'

export const createFakeClaudeCode = (sessions: readonly ClaudeCodeSessionSummary[] = []): ClaudeCode => ({
  listSessions: () => sessions,
})
