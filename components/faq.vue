<template>
  <section class="my-24 py-16 bg-gray-100" id="faq">
    <div class="container mx-auto">
      <h5
        class="mb-8 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 text-center"
      >
        FAQ
      </h5>
      <div class="accordion">
        <div
          class="mb-4 border border-gray-300 rounded"
          v-for="(item, index) in faqs"
          :key="index"
        >
          <button
            @click="toggle(index)"
            class="w-full flex justify-between items-center px-4 py-2 text-left text-gray-900 bg-white border-b border-gray-300 focus:outline-none"
          >
            <span class="text-lg font-medium">{{ item.question }}</span>
            <svg
              :class="{
                'rotate-180': activeIndex === index,
                'rotate-0': activeIndex !== index,
              }"
              class="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            class="faq-content"
            :class="{ open: activeIndex === index }"
            ref="content"
          >
            <p class="px-4 py-2 bg-gray-50 text-gray-700">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      faqs: [
        {
          question: 'Apa itu sambal Pecel Mbak Ika?',
          answer:
            'Sambal Pecel Mbak Ika adalah sambal khas yang terbuat dari              bahan-bahan alami pilihan. Sambal ini menjamin kualitas,              kebersihan, dan tentunya kelezatan autentik. Setiap rasa dalam              sambal ini berasal dari perpaduan rempah-rempah lokal berkualitas              yang menciptakan sensasi rasa yang tidak terlupakan.',
        },
        {
          question: 'Bagaimana cara memesan nya?',
          answer:
            'Anda bisa langsung menghubungi ke kontak whatsapp yang tertera, dan beritahu anda ingin memesan sambal',
        },
        {
          question: 'Berapa lama waktu pengiriman sambal Ritsu?',
          answer:
            'Waktu pengiriman biasanya antara 2-5 hari kerja tergantung lokasi pengiriman.',
        },
      ],
    }
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    },
  },
}
</script>

<style scoped>
.accordion button {
  transition: background-color 0.3s ease;
}
.accordion button:hover {
  background-color: #f3f4f6;
}

.faq-content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
}

.faq-content.open {
  max-height: 1000px; /* You can adjust this value based on the content */
  opacity: 1;
}
</style>
