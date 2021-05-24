<template>
  <div class="detail_shop_info">
    <!-- 商家头像和名称 -->
    <div class="logo">
      <img :src="shop.logo" alt="" />
      <div>{{ shop.name }}</div>
    </div>
    <!-- 信息 -->
    <div class="shop_other_info">
      <!-- 销量 宝贝 -->
      <div class="shop_other_left">
        <div class="sells">
          <!-- 过滤器 -->
          <p>{{ shop.sells | saveNum }}</p>
          <p class="small">总销量</p>
        </div>
        <div class="goods_count">
          <p>{{ shop.goodsCount }}</p>
          <p class="small">全部宝贝</p>
        </div>
      </div>
      <!-- 描述 -->
      <div class="shop_other_right">
        <p v-for="(item, index) in shop.score">
          {{ item.name }}
          <span :class="{ active: item.isBetter }" class="score">
            {{ item.score }}
          </span>
          <span :class="{ b_active: item.isBetter }" class="score_icon">
            {{ item.isBetter ? "高" : "低" }}
          </span>
        </p>
      </div>
    </div>
    <!-- 进店逛逛 -->
    <div class="enter_shop_wrap">
      <div class="enter_shop">进店逛逛</div>
    </div>
    <!-- <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    saveNum(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  height: 50px;
  width: 50px;
  margin: 20px 10px 20px;
}
.shop_other_info {
  display: flex;
  /* justify-content: space-around; */
}
.shop_other_left {
  display: flex;
  flex: 1;
  border-right: 1px solid #eee;
  text-align: center;
  justify-content: space-around;
  padding-top: 5px;
}
.shop_other_right {
  flex: 1;
  font-size: 12px;
  padding-left: 25px;
}
.shop_other_right p {
  display: block;
  /* height: 22px;
  line-height: 22px; */
  margin-bottom: 5px;
}
.sells {
  flex: 1;
}
.goods_count {
  flex: 1;
}
.small {
  font-size: 12px;
  margin-top: 6px;
}
.score {
  display: inline-block;
  width: 30px;
  color: #880000;
}
.score_icon {
  color: #fff;
  background-color: #880000;
}
.active {
  color: #066;
}
.b_active {
  background-color: #066;
}
.enter_shop_wrap {
  text-align: center;
}
.enter_shop {
  display: inline-block;
  font-size: 12px;
  padding: 6px 30px;
  margin: 10px;
  border-radius: 20px;
  background-color: #f2f2f2;
}
</style>
