<script lang="ts">
	import kramerImage from '$lib/assets/1.jpg';
	import smitherImage from '$lib/assets/Mark-Portrait.jpeg';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>The Paulsen Post — Front Page</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-8">
	<!-- Masthead -->
	<header class="border-b-4 border-double border-black pb-4 text-center">
		<p class="font-special text-xs tracking-[0.3em] uppercase">Sioux Falls, South Dakota</p>
		<h1 class="my-2 font-playfair text-6xl leading-tight font-black md:text-7xl">
			The Paulsen Post
		</h1>
		<div class="flex items-center justify-between border-t border-black pt-2 text-xs">
			<span class="font-special">Vol. XLII, No. 2</span>
			<span class="font-special">Wednesday, April 8, 2026</span>
			<span class="font-special">Price: One Good Laugh</span>
		</div>
	</header>

	<!-- Front Page Grid -->
	<div class="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
		<!-- Lead Story (spans 2 cols) -->
		<article class="md:col-span-2 md:border-r-2 md:border-black md:pr-8">
			<p class="font-special text-xs tracking-[0.2em] text-red-800 uppercase">Lead Story</p>
			<h2 class="mt-2 mb-3 font-playfair text-3xl leading-tight font-black md:text-4xl">
				<a href={resolve('/articles/smither-springsteen')} class="hover:underline">
					CSO Mark Smither Delivers Stirring Sermon on the Gospel of Springsteen
				</a>
			</h2>
			<p class="mb-4 font-special text-sm text-neutral-600 italic">
				Paulsen's Chief Strategy Officer makes the case for <em>Born to Run</em> — and for never waiting
				to see your heroes live
			</p>

			<figure class="mb-4">
				<div class="overflow-hidden border-2 border-neutral-300 bg-neutral-200 shadow-md">
					<img
						src={smitherImage}
						alt="Chief Strategy Officer Mark Smither addresses the agency"
						class="h-auto w-full grayscale"
					/>
				</div>
				<figcaption class="mt-2 font-special text-xs text-neutral-600 italic">
					Smither holds court on 1975, New Jersey, and the $30 ticket he'll never get back.
				</figcaption>
			</figure>

			<p
				class="mb-4 font-lora text-base leading-relaxed first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:leading-none first-letter:font-bold"
			>
				SIOUX FALLS — Paulsen Chief Strategy Officer Mark Smither stepped away from market
				positioning and audience analytics this week to deliver what witnesses are calling "a deeply
				personal, occasionally tearful, and frankly unstoppable" presentation on the 1975 Bruce
				Springsteen record <em>Born to Run</em>, an album he declared to be, quite simply, one of
				the greatest ever made.
			</p>

			<a
				href={resolve('/articles/smither-springsteen')}
				class="font-special text-sm tracking-[0.15em] uppercase hover:underline"
			>
				Continue Reading &rarr;
			</a>
		</article>

		<!-- Sidebar Stories -->
		<aside class="md:col-span-1">
			<p class="font-special text-xs tracking-[0.2em] text-red-800 uppercase">Also In This Issue</p>
			<div class="mt-2 border-t-2 border-black pt-4">
				<figure class="mb-3">
					<div class="overflow-hidden border-2 border-neutral-300 bg-neutral-200 shadow-md">
						<img
							src={kramerImage}
							alt="Paulsen employee searching for the missing portrait"
							class="h-auto w-full grayscale"
						/>
					</div>
				</figure>
				<h3 class="mb-2 font-playfair text-xl leading-tight font-black">
					<a href={resolve('/articles/missing-kramer-portrait')} class="hover:underline">
						Beloved Kramer Portrait Vanishes From Paulsen Marketing Agency
					</a>
				</h3>
				<p class="mb-3 font-special text-xs text-neutral-600 italic">
					Coworker Brett left "devastated" — Two brave employees lead the charge to recover the
					iconic artwork
				</p>
				<p class="font-lora text-sm leading-relaxed text-neutral-700">
					Authorities are calling it the most brazen act of art theft since the Isabella Stewart
					Gardner heist. Security cameras were reportedly "conveniently malfunctioning."
				</p>
				<a
					href={resolve('/articles/missing-kramer-portrait')}
					class="mt-2 inline-block font-special text-xs tracking-[0.15em] uppercase hover:underline"
				>
					Continue Reading &rarr;
				</a>
			</div>
		</aside>
	</div>

	<!-- Footer -->
	<footer class="mt-12 border-t-4 border-double border-black pt-4 text-center">
		<p class="font-special text-xs text-neutral-500">
			&copy; 2026 The Paulsen Post &bull; "All the news that's fit to print (and some that isn't)"
			&bull; A Paulsen Marketing Agency Publication
		</p>
	</footer>
</div>
