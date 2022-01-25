export default function Select({ setSortType }) {
  return (
    <select onChange={(e) => setSortType(e.target.value)}>
      <option disabled selected>
        Sort by...
      </option>
      <option value="intelligence">Intelligence</option>
      <option value="strength">Strength</option>
      <option value="speed">Speed</option>
      <option value="power">Power</option>
    </select>
  );
}
