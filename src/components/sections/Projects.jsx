import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
	return (
		<section
			id="projects"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<RevealOnScroll>
				<div className="max-w-5xl mx-auto px-4 ">
					<h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
						{" "}
						Featured Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
							<h3 className="text-xl font-bold mb-2">
								My Portfolio Website
							</h3>
							<p className="text-gray-400 mb-4">
								My portfolio website built with React with Vite
								and Tailwind CSS.
							</p>
							<div className="flex gap-2 mt-4">
								{["React", "Next.js", "Tailwind CSS"].map(
									(tech, key) => (
										<span
											key={key}
											className=" bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
										>
											{tech}
										</span>
									)
								)}
							</div>
							<div className="flex justify-between items-center">
								<a
									href="#"
									className="text-blue-400 hover:text-blue-300 transition-colors my-7"
								>
									{" "}
									View ProjectI ↔️{" "}
								</a>
							</div>
						</div>
						<div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
							<h3 className="text-xl font-bold mb-2">
								E-commerce Website
							</h3>
							<p className="text-gray-400 mb-4">
								E-commerce website built with React
								,Redux,Node.js,Prisma and Tailwind CSS.
							</p>
							<div className="flex gap-2 mt-4">
								{[
									"React",
									"Redux",
									"Prisma",
									"Node.js",
									"Tailwind CSS",
								].map((tech, key) => (
									<span
										key={key}
										className=" bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm
                             hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex justify-between items-center">
								<a
									href="#"
									className="text-blue-400 hover:text-blue-300 transition-colors my-7"
								>
									{" "}
									View ProjectI ↔️{" "}
								</a>
							</div>
						</div>
						<div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
							<h3 className="text-xl font-bold mb-2">
								Movies Website
							</h3>
							<p className="text-gray-400 mb-4">
								Movies website built with
								Next.js,React,React-Icons,React-Dom,TailwindCss.
							</p>
							<div className="flex gap-2 mt-4">
								{[
									"Next.js",
									"React",
									"Tailwind CSS",
									"API",
								].map((tech, key) => (
									<span
										key={key}
										className=" bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm
                             hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex justify-between items-center">
								<a
									href="#"
									className="text-blue-400 hover:text-blue-300 transition-colors my-7"
								>
									{" "}
									View ProjectI ↔️{" "}
								</a>
							</div>
						</div>
						<div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
							<h3 className="text-xl font-bold mb-2">
								Php User Login
							</h3>
							<p className="text-gray-400 mb-4">
								User login project website built with
								PHP,SQL,HTML,CSS,BOOTSTRAP.
							</p>
							<div className="flex gap-2 mt-4">
								{["PHP","SQL","HTML","CSS","BOOTSTRAP"].map(
									(tech, key) => (
										<span
											key={key}
											className=" bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm
                             hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
										>
											{tech}
										</span>
									)
								)}
							</div>
							<div className="flex justify-between items-center">
								<a
									href="#"
									className="text-blue-400 hover:text-blue-300 transition-colors my-7"
								>
									{" "}
									View ProjectI ↔️{" "}
								</a>
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
