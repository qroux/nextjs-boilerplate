export default function Statecheck({
  state = false,
  label,
}: {
  state?: Boolean;
  label?: String;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',

        height: '5rem',
      }}>
      <div
        style={{
          borderRadius: '100%',
          height: '0.5rem',
          width: '0.5rem',
          marginRight: '1rem',
          backgroundColor: state ? 'green' : 'red',
        }}></div>
      {label}
    </div>
  );
}
