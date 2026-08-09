#!/usr/bin/env node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const translate = require('@vitalets/google-translate-api');

(async () => {
  try {
    const res = await translate('Hello world', { to: 'es' });
    console.log('Translated text:', res && res.text ? res.text : JSON.stringify(res));
    console.log('Detected source language:', res && res.from && res.from.language && res.from.language.iso ? res.from.language.iso : 'unknown');
  } catch (err) {
    console.error('Translation failed:', err && err.message ? err.message : err);
    process.exit(1);
  }
})();