<template>
  <div class="hello">
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
          name: "中国",
          id:1,
          children: [
            { 
              name: "北京", 
              id:11,
            },
            { 
              name: "上海",
              id:12, 
            },
            {
              name: "深圳",
              id:13,
              children: [
                {
                  name: "南山区",
                  id:131,
                  children: [
                    { 
                      name: "科技园",
                      id:1311, 
                    },
                    { 
                      name: "深圳湾",
                      id:1312,
                    },
                    { 
                      name: "后海",
                      id:1313, 
                    }
                  ]
                },
                { 
                  name: "福田区",
                  id:132, 
                },
                { 
                  name: "罗湖区",
                  id:133, 
                }
              ]
            },
            {
              name: "广州",
              id:14,
              children: [
                {
                  name: "海珠区",
                  id:141,
                  children: [
                    { 
                      name: "小蛮腰",
                      id:1411, 
                    }, 
                    { 
                      name: "猎德大桥",
                      id:1412, 
                    }
                  ]
                },
                { 
                  name: "花都区",
                  id:142, 
                },
                { 
                  name: "越秀区",
                  id:143, 
                },
                {
                  name: "天河区",
                  id:144,
                  children: [
                    { 
                      name: "体育西",
                      id:1441, 
                    }, 
                    { 
                      name: "天河城",
                      id:1442, 
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name:'其他',
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
</style>
