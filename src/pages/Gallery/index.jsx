import gimage1 from "../../images/gimage1-min.JPG";
import gimage2 from "../../images/gimage2-min.JPG";
import gimage3 from "../../images/gimage3-min.JPG";
import gimage4 from "../../images/gimage4-min.JPG";
import gimage5 from "../../images/gimage5-min.JPG";
import gimage6 from "../../images/gimage6-min.JPG";
import gimage7 from "../../images/gimage7-min.JPG";
import gimage8 from "../../images/gimage8-min.JPG";
import gimage9 from "../../images/gimage9-min.JPG";
import gimage10 from "../../images/gimage10.webp";
import gimage11 from "../../images/gimage11-min.JPG";
import gimage12 from "../../images/gimage12-min.JPG";
import gimage13 from "../../images/gimage13-min.JPG";
import gimage14 from "../../images/gimage14-min.JPG";
import gimage15 from "../../images/gimage15-min.JPG";
import gimage16 from "../../images/gimage16-min.JPG";
import gimage17 from "../../images/gimage17-min.JPG";
import gimage18 from "../../images/gimage18-min.JPG";
import gimage19 from "../../images/gimage19-min.JPG";
import gimage20 from "../../images/gimage20-min.JPG";
import gimage21 from "../../images/gimage21-min.JPG";
import gimage22 from "../../images/gimage22-min.JPG";
import gimage23 from "../../images/gimage23-min.JPG";
import gimage24 from "../../images/gimage24-min.JPG";
import gimage25 from "../../images/gimage25-min.JPG";
import gimage26 from "../../images/gimage26-min.JPG";
import Loader from "../../components/Loader/Loader";

const Gallery = () => {
	return (
		<div className="bg-[#0B0A1B] py-10">
			<div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-10 w-full">
				{/* First Column Images */}
				<div className="flex flex-col">
					<h3 className="text-white text-6xl font-bold">A NIGHT</h3>
					<h3 className="text-white text-6xl font-bold">TO</h3>
					<h3 className="text-white text-6xl font-bold">REMEMBER</h3>
					<h3 className="text-[#3F2EA1] text-6xl font-bold">YOUR</h3>
					<h3 className="text-[#3F2EA1] text-6xl font-bold">ENTIRE LIFE</h3>
					<img className="h-96 w-96 mt-10" src={gimage1} alt="image.jpg" />
				</div>
                <Loader/>
				{/* Second Column Images */}
				<div className="flex flex-col mt-8 md:mt-0 md:ml-10">
					<img className="h-96 w-auto" src={gimage2} alt="image.jpg" />
					<img className="h-96 w-auto mt-10" src={gimage3} alt="image.jpg" />
				</div>
			</div>

			{/* Second Row */}
			<div className="px-5 md:px-10 py-10">
				<img className="h-96 w-full" src={gimage4} alt="image.jpg" />
			</div>

			{/* Third Row */}
			<h2 className="px-10 pb-10 text-[#D44865] font-bold text-5xl md:text-7xl text-center">
				DO JOIN US FOR THE GRAND EVENT
			</h2>

			<div className="flex flex-col md:flex-row w-full items-center">
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage5}
					alt="image.jpg"
				/>
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage6}
					alt="image.jpg"
				/>
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage7}
					alt="image.jpg"
				/>
			</div>

			<img
				className="w-full h-auto object-contain px-5 md:px-10 mt-10"
				src={gimage8}
				alt="image.jpg"
			/>

			<img
				className="w-full h-auto object-contain px-5 md:px-10 mt-10"
				src={gimage9}
				alt="image.jpg"
			/>

			<img
				className="w-full h-auto object-contain px-5 md:px-10 mt-10"
				src={gimage10}
				alt="image.jpg"
			/>
			<div className="flex flex-col md:flex-row w-full items-center">
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage11}
					alt="image.jpg"
				/>
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage12}
					alt="image.jpg"
				/>
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage13}
					alt="image.jpg"
				/>
			</div>
			<img
				className="w-full h-auto object-contain px-5 md:px-10 mt-10"
				src={gimage14}
				alt="image.jpg"
			/>

			<img
				className="w-full h-auto object-contain px-5 md:px-10 mt-10"
				src={gimage15}
				alt="image.jpg"
			/>
			<div className="flex flex-col md:flex-row w-full items-center">
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage16}
					alt="image.jpg"
				/>
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage17}
					alt="image.jpg"
				/>
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage18}
					alt="image.jpg"
				/>
			</div>
			<img
				className="w-full h-auto object-contain px-5 md:px-10 mt-10"
				src={gimage19}
				alt="image.jpg"
			/>

			<img
				className="w-full h-auto object-contain px-5 md:px-10 mt-10"
				src={gimage20}
				alt="image.jpg"
			/>
			<div className="flex flex-col md:flex-row w-full items-center">
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage21}
					alt="image.jpg"
				/>
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage22}
					alt="image.jpg"
				/>
				<img
					className="py-5 px-5 md:px-10 md:w-1/3 h-30"
					src={gimage23}
					alt="image.jpg"
				/>
			</div>
			<img
				className="w-full h-auto object-contain px-5 md:px-10 mt-10"
				src={gimage24}
				alt="image.jpg"
			/>

			<img
				className="w-full h-auto object-contain px-5 md:px-10 mt-10"
				src={gimage25}
				alt="image.jpg"
			/>
			<img
				className="w-full h-auto object-contain px-5 md:px-10 mt-10"
				src={gimage26}
				alt="image.jpg"
			/>
		</div>
	);
};
export default Gallery;
