<script lang="ts">
	import { resolve } from '$app/paths';
	import portrait from '$lib/assets/Mark-Portrait.jpeg';
	import square from '$lib/assets/Mark-Square.jpg';
</script>

<svelte:head>
	<title>The Paulsen Post — CSO Mark Smither on Bruce Springsteen</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-8">
	<nav class="mb-4">
		<a href={resolve('/')} class="font-special text-xs tracking-[0.2em] uppercase hover:underline">
			&larr; Back to Front Page
		</a>
	</nav>

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

	<!-- Section Banner -->
	<div class="my-4 bg-red-800 px-4 py-2 text-center">
		<span class="font-special text-sm font-bold tracking-[0.25em] text-white uppercase">
			*** Arts &amp; Culture Desk ***
		</span>
	</div>

	<!-- Headline -->
	<article class="mb-8">
		<h2
			class="mb-4 border-b-2 border-black pb-4 text-center font-playfair text-4xl leading-snug font-black md:text-5xl"
		>
			CSO Mark Smither Delivers Stirring<br />
			Sermon on the Gospel of Springsteen
		</h2>

		<p class="mb-6 text-center font-special text-sm text-neutral-600 italic">
			In an unscheduled cultural address, Paulsen's Chief Strategy Officer makes the case for
			<em>Born to Run</em> — and for never waiting to see your heroes live
		</p>

		<!-- Lead with drop cap -->
		<div class="columns-1 gap-8 md:columns-2">
			<p
				class="mb-4 font-lora text-lg leading-relaxed first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:leading-none first-letter:font-bold"
			>
				SIOUX FALLS — Paulsen Chief Strategy Officer Mark Smither stepped away from market
				positioning and audience analytics this week to deliver what witnesses are calling "a deeply
				personal, occasionally tearful, and frankly unstoppable" presentation on the 1975 Bruce
				Springsteen record <em>Born to Run</em>, an album he declared to be, quite simply, one of
				the greatest ever made.
			</p>

			<p class="mb-4 font-lora text-base leading-relaxed">
				"American music doesn't know where it's at," Smither told the assembled crowd, setting the
				scene. "It's post-'69. It's post-Woodstock. That baby boomer generation…" He paused to let
				the weight of 1975 settle over the conference room. "You can listen to the top forty in
				1975, and it's all over the place."
			</p>

			<p class="mb-4 font-lora text-base leading-relaxed">
				Into that cultural vacuum, Smither explained, walked a young New Jersey songwriter on his
				third and likely final chance. "Prior to that, he had two albums that really didn't do very
				well," he said. "The record company was gonna drop him if he doesn't come up with something.
				So Bruce Springsteen channels his experience living in New Jersey and creates this sort of
				epic musical cinema."
			</p>
		</div>
	</article>

	<!-- Portrait feature -->
	<section class="mb-8 border-y-2 border-black py-6">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<figure class="md:col-span-1">
				<div class="overflow-hidden border-2 border-neutral-300 bg-neutral-200 shadow-md">
					<img
						src={portrait}
						alt="Chief Strategy Officer Mark Smither addresses the agency"
						class="h-auto w-full grayscale"
					/>
				</div>
				<figcaption class="mt-2 font-special text-xs text-neutral-600 italic">
					Chief Strategy Officer Mark Smither holds court. "He writes his own songs. He writes his
					own lyrics," Smither said of Springsteen, visibly moved.
				</figcaption>
			</figure>

			<div class="md:col-span-2">
				<h3 class="mb-3 font-playfair text-2xl font-bold">A Thirteen-Year-Old in Rapid City</h3>
				<p class="mb-4 font-lora text-base leading-relaxed">
					At the heart of Smither's remarks was a story about himself as a boy: thirteen years old,
					living in Rapid City, South Dakota, and thoroughly unmoved by the radio. "Trying to figure
					out what I really like in life, and nothing really appealed to me," he recalled. Then came
					the album.
				</p>
				<p class="mb-4 font-lora text-base leading-relaxed">
					"It didn't sound like anything else on the radio. It didn't sound like anything before,
					and it hasn't sounded like anything since," Smither said. "It's got a little bit of rock
					'n' roll. It's got Detroit. It's got Motown. It's got Clarence Clemons playing the
					saxophone, which is incredible."
				</p>
				<p class="mb-4 font-lora text-base leading-relaxed">
					More than the sound, he said, it was the words. "I opened up this album, and all the
					lyrics are in there. I'm reading these lyrics like this is a poet that's trying to tell me
					something." Smither paused, and then delivered what several Paulsen employees described as
					the line of the afternoon: "The reason I'm a writer today is I opened up this album."
				</p>
			</div>
		</div>
	</section>

	<!-- Continued Coverage -->
	<section class="mb-8 columns-1 gap-8 md:columns-2">
		<h3 class="mb-3 font-playfair text-xl font-bold">"Who Do I Wanna Be?"</h3>

		<p class="mb-4 font-lora text-base leading-relaxed">
			Asked what <em>Born to Run</em> was really <em>about</em>, Smither offered a reading that
			would not be out of place in a graduate seminar. "It just reflected what was going on in a lot
			of people's lives," he said. "They felt like there needed to be something bigger. They wanted
			to break out. They didn't trust institutions. They kind of had to rely on their own selves."
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			"If you're a young person, thirteen, fourteen years old," he continued, "you just don't know
			where you belong, and you don't know where you fit in. Until you hear something, or see
			something, or experience something that says, <em
				>I get this. This appeals to me, and I want to learn more about it</em
			> — that's what this did for me."
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			Smither described the album as a single sustained work rather than a collection of songs. "A
			lot of people don't listen to music in albums these days, and you have to listen to the whole
			thing," he said. "It takes you from the beginning all the way to the end. You're on a sort of
			a ride, if you will." The best song, in his estimation? "<em>Born to Run</em>."
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			As evidence of his commitment, Smither disclosed that he personally owns three copies of the
			record — one at home, one at the office, and a spare. He does not, he confirmed, own a
			turntable. "Just in case I lose one," he explained.
		</p>

		<h3 class="mt-6 mb-3 font-playfair text-xl font-bold">The $30 Regret</h3>

		<p class="mb-4 font-lora text-base leading-relaxed">
			The address took an emotional turn when Smither recounted the great missed opportunity of his
			young life. The year was 1984. <em>Born in the USA</em> had just dropped. Smither, by his own admission,
			was "busted ass broke" and had just gotten back from an Elton John show in Lincoln, Nebraska, when
			his friends announced they were heading right back to Lincoln to see The Boss.
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			"I go, 'Goddamn, the tickets are like $30,'" he recalled. "'I don't know if I'm gonna be able
			to make this, guys.'" He passed. He told himself he'd catch Springsteen next time. Next time
			took almost thirty years.
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			It wasn't until the Wrecking Ball Tour, in Minneapolis, that Smither finally saw Springsteen
			live. He does not appear to have fully recovered. "I cried at that concert. It was so moving.
			I'm literally weeping," he admitted. "I don't think my wife really appreciated that. But I'm
			crying my eyes out because it was an entire lifetime, and everybody around me was doing the
			same."
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			From this, Smither extracted a moral for any younger Paulsen staffers in the room: "If you
			need to beg, borrow, or steal money to go see your favorite artist when you're young, I would
			advise doing it. Don't wait."
		</p>
	</section>

	<!-- Secondary image + sidebar -->
	<section class="mb-8 border-y-2 border-black py-6">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<div class="md:col-span-2">
				<h3 class="mb-3 font-playfair text-2xl font-bold">
					On Becoming a Rock Star (in Client Services)
				</h3>
				<p class="mb-4 font-lora text-base leading-relaxed">
					Smither noted that his love of Springsteen is not purely personal — it has, on at least
					one occasion, been monetized. Asked whether he had ever deployed The Boss in a client
					presentation, he confirmed that he had. "We had to do one for SDSU Extension," he said.
					"We had to talk about how to be a rock star. So I used Bruce Springsteen as my metaphor
					throughout his entire career of how you can be a rock star."
				</p>
				<p class="mb-4 font-lora text-base leading-relaxed">
					The Paulsen team, he admitted, had walked in expecting "just a bunch of old people,
					really," and found instead a room of much younger attendees — a twist he delivered with
					the timing of a man who has given many presentations in his life.
				</p>
				<p class="mb-4 font-lora text-base leading-relaxed">
					Before concluding, Smither also took the opportunity to remind employees of an unorthodox
					performance management system he maintains privately. "Each of you are on a mental ladder
					in my head," he warned the assembled staff. "And you rise and fall, like, every day, like
					stocks." He declined to share current standings.
				</p>
			</div>

			<figure class="md:col-span-1">
				<div class="overflow-hidden border-2 border-neutral-300 bg-neutral-200 shadow-md">
					<img
						src={square}
						alt="A portrait of Mark Smither, Chief Strategy Officer"
						class="h-auto w-full grayscale"
					/>
				</div>
				<figcaption class="mt-2 font-special text-xs text-neutral-600 italic">
					Smither pictured mid-metaphor. Sources confirm he owns three copies of
					<em>Born to Run</em> and zero turntables.
				</figcaption>
			</figure>
		</div>
	</section>

	<!-- Closer -->
	<section class="mb-8">
		<p class="font-lora text-base leading-relaxed italic">
			At press time, no fewer than four Paulsen employees were seen quietly adding
			<em>Born to Run</em> to their streaming queues. Whether any of them will begin smoking cigarettes,
			as a young Smither reportedly wanted to do upon first hearing the record's closing track, is a development
			this paper will continue to monitor.
		</p>
	</section>

	<!-- Footer -->
	<footer class="border-t-4 border-double border-black pt-4 text-center">
		<p class="font-special text-xs text-neutral-500">
			&copy; 2026 The Paulsen Post &bull; "All the news that's fit to print (and some that isn't)"
			&bull; A Paulsen Marketing Agency Publication
		</p>
	</footer>
</div>
