<template>
  <div class="bg" v-if='list.length>0'>
    <ul class="tree">
      <item
        class="item"
        v-for="(child,index) in treeData" :key="index"
        :model="child"
        :trees="treeData"
        :num="index"
        >
      </item>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import Item from "./item";

export default {
  name: "Tree",
  components: {
    Item
  },
  props:{
    list: {
      type: Array
    },
    isOpen: {
      type: Boolean,
      default: false
    },
  },
  data(){
    return {
      treeData:[]
    }
  },
  methods: {
    initTreeData() {
      var tempList = JSON.parse(JSON.stringify(this.list)); 

      // 递归操作，增加一些属性
      var recurrenceFunc = data => {
        data.forEach(m => {
          if (!m.hasOwnProperty("clickNode")) {
            m.clickNode = m.hasOwnProperty("clickNode") ? m.clickNode : false;
          }

          m.children = m.children || [];

          if (!m.hasOwnProperty("isFolder")) {
            m.isFolder = m.hasOwnProperty("open") ? m.open : this.isOpen;
          }

          recurrenceFunc(m.children);
        });
      };
      recurrenceFunc(tempList);

      this.treeData = tempList;
    }
  },
  mounted() {
       Vue.nextTick(() => {
      this.initTreeData();
    });
  }
};
</script>

<style scoped>
.bg {
  width: 100%;
  /* background: #eee; */
}
li {
  list-style: dot;
}
</style>
