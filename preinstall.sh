#!/bin/bash
# Auth0r: Huy Cuong
# Version: 0.0.1
# Description: This script is used for installing submodules UIkit

PORTAL_KIT_DIRECTORY="./src/submodules/uikit"
# PORTAL_KIT_REPOSITORY="http://cosmos.notabasement.com/source/server-react-portal-kit.git"

if [ "$(ls -A $PORTAL_KIT_DIRECTORY)" ]; then
    # DIR is not empty
    # Go to that directory
    cd $PORTAL_KIT_DIRECTORY
    # Recurse submodule
    git submodule update --init --recursive
    # npm install UIKit, just bootstrap 4.0.0beta only
    # npm install bootstrap@4.0.0beta
fi

# Done
