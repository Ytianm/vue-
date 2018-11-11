<template>
  <div class="container">
    <input type="text" class="search-input">
    <button class="search-btn">搜索</button>
    <tree :list="treeData"></tree>
  </div>
</template>

<script>
import tree from './tree'

export default {
  name: "Main",
  components:{
    tree
  },
  data() {
    return {
      treeData: [
        {
          name: "一级标题1",
          id:1,
          children: [
            { 
              name: "二级标题1", 
              id:11,
            },
            { 
              name: "二级标题2",
              id:12, 
            },
            {
              name: "二级标题3",
              id:13,
              children: [
                {
                  name: "三级标题1",
                  id:131,
                  children: [
                    { 
                      name: "四级标题1",
                      id:1311, 
                    },
                    { 
                      name: "四级标题2",
                      id:1312,
                    },
                    { 
                      name: "四级标题3",
                      id:1313, 
                    }
                  ]
                },
                { 
                  name: "三级标题2",
                  id:132, 
                },
                { 
                  name: "三级标题3",
                  id:133, 
                }
              ]
            },
            {
              name: "二级标题4",
              id:14,
              children: [
                {
                  name: "三级标题1",
                  id:141,
                  children: [
                    { 
                      name: "四级标题1",
                      id:1411, 
                    }, 
                    { 
                      name: "四级标题2",
                      id:1412, 
                    }
                  ]
                },
                { 
                  name: "三级标题2",
                  id:142, 
                },
                { 
                  name: "三级标题3",
                  id:143, 
                },
                {
                  name: "三级标题4",
                  id:144,
                  children: [
                    { 
                      name: "四级标题1",
                      id:1441, 
                    }, 
                    { 
                      name: "四级标题2",
                      id:1442, 
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name:'一级标题2',
          id:2
        }
      ]
    };
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-input{
  width:200px;
  height: 40px;
  margin:10px;
}
.search-btn{
  width:100px;
  height: 44px;
  font-size: 15px;
}
</style>
