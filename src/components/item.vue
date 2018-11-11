<template>
  <li>
    <div @click="toggle(model)" class="item-text" :class="selectClass">
      <span>{{ model.name }}</span>
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="model.isFolder">
      <item
        v-for="(children, index) in model.children"
        :key="index"
        :trees="trees"
        :model="children"
        :num="index"
      >
      </item>
    </ul>
  </li>
</template>

<script>
import Vue from 'vue';
export default {
  name: "Item",
  props: {
    model: {
      type: Object
    },
    trees: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle(model) {
      if (this.isFolder) {
        this.open = !this.open;
      }
      model.isFolder = !model.isFolder;

      let recurFunc = (data) => {
        data.forEach(item => {
          if (item.id == model.id) { //当前点击的选项
            item.clickNode = true;
          } else {  //其他选项
            item.clickNode = false;
          }

          if (item.children) {  //如果有子选项，再递归遍历
            recurFunc(item.children); 
          }
        });
      };

      //遍历所有data
      recurFunc(this.trees);
      
      console.log(this.model.name)
    }
  },
  computed: {
    //是否显示折叠符号
    isFolder: function() {
      return this.model.children && this.model.children.length;
    },
    //选中样式
    selectClass() {
      return this.model.clickNode ? "active" : "";
    }
  }
};
</script>

<style scoped>
body {
  color: #444;
}
.item-text {
  font-size: 20px;
  color: #333;
  height: 50px;
  line-height: 50px;
  padding-left: 5px; 
}
.active {
  background: rgb(92, 167, 92);
  color:#eee
}
ul {
  padding-left: 18px;
}
li{
  list-style: none;
}
</style>
