<template>
  <Item>
    <template v-slot:title>
      <span class="title">
        <span class="title-item">{{ match.title }}</span>
        <span class="title-item date" v-if="match.date">{{ match.date }}</span>
        <span class="title-item date" v-else>{{ match.weekDate }}</span>
        <span class="title-item time" v-if="match.time"
          >{{ ', g. ' }}{{ match.time }}</span
        >
        <span class="title-item home" v-if="match.home"
          >{{ ' ' }}{{ match.home }}</span
        >
      </span>
    </template>
    <template v-slot:content>
      <div class="match">
        <div>
          <img
            :src="require(`~/assets/images/logos/${match.logos.teamOne}`)"
            :alt="'lol'"
          />
          <div :class="['score', { soon: match.isText }]">
            {{ match.score }}
          </div>
          <img
            :src="require(`~/assets/images/logos/${match.logos.teamTwo}`)"
            :alt="'lol'"
          />
        </div>
        <p class="teamNames">
          {{ match.clubs[0] }}
          <span>-</span>
          {{ match.clubs[1] }}
        </p>
      </div>
    </template>
  </Item>
</template>

<script>
import Item from '~/components/Item.vue';
import getMatches from '~/data/matches';

export default {
  name: 'Match',
  props: ['firstBox', 'selected'],
  components: {
    Item,
  },
  computed: {
    match: function () {
      const matches = getMatches(this.selected);
      if (this.firstBox) return matches.matchOne;
      else return matches.matchTwo;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  .title-item {
    font-weight: 400;
    display: block;
  }

  .title-item:first-child {
    font-weight: 700;
  }

  .date,
  .time {
    display: initial;
  }
}

@media (min-width: 360px) {
  .title {
    .home {
      display: initial;
    }
  }
}

.match {
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  img {
    margin: 0 auto;
    width: 25%;
  }

  .score {
    width: 40%;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
  }

  .soon {
    font-size: 28px;
  }

  .teamNames {
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    line-height: 1.1;

    span {
      display: block;
    }
  }
}

@media (min-width: 640px) {
  .match {
    .score {
      font-size: 54px;
    }

    .soon {
      font-size: 34px;
    }

    .teamNames {
      font-size: 18px;

      span {
        display: initial;
      }
    }

    img {
      width: 100px;
    }
  }
}

@media (min-width: 900px) {
  .match {
    .teamNames {
      span {
        display: block;
      }
    }
  }
}

@media (min-width: 1024px) {
  .match {
    img {
      width: 100px;
    }
  }
}

@media (min-width: 1280px) {
  .match {
    .teamNames {
      span {
        display: initial;
      }
    }
  }
}

@media (min-width: 1440px) {
  .match {
    .score {
      font-size: 54px;
    }

    .soon {
      font-size: 32px;
    }

    img {
      width: 80px;
    }

    .teamNames {
      span {
        display: block;
      }
    }
  }
}

@media (min-width: 1920px) {
  .match {
    .teamNames {
      span {
        display: initial;
      }
    }
  }
}
</style>
