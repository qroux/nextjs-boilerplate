const Statecheck = ({ state, label }: { state?: Boolean; label?: String }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '2rem',
        lineBreak: 'anywhere',
      }}>
      <div
        id='indicator'
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
};

export default Statecheck;
