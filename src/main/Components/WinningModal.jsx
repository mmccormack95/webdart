import React from "react";

function WinningModal(props) {

    function closeModal() {
        document.getElementById('modal-container').style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === document.getElementById('modal-container')) {
            document.getElementById('modal-container').style.display = 'none';
        }
    }

    return <div id="modal-container" className="modal">
        <dialog id="modal-content" className="modal-content" open>
            <button id="closeModal" onClick={closeModal}>Close</button>
            <h2>{props.name} Wins!!!!</h2>
        </dialog>
    </div>
}

export default WinningModal;