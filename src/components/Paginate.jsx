import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from './Card';
import { Arrow } from '../icons/icons';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <Card key={item} />
                ))}
        </>
    );
}

function PaginatePage({ itemsPerPage }) {

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className='px-5 pt-10 mb-10 flex flex-col md:flex-row md:items-center items-center gap-3 justify-between border-t-[1px] border-[#ececec]'>
                <span className='font-Kalameh-regular-number text-base text-[#667985]'>درحال نمایش <span className='text-[#1D2E39]'>{itemsPerPage}</span> از <span className='text-[#1D2E39]'>{items.length}</span> پیشنهاد</span>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<Arrow />}
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    previousLabel={<Arrow />}
                    className="paginate-parent"
                />
            </div>
        </>
    );
};

export default PaginatePage;