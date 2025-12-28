export default function Button({ label, onClick, className }) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
      <button onClick={handleClick} className={className}>
        {label}
      </button>
  );
}