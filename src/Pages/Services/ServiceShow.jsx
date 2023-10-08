/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServiceShow = ( { service } ) => {

    const { id, title, image, pricing } = service || {};


    return (
        <div className="">
            <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={ image }
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-2xl font-bold leading-relaxed text-blue-gray-900 antialiased">
                            { title }
                        </p>

                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        { pricing }
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={ `/service-details/${ id }` }>
                        <button
                            className="bg-slate-100 block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Show Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceShow;