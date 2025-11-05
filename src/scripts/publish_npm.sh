#!/bin/sh

set -euo pipefail

push() {
    echo "Pushing to remote (no npm publish)..."
  git push
  ascii_success
}

release_and_publish() {
current_version="$(npm pkg get version | sed 's/"//g')"
IFS='.' read -r major minor patch <<< "$current_version"

TYPE="patch" 

while [[ $# -gt 0 ]]; do
  case "$1" in
    -type)
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
    echo "bumping major"
    ;;
  minor)
    minor=$((minor + 1))
    echo "bumping minor"
    ;;
  patch)
    patch=$((patch + 1))
    echo "bumping patch"
    ;;
  *)
    echo "invalid type (must be major | minor | patch)"
    ;;
esac

new_version="${major}.${minor}.${patch}"
echo "$new_version"

# npm version $new_version
# git commit -m "Bump npm version to $new_version for release"
}

push_success_msg() {
`
              __________________________________________
             /                                         \\
            |    ___________________________________    |
            |   |                                   |   |
            |   |                                   |   |
            |   |                                   |   |
            |   |           🚀 SUCCESS 🚀            |   |
            |   |                                   |   |
            |   |                                   |   |
            |   |                                   |   |
            |   |___________________________________|   |
            |                                           |
            \\_________________________________________/
                  \\______________________________/
                _____________________________________
             _-\'    .-.-.-.-.-.-.-.-.-.-.-.-.  --- \`-_
          _-\'.-.-. .---.-.-.-.-.-.-.-.-.-.-.--.  .-.-.\`-_
       _-\'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-\`__\`. .-.-.-.\`-_
    _-\'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.\`-_
 _-\'.-.-.-.-.-. .---.-. .-----------------. .-.---. .---.-.-.-.\`-_
:-------------------------------------------------------------------------:
\`---._.-------------------------------------------------------------._.---\'`
}

exit 0