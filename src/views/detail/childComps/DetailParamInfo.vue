<template>
  <div class="param_info" v-if="Object.keys(paramInfo).length !== 0">
    <!-- table:paramInfo.sizes -->
    <table
      class="info_size"
      v-for="(table, index) in paramInfo.sizes"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <table class="info_param">
      <tr v-for="info in paramInfo.infos">
        <td class="info_key">{{ info.key }}</td>
        <td class="info_value">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info_img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.param_info table {
  width: 100%;
  border-collapse: collapse;
  border-top: 4px solid #ececec;
  border-bottom: 4px solid #ececec;
}
.info_size {
  font-size: 12px;
  width: 100%;
}
.info_size tr {
  display: flex;
}
.info_size td {
  flex: 1;
  border-bottom: 1px solid #ececec;
  height: 42px;
  padding-left: 5px;
  line-height: 42px;
}
.info_param {
  font-size: 14px;
  width: 100%;
}
.info_param td {
  height: 42px;
  padding-left: 5px;
  border-bottom: 1px solid #ececec;
}
.info_key {
  width: 20%;
}
.info_value {
  width: 80%;
  color: var(--color-tint);
}
.info_img img {
  width: 100%;
}
</style>
