/**
 * Returns Spinners
 * @param  {string} type - grow || border
 * @returns {JSX} 
 */

const Loader = ({ type = 'border', text = '' }) => {
  return (
    <div className={`m-3 spinner-${type} spinner-${type}-lg text-primary`} role="status">
      <span className="sr-only">{text}</span>
    </div>
  );
};

export default Loader;
