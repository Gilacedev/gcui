import PaginationType from "@/types/Pagination";

const Pagination: React.FC<PaginationType> = ({ currentPage, totalPages, onPageChange }) => {
	return (
		<div className="py-8 flex items-center gap-2 flex-wrap justify-center">
			{totalPages > 1 &&
				Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<div
						key={page}
						onClick={() => onPageChange(page)}
						className={`flex items-center justify-center rounded-lg w-8 h-8 cursor-pointer hover:bg-violet-800 transition-all ${
							currentPage === page ? "bg-violet-600" : "bg-slate-600"
						}`}
					>
						{page}
					</div>
				))}
		</div>
	);
};

export default Pagination;
