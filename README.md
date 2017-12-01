status-nodejs
=============

**This project is in pre-alpha version!**

This package provides wrappers to [status-go](https://github.com/status-im/status-go) bindings.

## Instalation

Only manual installation from the repository.

## Development

First, you need to get `libstatus.a`:

1. Clone [status-go](github.com/status-im/status-go) repository into proper directory in `$GOPATH`,
2. Run `make statusgo-library`,
3. Copy `libstatus.a` and `libstatus.h` from `/path/to/status-go/build/bin/` to `./bin/`.

Next, run `npm install` to build a node.js addon. After that, you should be able to successfully run tests `npm test`.

## Autogenerate bindings from Go code

It's possible to autogenerate C++ code from status-go bindings. First, build autogenerator tool:

```
go build ./tools/go2nodebinding
```

then, run it:

```
./go2nodebinding /path/to/status-go/lib/library.go > ./src/status.cpp
```

## License

[Mozilla Public License 2.0](https://github.com/status-im/status-go/blob/develop/LICENSE.md).
