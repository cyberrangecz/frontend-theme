( npm run prettier-check ||
 ( echo "Prettier check failed, attempting to fix" npm run prettier-fix && npm run prettier-check ) \
  || ( echo "Failed to automatically fix prettier style" && exit 1 ) ) \
  && npm run ng-lint && npm ci --dry-run
