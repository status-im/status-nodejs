# status-nodejs

This package provides wrappers to [status-go](https://github.com/status-im/status-go) exported methods.

# Usage

First, make sure that `status-go` and `status-nodejs` are in the same dir.

In `status-go`, build static library:

```make statusgo-shared```

Resulting static library file (in C archive format) and header will be at `build/bin/libstatus.a` and `build/bin/libstatus.h` accordingly. Copy them into `status-nodejs/bin/` folder:

```
mkdir -p status-nodejs/bin/
cp -v status-go/build/bin/libstatus.a status-nodejs/bin/libstatus.a
cp -v status-go/build/bin/libstatus.h status-nodejs/bin/libstatus.h
```

Next, go to `status-nodejs` dir, and run:

```
npm install
```

You should have resulting module in `build/Release` folder.

# Package module

TBD

# Autogenerate bindings from Go code

It's possible to autogenerate C++ code from status-go Go code. First, build autogenerator tool:

```
go build ./tools/go2nodebinding
```

then, run it:

```
./go2nodebinding ../status-go/lib/library.go > src/status.cpp
```


check the diff and commit.
