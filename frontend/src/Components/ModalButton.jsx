const ModalButton = ({ id }) => {
    const name = 'my-modal-'.concat(id)
    return (
        <label htmlFor={name} className="btn btn-warning text-white">Profil</label>
    );
}

export default ModalButton;
