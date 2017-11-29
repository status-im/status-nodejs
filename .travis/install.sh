#!/bin/bash

if [[ $TRAVIS_OS_NAME == 'osx' ]]; then

    wget https://redirector.gvt1.com/edgedl/go/go1.9.2.darwin-amd64.tar.gz
    sudo tar -C /usr/local -xzf go1.9.2.darwin-amd64.tar.gz

elif [[ $TRAVIS_OS_NAME == 'linux' ]]; then

    wget https://redirector.gvt1.com/edgedl/go/go1.9.2.linux-amd64.tar.gz
    sudo tar -C /usr/local -xzf go1.9.2.linux-amd64.tar.gz

fi

export PATH=/usr/local/go/bin:$PATH
export GOPATH=$HOME/go

mkdir -p $GOPATH/src/github.com/status-im
pushd $GOPATH/src/github.com/status-im
git checkout --depth=1 git@github.com:status-im/status-go.git
make statusgo-library
popd

cp $GOPATH/src/github.com/status-im/status-go/build/bin/libstatus.* ./bin
npm run build
