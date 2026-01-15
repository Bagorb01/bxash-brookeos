#!/usr/bin/env bash
set -euo pipefail

current_version="$(npm pkg get version | sed 's/"//g')"
IFS='.' read -r major minor patch <<< "$current_version"

TYPE="patch"

while [[ $# -gt 0 ]]; do
  case "$1" in
    -type|--type)
      TYPE="$2"
      shift 2
      ;;
    *)
      echo "unknown arg: $1"
      exit 1
      ;;
  esac
done

case "$TYPE" in
  major)
    major=$((major + 1))
    minor=0
    patch=0
    ;;
  minor)
    minor=$((minor + 1))
    patch=0
    ;;
  patch)
    patch=$((patch + 1))
    ;;
  *)
    echo "Invalid type (must be major | minor | patch)"
    exit 1
    ;;
esac

new_version="${major}.${minor}.${patch}"
echo "✅ Bumping npm version from $current_version to $new_version"
npm version "$new_version"

echo "✅ Publishing package..."
npm publish --ignore-scripts

echo "🚀 SUCCESS!"