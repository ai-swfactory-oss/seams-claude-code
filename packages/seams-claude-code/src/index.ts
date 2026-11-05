export interface ClaudeCodeSessionSummary {
  readonly id: string
}

export interface ClaudeCode {
  readonly listSessions: () => readonly ClaudeCodeSessionSummary[]
}

export const createClaudeCode = (): ClaudeCode => ({
  listSessions: () => [],
})
