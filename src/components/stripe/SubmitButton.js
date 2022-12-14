export const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={` w-3/4 flex justify-center items-center mx-auto rounded py-2 uppercase text-red-500 font-medium ${
      error ? 'bg-rose-300 text-indigo-500' : 'bg-indigo-300'
    }`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? 'Processing...' : children}
  </button>
);
