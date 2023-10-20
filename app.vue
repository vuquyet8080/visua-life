<script setup>
import { ref, onMounted } from "vue";
const config = useRuntimeConfig();

const key = ref(config.public.NUXT_HLS_SECRET);

function increment() {
  key.value++;
}

onMounted(() => {
  if (Hls.isSupported()) {
    const video1 = document.getElementById("video1");
    const hls = new Hls();
    var numsKey = key.value?.split(",").map(function (str) {
      return parseInt(str);
    });
    console.log("numsKey", numsKey);
    hls.on(Hls.Events.KEY_LOADED, (event, data) => {
      data.keyInfo.decryptdata.key = new Uint8Array(numsKey);
    });
    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      hls.loadSource("https://dwcwrzfviad6c.cloudfront.net/bacthoxay1234.m3u8");
    });
    hls.attachMedia(video1);
  }
});
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="absolute hidden w-44 h-44 xl:block left-16 top-12">
      <NuxtImg src="/pngwing.webp" />
    </div>

    <div
      class="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-3 lg:py-16 lg:px-6"
    >
      <div
        class="font-light text-gray-500 lg:col-span-2 sm:text-lg dark:text-gray-400"
      >
        <h2
          class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          🎄 Trang Trí Cây Thông Noel Đón Ngày Giáng Sinh 🎄
        </h2>
        <p class="pt-6 mb-4">
          Ngày Giáng Sinh đã đến, và giờ đây là thời điểm hoàn hảo để biến cây
          thông Noel thành tâm điểm ấn tượng trong ngày này. Dưới đây là một số
          gợi ý trang trí thú vị:
        </p>
      </div>
      <div class="flex items-center justify-center mt-8">
        <NuxtImg src="/pngwing.com.webp" />
      </div>
    </div>
    <div class="flex items-center justify-center w-full py-6">
      <video width="700" controls id="video1"></video>
    </div>
  </section>
  <footer class="p-10 footer bg-slate-950 text-neutral-content">
    <nav>
      <header class="footer-title">Services</header>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <header class="footer-title">Company</header>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav>
    <nav>
      <header class="footer-title">Legal</header>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav>
  </footer>
</template>
