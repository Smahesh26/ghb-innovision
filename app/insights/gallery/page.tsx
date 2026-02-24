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
			src: "/images/gallery/gallery1.JPG",
			title: "Gallery Image 1",
			category: "Corporate",
			span: "md:col-span-2",
		},
		{
			src: "/images/gallery/gallery2.JPG",
			title: "Gallery Image 2",
			category: "Operations",
			span: "",
		},
		{
			src: "/images/gallery/gallery3.jpg",
			title: "Gallery Image 3",
			category: "Facilities",
			span: "",
		},
		{
			src: "/images/gallery/gallery4.jpg",
			title: "Gallery Image 4",
			category: "Training",
			span: "",
		},
		{
			src: "/images/gallery/gallery5.JPG",
			title: "Gallery Image 5",
			category: "Operations",
			span: "md:col-span-2",
		},
		{
			src: "/images/gallery/gallery6.JPG",
			title: "Gallery Image 6",
			category: "Events",
			span: "",
		},
		{
			src: "/images/gallery/gallery7.JPG",
			title: "Gallery Image 7",
			category: "Culture",
			span: "",
		},
		{
			src: "/images/gallery/gallery8.JPG",
			title: "Gallery Image 8",
			category: "Awards",
			span: "",
		},
		{
			src: "/images/gallery/gallery9.JPG",
			title: "Gallery Image 9",
			category: "Corporate",
			span: "",
		},
		{
			src: "/images/gallery/gallery10.JPG",
			title: "Gallery Image 10",
			category: "Training",
			span: "",
		},
		{
			src: "/images/gallery/gallery11.JPG",
			title: "Gallery Image 11",
			category: "Training",
			span: "",
		},
		{
			src: "/images/gallery/gallery12.JPG",
			title: "Gallery Image 12",
			category: "Training",
			span: "",
		},
		{
			src: "/images/gallery/gallery13.JPG",
			title: "Gallery Image 13",
			category: "Operations",
			span: "",
		},
		{
			src: "/images/gallery/gallery14.JPG",
			title: "Gallery Image 14",
			category: "Facilities",
			span: "",
		},
		{
			src: "/images/gallery/gallery15.jpg",
			title: "Gallery Image 15",
			category: "Corporate",
			span: "",
		},
		{
			src: "/images/gallery/gallery16.jpg",
			title: "Gallery Image 16",
			category: "Culture",
			span: "md:col-span-2",
		},
		{
			src: "/images/gallery/gallery17.jpg",
			title: "Gallery Image 17",
			category: "Events",
			span: "",
		},
		{
			src: "/images/gallery/gallery18.jpg",
			title: "Gallery Image 18",
			category: "Awards",
			span: "",
		},
		{
			src: "/images/gallery/gallery19.jpg",
			title: "Gallery Image 19",
			category: "Operations",
			span: "",
		},
		{
			src: "/images/gallery/gallery20.jpg",
			title: "Gallery Image 20",
			category: "Training",
			span: "",
		},
		{
			src: "/images/gallery/gallery21.jpg",
			title: "Gallery Image 21",
			category: "Corporate",
			span: "",
		},
	];

	const categories = [
		"All",
		"Operations",
		"Training",
		"Corporate",
		"Facilities",
		"Events",
		"Culture",
		"Awards",
	];

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
		"row-span-2",
		"md:col-span-2 row-span-2",
		"row-span-2",
		"sm:row-span-3 row-span-2",
		"row-span-2",
		"row-span-2",
		"sm:row-span-3 row-span-2",
		"row-span-2",
		"row-span-2",
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
