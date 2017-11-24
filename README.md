# status-nodejs

This package provides wrappers to [status-go](https://github.com/status-im/status-go) exported methods.

# Usage

First, make sure that `status-go` and `status-nodejs` are in the same dir.

In `status-go`, build shared library:

```make statusgo-shared```

or directly:

```
build/bin/xgo --image farazdagi/xgo --go=latest -buildmode=c-archive -out libstatus --dest=build/bin --targets=darwin/amd64 -v $(shell build/testnet-flags.sh) ./lib
ranlib build/bin/libstatus-darwin-10.6-amd64.a
```

Resulting shared library file and header will be at `build/bin/libstatus-darwin-10.6-amd64.a` and `build/bin/libstatus-darwin-10.6-amd64.h` accordingly. Copy them into `status-nodejs/bin/` folder:

```
mkdir -p status-nodejs/bin/
cp -v status-go/build/bin/libstatus-darwin-10.6-amd64.a status-nodejs/bin/libstatus.a
cp -v status-go/build/bin/libstatus-darwin-10.6-amd64.h status-nodejs/bin/libstatus.h
```

Next, go to `status-nodejs` dir, and run:

```
npm install
```

You should have resulting module in `build/Release` folder.

# Package module

TBD
