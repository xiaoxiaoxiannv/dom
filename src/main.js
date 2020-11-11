const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);

const div2 = dom.create("<div id='parent'></div>")
dom.wrap(test,div2)