#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "../public/collections-meta.json");
const outputPath = path.join(__dirname, "../icon-licenses.json");

console.log("Reading collections-meta.json...");
const rawData = fs.readFileSync(jsonPath, "utf8");
const collections = JSON.parse(rawData);

console.log(`Found ${collections.length} collections`);

const licenses = collections.map((collection) => ({
  name: collection.name,
  license: collection.license || "Unknown"
}));

console.log("Writing licenses to icon-licenses.json...");
fs.writeFileSync(outputPath, JSON.stringify(licenses, null, 2));

console.log(`✓ Extracted ${licenses.length} licenses to icon-licenses.json`);
