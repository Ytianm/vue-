<template>
  <div class="container">
    <input type="text" class="search-input">
    <button class="search-btn">搜索</button>
    <tree :list="treeData2"></tree>
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
      ],
      treeData2:[
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
