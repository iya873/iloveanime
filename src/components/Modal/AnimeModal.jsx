import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useParams } from 'react-router-dom';

const AnimeModal = ({ anime }) => {
    let { id } = useParams();
     let [show, setShow] = useState(false);

			const handleClose = () => setShow(false);
			const handleShow = () => setShow(true);
    return (
			<>
				<Button variant='primary' onClick={handleShow}>
					Get Details
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
                    <Modal.Title>{anime.title_english} | {anime.title_japanese}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{anime.synopsis}
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={handleClose}>
							<Link to={`/details/${id}`}>Go to Page</Link>
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
};

export default AnimeModal;

// const animeModal = ({ anime }) => {
//     console.log(anime)

//     // let [loading, setLoading] = useState(false);
//     return (
//         <>

//         </>

//     //   <>
// //           {/* Button Trigger */}
// //           <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#animeModal'
// //               onClick={(() => { console.log(anime.title) })}
// // >
// //               Get Details
// //           </button>

// //           {/* Modal */}
// //           <div className="modal fade" id='animeModal' tabIndex='-1' aria-labelledby='animeModalLabel'>
// //               <div className="modal-dialog">
// //                   <div className="modal-content">
// //                       <div className="modal-header">
// //                           <h3 className="modal-title fs-5" id='animeModalLabel'>{anime.title_english}</h3>
// //                           <h3>{anime.title_japanese}</h3>
// //                           <button type='button' className="btn-close" data-bs-dismiss='modal' aria-label='Close'></button>
// //                       </div>
// //                       <div className="modal-body">
// //                           <p>{anime.synopsis}</p>
// //                       </div>
// //                       <div className="modal-footer">
// //                           <button type='button' className="btn btn-secondary" data-bs-dismiss='modal'>Close</button>
// //                           <button type='button' className="btn btn-primary">Go to Page</button>
// //                       </div>
// //                   </div>
// //               </div>
// //           </div>
//     //   </>

//   )
// }

// export default animeModal
