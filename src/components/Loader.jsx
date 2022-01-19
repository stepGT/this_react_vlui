/**
 * Returns Spinners
 * @param  {string} type - grow || border
 * @returns {JSX} 
 */

const Loader = ({ type = 'border', text = '' }) => {
  return (
    <div className="text-center">
      <div className={`m-3 spinner-${type} spinner-${type}-lg text-primary`} role="status">
        <span className="sr-only">{text}</span>
      </div>
    </div>
  );
};

export default Loader;
