const Modal = ({ id, title, description }) => {
    const name = 'my-modal-'.concat(id)
    return (
        <div>
          <input type="checkbox" id={name} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box max-w-4xl">
              <label htmlFor={name} className="btn btn-sm btn-circle absolute right-2 top-2">x</label>
              <h3 className="font-bold text-lg">{title}</h3>
              <div className=''>
              </div>
              <p className="">{description}</p>
            </div>
          </div>
        </div>
    );
}

export default Modal;
