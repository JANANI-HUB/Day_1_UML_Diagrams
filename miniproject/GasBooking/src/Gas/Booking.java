package Gas;

public class Booking extends Person {
    private int bookingID;
    private String deliveryStatus;
    private String paymentStatus;

    // Constructor
    public Booking(String consumerID, int bookingID, String deliveryStatus, String paymentStatus) {
        super(consumerID, "", "", ""); // Since booking doesn't require name, address, phone
        this.bookingID = bookingID;
        this.deliveryStatus = deliveryStatus;
        this.paymentStatus = paymentStatus;
    }

    // Getters
    public int getBookingID() {
        return bookingID;
    }

    public String getDeliveryStatus() {
        return deliveryStatus;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    // Setters
    public void setDeliveryStatus(String deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    // Implementing the abstract method
    @Override
    public String getDetails() {
        return "Consumer ID: " + getConsumerID() +
                "\nBooking ID: " + getBookingID() +
                "\nDelivery Status: " + getDeliveryStatus() +
                "\nPayment Status: " + getPaymentStatus();
    }
}
