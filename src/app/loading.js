export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        <div className="absolute w-20 h-20 border-4 border-t-transparent border-indigo-600 rounded-full animate-spin"></div>
        <div className="absolute w-12 h-12 border-4 border-indigo-300 rounded-full animate-ping"></div>
      </div>
      <h1 className="text-2xl font-semibold text-indigo-700 animate-pulse">
        Loading, please wait...
      </h1>
    </div>
  );
}
