<template>
  <div class="footer">
    <div @click="handleClick(linkRouter)">
      <span>{{ title }}</span>
      <div class="icon">
        <font-awesome-icon icon="arrow-right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    linkRouter: {
      type: String
    }
  },
  methods: {
    handleClick (link) {
      console.log(link)
    }
  }
}
</script>
