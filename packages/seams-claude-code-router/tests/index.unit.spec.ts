import { describe, expect, it } from 'vitest'

import { createClaudeCodeRouter } from '../src/index'
import { createFakeClaudeCodeRouter } from '../src/testing/index'

describe('createClaudeCodeRouter', () => {
  it('lists no routes while the seam is a skeleton', () => {
    expect(createClaudeCodeRouter().listRoutes()).toEqual([])
  })
})

describe('createFakeClaudeCodeRouter', () => {
  it('lists no routes by default', () => {
    expect(createFakeClaudeCodeRouter().listRoutes()).toEqual([])
  })

  it('lists the routes it was given', () => {
    const routes = [{ name: 'default', model: 'claude-opus' }]
    expect(createFakeClaudeCodeRouter(routes).listRoutes()).toBe(routes)
  })
})
