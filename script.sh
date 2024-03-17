#!/bin/bash

# Set the new username and email
NEW_USERNAME="hima234"
NEW_EMAIL="himasri7862@gmail.com"

# Iterate through all commits
git filter-branch --env-filter '
if [ "$GIT_COMMITTER_EMAIL" = "sairaj04480@gmail.com" ]; then
    export GIT_COMMITTER_NAME="'"$NEW_USERNAME"'"
    export GIT_COMMITTER_EMAIL="'"$NEW_EMAIL"'"
fi
if [ "$GIT_AUTHOR_EMAIL" = "sairaj04480@gmail.com" ]; then
    export GIT_AUTHOR_NAME="'"$NEW_USERNAME"'"
    export GIT_AUTHOR_EMAIL="'"$NEW_EMAIL"'"
fi
' --tag-name-filter cat -- --branches --tags

# Update the reflog
git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d

# Remove the backup refs
rm -Rf .git/refs/original/

# Garbage collect to remove the old objects
git reflog expire --expire=now --all
git gc --prune=now --aggressive

