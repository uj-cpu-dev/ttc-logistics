import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Dummy coordinates for Nigerian cities
const locationCoords: Record<string, [number, number]> = {
  "Lagos, NG": [6.5244, 3.3792],
  "Benin, NG": [6.335, 5.6037],
  "Lokoja, NG": [7.8023, 6.7333],
  "Abuja, NG": [9.0579, 7.4951],
};

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

// Custom Leaflet icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

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
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {!trackingData ? (
        // STEP 1: ENTER TRACKING NUMBER
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg max-w-md w-full text-center my-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Track Your Package</h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Enter your tracking number below to view your delivery status.
          </p>
          <form onSubmit={handleTrack} className="space-y-4">
            <input
              type="text"
              placeholder="Enter tracking number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-sm sm:text-base"
            >
              Track Package
            </button>
          </form>
          {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
          <p className="text-xs sm:text-sm text-gray-400 mt-4">
            Try <b>TTC123456789</b> for demo
          </p>
        </div>
      ) : (
        // STEP 2: TRACKING DETAILS
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl max-w-5xl w-full my-10">
          <h2 className="text-xl sm:text-3xl font-bold text-blue-900 mb-2">{trackingData.status}</h2>
          <p className="text-gray-700 mb-1 text-sm sm:text-base">{trackingData.deliveredAt}</p>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Signed for by: <span className="font-medium text-gray-800">{trackingData.signedBy}</span>
          </p>

          {/* Progress Bar */}
          <div className="relative flex items-center justify-between mb-8 overflow-x-auto sm:overflow-visible">
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <div key={idx} className="flex items-center min-w-[50px] sm:min-w-0">
                <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                {idx < 4 && <div className="w-10 sm:w-16 md:w-24 h-1 bg-green-400 mx-1 sm:mx-2 flex-shrink-0"></div>}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6 text-center sm:text-left">
            <div>
              <h3 className="text-gray-500 text-xs sm:text-sm uppercase">From</h3>
              <p className="text-blue-900 font-semibold text-sm sm:text-base">{trackingData.from}</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-xs sm:text-sm uppercase">To</h3>
              <p className="text-blue-900 font-semibold text-sm sm:text-base">{trackingData.to}</p>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">Travel History</h4>

            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left text-gray-700 text-sm sm:text-base">
                <thead>
                  <tr className="text-xs sm:text-sm text-gray-500 border-b border-gray-200">
                    <th className="py-2 px-2">Date</th>
                    <th className="py-2 px-2">Time</th>
                    <th className="py-2 px-2">Location</th>
                    <th className="py-2 px-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {trackingData.history.map((entry, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-2 px-2">{entry.date}</td>
                      <td className="py-2 px-2">{entry.time}</td>
                      <td className="py-2 px-2">{entry.location}</td>
                      <td className="py-2 px-2 text-orange-600 font-medium">{entry.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="block sm:hidden space-y-4">
              {trackingData.history.map((entry, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl p-4 shadow-sm bg-gray-50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-gray-500">{entry.date}</span>
                    <span className="text-xs text-gray-600">{entry.time}</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-blue-900 font-semibold">{entry.location}</p>
                    <p className="text-sm text-orange-600 font-medium mt-1">{entry.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MAP SECTION */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">Package Route</h4>
            <div className="h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-md">
              <MapContainer
                center={[8.0, 6.0]}
                zoom={6}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                />
                {trackingData.history.map((entry, idx) => {
                  const coords = locationCoords[entry.location];
                  if (!coords) return null;
                  return (
                    <Marker key={idx} position={coords} icon={customIcon}>
                      <Popup>
                        <strong>{entry.location}</strong> <br />
                        {entry.status} <br />
                        {entry.time}
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setTrackingData(null)}
              className="bg-blue-900 text-white px-6 py-3 sm:px-8 rounded-full font-semibold hover:bg-blue-800 transition-colors text-sm sm:text-base"
            >
              Track Another Package
            </button>
          </div>
        </div>
      )}
    </section>
  );
}