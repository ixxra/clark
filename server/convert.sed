#Maps keyword shortcuts in simplemde's Readme to javascript
s/\*\(.*\)\*/{key: "\1",/
s/| \(".*"\)/val: \1},/
