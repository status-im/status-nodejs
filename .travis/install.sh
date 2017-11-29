#!/bin/bash

if [[ $TRAVIS_OS_NAME == 'osx' ]]; then

    wget https://redirector.gvt1.com/edgedl/go/go1.9.2.darwin-amd64.tar.gz
    tar -C /usr/local -xzf go1.9.2.darwin-amd64.tar.gz

elif [[ $TRAVIS_OS_NAME == 'linux' ]]; then

    wget https://redirector.gvt1.com/edgedl/go/go1.9.2.linux-amd64.tar.gz
    tar -C /usr/local -xzf go1.9.2.linux-amd64.tar.gz

fi

export PATH=$PATH:/usr/local/go/bin
export GOPATH=$HOME/go
go version
