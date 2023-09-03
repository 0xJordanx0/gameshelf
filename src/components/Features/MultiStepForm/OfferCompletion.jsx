import { useNavigate } from "react-router-dom";

function RegistrationSuccess() {
  const navigate = useNavigate();
  return (
    <div className="grid text-center my-10">
      <svg
        className="mb-4 h-20 w-20 text-green-500 mx-auto"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>

      <h2 className="text-2xl mb-4 text-gray-800 text-center font-bold">
        Registration Success
      </h2>

      <div className="text-gray-700 mb-8">
        Thank you. We have sent you an email to demo@demo.test. Please click the
        link in the message to activate your account.
      </div>

      <button
        onClick={() => navigate("/")}
        className="w-40 block mx-auto focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border"
      >
        Back to home
      </button>
    </div>
  );
}

export default RegistrationSuccess;
