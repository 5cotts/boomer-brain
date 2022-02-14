#!/bin/bash
#
# This script runs this directory as a local web server using Python.
# Useful for debugging and such when develeoping locally.
#
# Source:
# https://docs.python.org/3/library/http.server.html

set -euo pipefail

python3 -m http.server
