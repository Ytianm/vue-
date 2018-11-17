<template>
  <div class="bg" v-if='list.length>0'>
    <div class="search">
      <input type="text" class="search-input" ref="searchText" placeholder="搜索">
      <button class="search-btn" @click="search">搜索</button>
    </div>
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
import Vue from "vue";
import Item from "./item";

export default {
  name: "Tree",
  components: {
    Item
  },
  props: {
    list: {
      type: Array
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      treeData: [],
      result:false
    };
  },
  methods: {
    initTreeData() {
      // var tempList = JSON.parse(JSON.stringify(this.list));

      let res = this.handleSourceData(this.list);
      var tempList = JSON.parse(JSON.stringify(res));

      // 递归操作，增加一些属性
      var addProperty = data => {
        data.forEach(m => {
          if (!m.hasOwnProperty("clickNode")) {
            m.clickNode = m.hasOwnProperty("clickNode") ? m.clickNode : false;
          }

          if (!m.hasOwnProperty("isFolder")) {
            m.isFolder = m.hasOwnProperty("isFolder") ? m.isFolder : false;
          }

          m.children = m.children || [];

          addProperty(m.children);
        });
      };

      addProperty(tempList);

      this.treeData = tempList;
      // console.log(tempList)
    },

    //处理源数据（只处理了三级目录的情况）
    handleSourceData(arr) {
      let tem = {};
      for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) { //最后一个，跳出
          break;
        }
        if (arr[i].level == 1 && arr[i + 1].level && arr[i + 1].level == 2) { //1-2 
          arr[i]["children"] = [];
          tem = arr[i];
        }

        if (arr[i].level == 2 && arr[i + 1].level && arr[i + 1].level == 3) { //2-3 
          arr[i]["children"] = [];
          tem = arr[i];
        }

        //2-1||1-1||3-1 不合并，跳到下一次循环
        if (
          (arr[i].level == 2 && arr[i + 1] && arr[i + 1].level == 1) ||
          (arr[i].level == 1 && arr[i + 1] && arr[i + 1].level == 1) || 
          (arr[i].level == 3 && arr[i + 1] && arr[i + 1].level == 1)
        ) {
          continue;
        }

        tem["children"].push(arr[i + 1]); //1-2 2-3 ：这两种情况才会触发合并 
        arr[i + 1]["del"] = true; //已经被合并的对象添加一个标记
      }

      let newArr = arr.filter(item => {
        return !item["del"]; //被合并的对象不再单独输出
      });
      return newArr;
    },

    //搜索
    search() {
      this.result = false;
      let searchText = this.$refs.searchText.value;
      if(!searchText){
        alert('请输入需要搜索内容!');
        return;
      }
      let data = this.treeData;

      let getItem = data => {
        data.forEach(item => {
          let name = item.name;
          if (name.indexOf(searchText) != -1) { //有搜索结果
            this.result = true;
            item.clickNode = true; //选中

            if (item.level != 1) { //如果不是一级目录，需要找到其父级，并展开
              unfoldParent(this.treeData,item);
            }

          } else {
            item.isFolder = false;
            item.clickNode = false;
          }

          if (item.children) {
            getItem(item.children); //递归遍历子目录
          }
        });
      };

      //展开父级--有二级||三级目录的情况
      let unfoldParent = (data,item) => {
        data.forEach(item1 => { //遍历一级目录的children
          let children = item1.children;
          children.forEach(item2 => { //遍历二级目录的children
            if (item2.name == item.name) {
              item1.isFolder = true; //展开一级
            }
            if(item.level==3){  //如果item是三级目录
              let children = item2.children;           
              children.forEach(item3 => { //遍历三级目录的children            
                if (item3.name == item.name) {
                  item1.isFolder = true; //展开一级
                  item2.isFolder = true; //展开二级
                }
              });
            }
          });
        });
      };

      getItem(data); //遍历目录
      if(!this.result){
        alert('没有找到相关信息，请检查输入!');
      }
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
.search{
  display: flex;
  margin: 20px 10px;
}
.search-input {
  width: 60%;
  height: 50px;
  font-size: 18px;
  padding: 0 5px;
  border: 1px solid #ccc;
}
.search-btn {
  height: 52px;
  flex: 1;
  margin-left: 10px;
  font-size: 20px;
  color: #eee;
  border: none;
  background: #5ca75c;
}
</style>
