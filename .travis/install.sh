#!/bin/bash

if [[ $TRAVIS_OS_NAME == 'osx' ]]; then

    wget https://redirector.gvt1.com/edgedl/go/go1.9.2.darwin-amd64.tar.gz
    sudo tar -C /usr/local -xzf go1.9.2.darwin-amd64.tar.gz

elif [[ $TRAVIS_OS_NAME == 'linux' ]]; then

    wget https://redirector.gvt1.com/edgedl/go/go1.9.2.linux-amd64.tar.gz
    sudo tar -C /usr/local -xzf go1.9.2.linux-amd64.tar.gz

fi

export GOROOT=/usr/local/go
export PATH=$GOROOT/bin:$PATH
export GOPATH=$HOME/go

mkdir -p $GOPATH/src/github.com/status-im
pushd $GOPATH/src/github.com/status-im
git clone --depth=1 https://github.com/status-im/status-go.git -b develop
pushd status-go
make statusgo-library
popd
popd

cp $GOPATH/src/github.com/status-im/status-go/build/bin/libstatus.* ./bin
npm run build
