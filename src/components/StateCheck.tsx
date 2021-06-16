export default function Statecheck({ state, label }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '10rem',
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
