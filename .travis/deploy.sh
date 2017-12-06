#!/bin/bash

# Check out for https://github.com/cloudflare/semver_bash/blob/master/semver.sh
function semverParseInto() {
    local RE='[^0-9]*\([0-9]*\)[.]\([0-9]*\)[.]\([0-9]*\)\([0-9A-Za-z-]*\)'
    #MAJOR
    eval $2=`echo $1 | sed -e "s#$RE#\1#"`
    #MINOR
    eval $3=`echo $1 | sed -e "s#$RE#\2#"`
    #MINOR
    eval $4=`echo $1 | sed -e "s#$RE#\3#"`
    #SPECIAL
    eval $5=`echo $1 | sed -e "s#$RE#\4#"`
}

if [ -z "$TRAVIS_TAG" ]; then
    echo "TRAVIS_TAG is required to deploy"
    exit 1
fi

MAJOR=0
MINOR=0
PATCH=0
SPECIAL=""

semverParseInto $TRAVIS_TAG MAJOR MINOR PATCH SPECIAL

npm run configure
npm run build
npm run package

if [ -z "$SPECIAL" ]; then
    npm run publish:release
else
    npm run publish
fi

