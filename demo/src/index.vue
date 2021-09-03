<template>
  <div id="app">
    <VirtualList
      :list="list"
      size="50"
      key-field="key"
      buffer="500"
      before-height="600"
    >
      <template v-slot:before>
        <div class="hearder">
          <h1>Here might be a page title</h1>
          {{ testNum }}
        </div>
      </template>
      <template v-slot:cell="{ item, index }">
        <h1>{{ item }} - {{ index }}</h1>
      </template>
    </VirtualList>

    <button @click="onInsert">插入500</button>
    <button @click="onDel">{{ delNUm }}</button>
    <button @click="enterDel">确认删除</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      count: 0,
      delNUm: 0,
      testNum: 0,
    };
  },
  mounted() {
    for (let index = 0; index < 100000; index++) {
      this.list.push({
        key: index,
        data: `我是第${index}位数据`,
      });
    }
    this.count = 100000;

    setInterval(() => {
      this.testNum++;
    }, 1000);
  },
  methods: {
    onInsert() {
      const num = Math.floor(Math.random() * this.list.length);
      console.log(num);
      const ary = new Array(500);
      for (let index = 0; index < 500; index++) {
        ary[index] = {
          key: this.count++,
          data: `我是新增数据-${index}`,
        };
      }
      this.list.splice(num, 0, ...ary);
    },
    onDel() {
      this.delNUm = Math.floor(Math.random() * this.list.length);
    },
    enterDel() {
      this.list.splice(this.delNUm, 500);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 800px;

  .hearder {
    width: 100%;
    height: 600px;
    background-color: greenyellow;
  }
}
</style>