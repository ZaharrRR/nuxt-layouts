<template>
  <div class="flex gap-3">
    <div v-for="(card, index) in cards" :key="index">
      <div class="card-block group" :style="`background-color: ${card.color}`">
        <div class="title">{{ card.title }}</div>
        <div class="description">
          <span>{{ card.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "Website development",
    description:
      "Creating user-centric websites with mobile first design is our specialty. Take your business online with a premium website, designed for optimal functionality on all devices.",
    color: "#A8DAF4",
  },
  {
    title: "SEO / Goolge Ads",
    description:
      "Stay ahead of the competition and dominate the search engine results with our comprehensive SEO and Google Ads services.",
    color: "#B2DFCB",
  },
  {
    title: "Socials",
    description:
      "Unlock the full potential of your brand's reach with our tailored social media strategies designed to maximise visibility & drive traffic",
    color: "#F5A092",
  },
];
</script>

<style scoped>
.card-block {
  @apply h-[500px] w-[500px] rounded-[2rem] px-[64px] py-[48px] relative transition duration-500 ease-in-out transform hover:translate-y-2 hover:shadow-lg;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  @apply text-[56px];
}

.description {
  @apply absolute p-[64px] inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out;
}
</style>
