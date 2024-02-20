<template>
  <div>
    <Head>
      <Title>Home page</Title>
      <Meta
        name="description"
        content="This is a home page of this site"
      ></Meta>
    </Head>

    <div class="flex gap-3">
      <NuxtLink class="link" to="/3cards">3 category cards</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.link {
  @apply border rounded p-2 bg-slate-200;
}
</style>
