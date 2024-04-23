<template>
  <Teleport to="body">
    <div class="container_toast">
        <slot />
    </div>
  </Teleport>
</template>
<style lang="scss" scoped>
.container_toast{
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 100px 50px;
    width: 500px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 9999;
    pointer-events: none;
}
</style>

<script lang="ts" setup>
//
</script>
