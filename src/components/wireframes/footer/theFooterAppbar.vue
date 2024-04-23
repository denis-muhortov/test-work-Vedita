<template>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation v-model="section" :elevation="10" bg-color="primary" mode="shift">
      <v-btn>
        <v-icon>mdi-television-play</v-icon>

        <span>Video</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-music-note</v-icon>

        <span>Music</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-book</v-icon>

        <span>Book</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-image</v-icon>

        <span>Image</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
<script lang="ts">
  export default {
    data: () => ({ 
        section: 0 
    }),
  }
</script>