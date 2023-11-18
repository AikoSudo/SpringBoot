const stripe = Stripe('pk_test_51O8kgsKajeNMAcBbbTLNzoxxS2GEN3sVC0lcUdrI6Rt1YptKFzob8mlWy28K2YZfjDGHpdSO1dUxG0t9lviM8Des00YAPQdedD');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
})