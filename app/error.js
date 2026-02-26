"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold mb-4">אירעה שגיאה</h1>
        <p className="mb-4">{error?.message || "לא ידוע"}</p>
        <button onClick={() => reset()} className="btn-primary">
          נסה שוב
        </button>
      </div>
    </div>
  );
}
