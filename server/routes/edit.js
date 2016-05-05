var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  shortcuts = [
    {key: "Cmd-'", val: "toggleBlockquote"},
    {key: "Cmd-B", val: "toggleBold"},
    {key: "Cmd-E", val: "cleanBlock"},
    {key: "Cmd-H", val: "toggleHeadingSmaller"},
    {key: "Cmd-I", val: "toggleItalic"},
    {key: "Cmd-K", val: "drawLink"},
    {key: "Cmd-L", val: "toggleUnorderedList"},
    {key: "Cmd-P", val: "togglePreview"},
    {key: "Cmd-Alt-C", val: "toggleCodeBlock"},
    {key: "Cmd-Alt-I", val: "drawImage"},
    {key: "Cmd-Alt-L", val: "toggleOrderedList"},
    {key: "Shift-Cmd-H", val: "toggleHeadingBigger"},
    {key: "F9", val: "toggleSideBySide"},
    {key: "F11", val: "toggleFullScreen"}
  ];
  res.render('editor', { title: 'Report generator',
    shortcuts: shortcuts});
});

module.exports = router;
