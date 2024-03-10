<script setup lang="ts">

</script>

<template>
  <div class="preloader">
    <div class="preloader__wrapper">
      <div class="preloader__wrapper__dots">
        <span class="active_1"></span>
        <span class="active_2"></span>
        <span class="active_3"></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.preloader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .25);
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    display: flex;
    align-items: end;
    gap: 8px;

    &__text {
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }

    &__dots {
      display: flex;
      align-items: center;
      gap: 12px;

      span {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;

        transition: .15s all ease-in-out;

        @keyframes animate-spinner {
          0% {
            scale: 1;
          }
          50% {
            scale: 1.5;
          }
          100% {
            scale: 2;
          }
        }

        &.active_1 {
          animation: animate-spinner .5s 0s ease-in-out forwards infinite;
        }

        &.active_2 {
          animation: animate-spinner .5s 0s ease-in-out forwards infinite;
        }

        &.active_3 {
          animation: animate-spinner .5s 0s ease-in-out forwards infinite;
        }
      }
    }

  }
}
</style>
