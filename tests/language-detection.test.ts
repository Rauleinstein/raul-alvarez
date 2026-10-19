import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getAutomaticLanguagePath } from '../src/language-detection'

test('UK timezone opens English even with a Spanish browser', () => {
  assert.equal(getAutomaticLanguagePath('/', ['es-ES'], 'Europe/London', false), '/en')
})

test('English browser opens English outside the UK', () => {
  assert.equal(getAutomaticLanguagePath('/', ['en-GB', 'es'], 'Europe/Madrid', false), '/en')
})
test('Spanish and unsupported browsers stay on Spanish outside the UK', () => {
  for (const languages of [['es-ES', 'en'], ['fr-FR'], []]) {
    assert.equal(getAutomaticLanguagePath('/', languages, 'Europe/Madrid', false), null)
  }
})
test('manual selection and explicit routes are not redirected', () => {
  assert.equal(getAutomaticLanguagePath('/', ['en-GB'], 'Europe/London', true), null)
  for (const path of ['/en', '/sobre-mi', '/privacy', '/missing']) {
    assert.equal(getAutomaticLanguagePath(path, ['en-GB'], 'Europe/London', false), null)
  }
})
