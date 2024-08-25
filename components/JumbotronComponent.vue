<template>
  <div>
    <section
      class="relative min-h-[100vh] pt-24 md:pt-0 transition-opacity duration-500 ease-in-out"
      id="home"
    >
      <!-- Black background div -->
      <div class="absolute inset-0 bg-black"></div>

      <!-- Main background image div with fading animation -->
      <div
        :style="{ backgroundImage: `url(${currentBackground})` }"
        class="absolute inset-0 bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-0': fadingOut, 'opacity-100': !fadingOut }"
      ></div>

      <div
        class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-12 pt-16"
      >
        <!-- Text Section -->
        <div
          class="relative flex flex-col justify-center p-8 rounded-lg shadow-lg"
        >
          <h1
            class="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl mb-4"
          >
            Sambal Pecel Mbak Ika
          </h1>
          <p class="text-lg font-normal text-gray-300 lg:text-xl mb-8">
            Sambal Pecel Mbak Ika, sambal khas yang terbuat dari bahan-bahan
            alami pilihan.
          </p>
          <div
            class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 max-h-[3em]"
          >
            <a
              href="#"
              class="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white bg-[#FA7070] rounded-lg hover:bg-[#EE4E4E] visited:text-white transition-colors duration-300 h-12 min-w-[150px]"
            >
              Pesan Sekarang
              <svg
                class="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#about-us"
              class="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-[#FA7070] border border-white rounded-lg visited:text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 transition-colors duration-300 h-12 min-w-[150px]"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
        <!-- Image Section -->
        <div class="hidden md:flex justify-center mt-12 z-[99] items-center">
          <img
            width="400"
            src="sambaltransparent.png"
            alt="Sambal Pecel Mbak Ika"
          />
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      backgrounds: [
        'bgjumbo.jpg',

        // Add more image URLs here
      ],
      currentBackgroundIndex: 0,
      fadingOut: false,
      phoneNumber: '6285718251092', // Replace with your phone number
      message: 'Saya mau join Koppling',
    }
  },

  computed: {
    whatsappLink() {
      const encodedMessage = encodeURIComponent(this.message)
      return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`
    },
    currentBackground() {
      return this.backgrounds[this.currentBackgroundIndex]
    },
  },
  methods: {
    changeBackground() {
      this.fadingOut = true
      setTimeout(() => {
        this.currentBackgroundIndex =
          (this.currentBackgroundIndex + 1) % this.backgrounds.length
        this.fadingOut = false
      }, 1000) // Match this duration with the CSS animation duration
    },
  },
}
</script>
<style scoped>
/* Ensure buttons do not stretch height */
a {
  display: inline-flex; /* Maintain inline behavior and align items vertically */
  align-items: center; /* Vertically center the content */
  height: auto; /* Prevent height stretching */
}

button {
  display: inline-flex; /* Ensure button elements behave similarly */
  align-items: center;
  height: auto;
}

/* Optional: Adjust button text size for better appearance */
a {
  font-size: 1rem; /* Adjust size as needed */
}

svg {
  vertical-align: middle; /* Align icon with text */
}

/* Transition effects */
.transition-colors {
  transition: background-color 0.3s ease;
}
</style>
