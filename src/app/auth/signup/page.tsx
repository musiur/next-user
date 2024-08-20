import SignupForm from "./_components/form";

const Page = () => {
  return (
    <div className="container py-32 flex items-center justify-center">
      <div className="w-[380px] min-w-[240px] bg-white rounded-xl p-4">
        <h3 className="text-center text-black font-semibold pb-2">Sign Up</h3>
        <SignupForm />
      </div>
    </div>
  );
};

export default Page;
