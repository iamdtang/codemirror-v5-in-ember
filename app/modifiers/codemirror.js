import { modifier } from 'ember-modifier';
import CodeMirror from 'codemirror';

export default modifier(function codemirror(textarea) {
  CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
  });
});
