export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-2xl">$0.00</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl">0</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-2xl">0</p>
        </div>
      </div>
    </div>
  );
}
