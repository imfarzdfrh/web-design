<script setup>
import { ref } from 'vue'

// Form data
const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form Submitted:', form.value)
  form.value.name = ''
  form.value.email = ''
  form.value.message = ''
}
</script>

<template>
  <div class="relative">
    <div class="container mx-auto py-12">
      <h1 class="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <!-- Contact Information Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold  mb-4">Get In Touch</h2>
        <p class="text-lg mb-6">
          If you have any questions or need assistance with our AI accounts, feel free to reach out
          to us. Our team is here to help and we aim to respond as quickly as possible.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-white dark:bg-gray-800/50 shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold  mb-4">Email Us</h3>
            <p class=" mb-4">
              For general inquiries, support, or any questions about our products, send us an email
              at:
            </p>
            <a href="mailto:support@aiaccountsstore.com" class="text-blue-600 hover:text-blue-800"
              >support@aiaccountsstore.com</a
            >
          </div>

          <!-- Contact Info 2 -->
          <div class="bg-white dark:bg-gray-800/50 shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold  mb-4">Call Us</h3>
            <p class=" mb-4">
              You can also reach us by phone. Our customer support team is available from 9 AM to 6
              PM (GMT):
            </p>
            <p class=" text-lg font-semibold">+1 (800) 123-4567</p>
          </div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <section class="bg-white dark:bg-gray-800/50 rounded-lg p-8 shadow-lg">
        <h2 class="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <p class="text-lg mb-6">
          Please fill out the form below, and our team will get back to you as soon as possible.
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name Field -->
          <div>
            <UiBaseInput placeholder="Enter Your Name" type="text" v-model="form.name" required />
          </div>

          <!-- Email Field -->
          <div>
            <UiBaseInput placeholder="Enter Your Email" type="email" v-model="form.email"/>
          </div>

          <!-- Message Field -->
          <div>
            <textarea
              v-model="form.message"
              id="message"
              rows="5"
              class="w-full p-3 border dark:border-none  rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-800/50"
              placeholder="Enter your message"
              required></textarea>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <UiBaseButton type="submit" color="success" class="text-white"> Send Message </UiBaseButton>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<style scoped>
</style>
