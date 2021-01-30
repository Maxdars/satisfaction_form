import React from 'react';

const Stepper = (props) => {
    return(
        <div className="flex pb-10 border-b-2">
            {props.stepsTitles.map((item, i) => {
                let active_step = (i === props.currentStep - 1) ? true : false;
                let arrow = (i !== props.stepsTitles.length - 1) ? 
                    <div className="flex-1 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg>
                    </div>
                    : '';

                if (!active_step) {
                    return (
                        <>
                            <div className="w-1/3 text-center px-6">
                                <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-50" >
                                    <div className="w-1/3 rounded-l-lg h-10 flex items-center justify-center icon-step bg-gray-800 text-gray-50" >
                                        <span className="font-bold text-xl"> {i+1} </span>
                                    </div>
                                    <div className="w-2/3 bg-gray-400 text-gray-100 h-10 flex flex-col items-center justify-center px-1 rounded-r-lg body-step" >
                                        <h2 className="font-bold text-sm">{item}</h2>
                                    </div>
                                </div>
                            </div>
                            {arrow}
                        </>
                    );
                }   
                else {
                    return (
                        <>
                            <div className="w-1/3 text-center px-6">
                                <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-50" >
                                    <div className="w-1/3 rounded-l-lg h-10 flex items-center justify-center text-gray-50 bg-indigo-700" >
                                        <span className="font-bold text-xl"> {i+1} </span>
                                    </div>
                                    <div className="w-2/3 bg-indigo-400 text-gray-50 h-10 flex flex-col items-center justify-center px-1 rounded-r-lg body-step" >
                                        <h2 className="font-bold text-sm">{item}</h2>
                                    </div>
                                </div>
                            </div>
                            {arrow}
                        </>
                    );
                }
                
            })}

        </div>
    )
}


export default Stepper;