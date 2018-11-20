<template>
  <div contenteditable="true" class="text" :style="size"
    @focus="onFocus" 
    @blur="onBlur"
    @input="onChange">
    {{content}}
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    content: "",
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      inputText: ""
    };
  },
  computed: {
    size() {
      return `width:${this.width}px;height:${this.height}px`;
    }
  },
  methods: {
    onFocus(val) {
      if (!this.inputText) {
        val.target.innerText = "";
      }
    },
    onBlur(val) {
      if (val.target.innerText == "") {
        val.target.innerText = "请输入文字";
      }
      this.$emit("inputContent", this.inputText);
    },
    onChange(val) {
      this.inputText = val.target.innerText;
    }
  }
};
</script>

<style scoped>
.text {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  text-align: justify;
  overflow-y: auto;
  -webkit-user-select: text;
}
</style>
