<script lang="ts">
	import image1 from '$lib/assets/1.jpg';
	import image2 from '$lib/assets/2.jpg';
</script>

<svelte:head>
	<title>The Paulsen Times — MISSING: Beloved Kramer Portrait</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-8">
	<!-- Masthead -->
	<header class="border-b-4 border-double border-black pb-4 text-center">
		<p class="font-special text-xs tracking-[0.3em] uppercase">Sioux Falls, South Dakota</p>
		<h1 class="my-2 font-playfair text-6xl leading-tight font-black md:text-7xl">
			The Paulsen Times
		</h1>
		<div class="flex items-center justify-between border-t border-black pt-2 text-xs">
			<span class="font-special">Vol. XLII, No. 1</span>
			<span class="font-special">Wednesday, April 2, 2026</span>
			<span class="font-special">Price: One Good Laugh</span>
		</div>
	</header>

	<!-- Breaking News Banner -->
	<div class="my-4 bg-red-800 px-4 py-2 text-center">
		<span class="font-special text-sm font-bold tracking-[0.25em] text-white uppercase">
			*** Breaking News ***
		</span>
	</div>

	<!-- Main Headline -->
	<article class="mb-8">
		<h2
			class="mb-4 border-b-2 border-black pb-4 text-center font-playfair text-4xl leading-snug font-black md:text-5xl"
		>
			Beloved Kramer Portrait Vanishes<br />
			From Paulsen Marketing Agency
		</h2>

		<p class="mb-6 text-center font-special text-sm text-neutral-600 italic">
			Coworker Brett left "devastated" — Two brave employees lead the charge to recover the iconic
			artwork
		</p>

		<!-- Two-column lead with drop cap -->
		<div class="columns-1 gap-8 md:columns-2">
			<p
				class="mb-4 font-lora text-lg leading-relaxed first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:leading-none first-letter:font-bold"
			>
				SIOUX FALLS — In what authorities are calling the most brazen act of art theft since the
				Isabella Stewart Gardner heist of 1990, a beloved portrait of one Cosmo Kramer has
				disappeared without a trace from the offices of Paulsen Marketing Agency. The portrait, long
				considered the crown jewel of employee Brett's personal desk collection, was discovered
				missing early this week under circumstances that can only be described as deeply suspicious.
			</p>

			<p class="mb-4 font-lora text-base leading-relaxed">
				"I came in Monday morning, coffee in hand, ready to start the week," a visibly shaken Brett
				told reporters. "And there it was — or rather, there it <em>wasn't</em>. Just an empty space
				where Kramer's glorious face once hung. The void it left behind is both literal and
				emotional."
			</p>

			<p class="mb-4 font-lora text-base leading-relaxed">
				The portrait — a museum-quality print of the famous Cosmo Kramer painting from the beloved
				television series <em>Seinfeld</em> — had been a fixture of the agency's media environment for
				what sources describe as "a meaningful amount of time." Its sudden disappearance has sent shockwaves
				through the tight-knit Paulsen team.
			</p>

			<p class="mb-4 font-lora text-base leading-relaxed">
				"This isn't just a picture," said one anonymous coworker, fighting back what appeared to be
				tears, or possibly laughter. "This is a piece of our culture. Kramer watched over us during
				our tightest deadlines. He was there for every brainstorm, every late night. He was one of
				us."
			</p>
		</div>
	</article>

	<!-- Hero Images Section -->
	<section class="mb-8 border-y-2 border-black py-6">
		<h3 class="mb-4 text-center font-playfair text-2xl font-bold">
			Heroes on the Hunt: The Search Effort
		</h3>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<figure>
				<div class="overflow-hidden border-2 border-neutral-300 bg-neutral-200 shadow-md">
					<img
						src={image1}
						alt="Catherine searching the office for the missing Kramer portrait"
						class="h-auto w-full grayscale"
					/>
				</div>
				<figcaption class="mt-2 font-special text-xs text-neutral-600 italic">
					Paulsen employee Catherine scours the premises in a tireless search for the missing
					portrait. "We won't rest until Kramer is found," she vowed.
				</figcaption>
			</figure>

			<figure>
				<div class="overflow-hidden border-2 border-neutral-300 bg-neutral-200 shadow-md">
					<img
						src={image2}
						alt="Macy investigating the office for clues about the missing portrait"
						class="h-auto w-full grayscale"
					/>
				</div>
				<figcaption class="mt-2 font-special text-xs text-neutral-600 italic">
					Fellow colleague Macy leaves no stone unturned as the investigation intensifies. Sources
					say both women have "barely slept" since the disappearance.
				</figcaption>
			</figure>
		</div>
	</section>

	<!-- Continued Coverage -->
	<section class="mb-8 columns-1 gap-8 md:columns-2">
		<h3 class="mb-3 font-playfair text-xl font-bold">A Community Rallies</h3>

		<p class="mb-4 font-lora text-base leading-relaxed">
			In the wake of the disappearance, two Paulsen employees have emerged as unlikely heroes.
			Catherine and Macy, both respected members of the agency's media team, have reportedly devoted
			every spare moment to the search effort, going above and beyond the call of duty.
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			"Catherine was the first one on the scene," noted an impressed colleague. "She was looking
			everywhere — under desks, behind monitors, in the supply closet. Her dedication is honestly
			unmatched." Macy, too, has drawn widespread praise for what witnesses describe as an
			"exhaustive and suspiciously thorough" investigation of every corner of the office.
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			The pair have been spotted combing through conference rooms, peering into ceiling tiles, and
			methodically checking areas that, frankly, no reasonable person would ever think to hide a
			portrait. Their commitment has not gone unnoticed.
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			"Those two are really something," Brett said, wiping away a single tear. "To know that my
			coworkers care this much — it restores my faith in humanity. Whoever took Kramer clearly
			doesn't understand the bond this office shares."
		</p>

		<h3 class="mt-6 mb-3 font-playfair text-xl font-bold">Investigation Ongoing</h3>

		<p class="mb-4 font-lora text-base leading-relaxed">
			At press time, the portrait remains at large. Paulsen leadership has declined to comment on
			whether security cameras captured any footage, citing an ongoing internal investigation.
			Unconfirmed reports suggest the cameras were "conveniently malfunctioning" during the
			estimated window of the theft.
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			A reward of undisclosed value — rumored to be "a Festivus dinner" — has been offered for information leading to the portrait's safe return. Tips
			can be submitted anonymously to the office suggestion box, which, ironically, has also gone
			missing.
		</p>
	</section>

	<!-- Footer -->
	<footer class="border-t-4 border-double border-black pt-4 text-center">
		<p class="font-special text-xs text-neutral-500">
			&copy; 2026 The Paulsen Times &bull; "All the news that's fit to print (and some that isn't)"
			&bull; A Paulsen Marketing Agency Publication
		</p>
	</footer>
</div>
