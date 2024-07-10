import "./DeleteConfirmation.scss";

const DeleteConfirmation = ({ setShowConfirmation, setStartDelete }: any) => {
  return (
    <div className="delete-confirmation flexCenterColumn">
      <p>Are you sure you want to delete</p>
      <div className="flexCenter">
        <button
          className="cancel-button"
          onClick={() => setShowConfirmation(false)}
        >
          Cancel
        </button>
        <button className="confirm-button" onClick={() => setStartDelete(true)}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
