function Button(props) {
  return (
    <button {...props} className="bg-slate-400 p-3 text-white rounded-md">
      {props.children}
    </button>
  );
}

export default Button;
