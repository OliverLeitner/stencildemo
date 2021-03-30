#!/bin/bash
for d in src/components/* ; do
    cd $d
    for f in *.less; do
        npx lessc -x $f $(basename -s .less $f).css
    done
    cd ..
done
exit 0
