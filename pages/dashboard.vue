<template>
  <div class="flex h-screen bg-lightBackground text-darkText dark:bg-darkBackground dark:text-lightText">
    <!-- Sidebar -->
    <aside class="w-64 bg-lightBackground dark:bg-darkBackground border-r shadow-md flex flex-col">
      <!-- Logo -->
      <!-- Nav -->
      <nav class="flex-1 px-4 space-y-1">
        <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition">
          <UiBaseIcon name="home" class="p-2 fill-current text-black dark:text-white" />
          <!-- -->
          <span class="ml-3 font-bold p-3 ">Dashboard</span>
        </a>
        <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition">
            <UiBaseIcon name="home" class="p-2 fill-current text-black dark:text-white" />
          <!-- -->
          <span class="ml-3 font-bold p-3 ">Team</span>
        </a>
        <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition">
            <UiBaseIcon name="home" class="p-2 fill-current text-black dark:text-white" />
          <!-- -->
          <span class="ml-3 font-bold p-3 ">Buys</span>
        </a>
        <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition">
            <UiBaseIcon name="home" class="p-2 fill-current text-black dark:text-white" />
          <!-- -->
          <span class="ml-3 font-bold p-3 ">Calender</span>
        </a>
        <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition">
            <UiBaseIcon name="home" class="p-2 fill-current text-black dark:text-white" />
          <!-- -->
          <span class="ml-3 font-bold p-3 ">Documents</span>
        </a>
        <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition">
            <UiBaseIcon name="home" class="p-2 fill-current text-black dark:text-white" />
          <!-- -->
          <span class="ml-3 font-bold p-3 ">Reports</span>
        </a>

        <!-- Your teams -->
        <div class="mt-8 p-5  text-darkText dark:text-lightText uppercase">
          Your teams
        </div>
        <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition">
          <!-- icon: H -->
          <!-- -->
          <span class="px-2">Heroicons</span>
        </a>
        <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition">
          <!-- icon: T -->
          <!-- -->
          <span class="px-2">Tailwind Labs</span>
        </a>
        <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition">
          <!-- icon: W -->
          <!-- -->
          <span class="px-2">Workcation</span>
        </a>
      </nav>

      <!-- Settings -->
      <div class="px-6 py-6 border-t border-gray-200">
        <a href="#" class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition">
          <!-- icon: Settings -->
          <!-- -->
          <span class="ml-3">Settings</span>
        </a>
      </div>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden px-10">
      <!-- Top bar -->
      <header class="flex items-center justify-between bg-lightBackground dark:bg-darkBackground px-6 py-4 shadow-sm">
        <!-- Search --> 
        <div class="relative">
          <h2 class="text-lg font-bold">Main Tools</h2>
        </div>
        <!-- Right actions -->
        
      </header>

      <!-- Content placeholder -->
      <main class="flex-1 p-6 overflow-auto">
        <div class="h-full rounded-lg border-2 border-dashed border-gray-300 bg-white">
          <!-- محتوای اصلی اینجا -->
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* همه استایل‌ها با Tailwind هستن؛ اینجا فقط اگه لازم شد override بکنی */
</style>
