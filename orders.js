function createOrder(items) {
  return {
    items,
    total: items.reduce((sum, i) => sum + i.price * i.qty, 0),
    status: 'pending',
  };
}

function applyDiscount(order, percent) {
  const discounted = order.total * (1 - percent / 100);
  return { ...order, total: discounted };
}

function cancelOrder(order) {
  return { ...order, status: 'cancelled', total: 0 };
}

// Calculate points with rounding and VIP bonus
function calculateLoyaltyPoints(order) {
  let multiplier = 1;
  if (order.total > 100) {
    multiplier = 1.5;
  }
  return Math.round((order.total / 10) * multiplier);
}

module.exports = { createOrder, applyDiscount, cancelOrder, calculateLoyaltyPoints };