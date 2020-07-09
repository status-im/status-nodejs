#!/bin/bash
git clone -b echo-bot git@github.com:status-im/status-go.git
cd status-go && make statusgo-library
cp  ./status-go/build/bin/libstatus.a ./bin
cp  ./status-go/build/bin/libstatus.h ./bin
