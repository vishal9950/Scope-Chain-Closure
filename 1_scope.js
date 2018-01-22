function foo() {
  var bar;
  quux = 2;
  function zip() {
    var quux = 3;
    bar = true;
    console.log(bar, quux);
  }
  return zip;
}

const result = foo();
console.log(result());
