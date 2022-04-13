export default function Select({ sortWomen }) {
  return (
    <select defaultValue="sort" onChange={sortWomen} >
      <option disabled value="sort">
        Sort by...
      </option>
      <option value="intelligence">Intelligence</option>
      <option value="strength">Strength</option>
      <option value="speed">Speed</option>
      <option value="power">Power</option>
    </select>
    
  );
}
