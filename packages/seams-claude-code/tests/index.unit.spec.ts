import { describe, expect, it } from 'vitest'

import { createClaudeCode } from '../src/index'
import { createFakeClaudeCode } from '../src/testing/index'

describe('createClaudeCode', () => {
  it('lists no sessions while the seam is a skeleton', () => {
    expect(createClaudeCode().listSessions()).toEqual([])
  })
})

describe('createFakeClaudeCode', () => {
  it('lists no sessions by default', () => {
    expect(createFakeClaudeCode().listSessions()).toEqual([])
  })

  it('lists the sessions it was given', () => {
    const sessions = [{ id: 'session-1' }]
    expect(createFakeClaudeCode(sessions).listSessions()).toBe(sessions)
  })
})
