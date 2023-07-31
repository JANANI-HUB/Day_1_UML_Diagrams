package Gas;

public class Booking {
    private String consumerID;
    private int bookingID;
    private String deliveryStatus;
    private String paymentStatus;

    // Constructor
    public Booking(String consumerID, int bookingID, String deliveryStatus, String paymentStatus) {
        this.consumerID = consumerID;
        this.bookingID = bookingID;
        this.deliveryStatus = deliveryStatus;
        this.paymentStatus = paymentStatus;
    }

    // Getters and Setters

    public String getConsumerID() {
        return consumerID;
    }

    public int getBookingID() {
        return bookingID;
    }

    public String getDeliveryStatus() {
        return deliveryStatus;
    }

    public void setDeliveryStatus(String deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
}
