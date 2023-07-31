package Gas;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class GasBookingSystem {
    private static Map<String, Consumer> consumers = new HashMap<>();
    private static Map<String, Booking> bookings = new HashMap<>();
    private static int bookingIDCounter = 1;
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        try {
            DatabaseManager.connect();
        } catch (SQLException e) {
            System.out.println("Failed to connect to the database.");
            e.printStackTrace();
            return;
        }

        int choice;
        do {
            displayMenu();
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    registerNewConsumer();
                    break;
                case 2:
                    bookRefill();
                    break;
                case 3:
                    updateDeliveryStatus();
                    break;
                case 4:
                    updatePaymentStatus();
                    break;
                case 5:
                    System.out.println("Exiting the application...");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 5);

        scanner.close();
        try {
            DatabaseManager.disconnect();
        } catch (SQLException e) {
            System.out.println("Failed to disconnect from the database.");
            e.printStackTrace();
        }
    }

    private static void displayMenu() {
    	System.out.println("Gas Booking System");
        System.out.println("-------------------");
        System.out.println("1. New Consumer Registration");
        System.out.println("2. Book Refill");
        System.out.println("3. Update Delivery Status");
        System.out.println("4. Update Payment Status");
        System.out.println("5. Exit");
    }

    private static void registerNewConsumer() {
    	 System.out.print("Enter Consumer ID: ");
         String consumerID = scanner.next();
         System.out.print("Enter Name: ");
         String name = scanner.next();
         scanner.nextLine(); // Consume the remaining newline character
         System.out.print("Enter Address: ");
         String address = scanner.nextLine();
         System.out.print("Enter Phone: ");
         String phone = scanner.next();
         scanner.nextLine(); // Consume the remaining newline character
         System.out.print("Enter Gas Name: ");
         String gasName = scanner.next();
         scanner.nextLine(); // Consume the remaining newline character
         System.out.print("Enter Usage Details: ");
         String usageDetails = scanner.nextLine();

         Consumer newConsumer = new Consumer(consumerID, name, address, phone, gasName, usageDetails);
         consumers.put(consumerID, newConsumer);

         System.out.println("Consumer registered successfully!");
         System.out.println("Registered Consumer Details:");
         System.out.println(newConsumer);

        try {
            DatabaseManager.insertConsumer(newConsumer);
            System.out.println("Consumer registered successfully!");
            System.out.println("Registered Consumer Details:");
            System.out.println(newConsumer);
        } catch (SQLException e) {
            System.out.println("Failed to register consumer in the database.");
            e.printStackTrace();
        }
    }

    private static void bookRefill() {
        System.out.print("Enter Consumer ID: ");
        String consumerID = scanner.next();

        if (!consumers.containsKey(consumerID)) {
            System.out.println("Consumer with ID " + consumerID + " does not exist.");
            return;
        }

        try {
            int latestBookingID = DatabaseManager.getLatestBookingID();
            int bookingID = latestBookingID + 1;
            Booking newBooking = new Booking(consumerID, bookingID, "Pending", "Unpaid");
            bookings.put(consumerID, newBooking);

            System.out.println("Refill booked successfully! Booking ID: " + newBooking.getBookingID());

            // Update the bookingIDCounter to the latest booking ID
            bookingIDCounter = bookingID;

            try {
                DatabaseManager.insertBooking(newBooking);
                System.out.println("Refill booked successfully! Booking ID: " + newBooking.getBookingID());
            } catch (SQLException e) {
                System.out.println("Failed to book refill in the database.");
                e.printStackTrace();
            }
        } catch (SQLException e) {
            System.out.println("Failed to get the latest booking ID from the database.");
            e.printStackTrace();
        }
    }


    private static void updateDeliveryStatus() {
        // ... (unchanged)
    	 System.out.print("Enter Consumer ID: ");
         String consumerID = scanner.next();

         if (!consumers.containsKey(consumerID)) {
             System.out.println("Consumer with ID " + consumerID + " does not exist.");
             return;
         }

         System.out.print("Enter Booking ID: ");
         int bookingID = scanner.nextInt();

         Booking booking = bookings.getOrDefault(consumerID, null);
         if (booking == null || booking.getBookingID() != bookingID) {
             System.out.println("Booking with ID " + bookingID + " does not exist for the given consumer.");
             return;
         }

         System.out.print("Enter Delivery Status (Delivered/Pending): ");
         String deliveryStatus = scanner.next();

         booking.setDeliveryStatus(deliveryStatus);

         System.out.println("Delivery status updated successfully!");

        try {
            DatabaseManager.updateBookingDeliveryStatus(consumerID, bookingID, deliveryStatus);
            System.out.println("Delivery status updated successfully!");
        } catch (SQLException e) {
            System.out.println("Failed to update delivery status in the database.");
            e.printStackTrace();
        }
    }

    private static void updatePaymentStatus() {
    	 System.out.print("Enter Consumer ID: ");
         String consumerID = scanner.next();

         if (!consumers.containsKey(consumerID)) {
             System.out.println("Consumer with ID " + consumerID + " does not exist.");
             return;
         }

         System.out.print("Enter Booking ID: ");
         int bookingID = scanner.nextInt();

         Booking booking = bookings.getOrDefault(consumerID, null);
         if (booking == null || booking.getBookingID() != bookingID) {
             System.out.println("Booking with ID " + bookingID + " does not exist for the given consumer.");
             return;
         }

         System.out.print("Enter Payment Status (Paid/Unpaid): ");
         String paymentStatus = scanner.next();

         booking.setPaymentStatus(paymentStatus);

         System.out.println("Payment status updated successfully!");
 

        try {
            DatabaseManager.updateBookingPaymentStatus(consumerID, bookingID, paymentStatus);
            System.out.println("Payment status updated successfully!");
        } catch (SQLException e) {
            System.out.println("Failed to update payment status in the database.");
            e.printStackTrace();
        }
    }
}
