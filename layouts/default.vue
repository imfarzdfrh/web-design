<template>
  <div class="min-h-screen flex flex-col">
    <LayoutsNavBar />
    <main id="main-content" class="flex-1">
      <slot />
    </main>
    <LayoutsFooter />
  </div>
</template>
