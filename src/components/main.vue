<template>
  <div class="container">
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
          name:"中国"
        },
        {
          id:2,
          level:2,
          name:"上海"
        },
        {
          id:3,
          level:2,
          name:"北京"
        },
        {
          id:321,
          level:3,
          name:"北京大学"
        },
        {
          id:322,
          level:3,
          name:"清华大学"
        },
        {
          id:4,
          level:1,
          name:"印度尼西亚"
        },
        {
          id:5,
          level:2,
          name:"雅加达"
        },
        {
          id:6,
          level:2,
          name:"万隆"
        },
        {
          id:7,
          level:1,
          name:"加拿大"
        },
        {
          id:8,
          level:1,
          name:"美国"
        },
        {
          id:9,
          level:2,
          name:"华盛顿"
        },
        {
          id:10,
          level:2,
          name:"洛杉矶"
        },
         {
          id:8,
          level:1,
          name:"澳大利亚"
        },
        {
          id:9,
          level:2,
          name:"堪培拉"
        },
        {
          id:10,
          level:2,
          name:"悉尼"
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
</style>
