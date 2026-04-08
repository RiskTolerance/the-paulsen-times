<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	const PIN_LENGTH = 4;
	let digits = $state('');
	let formEl: HTMLFormElement | undefined = $state();
	let submitting = $state(false);

	// If the server returned an error, the user should start over.
	$effect(() => {
		if (form?.error) {
			digits = '';
			submitting = false;
		}
	});

	function press(d: string) {
		if (submitting) return;
		if (digits.length >= PIN_LENGTH) return;
		digits += d;
		if (digits.length === PIN_LENGTH) {
			submitting = true;
			// Wait a tick so the bound hidden input picks up the new value.
			queueMicrotask(() => formEl?.requestSubmit());
		}
	}

	function backspace() {
		if (submitting) return;
		digits = digits.slice(0, -1);
	}

	function clear() {
		if (submitting) return;
		digits = '';
	}

	const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
</script>

<svelte:head>
	<title>The Paulsen Post — Press Pass Required</title>
</svelte:head>

<div class="mx-auto max-w-sm px-4 py-12">
	<!-- Section Banner -->
	<div class="mb-6 bg-red-800 px-3 py-1.5 text-center">
		<span class="font-special text-xs font-bold tracking-[0.15em] text-white uppercase whitespace-nowrap">
			*** Press Pass Required ***
		</span>
	</div>

	<section class="mb-6 text-center">
		<h2 class="mb-3 font-playfair text-3xl font-black text-balance">
			Halt! Show Your Credentials at the Door
		</h2>
		<p class="font-lora text-base leading-relaxed text-balance">
			This publication is for credentialed staff only. Kindly present your press pass to the
			doorman.
		</p>
	</section>

	<form
		bind:this={formEl}
		method="POST"
		use:enhance={() => {
			submitting = true;
			return async ({ update }) => {
				await update({ reset: false });
			};
		}}
		class="border-2 border-black bg-neutral-50 p-6 shadow-md"
	>
		<input type="hidden" name="pin" value={digits} />

		<p class="text-center font-special text-xs tracking-[0.2em] uppercase">Press Pass No.</p>

		<!-- Digit display -->
		<div class="mt-3 mb-5 flex justify-center gap-3" aria-live="polite">
			{#each Array(PIN_LENGTH) as _, i (i)}
				<div
					class="flex h-12 w-10 items-center justify-center border-2 border-black bg-white font-playfair text-3xl"
				>
					{digits[i] ? '●' : ''}
				</div>
			{/each}
		</div>

		{#if form?.error}
			<p class="mb-3 text-center font-special text-sm text-red-800">{form.error}</p>
		{/if}

		<!-- Pinpad -->
		<div class="grid grid-cols-3 gap-2">
			{#each keys as k (k)}
				<button
					type="button"
					onclick={() => press(k)}
					disabled={submitting}
					class="border-2 border-black bg-white py-3 font-playfair text-2xl font-bold hover:bg-neutral-200 disabled:opacity-50"
				>
					{k}
				</button>
			{/each}
			<button
				type="button"
				onclick={clear}
				disabled={submitting || digits.length === 0}
				class="border-2 border-black bg-white py-3 font-special text-xs tracking-[0.15em] uppercase hover:bg-neutral-200 disabled:opacity-50"
			>
				Clear
			</button>
			<button
				type="button"
				onclick={() => press('0')}
				disabled={submitting}
				class="border-2 border-black bg-white py-3 font-playfair text-2xl font-bold hover:bg-neutral-200 disabled:opacity-50"
			>
				0
			</button>
			<button
				type="button"
				onclick={backspace}
				disabled={submitting || digits.length === 0}
				aria-label="Backspace"
				class="border-2 border-black bg-white py-3 font-playfair text-2xl hover:bg-neutral-200 disabled:opacity-50"
			>
				←
			</button>
		</div>
	</form>

	<footer class="mt-8 border-t-4 border-double border-black pt-4 text-center">
		<p class="font-special text-xs text-neutral-500">
			&copy; 2026 The Paulsen Post &bull; A Paulsen Marketing Agency Publication
		</p>
	</footer>
</div>
