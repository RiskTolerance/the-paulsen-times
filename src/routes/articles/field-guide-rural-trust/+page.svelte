<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const title = 'The Paulsen Post — Steffen and Merritt Chart a Field Guide for Rural Trust';
	const description =
		'Paulsen’s Director of Partnerships and Director of Public Relations preview a new field guide on earning social license in rural communities — and why developers keep losing the early innings.';
	const ogImage = page.url.origin + '/summary_large_image.png';
	const canonical = page.url.origin + page.url.pathname;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="The Paulsen Post" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta
		property="og:image:alt"
		content="Elise Steffen and Matt Merritt present the Paulsen field guide"
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
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
			<span class="font-special">Vol. XLII, No. 3</span>
			<span class="font-special">Wednesday, May 6, 2026</span>
			<span class="font-special">Price: One Good Laugh</span>
		</div>
	</header>

	<!-- Section Banner -->
	<div class="my-4 bg-red-800 px-4 py-2 text-center">
		<span class="font-special text-sm font-bold tracking-[0.25em] text-white uppercase">
			*** Rural Affairs Desk ***
		</span>
	</div>

	<!-- Headline -->
	<article class="mb-8">
		<h2
			class="mb-4 border-b-2 border-black pb-4 text-center font-playfair text-4xl leading-snug font-black text-balance md:text-5xl"
		>
			Steffen and Merritt Chart a New Map for Rural Trust
		</h2>

		<p class="mb-6 text-center font-special text-sm text-neutral-600 italic">
			In a webinar previewing Paulsen's downloadable Field Guide, two directors argue that the
			developers losing rural projects are losing them long before the first public hearing
		</p>

		<!-- Hero placeholder -->
		<figure class="mb-6">
			<div
				class="flex aspect-[16/9] items-center justify-center overflow-hidden border-2 border-neutral-300 bg-neutral-200 shadow-md"
			>
				<span class="font-special text-xs tracking-[0.3em] text-neutral-500 uppercase">
					[ Photograph to come — speakers on broadcast ]
				</span>
			</div>
			<figcaption class="mt-2 font-special text-xs text-neutral-600 italic">
				Director of Partnerships Elise Steffen and Director of Public Relations Matt Merritt address
				an online audience of energy developers, agribusinesses, and economic development officials.
			</figcaption>
		</figure>

		<!-- Lead with drop cap -->
		<div class="columns-1 gap-8 md:columns-2">
			<p
				class="mb-4 font-lora text-lg leading-relaxed first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:leading-none first-letter:font-bold"
			>
				SIOUX FALLS — Director of Partnerships Elise Steffen and Director of Public Relations Matt
				Merritt of Paulsen presented a webinar this week previewing the agency's new field guide for
				earning social license in rural America — a document built on the premise that the trust
				between rural communities and outside developers has frayed badly, and that the standard
				playbook for fixing it is making things worse.
			</p>

			<p class="mb-4 font-lora text-base leading-relaxed">
				The field guide is intended for energy developers, agribusinesses, and economic developers
				bringing projects into small towns. Its central argument is uncomfortable: that the typical
				project rollout — show up with a finished plan, pitch the tax dollars and the jobs, get
				sign-off from county officials, and brace for opposition — produces the very hostility it
				expects to manage.
			</p>

			<p class="mb-4 font-lora text-base leading-relaxed">
				"Each company shows up a little quieter than the last," Merritt said, describing the loop.
				The cumulative effect, he argued, is a community primed for suspicion before the first slide
				is shown.
			</p>
		</div>
	</article>

	<!-- Thesis section -->
	<section class="mb-8 border-y-2 border-black py-6">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<div class="md:col-span-2">
				<h3 class="mb-3 font-playfair text-2xl font-bold">NIMBYism, Reconsidered</h3>
				<p class="mb-4 font-lora text-base leading-relaxed">
					Perhaps the most distinctive idea in the broadcast was Merritt's framing of so-called
					NIMBY opposition. The research Paulsen reviewed, he said, suggests that what looks like
					reflexive resistance is usually a stand-in for a deeper, procedural complaint: <em
						>I'm not part of this decision. I don't control the future of my town. My concerns
						get dismissed.</em
					>
				</p>
				<p class="mb-4 font-lora text-base leading-relaxed">
					Until those underlying questions are addressed, he argued, answering surface concerns
					about water use, noise, or light "doesn't move anyone." Steffen agreed, framing the
					alternative as deceptively simple. "Developers don't need all the answers," she said.
					"They need to listen first."
				</p>
				<p class="mb-4 font-lora text-base leading-relaxed">
					That listening, both speakers stressed, has to come early. Once a community has watched a
					polished presentation, the chance to be a partner in the project — rather than a
					stakeholder reacting to it — is largely gone.
				</p>
			</div>

			<figure class="md:col-span-1">
				<div
					class="flex aspect-[3/4] items-center justify-center overflow-hidden border-2 border-neutral-300 bg-neutral-200 shadow-md"
				>
					<span
						class="px-4 text-center font-special text-xs tracking-[0.3em] text-neutral-500 uppercase"
					>
						[ Photograph to come — Merritt mid-thesis ]
					</span>
				</div>
				<figcaption class="mt-2 font-special text-xs text-neutral-600 italic">
					Mr. Merritt, pictured mid-point. The Post's copy desk wishes to note, with great affection,
					that the trousers are riding a touch high.
				</figcaption>
			</figure>
		</div>
	</section>

	<!-- Eight segments -->
	<section class="mb-8">
		<h3 class="mb-4 font-playfair text-2xl font-bold">The Eight Audiences</h3>
		<p class="mb-6 font-lora text-base leading-relaxed">
			Much of the field guide is given over to a taxonomy of the people a developer is actually
			talking to in a rural community. Steffen walked through eight segments, each requiring its
			own approach.
		</p>

		<div class="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
			<div class="border-l-2 border-black pl-4">
				<p class="font-special text-xs tracking-[0.2em] text-red-800 uppercase">No. 1</p>
				<h4 class="mb-1 font-playfair text-lg font-bold">Economic Pragmatists</h4>
				<p class="font-lora text-sm leading-relaxed">
					Established farmers and ranchers focused on financial security and legacy. Receptive to
					honest financial discussion. Often influential locally — good first conversations.
				</p>
			</div>

			<div class="border-l-2 border-black pl-4">
				<p class="font-special text-xs tracking-[0.2em] text-red-800 uppercase">No. 2</p>
				<h4 class="mb-1 font-playfair text-lg font-bold">Property Rights Advocates</h4>
				<p class="font-lora text-sm leading-relaxed">
					Currently the loudest voice. Values-driven on liberty and land rights. React hard to any
					whiff of eminent domain. Empathize, minimize involuntary participation, frame benefits
					around freedom.
				</p>
			</div>

			<div class="border-l-2 border-black pl-4">
				<p class="font-special text-xs tracking-[0.2em] text-red-800 uppercase">No. 3</p>
				<h4 class="mb-1 font-playfair text-lg font-bold">Community Guardians</h4>
				<p class="font-lora text-sm leading-relaxed">
					Long-time residents, small business owners, board members. Tie benefits to specific
					concrete needs — a nursing home, a park — rather than abstract tax-impact figures.
					Community benefit agreements work well here.
				</p>
			</div>

			<div class="border-l-2 border-black pl-4">
				<p class="font-special text-xs tracking-[0.2em] text-red-800 uppercase">No. 4</p>
				<h4 class="mb-1 font-playfair text-lg font-bold">Environmental Advocates</h4>
				<p class="font-lora text-sm leading-relaxed">
					Quieter at the moment, but historically vocal. Want mitigation plans, habitat
					restoration, and transparent environmental review that goes beyond legal box-checking.
				</p>
			</div>

			<div class="border-l-2 border-black pl-4">
				<p class="font-special text-xs tracking-[0.2em] text-red-800 uppercase">No. 5</p>
				<h4 class="mb-1 font-playfair text-lg font-bold">Cautious Skeptics</h4>
				<p class="font-lora text-sm leading-relaxed">
					Been burned before. Won't accept a sales pitch. Need verifiable facts, third-party
					sources, and ideally site visits to comparable existing projects. Merritt invoked
					Springfield's monorail.
				</p>
			</div>

			<div class="border-l-2 border-black pl-4">
				<p class="font-special text-xs tracking-[0.2em] text-red-800 uppercase">No. 6</p>
				<h4 class="mb-1 font-playfair text-lg font-bold">Next Generation Ruralists</h4>
				<p class="font-lora text-sm leading-relaxed">
					Younger farmers, ranchers, and rural entrepreneurs. More open to creative contracts and
					growth opportunities. Win them over and they become passionate advocates from inside the
					community.
				</p>
			</div>

			<div class="border-l-2 border-black pl-4">
				<p class="font-special text-xs tracking-[0.2em] text-red-800 uppercase">No. 7</p>
				<h4 class="mb-1 font-playfair text-lg font-bold">Affected Nonparticipants</h4>
				<p class="font-lora text-sm leading-relaxed">
					Live with the project but receive no direct benefit — no land payment, no job. A large
					group, often vocal because they feel excluded. Engage early; community benefit
					agreements matter most here.
				</p>
			</div>

			<div class="border-l-2 border-black pl-4">
				<p class="font-special text-xs tracking-[0.2em] text-red-800 uppercase">No. 8</p>
				<h4 class="mb-1 font-playfair text-lg font-bold">Institutional Stakeholders</h4>
				<p class="font-lora text-sm leading-relaxed">
					County commissioners, planning and zoning, public officials. Historically over-prioritized.
					When their constituents turn, they turn — and that is when moratoriums and zoning changes
					become weapons against the project.
				</p>
			</div>
		</div>
	</section>

	<!-- Movable middle -->
	<section class="mb-8 columns-1 gap-8 md:columns-2">
		<h3 class="mb-3 font-playfair text-xl font-bold">The Movable Middle</h3>

		<p class="mb-4 font-lora text-base leading-relaxed">
			Within each segment, Steffen explained, opinion forms a bell curve: locked-in advocates,
			locked-in opponents, and an undecided middle. The work of the field guide is essentially the
			work of reaching that middle — and the middle is largest, she said, "at the very beginning of
			a project."
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			Once a neighbor declares a position publicly, she added, the position tends to stay declared.
			Early communication is therefore not a courtesy but a structural necessity: it is the only
			window in which the quietly-okay-with-it majority can speak before the loud opposition
			arrives and intimidates them into silence.
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			Merritt offered a corollary that landed harder than expected. Early enthusiasm from county
			commissioners and planning officials, he warned, is not the same as community support.
			"They love the macro stats," he said, "but if their constituents turn, they turn." Mistaking
			institutional support for the genuine article is, in his telling, one of the most common and
			most expensive errors a developer can make.
		</p>
	</section>

	<!-- Language -->
	<section class="mb-8 border-y-2 border-black py-6">
		<h3 class="mb-3 font-playfair text-2xl font-bold">A Note on Language</h3>
		<p class="mb-4 font-lora text-base leading-relaxed">
			A short but pointed portion of the broadcast was given over to vocabulary. Both speakers
			argued that the words developers reach for, often without thinking, do real damage.
		</p>

		<ul class="mb-2 space-y-3 font-lora text-base leading-relaxed">
			<li class="border-l-2 border-red-800 pl-4">
				<span class="font-bold">Don't "educate the public."</span> Meet their needs and answer
				their questions. The verb itself, Merritt noted, is condescending.
			</li>
			<li class="border-l-2 border-red-800 pl-4">
				<span class="font-bold">Don't talk about the "project timeline."</span> Talk about the
				community's timeline.
			</li>
			<li class="border-l-2 border-red-800 pl-4">
				<span class="font-bold">Don't label concerns "misinformation."</span> Treat them as
				authentic questions you may simply have failed to answer.
			</li>
			<li class="border-l-2 border-red-800 pl-4">
				<span class="font-bold">Don't seek "buy-in."</span> Pursue partnership and mutual benefit.
			</li>
		</ul>
	</section>

	<!-- Q&A -->
	<section class="mb-8 columns-1 gap-8 md:columns-2">
		<h3 class="mb-3 font-playfair text-xl font-bold">From the Q&amp;A</h3>

		<p class="mb-4 font-lora text-base leading-relaxed">
			Asked how the framework applies to crisis communication, Merritt suggested that the better
			label is <em>pre-crisis</em> communication. Anticipating pressure points and addressing them
			early often prevents a crisis from forming at all. Mid-crisis, the same principles apply in
			reverse: stop, breathe, return to listening, lower the temperature.
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			On the practical question of how, exactly, one listens to a community, Steffen offered both
			the formal and the informal. Surveys and focus sessions — including live virtual focus
			groups, which Paulsen runs on its own platform — have their place. So does showing up where
			people already are. "Farmers are always at the gas station at 9 AM," she observed. There is,
			she said, no one-size-fits-all.
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			A question on the role of economic developers drew what amounted to a small thesis. The
			relationship, Steffen said, is best understood as a three-legged stool of economic
			development goals, developer goals, and community goals. Local economic development can do
			some of the early listening on a developer's behalf when nondisclosure agreements prevent
			full transparency — but the developer, she emphasized, still has to be visibly present in the
			work. Listening cannot be outsourced.
		</p>

		<p class="mb-4 font-lora text-base leading-relaxed">
			On the field guide's provenance, Steffen described a synthesis: government, university, and
			news research, conversations with Paulsen's own energy and rural development clients, and
			seventy-five years of agency experience in the territory.
		</p>
	</section>

	<!-- Closer / sidebar -->
	<section class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
		<div class="md:col-span-2">
			<h3 class="mb-3 font-playfair text-xl font-bold">Why It Matters Here</h3>
			<p class="mb-4 font-lora text-base leading-relaxed">
				Both speakers closed by acknowledging that the work is, for Paulsen, personal. Many on
				staff live in or are tied to small communities, and a number are co-op members. Rural
				America, they argued, needs investment — particularly given current energy demand — but
				it needs investment structured so that communities do not feel exploited at the end of it.
			</p>
			<p class="mb-4 font-lora text-base leading-relaxed">
				The field guide is downloadable now, and a recording of the broadcast will be posted to
				Paulsen's LinkedIn. Readers of this paper, especially the ones who happen to work here,
				are encouraged to share both.
			</p>
		</div>

		<aside class="border-2 border-black bg-neutral-100 p-4 md:col-span-1">
			<p class="mb-2 font-special text-xs tracking-[0.2em] text-red-800 uppercase">
				*** Notes from the Broadcast ***
			</p>
			<p class="mb-3 font-lora text-sm leading-relaxed">
				<span class="font-bold">Sartorial Bulletin.</span> This paper's photo desk would be remiss
				not to acknowledge that during the broadcast, Mr. Merritt's trousers terminated several
				inches above his shoes — a stylistic choice the desk has chosen to characterize as
				"studied," "continental," and "forward-leaning."
			</p>
			<p class="font-lora text-sm leading-relaxed">
				<span class="font-bold">Spelling Note.</span> Auto-transcription tools rendered the agency
				name variously as "Paulson" and "Pulsin." For the record: Paulsen.
			</p>
		</aside>
	</section>

	<!-- Press time -->
	<section class="mb-8">
		<p class="font-lora text-base leading-relaxed italic">
			At press time, no fewer than three Paulsen employees had downloaded the field guide twice,
			apparently by accident. The trousers remain a developing story.
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
