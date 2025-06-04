import React from "react";

const LatestDeal = () => {
  return (
    <section className="py-10 bg-base-200">
      <h2 className="text-3xl font-bold text-center text-base-content mb-6">
        Latest Bulk Deals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        <div className="card bg-base-100 shadow-xl p-4">
          <img
            src="https://i.postimg.cc/T3qYvC8f/image.png"
            alt="Electronics Deal"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="card-body">
            <h3 className="text-lg font-semibold text-base-content">
              Electronics & Gadgets
            </h3>
            <p className="text-sm text-base-content">
              Up to 50% Off! Min Order: 100 Units
            </p>
            <a
              href="/category/electronics-gadgets"
              className="btn btn-primary mt-2"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl p-4">
          <img
            src="https://i.postimg.cc/j50D31Gp/image.png"
            alt="Apparel Deal"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="card-body">
            <h3 className="text-lg font-semibold text-base-content">
              Apparel & Fashion
            </h3>
            <p className="text-sm text-base-content">
              $2.99/Unit! Min Order: 200 Units
            </p>
            <a
              href="/category/apparel-fashion"
              className="btn btn-primary mt-2"
            >
              Grab Deal
            </a>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl p-4">
          <img
            src="https://i.postimg.cc/yYMGMPfG/industrial-machinery.png"
            alt="Machinery Deal"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="card-body">
            <h3 className="text-lg font-semibold text-base-content">
              Industrial Machinery
            </h3>
            <p className="text-sm text-base-content">
              35% Off! Min Order: 50 Units
            </p>
            <a
              href="/category/industrial-machinery"
              className="btn btn-primary mt-2"
            >
              Order Now
            </a>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl p-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Home Appliances Deal"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="card-body">
            <h3 className="text-lg font-semibold text-base-content">
              Home Appliances
            </h3>
            <p className="text-sm text-base-content">
              40% Off! Min Order: 80 Units
            </p>
            <a
              href="/category/home-appliances"
              className="btn btn-primary mt-2"
            >
              Explore Deal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestDeal;
