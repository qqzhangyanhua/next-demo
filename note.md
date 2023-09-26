## 一些说明

nest g resource user 生成的文件
nest g pi user  生成管道
nest g mi logger

### 装饰器

- 属性装饰器
- 类装饰器
- 方法装饰器
- 参数装饰器

```js
function Greeter(greeting: string) {
  return function (target: Function) {
    target.prototype.greet = function (): void {
      console.log(greeting);
    };
  };
}

@Greeter("Hello TS!")
class Greeting {
  constructor() {
    // 内部实现
  }
}

let myGreeting = new Greeting();
(myGreeting as any).greet(); // console output: 'Hello TS!';


```
