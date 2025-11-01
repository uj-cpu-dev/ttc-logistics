import { useState } from "react";
import { CheckCircle } from "lucide-react";

const dummyTrackingData = {
  trackingNumber: "TTC123456789",
  status: "Delivered",
  deliveredAt: "Saturday 12/29/2018 at 11:28 am",
  signedBy: "John Doe",
  from: "Lagos, NG",
  to: "Abuja, NG",
  history: [
    { date: "Sat, 12/29/2018", time: "11:28 am", location: "Abuja, NG", status: "Delivered" },
    { date: "Sat, 12/29/2018", time: "4:35 am", location: "Lokoja, NG", status: "On vehicle for delivery" },
    { date: "Fri, 12/28/2018", time: "10:33 pm", location: "Lokoja, NG", status: "Departed facility" },
    { date: "Thu, 12/27/2018", time: "8:30 pm", location: "Benin, NG", status: "In transit" },
    { date: "Wed, 12/26/2018", time: "9:04 pm", location: "Lagos, NG", status: "Picked up" },
  ],
};

export default function TrackPackage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<typeof dummyTrackingData | null>(null);
  const [error, setError] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim() === dummyTrackingData.trackingNumber) {
      setTrackingData(dummyTrackingData);
      setError("");
    } else {
      setTrackingData(null);
      setError("Tracking number not found. Please check and try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6 flex flex-col items-center">
      {!trackingData ? (
        // --- STEP 1: ENTER TRACKING NUMBER ---
        <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md w-full text-center my-auto">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Track Your Package</h1>
          <p className="text-gray-600 mb-6">
            Enter your tracking number below to view your delivery status.
          </p>
          <form onSubmit={handleTrack} className="space-y-4">
            <input
              type="text"
              placeholder="Enter tracking number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              Track Package
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <p className="text-sm text-gray-400 mt-4">Try <b>TTC123456789</b> for demo</p>
        </div>
      ) : (
        // --- STEP 2: TRACKING DETAILS ---
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-4xl w-full my-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            {trackingData.status}
          </h2>
          <p className="text-gray-700 mb-1">{trackingData.deliveredAt}</p>
          <p className="text-gray-600 mb-6">
            Signed for by: <span className="font-medium text-gray-800">{trackingData.signedBy}</span>
          </p>

          {/* Progress Bar */}
          <div className="relative flex items-center justify-between mb-8">
            {[1, 2, 3, 4, 5].map((step, idx) => (
              <div key={idx} className="flex items-center">
                <CheckCircle className="text-green-500 w-6 h-6" />
                {idx < 4 && (
                  <div className="w-16 sm:w-24 h-1 bg-green-400 mx-1 sm:mx-2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between mb-6">
            <div>
              <h3 className="text-gray-500 text-sm uppercase">From</h3>
              <p className="text-blue-900 font-semibold">{trackingData.from}</p>
            </div>
            <div className="text-right">
              <h3 className="text-gray-500 text-sm uppercase">To</h3>
              <p className="text-blue-900 font-semibold">{trackingData.to}</p>
            </div>
          </div>

          {/* Travel History */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">
              Travel History
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700">
                <thead>
                  <tr className="text-sm text-gray-500 border-b border-gray-200">
                    <th className="py-2">Date</th>
                    <th className="py-2">Time</th>
                    <th className="py-2">Location</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {trackingData.history.map((entry, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-2">{entry.date}</td>
                      <td className="py-2">{entry.time}</td>
                      <td className="py-2">{entry.location}</td>
                      <td className="py-2 text-orange-600 font-medium">
                        {entry.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setTrackingData(null)}
              className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
            >
              Track Another Package
            </button>
          </div>
        </div>
      )}
    </section>
  );
}