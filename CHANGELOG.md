# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
<!-- markdownlint-disable -->
## [v1.0.6] - 2020-06-27

### Fixed
- Fix invalid script src for `<button is="pwa-install">` [#63](https://github.com/shgysk8zer0/jekyll-template/issues/63)
- Update Node CI status badge in README [#62](https://github.com/shgysk8zer0/jekyll-template/issues/62)
- Allow GitHub avatars & BaconIpsum API in CSP

### Removed
- Dependabot status badge, since not supported by v2

## [v1.0.5] 2020-06-26

### Changed
- Merge more Dependabot pull requests
- Update Ruby version to 2.7.1

## [v1.0.4] 2020-06-26

### Added
- Dependabot badge

### Changed
- Update all dependencies (merges serveral pull requests)
- Misc. other updates using `npm audit fix`
- Switch to new V2 of Dependanbot syntax
- Use full `document.title` in share button by default

### Fixed
- `build:icons` script by unquoting `${npm_package_config_icons}`
- Use unminified version of stylesheet for development environment
- Do not use `absolute_url` for URL in share button

### Removed
- Disable Git submodules for dependabot (template has no submodules)

## [1.0.3] 2020-06-25

### Added
- Dependabot config

## [v1.0.2] 2020-06-19

### Changed
- Disabled markdown linting of releases section in `CHANGELOG.md`

## [v1.0.1] 2020-06-19
### Added
- Include Changelog
- Implement GitHub's Super Linter
- Add `<pwa-install>` and `<pwa-prompt>`
- Add missing fields (event if empty) for app data / config file

### Changed
- Use `<pwa-install>` instead of `data-service-worker` attribute
- Move most data from `_config.yml` to `/_data/*`
- Update Pull Request Template

### Fixed
- Accessibility of `<button is="share-button">`
- Set correct thumbnails in page's `<head>`

## [v1.0.0] 2020-05-12
Initial Version Release
<!-- markdownlint-restore -->
