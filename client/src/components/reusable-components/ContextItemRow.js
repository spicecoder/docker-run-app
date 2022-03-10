const ContextItemRow = ({
  data,
  setShowDialogFor,
  setCurrentData,
  setRemoveDialogForData,
  setShowValueDialogForData,
}) => {
  return (
    <div className="list">
      <div className="list-item">{data.context_entity}</div>
      <div>
        <button
          onClick={() => {
            setShowDialogFor(true);
            setCurrentData(data.context_entity);
          }}
        >
          C
        </button>
        <button
          onClick={() => {
            setRemoveDialogForData(true);
            setCurrentData(data.context_entity);
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
