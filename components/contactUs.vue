<template>
  <section class="my-16 transition-all duration-1000 sections" id="contact">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Informasi Kontak -->
        <div
          class="contact-info w-full lg:w-1/2 p-4 bg-gray-100 rounded-lg shadow-md"
        >
          <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900">
            INFORMASI KONTAK
          </h5>
          <ul class="space-y-4 text-gray-700">
            <li>
              <p class="font-semibold">Alamat:</p>
              <p>Jl. Contoh No.123, Jakarta, Indonesia</p>
            </li>
            <li>
              <p class="font-semibold">Telepon:</p>
              <p>(021) 123-4567</p>
            </li>
            <li>
              <p class="font-semibold">Email:</p>
              <p>info@example.com</p>
            </li>
            <li>
              <p class="font-semibold">Jam Operasional:</p>
              <p>Senin - Jumat: 09.00 - 17.00</p>
              <p>Sabtu: 10.00 - 14.00</p>
              <p>Minggu: Tutup</p>
            </li>
          </ul>
        </div>

        <!-- Peta -->
        <div class="map w-full lg:w-1/2 p-4 bg-gray-100 rounded-lg shadow-md">
          <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900">
            ALAMAT
          </h5>
          <div class="embed w-full">
            <div
              style="
                overflow: hidden;
                resize: none;
                max-width: 100%;
                width: 500px;
                height: 500px;
              "
            >
              <div
                id="embed-map-display"
                style="height: 100%; width: 100%; max-width: 100%"
              >
                <iframe
                  style="height: 100%; width: 100%; border: 0"
                  frameborder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=smkn+2+bekasi&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                ></iframe>
              </div>
              <a
                class="embed-ded-maphtml"
                href="https://www.bootstrapskins.com/themes"
                id="authorize-maps-data"
                >premium bootstrap themes</a
              ><style>
                #embed-map-display img {
                  max-height: none;
                  max-width: none !important;
                  background: none !important;
                }
              </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-info,
.map {
  background-color: #f3f4f6; /* Light gray for the background */
  color: #333; /* Dark gray for the text */
}
.contact-info h5,
.map h5 {
  background-color: #e5e7eb; /* Slightly darker gray for header background */
  padding: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
}
</style>
