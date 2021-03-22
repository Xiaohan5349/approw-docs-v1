<template>
  <div class="integration-detail-card">
    <h5 class="integration-detail-card-title">{{ title }}</h5>
    <div class="integration-detail-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntegrationDetailCard',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    integrationData() {},
  },
}
</script>

<style lang="stylus">
.integration-detail-card {
  max-width: $mainContentWidthWithSideBar;
  background: #FFFFFF;
  box-shadow: 0px 6px 15px 0px rgba(161, 171, 200, 0.1);
  border-radius: 8px;
  border: 1px solid #DDDDDD;
  margin: 32px auto 0 auto;
  padding: 30px 62px;
  &:first-child {
    margin-top: 100px;
  }
  .integration-detail-card-title {
    font-size: 16px;
    font-weight: 400;
    color: #181818;
    line-height: 22px;
    padding: 0 17px 25px 17px;
    border-bottom: 2px solid #EEEEEE;
    margin: 0;
  }
  .integration-detail-card-content {
    padding: 20px 17px 0 17px;
    p {
      color: #666666;
      margin: 0;
    }
    img {
      // xnip 截的图四周有留白，为了适配这玩意
      transform: scale(1.072);
      margin-top: 18px;
      margin-bottom: 18px;
    }
  }
}

@media (max-width: $MQMobile) {
  .integration-detail-card {
    padding: 14px 16px;
    margin-top: 64px;
    .integration-detail-card-title {
      padding-bottom: 14px;
    }
    .integration-detail-card-content {
      padding-top: 14px;
    }
  }
}
</style>
