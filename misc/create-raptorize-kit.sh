#!/bin/bash

RAPTORIZE_HOME=`cd .. && pwd`
BUILD_DIR="$RAPTORIZE_HOME/build"

rm -rf $BUILD_DIR/*
mkdir -p $BUILD_DIR/{images,sounds,js};

resources=(
  "images/raptor.png"
  "sounds/raptor-sound.mp3"
  "sounds/raptor-sound.ogg"
  "js/jquery.raptorize.2.0.js"
  "index.html"
)

for resource in "${resources[@]}"
do
   cp $RAPTORIZE_HOME/$resource $BUILD_DIR/$resource
done

pushd $BUILD_DIR
zip -r raptorize-kit-2.0.zip *
popd
