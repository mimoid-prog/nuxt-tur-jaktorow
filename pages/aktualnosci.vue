<template>
  <div id="news" class="news">
    <h2 class="secondaryTitle viewTitle">Aktualności</h2>
    <div class="posts">
      <Item v-for="(post, index) in posts" :key="index">
        <template v-slot:title>{{ post.emoji }} {{ post.day }}</template>
        <template v-slot:content>
          <p class="post-content">{{ post.message }}</p>
          <a :href="post.link" target="_blank"
            >➡️ Zobacz post i zdjęcia na FB</a
          >
        </template>
      </Item>
    </div>
    <p class="old-posts-info">
      Starsze posty i aktualności znajdziesz na fanpagu Tura Jaktorów na
      facebooku.
    </p>
  </div>
</template>

<script>
import Item from "~/components/Item.vue";

export default {
  head: {
    title: "Aktualności - Tur Jaktorów",
    meta: [
      {
        name: "description",
        content:
          "Najnowsze aktualności na temat Tura Jaktorów, ostatnie wyniki meczów oraz informacje o wyjazdach, obozach i treningach."
      }
    ]
  },
  name: "News",
  components: {
    Item
  },
  data: function() {
    return {
      news: []
    };
  },
  async asyncData({ $config: { FB_TOKEN } }) {
    let rawRes, res;
    if (process.server) {
      rawRes = await fetch(
        `https://graph.facebook.com/v8.0/lksturjaktorow/posts?limit=16&access_token=${process.env.FB_TOKEN}`
      );
      res = await rawRes.json();
    } else {
      rawRes = await fetch(`/api/fb`);
      res = await rawRes.json();
    }

    const prepered = res.data.map(item => ({
      day: item.created_time
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("."),
      message: item.message || "",
      link:
        "https://www.facebook.com/lksturjaktorow/posts/" + item.id.split("_")[1]
    }));

    const filtered = prepered.filter(item => item.message !== "");

    return {
      posts: filtered
    };
  }
};
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
}

.post-content /deep/ p {
  margin-bottom: 0.2em !important;
}

.posts {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
}

.fetching {
  color: white;
  font-size: 30px;
}

.post {
  background: white;

  &:first-child {
    margin: 0;
  }
}

.post-inner {
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    display: block;
    margin-top: 20px;
  }
}

.link-box {
  text-align: right;
}

.paginator {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page {
  background: white;
  border: 1px solid #e3e3e3;
  border-radius: 2px;
  width: 32px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-right: 1px;
  cursor: pointer;
  font-family: Jost;
  font-weight: 700;
  font-size: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    background: #f0f0f0;
  }
}

.currentPage {
  background: #7ac1f0;
  border-color: #5ca9db;

  &:hover {
    background: #5ca9db;
  }
}

a {
  margin-top: 8px;
  color: black;
  display: inline-block;
}

.old-posts-info {
  color: white;
  font-weight: 700;
  margin-top: 30px;
}
</style>
