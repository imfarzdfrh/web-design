<script setup>
import { ref } from 'vue'

// Form data
const form = ref({
  name: '',
  email: '',
  message: ''
})

// Handle form submission
const handleSubmit = () => {
  // You can handle form submission logic here, such as sending the form data to an API or storing it
  console.log('Form Submitted:', form.value)
  // Reset the form after submission
  form.value.name = ''
  form.value.email = ''
  form.value.message = ''
}
</script>

<template>
  <div class="container mx-auto py-12">
    <h1 class="text-4xl font-bold text-center mb-8">Contact Us</h1>

    <!-- Contact Information Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
      <p class="text-lg text-gray-700 mb-6">
        If you have any questions or need assistance with our AI accounts, feel free to reach out to
        us. Our team is here to help and we aim to respond as quickly as possible.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Info 1 -->
        <div class="bg-white shadow-lg rounded-lg p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Email Us</h3>
          <p class="text-gray-700 mb-4">
            For general inquiries, support, or any questions about our products, send us an email
            at:
          </p>
          <a href="mailto:support@aiaccountsstore.com" class="text-blue-600 hover:text-blue-800"
            >support@aiaccountsstore.com</a
          >
        </div>

        <!-- Contact Info 2 -->
        <div class="bg-white shadow-lg rounded-lg p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Call Us</h3>
          <p class="text-gray-700 mb-4">
            You can also reach us by phone. Our customer support team is available from 9 AM to 6 PM
            (GMT):
          </p>
          <p class="text-gray-700 text-lg font-semibold">+1 (800) 123-4567</p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="bg-gray-50 rounded-lg p-8 shadow-lg">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
      <p class="text-lg text-gray-700 mb-6">
        Please fill out the form below, and our team will get back to you as soon as possible.
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name Field -->
        <div>
          <label for="name" class="block text-gray-800 font-medium mb-2">Your Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required />
        </div>

        <!-- Email Field -->
        <div>
          <label for="email" class="block text-gray-800 font-medium mb-2">Your Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required />
        </div>

        <!-- Message Field -->
        <div>
          <label for="message" class="block text-gray-800 font-medium mb-2">Your Message</label>
          <textarea
            v-model="form.message"
            id="message"
            rows="5"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
            required></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end">
          <button
            type="submit"
            class="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send Message
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<style scoped>
/* Optional custom styling for the page */
</style>
