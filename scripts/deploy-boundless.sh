#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/investors/boundless"
OUT="$SRC/site"

mkdir -p "$OUT"
cp "$SRC/pitch.html" "$OUT/index.html"
cp "$SRC/DeepEmergence-Boundless-Ventures.pdf" "$OUT/DeepEmergence-Boundless-Ventures.pdf"

cd "$SRC"
npx wrangler pages deploy ./site \
  --project-name=de-boundless-pitch \
  --commit-dirty=true
