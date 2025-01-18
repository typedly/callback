
<a href="https://www.typescriptlang.org/">
  <img
    src="https://raw.githubusercontent.com/typescript-package/core/refs/heads/main/ts-package-barcode-logo-512.png"
    width="20%"
    title="@typedly/callback"
  />
</a>

## typedly/callback

A TypeScript type definitions package for asynchronous and synchronous callback functions of various types.

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

<br>

## Table of contents

* [Installation](#installation)
* [Api](#api)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

## Installation

```bash
npm install @typedly/callback
```

## Api

```typescript
import {
  AsyncCallback,
  CommonCallback,
  ErrorCallback,
  FailureCallback,
  ProcessCallback,
  ResultCallback,
  StatusCallback,
  SuccessCallback,
  ValidationCallback
} from '@typedly/callback';
```

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/callback
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/callback
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/callback
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/callback
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/callback/issues
  [typedly-forks]: https://github.com/typedly/callback/network
  [typedly-license]: https://github.com/typedly/callback/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/callback/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fcallback.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fcallback

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
