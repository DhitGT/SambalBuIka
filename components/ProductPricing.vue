<template>
  <section class="bg-gray-100" id="pricing">
    <div class="my-12 pa-6">
      <v-container>
        <div class="text-center mb-8">
          <span class="text-4xl font-bold mb-2 block">
            Harga Sambal Pecel Mbak Ika
          </span>
          <p class="text-lg text-gray-600">
            Tersedia untuk pre-order dan bisa Cash on Delivery (COD).
          </p>
        </div>
        <div class="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          <div
            v-for="product in products"
            :key="product.id"
            class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div class="relative w-full aspect-w-1 aspect-h-1">
              <img
                :src="product.image"
                :alt="product.title"
                class="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div class="p-6 flex flex-col items-center">
              <h2 class="text-2xl font-bold mb-2">{{ product.title }}</h2>
              <p class="text-lg text-gray-600 mb-4">
                Harga: Rp{{ product.price }}
              </p>
              <button
                class="bg-[#FA7070] w-full hover:bg-[#EE4E4E] text-white font-medium py-2 px-6 rounded-lg"
              >
                Pesan
              </button>
            </div>
          </div>
        </div>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Sambal Pecel Box 500g',
          price: '25.000',
          image: 'sambal3.jpg', // Replace with actual image path
        },
        {
          id: 2,
          title: 'Sambal Pecel Box 250g',
          price: '13.000',
          image: 'sambal250g.png', // Replace with actual image path
        },
      ],
    }
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  gap: 16px;
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.aspect-w-1 {
  aspect-ratio: 1 / 1;
}

.aspect-h-1 {
  aspect-ratio: 1 / 1;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
