// 类装饰器
function isFoo(target) {
  // target是构造函数
  console.log(target === Foo); // true 
  target.isFoo = true;
  return target;
}

//属性装饰器
function mua(target, name) {
  console.log(target === Foo.prototype)
  target[name] = 'mua~~~'
}

//方法装饰器
function dong(target, name, descriptor) {
  console.log(target === Foo.prototype)
  console.log(target[name] === descriptor.value)
  const bar = descriptor.value
  descriptor.value = function () {
    console.log('dong~')
    bar()
  }
  return descriptor
}


@isFoo
class Foo {
  @mua aaa: string;
  constructor() {
    console.log('Foo构造函数')
  }
  @dong
  bar() {
    console.log('bar~');
  }
}
console.log(Foo.isFoo, '111')
console.log(Foo.prototype.aaa, '222') // mua~
Foo.prototype.bar()