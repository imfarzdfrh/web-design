<script setup lang="ts">
import { reactive, ref } from 'vue'
import {
  ChatBubbleLeftRightIcon,
  ClipboardDocumentIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Contact | MySite',
  description: 'Prepare a question or message for the MySite team.'
})

const form = reactive({ name: '', email: '', subject: '', message: '' })
const copyState = ref<'idle' | 'copied' | 'failed'>('idle')
const draft = ref('')

function formatDraft() {
  return [
    'Subject: ' + form.subject.trim(),
    'From: ' + form.name.trim() + ' <' + form.email.trim() + '>',
    '',
    form.message.trim()
  ].join('\n')
}

async function prepareMessage() {
  draft.value = formatDraft()
  copyState.value = 'idle'
  if (!import.meta.client || !navigator.clipboard?.writeText) {
    copyState.value = 'failed'
    return
  }
  try {
    await navigator.clipboard.writeText(draft.value)
    copyState.value = 'copied'
  } catch {
    copyState.value = 'failed'
  }
}
</script>

<template>
  <div class="page-shell py-12 sm:py-20">
    <div class="mb-12 max-w-3xl">
      <p class="eyebrow">GET IN TOUCH</p>
      <h1 class="mt-3 text-[clamp(2.5rem,6vw,4.7rem)] font-bold leading-tight">Questions? Let's talk<span class="text-[var(--accent)]">.</span></h1>
      <p class="mt-5 max-w-2xl text-base leading-8 text-muted">
        Have a product question or an idea for MySite? Prepare a message below while our contact service is being connected.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
      <aside class="space-y-5">
        <div class="surface rounded-[28px] p-7 sm:p-9">
          <span class="flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
            <ChatBubbleLeftRightIcon class="size-6" />
          </span>
          <h2 class="mt-6 text-xl font-bold">We're building a better way to connect.</h2>
          <p class="mt-3 text-sm leading-7 text-muted">
            Direct message delivery isn't available yet. You can prepare and copy your note here, then send it using your preferred channel once official contact details are published.
          </p>
        </div>
        <div class="rounded-[28px] border border-[var(--stroke)] bg-[var(--accent-soft)] p-7">
          <InformationCircleIcon class="size-6 text-[var(--accent)]" />
          <h3 class="mt-4 font-bold">Before you send</h3>
          <p class="mt-2 text-sm leading-7 text-muted">
            Please don't include passwords, payment card details, or other sensitive information in a message.
          </p>
        </div>
        <NuxtLink to="/productpage" class="surface group flex items-center justify-between rounded-2xl px-6 py-5 text-sm font-semibold">
          Explore the product catalog
          <UiSimpleArrow class="size-4 text-[var(--accent)] transition-transform group-hover:translate-x-1" />
        </NuxtLink>
      </aside>

      <section class="surface rounded-[30px] p-6 sm:p-9" aria-labelledby="contact-form-title">
        <div class="flex items-center gap-3">
          <span class="flex size-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
            <SparklesIcon class="size-5" />
          </span>
          <div>
            <h2 id="contact-form-title" class="text-xl font-bold">Prepare your message</h2>
            <p class="mt-1 text-xs text-muted">No message is sent automatically.</p>
          </div>
        </div>

        <form class="mt-8 grid gap-5" @submit.prevent="prepareMessage">
          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="contact-name" class="mb-2 block text-sm font-semibold">Your name</label>
              <input id="contact-name" v-model.trim="form.name" type="text" name="name" autocomplete="name"
                required maxlength="100" placeholder="Your name"
                class="w-full rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] px-4 py-3.5 text-sm"
                @input="copyState = 'idle'" />
            </div>
            <div>
              <label for="contact-email" class="mb-2 block text-sm font-semibold">Email address</label>
              <input id="contact-email" v-model.trim="form.email" type="email" name="email" autocomplete="email"
                required maxlength="254" placeholder="you@example.com"
                class="w-full rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] px-4 py-3.5 text-sm"
                @input="copyState = 'idle'" />
            </div>
          </div>
          <div>
            <label for="contact-subject" class="mb-2 block text-sm font-semibold">Subject</label>
            <input id="contact-subject" v-model.trim="form.subject" type="text" name="subject"
              required maxlength="140" placeholder="How can we help?"
              class="w-full rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] px-4 py-3.5 text-sm"
              @input="copyState = 'idle'" />
          </div>
          <div>
            <label for="contact-message" class="mb-2 block text-sm font-semibold">Message</label>
            <textarea id="contact-message" v-model.trim="form.message" name="message" rows="6"
              required maxlength="4000" placeholder="Tell us a little more about your question..."
              class="w-full resize-y rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] px-4 py-3.5 text-sm leading-7"
              @input="copyState = 'idle'" />
            <p class="mt-2 text-right text-xs text-muted">{{ form.message.length }} / 4000</p>
          </div>
          <button type="submit" class="button-primary inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold">
            <ClipboardDocumentIcon class="size-5" />
            Copy message draft
          </button>
        </form>

        <div v-if="draft" class="mt-6 rounded-2xl border border-[var(--stroke)] bg-[var(--page)] p-4">
          <div role="status" class="flex items-center gap-2 text-sm font-semibold">
            <CheckCircleIcon v-if="copyState === 'copied'" class="size-5 text-emerald-500" />
            <InformationCircleIcon v-else class="size-5 text-[var(--accent)]" />
            {{ copyState === 'copied' ? 'Draft copied to clipboard — not sent.' : 'Draft ready to copy manually — not sent.' }}
          </div>
          <label for="contact-draft" class="mt-4 block text-xs font-semibold text-muted">Your prepared message</label>
          <textarea id="contact-draft" readonly :value="draft" rows="5"
            class="mt-2 w-full resize-y rounded-xl border border-[var(--stroke)] bg-[var(--panel)] p-3 text-sm leading-6" />
        </div>
      </section>
    </div>
  </div>
</template>
