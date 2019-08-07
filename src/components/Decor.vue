<template>
  <div>{{msg}}</div>
</template>
<script lang='ts'>
import { Vue } from "vue-property-decorator";

function Component(target) {
  const options: any = {
      data() {
        return  {msg: 'mua~~mua~~'}
      }
  };
  return Vue.extend(options);
}





@Component
export default class Decor extends Vue {}
</script>