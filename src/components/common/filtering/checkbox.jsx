const CheckboxItem = ({ label, id }) => {
  return (
    <div className="nft__filter-check d-flex align-items-center">
      <input className="m-check-input" type="checkbox" id={id} />
      <label className="m-check-label" htmlFor={id}>{label}</label>
    </div>
  )
}

export default CheckboxItem;

