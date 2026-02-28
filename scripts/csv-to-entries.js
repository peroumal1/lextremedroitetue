#!/usr/bin/env node
/**
 * csv-to-entries.js
 * Converts a CSV file of events into JS entries ready to paste into
 * the `entries` array in src/_data/content.js.
 *
 * Usage:
 *   node scripts/csv-to-entries.js events.csv
 *
 * Required columns:
 *   id        — unique string, no spaces recommended
 *   title     — the event headline (HTML allowed)
 *   body      — the event description (HTML allowed; wrap paragraphs in <p> tags)
 *   date      — YYYY-MM-DD            (use this OR datetime, not both)
 *   datetime  — YYYY-MM-DD HH:mm     (use this OR date, not both)
 *
 * Optional columns (omitting them is fine — defaults apply):
 *   categories  — pipe-separated list e.g. "morts|blessés"  (default: auto-derived from morts/blesses)
 *   color       — "black" | "red" | "white"                 (default: "black")
 *   faicon      — FA6 solid icon name without "fa-" prefix  (default: no icon)
 *                 e.g. "skull", "hand-fist", "rocket"
 *   morts       — number of people killed (integer)         (default: 0)
 *   blesses     — number of people injured (integer)        (default: 0)
 *   source_url  — a link URL to attach to the entry         (default: none)
 *   source_text — the link label                            (default: none)
 *
 * If `categories` is omitted, it is auto-derived:
 *   morts > 0  → adds "morts"
 *   blesses > 0 → adds "blessés"
 */

'use strict';

const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const csvPath = process.argv[2];
if (!csvPath) {
  console.error('Usage: node scripts/csv-to-entries.js <path-to-csv>');
  process.exit(1);
}

let raw;
try {
  raw = fs.readFileSync(path.resolve(csvPath), 'utf8');
} catch (err) {
  console.error(`Cannot read "${csvPath}": ${err.message}`);
  process.exit(1);
}

const { data, errors } = Papa.parse(raw, { header: true, skipEmptyLines: true });

if (errors.length) {
  console.error('CSV parsing failed with the following errors:');
  errors.forEach((e) => console.error(`  Row ${e.row + 1}: [${e.code}] ${e.message}`));
  process.exit(1);
}

const entries = [];

for (const [i, row] of data.entries()) {
  const rowNum = i + 1;
  const get = (col) => (row[col] || '').trim();

  const id       = get('id');
  const title    = get('title');
  const body     = get('body');
  const date     = get('date');
  const datetime = get('datetime');

  if (!id)                { console.error(`Row ${rowNum}: missing "id" — skipping`); continue; }
  if (!title)             { console.error(`Row ${rowNum} (${id}): missing "title" — skipping`); continue; }
  if (!body)              { console.error(`Row ${rowNum} (${id}): missing "body" — skipping`); continue; }
  if (!date && !datetime) { console.error(`Row ${rowNum} (${id}): missing "date"/"datetime" — skipping`); continue; }

  const entry = { id };

  // morts/blesses counts
  const morts   = parseInt(get('morts'),   10) || 0;
  const blesses = parseInt(get('blesses'), 10) || 0;
  if (morts > 0)   entry.morts   = morts;
  if (blesses > 0) entry.blesses = blesses;

  // categories: explicit override, or auto-derived from morts/blesses
  const catsRaw = get('categories');
  if (catsRaw) {
    entry.categories = catsRaw.split('|').map((c) => c.trim()).filter(Boolean);
  } else {
    const autoCats = [];
    if (morts > 0)   autoCats.push('morts');
    if (blesses > 0) autoCats.push('blessés');
    if (autoCats.length) entry.categories = autoCats;
  }

  entry.color = get('color') || 'black';

  const faicon = get('faicon');
  if (faicon) entry.faicon = faicon;

  if (datetime) entry.datetime = datetime;
  else          entry.date = date;

  entry.title = title;
  entry.body  = body;

  const sourceUrl  = get('source_url');
  const sourceText = get('source_text');
  if (sourceUrl && sourceText) {
    entry.links = [{ href: sourceUrl, linkText: sourceText }];
  }

  entries.push(entry);
}

if (!entries.length) {
  console.error('No valid entries found — nothing to output.');
  process.exit(1);
}

function formatEntry(e) {
  const lines = ['  {'];
  lines.push(`    id: ${JSON.stringify(e.id)},`);
  if (e.categories) lines.push(`    categories: ${JSON.stringify(e.categories)},`);
  if (e.morts   != null) lines.push(`    morts: ${e.morts},`);
  if (e.blesses != null) lines.push(`    blesses: ${e.blesses},`);
  lines.push(`    color: ${JSON.stringify(e.color)},`);
  if (e.faicon)   lines.push(`    faicon: ${JSON.stringify(e.faicon)},`);
  if (e.datetime) lines.push(`    datetime: ${JSON.stringify(e.datetime)},`);
  else            lines.push(`    date: ${JSON.stringify(e.date)},`);
  lines.push(`    title: ${JSON.stringify(e.title)},`);
  lines.push(`    body: ${JSON.stringify(e.body)},`);
  if (e.links) {
    lines.push('    links: [');
    for (const l of e.links) {
      lines.push(`      { href: ${JSON.stringify(l.href)}, linkText: ${JSON.stringify(l.linkText)} },`);
    }
    lines.push('    ],');
  }
  lines.push('  },');
  return lines.join('\n');
}

console.log('// Generated by scripts/csv-to-entries.js');
console.log('// Paste these inside the entries array in src/_data/content.js\n');
console.log(entries.map(formatEntry).join('\n'));
