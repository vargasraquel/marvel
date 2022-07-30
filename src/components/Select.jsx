export default function Select({ onChange }) {
  return (
    <select defaultValue="sort" onChange={onChange} >
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
