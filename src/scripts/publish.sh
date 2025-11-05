#!/bin/sh

set -euo pipefail

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

current_version="$(npm pkg get version | sed 's/"//g')"
IFS='.' read -r major minor patch <<< "$current_version"

TYPE="patch" 

while [[ $# -gt 0 ]]; do
  case "$1" in
    -publish)
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
    ;;
  minor)
    minor=$((minor + 1))
    ;;
  patch)
    patch=$((patch + 1))
    ;;
  *)
    echo "Invalid type (must be major | minor | patch)"
    ;;
esac

  new_version="${major}.${minor}.${patch}"
  echo "Bumping npm version from $current_version to $new_version"
  npm version $new_version
  git commit -m "Bump npm version to $new_version"
  git push
  echo "Publishing package..."
  npm publish
  ascii_success

exit 0