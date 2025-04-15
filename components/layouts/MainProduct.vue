<template>
    <div class="flex flex-col w-full h-screen mx-auto dark:bg-darkBackground dark:text-darkText">
      <h1 class="mx-20 text-4xl font-bold p-14">Hot Seller</h1>
      <div class="relative w-full max-w-4xl mx-auto transition-transform transform bg-gray-300 shadow-md duration-600 opacity-90 hover:opacity-100 rounded-xl h-80 hover:scale-105">
        <img src="/temp/pic/banner3.png" alt="Image 1" class="object-cover w-full h-full rounded-xl">
        <div class="absolute p-3 text-white bottom-4 left-4">
          <h2 class="text-2xl font-bold">A New Krea</h2>
          <p>Announcing our Series B</p>
          <button class="px-4 py-2 mt-2 text-white bg-blue-500 rounded-full">Read more</button>
        </div>
      </div>
      <div class="flex justify-center m-4 space-x-4">
        <div class="relative w-1/3 m-5 my-5 transition-transform duration-300 bg-gray-300 shadow-md opacity-90 h-80 rounded-xl hover:opacity-100 teansform hover:scale-105">
          <img src="/temp/pic/banner2.png" alt="Image 2" class="object-cover w-full h-full rounded-xl">
          <div class="absolute p-3 text-white bottom-4 left-4">
            <h2 class="text-2xl font-bold">New Tool</h2>
            <p>Change the style of any video</p>
            <button class="px-4 py-2 mt-2 text-white bg-blue-500 rounded-full">Restyle Videos</button>
          </div>
        </div>
        <div class="relative w-1/3 m-5 my-5 transition-transform duration-300 bg-gray-300 shadow-md opacity-90 hover:opacity-100 h-80 rounded-xl teansform hover:scale-105">
          <img src="/temp/pic/banner1.png" alt="Image 3" class="object-cover w-full h-full rounded-xl">
          <div class="absolute p-3 text-white bottom-4 left-4">
            <h2 class="text-2xl font-bold">Exciting Update</h2>
            <p>Discover the latest features</p>
            <button class="px-4 py-2 mt-2 text-white bg-blue-500 rounded-full">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  