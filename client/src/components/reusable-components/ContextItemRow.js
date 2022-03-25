const ContextItemRow = ({
  data,
  setShowDialogFor,
  setCurrentData,
  setRemoveDialogForData,
  setShowValueDialogForData,
}) => {
  return (
    <div className="list">
      <div className="list-item">{Object.keys(data)[0]}</div>
      <div>
        <button
          onClick={() => {
            setShowDialogFor(true);
            setCurrentData(Object.keys(data)[0]);
          }}
        >
          C
        </button>
        <button
          onClick={() => {
            setRemoveDialogForData(true);
            setCurrentData(Object.keys(data)[0]);
          }}
        >
          D
        </button>
        <button
          onClick={() => {
            setShowValueDialogForData(true);
            setCurrentData(data);
          }}
        >
          V
        </button>
      </div>
    </div>
  );
};

export default ContextItemRow;
