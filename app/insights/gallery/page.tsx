import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import GalleryClient from "./GalleryClient";

export const metadata = {
	title: "Gallery - Innovision Security",
	description: "Gallery of Innovision Security operations, events, facilities, and team moments.",
};

export default function GalleryPage() {
	const galleryImages = [
		{
			src: "/images/gallery/gallery/integratedfacilitymanagement/ism1.jpg",
			title: "Integrated Facility Management 1",
			category: "Integrated Facility Management",
			span: "md:col-span-2",
		},
		{
			src: "/images/gallery/gallery/integratedfacilitymanagement/ism2.jpg",
			title: "Integrated Facility Management 2",
			category: "Integrated Facility Management",
			span: "",
		},
		{
			src: "/images/gallery/gallery/integratedfacilitymanagement/ism3.jpg",
			title: "Integrated Facility Management 3",
			category: "Integrated Facility Management",
			span: "",
		},
		{
			src: "/images/gallery/gallery/security/security1.png",
			title: "Security Operations 1",
			category: "Security",
			span: "",
		},
		{
			src: "/images/gallery/gallery/security/security2.png",
			title: "Security Operations 2",
			category: "Security",
			span: "md:col-span-2",
		},
		{
			src: "/images/gallery/gallery/security/security3.png",
			title: "Security Operations 3",
			category: "Security",
			span: "",
		},
		{
			src: "/images/gallery/gallery/security/security4.png",
			title: "Security Operations 4",
			category: "Security",
			span: "",
		},
		{
			src: "/images/gallery/gallery/security/security5.png",
			title: "Security Operations 5",
			category: "Security",
			span: "",
		},
		{
			src: "/images/gallery/gallery/security/security6.png",
			title: "Security Operations 6",
			category: "Security",
			span: "",
		},
		{
			src: "/images/gallery/gallery/security/security7.png",
			title: "Security Operations 7",
			category: "Security",
			span: "",
		},
		{
			src: "/images/gallery/gallery/security/security8.png",
			title: "Security Operations 8",
			category: "Security",
			span: "",
		},
		{
			src: "/images/gallery/gallery/security/security9.png",
			title: "Security Operations 9",
			category: "Security",
			span: "",
		},
	];

	const categories = ["All", "Integrated Facility Management", "Security"];

	const tilePattern = [
		"row-span-2",
		"sm:row-span-3 row-span-2",
		"row-span-2",
		"row-span-2",
		"md:col-span-2 row-span-2",
		"sm:row-span-3 row-span-2",
		"row-span-2",
		"row-span-2",
		"sm:row-span-3 row-span-2",
		"row-span-2",
		"row-span-2",
		"sm:row-span-3 row-span-2",
	];

	return (
		<>
			<Header />
			<main className="min-h-screen bg-[#0d0d0f] pt-32 pb-20">
				<div className="mx-auto max-w-6xl px-6">
					<div className="mb-14">
						<p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">
							Insights
						</p>
						<h1 className="mt-4 text-5xl font-bold text-white">
							Photo Gallery
						</h1>
						<p className="mt-6 max-w-2xl text-lg text-white/70">
							Explore our operations, training facilities, field moments, events, and culture through selected highlights.
						</p>
						<div className="mt-8 h-1 w-16 bg-[#EF2B2D]" />
					</div>

					{/* <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
						<div className="grid gap-4 sm:grid-cols-3">
							<div>
								<p className="text-xs uppercase tracking-[0.25em] text-white/50">Total Photos</p>
								<p className="mt-1 text-3xl font-bold text-white">{galleryImages.length}+</p>
							</div>
							<div>
								<p className="text-xs uppercase tracking-[0.25em] text-white/50">Coverage</p>
								<p className="mt-1 text-3xl font-bold text-white">India Wide</p>
							</div>
							<div>
								<p className="text-xs uppercase tracking-[0.25em] text-white/50">Updated</p>
								<p className="mt-1 text-3xl font-bold text-white">Monthly</p>
							</div>
						</div>
					</div> */}

					<GalleryClient
						galleryImages={galleryImages}
						categories={categories}
						tilePattern={tilePattern}
					/>

				
				</div>
			</main>
			<Footer />
		</>
	);
}
