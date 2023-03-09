export const SearchBar: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => (
  <div>
    <input
      type="text"
      className="
  block
  w-full
  px-3
  py-1.5
  mb-2
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
      placeholder="Search for a title"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
