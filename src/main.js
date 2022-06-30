const div = dom.create("<div>new</div>");
console.log(div);
dom.before(test, div);
const nodes = dom.empty(window.empty);
console.log(nodes);
dom.text(test, "更改文本");
