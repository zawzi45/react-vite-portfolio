import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
	const fontendSkills = [
		"HTML",
		"CSS",
		"Bootstrap",
		"JavaScript",
		"React",
		"React Native",
		"Next.js",
		"Redux",
		"Figma",
	];
	const backendSkills = [
		"PHP",
		"Laravel",
		"Node.js",
		"Express.js",
		"Next.js",
		"Java",
		"MySQL",
	];
	return (
		<section
			id="about"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<RevealOnScroll>
				<div className="max-w-5xl mx-auto px-4 ">
					<h2 className="text-4xl mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center font-bold ">
						{" "}
						About Me
					</h2>
					<div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:bg-blue-500/3 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
						<p className="text-gray-400 mb-6">
							It's been two years since I arrived in Yangon and
							attended this developer course.Besides,all these
							courses were attended at Fairway Technology. Now
							that all the training is over, I'am eager to move
							into a field related to these things and start
							working on projects that will help me grow as a
							developer.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
								<h3 className="text-xl font-bold mb-4">
									Frontend
								</h3>
								<div className="flex flex-wrap gap-2">
									{fontendSkills.map((tech, key) => (
										<span
											key={key}
											className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
							<div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
								<h3 className="text-xl font-bold mb-4">
									Backend
								</h3>

								<div className="flex flex-wrap gap-2">
									{backendSkills.map((tech, key) => (
										<span
											key={key}
											className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="gird gird-cols-1 md:grid-cols-2 gap-6 mt-8">
						<div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:bg-blue-500/3 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
							<h3 className="text-xl font-bold mb-4">
								{" "}
								🏫 Education
							</h3>
							<p className="text-gray-400">
								<li>
									{" "}
									It's been a long time since I went to school
									until the secnod year of physics at Mandalar
									University.
								</li>
							</p>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
