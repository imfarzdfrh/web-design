<template>
  <div class="min-h-screen bg-lightBackground dark:bg-darkBackground text-darkText dark:text-lightText">
    <LayoutsNavBar />
    <main>
      <slot />
    </main>
    <LayoutsFooter />
  </div>
</template>
