#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/investors/boldcap"
OUT="$SRC/site"

mkdir -p "$OUT"
cp "$SRC/pitch.html" "$OUT/index.html"
if [[ -f "$SRC/DeepEmergence-BoldCap.pdf" ]]; then
  cp "$SRC/DeepEmergence-BoldCap.pdf" "$OUT/DeepEmergence-BoldCap.pdf"
fi

cd "$SRC"
npx wrangler pages deploy ./site \
  --project-name=de-boldcap-pitch \
  --commit-dirty=true
