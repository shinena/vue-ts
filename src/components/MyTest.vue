<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="f in features" :key="f.id">{{f.name}}</li>
    </ul>
    <input type="text" placeholder="输入新特性" @keyup.enter="addFeature"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';
import { State, Action, Mutation } from "vuex-class";
@Component
// export default class Feature extends Vue {
// // 状态、动作、变更映射
// @State features!: string[]; @Action addFeatureAction; @Mutation addFeatureMutation;
//   private addFeature(event) {
//     console.log(event);
//     // this.features.push(event.target.value);
//     this.addFeatureAction(event.target.value);
//     // this.addFeaturMutation(event.target.value);
//     event.target.value = "";
// } }

let name = 'xx';
let title: string = 'Hello～'

class Feature{
  constructor(public id:number, public name:string){}
}
@Component
export default class MyTest extends Vue {
  // 属性装饰器
  @Prop() private msg!: string;
  private features: Feature[];
  private _foo:string;
  constructor(private tua = 'tua'){
    super()
    this._foo = 'foo'
    this.features = [
      { id: 1, name: "类型注解" },
      { id: 2, name: "编译型语言" }
    ]
  }
  @Watch('features',{deep:true})
  onFeaturesChange(val:string, oldVal:any){
    console.log(val, oldVal)
  }
  
  async created(){
    const result = await getData<Feature>();
    this.features = result.data;
  }
  //函数装饰器
  @Emit('add')
  private addFeature(event:any){
    const feature = {
      name:event.target.value,
      id: this.features.length + 1,
      version: '1.0'
    }
    this.features.push(feature)
    event.target.value = feature
    return event.target.value
  }
  private someMethod(){}
  get foo(){ return this._foo}
  set foo(val) {this._foo = val}

  
}

interface Result<T>{
    ok: 0|1;
    data: T[]
  }

  function getData<T>(): Promise<Result<T>>{
    const data: any[]=[
      { id: 1, name: "类型注解222", version: "2.0" },
       { id: 2, name: "编译型语言222", version: "1.0" }
    ]
    return Promise.resolve<Result<T>>({ok:1, data})
  }
// 函数
// name和age是必填，加上？变成可选参数，可选参数在必须参数后面

console.log(sayHello('liming', 30))
function sayHello(name: string, age: number = 20, addr?: string): string {
  return '你好:' + name + ' ' + age; 
}

//重载
// 参数数量或者类型或者返回类型不同，函数名却相同
// 先声明，再实现
function info(a: { name: string }): string; function info(a: string): object;
function info(a: { name: string } | string): any {
    if (typeof a === "object") {
        return a.name;
    } else {
        return { name: a };
} }
console.log(info({ name: "tom" }));
console.log(info("tom"));


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
