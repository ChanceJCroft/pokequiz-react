//import { useEffect, useRef } from "react";
//import { SuccessModalProps } from "../types/PokemonTypes";

function SuccessModal() {

    //const modalRef = useRef<HTMLDivElement>(null);

    return(
        <>
        <div className="modal fade" id="successModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="successModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="successModalLabel">Success!</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" >Try Again</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )


}

export default SuccessModal;