#!/bin/bash

DIR=$1
NAME=$(basename $DIR)

mkdir -p "$DIR"
cd "$DIR"

echo '{
	"name": "'$NAME'",
	"version": "0.1.0",
	"patterns": {
		"root": "globals/root"
	}
}' > pattern.json

echo '@import '\''root'\'';

.'$NAME' {
	// TODO
}' > index.less

echo '@import '\''Pattern'\'';' > demo.less

echo '<div className="demo-page">
	<Pattern />
</div>' > demo.jsx

echo '# Documentation '$NAME'

# Changelog' > index.md

echo '<div className="'$NAME'">
	TODO ('$NAME')
</div>' > index.jsx
