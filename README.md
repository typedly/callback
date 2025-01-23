
<a href="https://www.typescriptlang.org/">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=400&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    width="20%"
    title="@typedly/callback"
  />
</a>

## typedly/callback

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

**Version:** v1.0.0-beta.4

A TypeScript type definitions package for asynchronous and synchronous callback functions of various types.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - [Types](#types)
    - `AsyncCallback`
    - `CommonCallback`
    - `ErrorCallback`
    - `ErrorMessage`
    - `FailureCallback`
    - `GetterCallback`
    - `ProcessCallback`
    - `ResultCallback`
    - `SetterCallback`
    - `StatusCallback`
    - `SuccessCallback`
    - `ValidationCallback`
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

```bash
npm install @typedly/callback --save-peer
```

## Api

```typescript
import {
  AsyncCallback,
  CommonCallback,
  ErrorCallback,
  ErrorMessage,
  FailureCallback,
  GetterCallback, // beta.4
  ProcessCallback,
  ResultCallback,
  SetterCallback, // beta.4
  StatusCallback,
  SuccessCallback,
  ValidationCallback
} from '@typedly/callback';
```

### Types

- [`AsyncCallback`](https://github.com/typedly/callback/blob/main/src/lib/async-callback.type.ts),
- [`CommonCallback`](https://github.com/typedly/callback/blob/main/src/lib/common-callback.type.ts)
- [`ErrorCallback`](https://github.com/typedly/callback/blob/main/src/lib/error-callback.type.ts)
- [`ErrorMessage`](https://github.com/typedly/callback/blob/main/src/lib/error-message.type.ts)
- [`FailureCallback`](https://github.com/typedly/callback/blob/main/src/lib/failure-callback.type.ts)
- [`GetterCallback`](https://github.com/typedly/callback/blob/main/src/lib/getter-callback.type.ts)
- [`ProcessCallback`](https://github.com/typedly/callback/blob/main/src/lib/process-callback.type.ts)
- [`ResultCallback`](https://github.com/typedly/callback/blob/main/src/lib/result-callback.type.ts)
- [`SetterCallback`](https://github.com/typedly/callback/blob/main/src/lib/setter-callback.type.ts)
- [`StatusCallback`](https://github.com/typedly/callback/blob/main/src/lib/status-callback.type.ts)
- [`SuccessCallback`](https://github.com/typedly/callback/blob/main/src/lib/success-callback.type.ts)
- [`ValidationCallback`](https://github.com/typedly/callback/blob/main/src/lib/validation-callback.type.ts)

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

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
