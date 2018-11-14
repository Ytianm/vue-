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
      treeData:[],
      list1:[
        {
          id:1,
          level:1,
          name:"a"
        },
        {
          id:2,
          level:2,
          name:"a1"
        },
        {
          id:3,
          level:2,
          name:"a2"
        },
        {
          id:4,
          level:1,
          name:"b"
        },
        {
          id:5,
          level:2,
          name:"b1"
        },
        {
          id:6,
          level:2,
          name:"b2"
        },
        {
          id:7,
          level:1,
          name:"c"
        },
        {
          id:8,
          level:1,
          name:"d"
        },
        {
          id:9,
          level:2,
          name:"d1"
        },
        {
          id:10,
          level:2,
          name:"d2"
        },
      ]
    }
  },
  methods: {
    initTreeData() {
      // var tempList = JSON.parse(JSON.stringify(this.list)); 

      let res = this.handel(this.list);
      var tempList = JSON.parse(JSON.stringify(res)); 

      // 递归操作，增加一些属性
      var recurrenceFunc = data => {
        data.forEach(m => {
          if (!m.hasOwnProperty("clickNode")) {
            m.clickNode = m.hasOwnProperty("clickNode") ? m.clickNode : false;
          }

          m.children = m.children || [];

          // if (!m.hasOwnProperty("isFolder")) {
          //   m.isFolder = m.hasOwnProperty("open") ? m.open : this.isOpen;
          // }

          recurrenceFunc(m.children);
        });
      };
      recurrenceFunc(tempList);

      this.treeData = tempList;
    },

    //
    handel(arr){
      let tem = {};
      for(let i = 0;i<arr.length;i++){
        if(i==arr.length-1){ //最后一个，跳出
          break;
        }

        if(arr[i].level==1&&arr[i+1].level==2){ //1-2 只有这种情况才合并（两级目录）
          let key = 'children';
          arr[i][key] = [];
          tem = arr[i];
        }
 
        if((arr[i].level==2&&arr[i+1]&&arr[i+1].level==1)||(arr[i].level==1&&arr[i+1]&&arr[i+1].level==1)){ //2-1 1-1 不合并，跳到下一次循环
          continue;
        }

        tem['children'].push(arr[i+1]); 
        arr[i+1]['del'] = true; //已经被合并的对象添加一个标记
      }
      let newArr = arr.filter(item=>{
        return !item['del'];  //被合并的对象不再单独输出
      })
      return newArr; 
    },

    //
  },
  mounted() {
    Vue.nextTick(() => {
      this.initTreeData();
      // let res = this.handel(this.treeData2);
      // console.log(res)
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
